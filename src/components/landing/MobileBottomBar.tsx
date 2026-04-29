import { useEffect, useState } from "react";
import { Map, BookOpen, Sparkles, Trophy, Menu, X } from "lucide-react";

const links = [
  { href: "#nations", label: "Journey", num: "01", icon: Map },
  { href: "#curriculum", label: "Curriculum", num: "02", icon: BookOpen },
  { href: "#faculty", label: "Why", num: "03", icon: Sparkles },
  { href: "#outcomes", label: "Outcomes", num: "04", icon: Trophy },
];

const MobileBottomBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Spacer so content isn't hidden behind the fixed bar */}
      <div aria-hidden="true" className="lg:hidden h-20" />

      {/* Drawer (opens upward from bottom bar) */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-background/70 backdrop-blur-sm animate-fade-up"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            className="lg:hidden fixed left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up max-h-[70vh] overflow-y-auto"
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 4.25rem)" }}
            role="dialog"
            aria-label="Site navigation"
          >
            <nav className="container py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-4 px-4 py-4 border border-border/60 hover:border-primary hover:bg-secondary transition-colors"
                >
                  <span className="font-display text-lg">{l.label}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">/{l.num}</span>
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-4 font-bold uppercase tracking-wider text-xs border border-primary bg-primary text-primary-foreground"
              >
                Apply Now <span>→</span>
              </a>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground border border-border"
              >
                Brochure ↓
              </a>
            </nav>
          </div>
        </>
      )}

      {/* Sticky bottom bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mu-hero-divider w-full opacity-80" />
        <nav className="grid grid-cols-5 items-stretch">
          {/* Hamburger trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex flex-col items-center justify-center gap-1 py-2.5 transition-colors ${
              open ? "text-primary bg-secondary/60" : "text-muted-foreground hover:text-primary active:bg-secondary/60"
            }`}
          >
            {open ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
            <span className="font-mono text-[9px] uppercase tracking-[0.15em]">{open ? "Close" : "Menu"}</span>
          </button>

          {links.slice(0, 3).map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-muted-foreground hover:text-primary active:bg-secondary/60 transition-colors"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-mono text-[9px] uppercase tracking-[0.15em]">{l.label}</span>
              </a>
            );
          })}

          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="group flex flex-col items-center justify-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span className="font-bold uppercase text-[11px] tracking-wider leading-none">Apply</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] opacity-80 group-hover:translate-x-0.5 transition-transform">Now →</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileBottomBar;
