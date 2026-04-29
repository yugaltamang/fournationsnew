import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import muLogo from "@/assets/mu-logo.svg";

const links = [
  { href: "#nations", label: "The Journey", num: "01" },
  { href: "#curriculum", label: "Curriculum", num: "02" },
  { href: "#faculty", label: "Why This", num: "03" },
  { href: "#outcomes", label: "Outcomes", num: "04" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
    {/* Mobile / tablet header — logo only */}
    <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/90 border-b border-border/60" : "bg-transparent border-b border-transparent"}`}>
      <div className="container flex items-center justify-center h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={muLogo} alt="Masters' Union" className="h-9 md:h-10 w-auto invert" />
        </a>
      </div>
    </header>

    <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/90 border-b border-border/60" : "bg-transparent border-b border-transparent"}`}>
      <div className="mu-hero-divider w-full opacity-80" />

      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="group flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img
            src={muLogo}
            alt="Masters' Union"
            className="h-5 md:h-7 w-auto invert shrink-0"
          />
          <span className="hidden sm:flex flex-col leading-none border-l border-border pl-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">PG · Global Business</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mt-1">4 Nations</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium border border-border/60 px-2 py-1.5 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-colors hover:bg-secondary"
            >
              <span className="font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">/{l.num}</span>
              <span className="group-hover:text-foreground transition-colors">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#" className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Brochure ↓
          </a>
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="group relative hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 font-bold uppercase tracking-wider text-xs overflow-hidden border border-primary bg-primary hover:bg-primary/90 transition-colors"
          >
            <span className="relative z-10 text-primary-foreground">Apply Now</span>
            <span className="relative z-10 text-primary-foreground group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-border/60 hover:border-primary transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up">
          <nav className="container py-6 flex flex-col gap-1">
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
            <a href="#" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground border border-border">
              Brochure ↓
            </a>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Nav;
