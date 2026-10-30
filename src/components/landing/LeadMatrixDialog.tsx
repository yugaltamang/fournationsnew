import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const LOADER_SRC = "https://widgets-v2.mastersunion.org/loader.js";

type WidgetInstance = {
  on: (event: string, cb: () => void) => unknown;
  destroy: () => void;
};

type LeadMatrix = {
  load: (
    uuid: string,
    opts?: { target?: HTMLElement | null; fit?: "auto" | "fill"; timeout?: number },
  ) => WidgetInstance | null;
};

function loadLoader(): Promise<LeadMatrix | null> {
  return new Promise((resolve) => {
    const w = window as unknown as { LeadMatrixWidget?: LeadMatrix };
    if (w.LeadMatrixWidget) return resolve(w.LeadMatrixWidget);

    const done = () => resolve((window as unknown as { LeadMatrixWidget?: LeadMatrix }).LeadMatrixWidget ?? null);
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${LOADER_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", done, { once: true });
      existing.addEventListener("error", () => resolve(null), { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = LOADER_SRC;
    s.async = true;
    s.addEventListener("load", done, { once: true });
    s.addEventListener("error", () => resolve(null), { once: true });
    document.head.appendChild(s);
  });
}

type Props = {
  /** Widget uuid to mount; null keeps the dialog closed and frees the widget. */
  widgetId: string | null;
  title: string;
  eyebrow?: string;
  onClose: () => void;
};

/**
 * Mounts a Masters' Union LeadMatrix widget (application / brochure form) in a
 * modal, so the visitor never leaves the page.
 */
export function LeadMatrixDialog({ widgetId, title, eyebrow = "Enquire", onClose }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  // The parent re-renders on its own (hero carousel) and recreates onClose on
  // every tick, so hold it in a ref: the widget must mount once, not reload.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!widgetId) return;
    let instance: WidgetInstance | null = null;
    let cancelled = false;

    setStatus("loading");
    loadLoader().then((lm) => {
      if (cancelled || !lm || !mountRef.current) {
        if (!cancelled) setStatus("error");
        return;
      }
      const next = lm.load(widgetId, { target: mountRef.current, fit: "auto", timeout: 25000 });
      if (!next) {
        setStatus("error");
        return;
      }
      instance = next;
      next.on("ready", () => setStatus("ready"));
      next.on("error", () => setStatus("error"));
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelled = true;
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      try {
        instance?.destroy();
      } catch {
        /* already gone */
      }
    };
  }, [widgetId]);

  if (!widgetId || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:p-6">
      <button
        type="button"
        aria-label="Close form"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} — ${eyebrow}`}
        className="relative my-auto flex max-h-[calc(100dvh-1.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] w-full max-w-[720px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] sm:max-h-[calc(100dvh-3rem)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-black/10 px-5 py-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-black/45">{eyebrow}</p>
            <h3 className="mt-1 truncate text-[15px] font-semibold tracking-[-0.005em] text-[#1a1a1a]">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-8 shrink-0 place-items-center rounded-full text-black/55 transition hover:bg-black/5 hover:text-black"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 sm:p-4">
          {status === "loading" && (
            <div className="flex min-h-[min(420px,65dvh)] flex-col items-center justify-center gap-3 text-black/50">
              <span className="size-7 animate-spin rounded-full border-2 border-black/15 border-t-black/60" />
              <span className="text-xs">Loading…</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex min-h-[min(320px,55dvh)] flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-sm font-medium text-black">We couldn't open this form.</p>
              <p className="text-xs text-black/55">
                Please try again, or write to{" "}
                <a
                  href="mailto:admissions.fournations@mastersunion.org"
                  className="underline underline-offset-2 hover:text-black"
                >
                  admissions.fournations@mastersunion.org
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("loading")}
                className="mt-1 rounded-lg border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black/5"
              >
                Try again
              </button>
            </div>
          )}
          <div ref={mountRef} className={status === "ready" ? "min-h-[min(420px,65dvh)]" : "hidden"} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default LeadMatrixDialog;
