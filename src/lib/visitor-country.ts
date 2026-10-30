// Detects the visitor's country once per visit so CTAs can branch between the
// India and international experiences. Cached locally; when detection fails the
// visitor simply stays "unknown" and the site keeps its default CTAs.
const KEY = "fn_country_v1";
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

let inflight: Promise<string | null> | null = null;

/** True only for India; unknown or failed detection is never treated as India. */
export function isIndia(iso?: string | null): boolean {
  return String(iso || "").trim().toUpperCase() === "IN";
}

function readCache(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { iso?: unknown; at?: unknown };
    if (typeof parsed?.iso !== "string" || typeof parsed?.at !== "number") return null;
    if (Date.now() - parsed.at > TTL_MS) return null;
    const iso = parsed.iso.trim().toUpperCase();
    return iso.length === 2 ? iso : null;
  } catch {
    return null;
  }
}

function writeCache(iso: string) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ iso, at: Date.now() }));
  } catch {
    /* storage blocked (private mode) — detection still works for this page load */
  }
}

/** The country from an earlier page view, without making a network call. */
export function getCachedCountry(): string | null {
  return readCache();
}

/** Two-letter country code, or null when it cannot be determined. */
export function detectVisitorCountry(): Promise<string | null> {
  const cached = readCache();
  if (cached) return Promise.resolve(cached);
  if (!inflight) {
    inflight = fetch("https://ipwho.is/?fields=country_code,success")
      .then((r) => r.json())
      .then((data: { success?: boolean; country_code?: string }) => {
        if (!data?.success) return null;
        const iso = String(data.country_code || "").trim().toUpperCase();
        if (iso.length !== 2) return null;
        writeCache(iso);
        return iso;
      })
      .catch(() => null);
  }
  return inflight;
}
