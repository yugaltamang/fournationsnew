import { useEffect, useState } from "react";
import muLogo from "@/assets/mu-logo.svg";

const links = [
  { href: "#nations", label: "The Journey", num: "01" },
  { href: "#curriculum", label: "Curriculum", num: "02" },
  { href: "#faculty", label: "Why This", num: "03" },
  { href: "#outcomes", label: "Outcomes", num: "04" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/60" : "bg-transparent border-b border-transparent"}`}>
      {/* Top hairline gradient */}
      <div className="mu-hero-divider w-full opacity-80" />

      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <img
            src={muLogo}
            alt="Masters' Union"
            className="h-8 md:h-9 w-auto invert"
          />
          <span className="hidden sm:flex flex-col leading-none border-l border-border pl-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">PG · Global Business</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary mt-1">4 Nations</span>
          </span>
        </a>

        {/* Desktop nav */}
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

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Brochure ↓
          </a>
          <a
            href="#apply"
            className="group relative inline-flex items-center gap-2 px-5 py-3 font-bold uppercase tracking-wider text-xs overflow-hidden border border-foreground"
          >
            <span className="absolute inset-0 mu-hero-gradient transition-transform duration-500 group-hover:scale-110" />
            <span className="relative z-10 text-background">Apply Now</span>
            <span className="relative z-10 text-background group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
