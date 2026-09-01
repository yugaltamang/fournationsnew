import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";
import { supabase } from "@/integrations/supabase/client";

function readUtm() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    source: p.get("source") || p.get("utm_source") || undefined,
    medium: p.get("medium") || p.get("utm_medium") || undefined,
    campaign: p.get("campaign") || p.get("utm_campaign") || undefined,
    leadOrigin: p.get("lead_origin") || undefined,
  };
}

async function callMu(action: string, payload: Record<string, unknown>) {
  const { data, error } = await supabase.functions.invoke("mu-apply", { body: { action, ...payload } });
  if (error) return { ok: false as const, error: "Something went wrong. Please try again." };
  return data as { ok: boolean; error?: string; exists?: boolean; formLink?: string | null };
}

type Status = "idle" | "submitting" | "success" | "error";
type View = "apply" | "login" | "login-otp-sent";
type LoginMode = "email" | "phone";

export function ApplyWidget({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("apply");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [iso, setIso] = useState("IN");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Login state
  const [loginMode, setLoginMode] = useState<LoginMode>("email");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginIso, setLoginIso] = useState("IN");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState("");
  const [loginStatus, setLoginStatus] = useState<Status>("idle");
  const [loginError, setLoginError] = useState("");

  // Auto-detect country from IP on first open
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://ipwho.is/?fields=country_code,success");
        const data = await res.json();
        if (cancelled || !data?.success || !data.country_code) return;
        const code = String(data.country_code).toUpperCase();
        if (COUNTRIES.some((c) => c.iso === code)) {
          setIso((prev) => (prev === "IN" ? code : prev));
          setLoginIso((prev) => (prev === "IN" ? code : prev));
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [open]);

  const reset = useCallback(() => {
    setName(""); setEmail(""); setMobile(""); setIso("IN");
    setStatus("idle"); setErrorMsg("");
    setView("apply"); setLoginMode("email");
    setLoginEmail(""); setLoginPassword(""); setLoginPhone(""); setLoginOtp("");
    setLoginIso("IN"); setLoginStatus("idle"); setLoginError("");
  }, []);

  const selected = COUNTRIES.find((c) => c.iso === iso) ?? COUNTRIES[0];
  const loginSelected = COUNTRIES.find((c) => c.iso === loginIso) ?? COUNTRIES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const cleanedMobile = mobile.replace(/\D/g, "");
    if (trimmedName.length < 2) return setErrorMsg("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return setErrorMsg("Please enter a valid email address.");
    if (cleanedMobile.length < 8 || cleanedMobile.length > 15) return setErrorMsg("Please enter a valid mobile number (8–15 digits).");

    setStatus("submitting");
    const r = await callMu("apply", {
      name: trimmedName,
      email: trimmedEmail,
      mobile: cleanedMobile,
      isoCode: selected.iso,
      dialCode: String(selected.dial),
      ...readUtm(),
    });
    if (!r.ok) {
      if (r.exists) { setStatus("idle"); setView("login"); setLoginError("Account already exists. Please log in."); return; }
      setStatus("error"); setErrorMsg(r.error || "Something went wrong. Please try again."); return;
    }
    pushRegistrationSuccess({ iso: selected.iso, dialCode: String(selected.dial) });
    if (r.formLink && r.formLink.startsWith("https://")) { window.location.assign(r.formLink); return; }
    setStatus("success");
  };

  const handleLoginEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const em = loginEmail.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) return setLoginError("Please enter a valid email.");
    if (loginPassword.length === 0) return setLoginError("Password is required.");
    setLoginStatus("submitting");
    const r = await callMu("login-email", { email: em, password: loginPassword });
    if (!r.ok) { setLoginStatus("error"); setLoginError(r.error || "Something went wrong."); return; }
    if (r.formLink && r.formLink.startsWith("https://")) { window.location.assign(r.formLink); return; }
    setLoginStatus("success");
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const cleaned = loginPhone.replace(/\D/g, "");
    if (cleaned.length < 8 || cleaned.length > 15) return setLoginError("Please enter a valid mobile number (8–15 digits).");
    setLoginStatus("submitting");
    const r = await callMu("send-otp", { phone: cleaned, isoCode: loginSelected.iso });
    if (!r.ok) { setLoginStatus("error"); setLoginError(r.error || "Something went wrong."); return; }
    setLoginStatus("idle");
    setView("login-otp-sent");
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const cleanedPhone = loginPhone.replace(/\D/g, "");
    const otp = loginOtp.replace(/\D/g, "");
    if (otp.length < 4) return setLoginError("Please enter the OTP.");
    setLoginStatus("submitting");
    const r = await callMu("verify-otp", { phone: cleanedPhone, isoCode: loginSelected.iso, otp });
    if (!r.ok) { setLoginStatus("error"); setLoginError(r.error || "Something went wrong."); return; }
    if (r.formLink && r.formLink.startsWith("https://")) { window.location.assign(r.formLink); return; }
    setLoginStatus("success");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setTimeout(reset, 200); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[460px] bg-background border border-white/10">
        <DialogTitle className="text-base font-semibold">
          {view === "apply" ? "Apply to the Four Nations Programme" : "Login"}
        </DialogTitle>
        {view === "apply" && status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <div className="text-lg font-semibold">Application received</div>
            <p className="text-sm text-foreground/60">
              Thanks, {name.split(" ")[0] || "there"}. We'll be in touch within 24 hours.
            </p>
            <button type="button" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">Done</button>
          </div>
        ) : view === "apply" ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <Field label="Full name" required>
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                autoComplete="name" maxLength={100} required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 focus:border-primary/60"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                autoComplete="email" maxLength={255} required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 focus:border-primary/60"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Mobile number" required>
              <div className="flex items-stretch rounded-lg border border-white/15 focus-within:border-primary/60 overflow-hidden bg-white/5">
                <select
                  aria-label="Country code"
                  value={iso}
                  onChange={(e) => setIso(e.target.value)}
                  className="bg-white/5 text-sm px-2 py-2.5 border-r border-white/10 outline-none max-w-[140px]"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.iso} value={c.iso} className="bg-background text-foreground">
                      {c.flag} {c.iso} +{c.dial}
                    </option>
                  ))}
                </select>
                <input
                  type="tel" inputMode="numeric" value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 15))}
                  autoComplete="tel-national" required
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 min-w-0"
                  placeholder="Mobile number"
                />
              </div>
            </Field>
            {errorMsg && (
              <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">
                {errorMsg}
              </div>
            )}
            <button
              type="submit" disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "submitting" ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
              ) : ("Submit application")}
            </button>
            <div className="text-center text-xs text-foreground/60">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => { setLoginError(""); setLoginStatus("idle"); setView("login"); }}
                className="text-primary font-medium hover:underline"
              >
                Login
              </button>
            </div>
            <p className="text-[11px] text-foreground/40 leading-relaxed">
              By submitting, you agree to be contacted by Masters' Union regarding the programme.
            </p>
          </form>
        ) : loginStatus === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <div className="text-lg font-semibold">Logged in</div>
            <p className="text-sm text-foreground/60">You're signed in successfully.</p>
            <button type="button" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">Done</button>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <button
              type="button"
              onClick={() => { setView("apply"); setLoginError(""); }}
              className="inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to apply
            </button>

            {view === "login" && (
              <>
                <div className="grid grid-cols-2 gap-1 rounded-lg bg-white/5 p-1 border border-white/10">
                  <button
                    type="button"
                    onClick={() => { setLoginMode("email"); setLoginError(""); }}
                    className={`text-xs font-medium py-2 rounded-md transition ${loginMode === "email" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
                  >Email</button>
                  <button
                    type="button"
                    onClick={() => { setLoginMode("phone"); setLoginError(""); }}
                    className={`text-xs font-medium py-2 rounded-md transition ${loginMode === "phone" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}
                  >Phone (OTP)</button>
                </div>

                {loginMode === "email" ? (
                  <form onSubmit={handleLoginEmail} className="space-y-4">
                    <Field label="Email" required>
                      <input
                        type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                        autoComplete="email" required
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 focus:border-primary/60"
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field label="Password" required>
                      <input
                        type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
                        autoComplete="current-password" required
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 focus:border-primary/60"
                        placeholder="Your password"
                      />
                    </Field>
                    {loginError && (
                      <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">{loginError}</div>
                    )}
                    <button
                      type="submit" disabled={loginStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {loginStatus === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Signing in…</>) : "Login"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSendOtp} className="space-y-4">
                    <Field label="Mobile number" required>
                      <div className="flex items-stretch rounded-lg border border-white/15 focus-within:border-primary/60 overflow-hidden bg-white/5">
                        <select
                          aria-label="Country code"
                          value={loginIso}
                          onChange={(e) => setLoginIso(e.target.value)}
                          className="bg-white/5 text-sm px-2 py-2.5 border-r border-white/10 outline-none max-w-[140px]"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c.iso} value={c.iso} className="bg-background text-foreground">
                              {c.flag} {c.iso} +{c.dial}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel" inputMode="numeric" value={loginPhone}
                          onChange={(e) => setLoginPhone(e.target.value.replace(/\D/g, "").slice(0, 15))}
                          autoComplete="tel-national" required
                          className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 min-w-0"
                          placeholder="Mobile number"
                        />
                      </div>
                    </Field>
                    {loginError && (
                      <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">{loginError}</div>
                    )}
                    <button
                      type="submit" disabled={loginStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {loginStatus === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending OTP…</>) : "Send OTP"}
                    </button>
                  </form>
                )}
              </>
            )}

            {view === "login-otp-sent" && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <p className="text-xs text-foreground/60">
                  We sent an OTP to <span className="text-foreground">+{loginSelected.dial} {loginPhone}</span>.
                </p>
                <Field label="OTP" required>
                  <input
                    type="text" inputMode="numeric" value={loginOtp}
                    onChange={(e) => setLoginOtp(e.target.value.replace(/\D/g, "").slice(0, 8))}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm outline-none placeholder:text-foreground/30 focus:border-primary/60 tracking-widest"
                    placeholder="Enter OTP"
                  />
                </Field>
                {loginError && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2">{loginError}</div>
                )}
                <button
                  type="submit" disabled={loginStatus === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:pointer-events-none"
                >
                  {loginStatus === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Verifying…</>) : "Verify & Login"}
                </button>
                <button
                  type="button"
                  onClick={() => { setView("login"); setLoginOtp(""); setLoginError(""); }}
                  className="block w-full text-center text-xs text-foreground/60 hover:text-foreground"
                >Change number</button>
              </form>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium text-foreground/70">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
