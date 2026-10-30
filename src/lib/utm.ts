// Captures campaign parameters on landing and keeps them for the visit,
// so they survive in-page navigation, reloads and returning visits.
const KEY = "fn_utm_v1";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

export type Utm = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  leadOrigin?: string;
  fbclid?: string;
  gclid?: string;
};

function fromUrl(): Utm {
  const p = new URLSearchParams(window.location.search);
  const g = (...k: string[]) => k.map((x) => p.get(x)?.trim()).find(Boolean) || undefined;
  const u: Utm = {
    source: g("utm_source", "source"),
    medium: g("utm_medium", "medium"),
    campaign: g("utm_campaign", "campaign"),
    content: g("utm_content", "content"),
    term: g("utm_term", "term"),
    leadOrigin: g("lead_origin"),
    fbclid: g("fbclid"),
    gclid: g("gclid"),
  };
  // Meta ads without URL parameters only send fbclid — attribute them anyway.
  if (!u.source && u.fbclid) { u.source = "facebook"; u.medium = u.medium || "paid_social"; }
  if (!u.source && u.gclid) { u.source = "google"; u.medium = u.medium || "cpc"; }
  return u;
}

export function captureUtm() {
  if (typeof window === "undefined") return;
  const u = fromUrl();
  if (!u.source && !u.medium && !u.campaign) return; // keep earlier capture
  try { localStorage.setItem(KEY, JSON.stringify({ ...u, at: Date.now() })); } catch { /* storage blocked */ }
}

export function readUtm(): Utm {
  if (typeof window === "undefined") return {};
  const live = fromUrl();
  if (live.source || live.medium || live.campaign) return live;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const { at, ...u } = JSON.parse(raw);
    if (Date.now() - at > TTL_MS) { localStorage.removeItem(KEY); return {}; }
    return u as Utm;
  } catch { return {}; }
}
