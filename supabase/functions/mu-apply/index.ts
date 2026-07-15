// 4 Nations MBA — Masters' Union proxy
// Handles: apply | login-email | send-otp | verify-otp
// Mirrors the flow used in Capital Markets Hub; only FormID / programId change.
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const APPLY_ENDPOINT = "https://api-v2.mastersunion.org/api/v2/leads/lead-and-applicant";
const LOGIN_EMAIL_ENDPOINT = "https://api-v2.mastersunion.org/api/v2/org/student-auth/login-pgp";
const SEND_OTP_ENDPOINT = "https://api-v2.mastersunion.org/api/v2/org/student-auth/send-otp-pgp?testOtp=true";
const VERIFY_OTP_ENDPOINT = "https://api-v2.mastersunion.org/api/v2/org/student-auth/verify-otp-pgp";
const APPLICATION_LOGIN_URL = "https://ai-first-operator.mastersunion.org/by-pass-student-login/";

// 4 Nations MBA form IDs and program IDs (India vs International)
const INDIA_FORM_UUID = "ecc2e087-399c-4668-b57e-f0e3c656797a";
const INTL_FORM_UUID = "7d157338-e441-4a3d-96de-23894aa5f997";
const INDIA_PROGRAM_ID = 56;
const INTL_PROGRAM_ID = 78;
const programIdFor = (iso: string) => (String(iso || "IN").toUpperCase() === "IN" ? INDIA_PROGRAM_ID : INTL_PROGRAM_ID);

const GENERIC_ERR = "Something went wrong. Please try again.";

function extractFormLink(json: unknown): string | null {
  const seen = new WeakSet<object>();
  const linkKeys = new Set(["formlink", "form_link", "redirecturl", "redirect_url"]);
  const tokenKeys = new Set(["usertoken", "user_token", "token"]);
  const visit = (value: unknown): string | null => {
    if (!value || typeof value !== "object") return null;
    if (seen.has(value as object)) return null;
    seen.add(value as object);
    if (Array.isArray(value)) {
      for (const it of value) { const f = visit(it); if (f) return f; }
      return null;
    }
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (linkKeys.has(k.toLowerCase()) && typeof v === "string" && v.trim().startsWith("https://")) return v.trim();
    }
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (tokenKeys.has(k.toLowerCase()) && typeof v === "string" && v.trim()) return `${APPLICATION_LOGIN_URL}${encodeURIComponent(v.trim())}`;
    }
    for (const v of Object.values(value as Record<string, unknown>)) { const f = visit(v); if (f) return f; }
    return null;
  };
  return visit(json);
}

function pickMsg(json: unknown): string {
  if (!json || typeof json !== "object") return "";
  const j = json as Record<string, unknown>;
  for (const c of [j.message, j.error, j.msg, (j.data as Record<string, unknown> | undefined)?.message]) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  return "";
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => ({}));
    const action = String(body.action ?? "");

    if (action === "apply") {
      const apiKey = Deno.env.get("MASTERS_UNION_API_KEY");
      if (!apiKey) return json({ ok: false, error: GENERIC_ERR });
      const { name, email, mobile, isoCode, dialCode, source, medium, campaign, leadOrigin } = body;
      if (typeof name !== "string" || name.trim().length < 2) return json({ ok: false, error: "Please enter your full name." });
      if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "Please enter a valid email address." });
      if (typeof mobile !== "string" || !/^\d{8,15}$/.test(mobile)) return json({ ok: false, error: "Please enter a valid mobile number (8–15 digits)." });
      const iso = String(isoCode || "IN").toUpperCase();
      const payload = {
        formUuid: iso === "IN" ? INDIA_FORM_UUID : INTL_FORM_UUID,
        source: source || "landing_page_staging_web",
        medium: medium || "staging_web",
        campaign: campaign || "staging_web_test",
        lead_origin: leadOrigin || "staging_PGP-form",
        name: name.trim(),
        email: email.trim(),
        mobile,
        country_code: String(dialCode || "91"),
        iso_code: iso,
      };
      const res = await fetch(APPLY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": apiKey },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        console.error("MU apply error", res.status, txt);
        if (res.status === 409 || /user already exist/i.test(txt)) return json({ ok: false, exists: true, error: "Account already exists. Please log in." });
        if (/mobile must be/i.test(txt)) return json({ ok: false, error: "Please enter a valid mobile number (8–15 digits)." });
        return json({ ok: false, error: GENERIC_ERR });
      }
      const data = await res.json().catch(() => ({}));
      return json({ ok: true, formLink: extractFormLink(data) });
    }

    if (action === "login-email") {
      const { email, password, isoCode } = body;
      if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "Please enter a valid email." });
      if (typeof password !== "string" || !password) return json({ ok: false, error: "Password is required." });
      const tryLogin = async (pid: number) => {
        const r = await fetch(LOGIN_EMAIL_ENDPOINT, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, programId: pid }),
        });
        return { r, d: await r.json().catch(() => ({})) };
      };
      const primary = programIdFor(String(isoCode || ""));
      let { r: res, d: data } = await tryLogin(primary);
      // If no isoCode was provided and the primary program didn't match, try the other.
      if (!res.ok && !isoCode) {
        const other = primary === INDIA_PROGRAM_ID ? INTL_PROGRAM_ID : INDIA_PROGRAM_ID;
        const alt = await tryLogin(other);
        if (alt.r.ok) { res = alt.r; data = alt.d; }
      }
      if (!res.ok) {
        const msg = pickMsg(data).toLowerCase();
        if (res.status === 401 || /invalid|incorrect|wrong|password|credential/.test(msg)) return json({ ok: false, error: "Incorrect email or password." });
        if (res.status === 404 || /not\s*found|no\s*user|does\s*not\s*exist/.test(msg)) return json({ ok: false, error: "No account found for this email. Please apply first." });
        return json({ ok: false, error: GENERIC_ERR });
      }
      return json({ ok: true, formLink: extractFormLink(data) });
    }


    if (action === "send-otp") {
      const { phone, isoCode } = body;
      if (typeof phone !== "string" || !/^\d{6,15}$/.test(phone)) return json({ ok: false, error: "Please enter a valid mobile number." });
      const res = await fetch(SEND_OTP_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, countryIsoCode: String(isoCode || "IN").toUpperCase(), programId: programIdFor(String(isoCode || "IN")) }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        const low = txt.toLowerCase();
        console.error("MU send-otp error", res.status, txt);
        if (res.status === 404 || /not\s*found|no\s*user|does\s*not\s*exist/.test(low)) return json({ ok: false, error: "No account found for this number. Please apply first." });
        if (res.status === 429 || /too many|rate/.test(low)) return json({ ok: false, error: "Too many attempts. Please wait a minute and try again." });
        return json({ ok: false, error: GENERIC_ERR });
      }
      return json({ ok: true });
    }

    if (action === "verify-otp") {
      const { phone, isoCode, otp } = body;
      if (typeof phone !== "string" || !/^\d{6,15}$/.test(phone)) return json({ ok: false, error: "Invalid phone." });
      if (typeof otp !== "string" || !/^\d{4,8}$/.test(otp)) return json({ ok: false, error: "Please enter the OTP." });
      const res = await fetch(VERIFY_OTP_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, countryIsoCode: String(isoCode || "IN").toUpperCase(), otp, programId: programIdFor(String(isoCode || "IN")) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = pickMsg(data).toLowerCase();
        console.error("MU verify-otp error", res.status, data);
        if (/expire/.test(msg)) return json({ ok: false, error: "This code has expired. Request a new one." });
        if (res.status === 401 || res.status === 400 || /invalid|incorrect|wrong|otp|code/.test(msg)) return json({ ok: false, error: "That code didn't work. Please try again or request a new one." });
        return json({ ok: false, error: GENERIC_ERR });
      }
      return json({ ok: true, formLink: extractFormLink(data) });
    }

    return json({ ok: false, error: "Unknown action" }, 400);
  } catch (err) {
    console.error("mu-apply exception", err);
    return json({ ok: false, error: GENERIC_ERR }, 500);
  }
});
