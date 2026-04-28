import { Map, BookOpen, Sparkles, Trophy } from "lucide-react";

const links = [
  { href: "#nations", label: "Journey", icon: Map },
  { href: "#curriculum", label: "Curriculum", icon: BookOpen },
  { href: "#faculty", label: "Why", icon: Sparkles },
  { href: "#outcomes", label: "Outcomes", icon: Trophy },
];

const MobileBottomBar = () => (
  <>
    {/* Spacer so content isn't hidden behind the fixed bar */}
    <div aria-hidden="true" className="lg:hidden h-20" />

    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mu-hero-divider w-full opacity-80" />
      <nav className="grid grid-cols-5 items-stretch">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.href}
              href={l.href}
              className="flex flex-col items-center justify-center gap-1 py-2.5 text-muted-foreground hover:text-primary active:bg-secondary/60 transition-colors"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-mono text-[9px] uppercase tracking-[0.15em]">{l.label}</span>
            </a>
          );
        })}
        <a
          href="#apply"
          className="group flex flex-col items-center justify-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <span className="font-bold uppercase text-[11px] tracking-wider leading-none">Apply</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] opacity-80 group-hover:translate-x-0.5 transition-transform">Now →</span>
        </a>
      </nav>
    </div>
  </>
);

export default MobileBottomBar;
