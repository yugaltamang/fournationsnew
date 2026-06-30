import { useEffect, useState } from "react";
import muLogo from "@/assets/mu-logo.svg";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#nations", label: "Journey" },
    { href: "#faculty", label: "Why This" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#admissions", label: "Admissions" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Mobile / tablet header - logo only (Apply lives in bottom bar) */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/90 border-b border-border/60" : "bg-background/40 backdrop-blur-sm border-b border-transparent"}`}>
        <div className="container flex items-center justify-center h-14 sm:h-16">
          <a href="#" className="flex items-center gap-2 min-w-0">
            <img src={muLogo} alt="Masters' Union" className="h-7 sm:h-8 w-auto invert shrink-0" />
          </a>
        </div>
      </header>

      {/* Desktop header */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/90 border-b border-border/60" : "bg-transparent border-b border-transparent"}`}>
        <div className="mu-hero-divider w-full opacity-80" />

        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="group flex items-center gap-3 min-w-0">
            <img
              src={muLogo}
              alt="Masters' Union"
              className="h-5 md:h-7 w-auto invert shrink-0"
            />
          </a>

          <nav className="flex items-center gap-1 text-sm font-medium border border-border/60 px-2 py-1.5 backdrop-blur">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-colors hover:bg-secondary"
              >
                <span className="group-hover:text-foreground transition-colors">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Brochure ↓
            </a>
            <a
              href="#apply"
              className="group relative inline-flex items-center gap-2 px-5 py-3 font-bold uppercase tracking-wider text-xs overflow-hidden border border-primary bg-primary hover:bg-primary/90 transition-colors"
            >
              <span className="relative z-10 text-primary-foreground">Apply Now</span>
              <span className="relative z-10 text-primary-foreground group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
