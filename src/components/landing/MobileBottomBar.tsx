import { ApplyWidget } from "./ApplyWidget";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Map, Sparkles, Trophy, FileText, ClipboardCheck, Users } from "lucide-react";

const navItems = [
  { label: "Journey", href: "#nations", icon: Map },
  { label: "Why This", href: "#faculty", icon: Sparkles },
  { label: "Outcomes", href: "#outcomes", icon: Trophy },
  { label: "Admissions", href: "#admissions", icon: ClipboardCheck },
  { label: "FAQ", href: "#faq", icon: FileText },
  { label: "Apply", href: "#apply", icon: Users },
];

const MobileBottomBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Spacer so content isn't hidden behind the fixed bar */}
      <div aria-hidden="true" className="h-[60px]" />

      {/* Slide-up panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-label="Site navigation"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-up" />
          <div
            className="absolute left-0 right-0 bg-background/98 backdrop-blur-xl border-t border-border animate-fade-up max-h-[70vh] overflow-y-auto"
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 60px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="grid grid-cols-3 gap-px bg-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="flex flex-col items-center gap-1.5 bg-background text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/60 active:bg-secondary transition-all py-4 px-2 active:scale-95"
                  >
                    <Icon className="w-4 h-4 opacity-60 shrink-0" strokeWidth={1.5} />
                    <span className="tracking-wide">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Fixed bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mu-hero-divider w-full opacity-80" />
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-all py-1 active:scale-95"
          >
            <span className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center border border-border">
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>

          <ApplyWidget>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 h-9 rounded-lg bg-primary text-primary-foreground text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all"
            >
              Apply Now
              <ArrowUpRight size={13} />
            </button>
          </ApplyWidget>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomBar;
