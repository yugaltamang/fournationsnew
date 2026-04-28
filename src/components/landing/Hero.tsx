// Hero now showcases an editorial world map plotting the 4 nations
import { WORLD_PATH } from "./worldMapPath";

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    {/* Atlas map — blended into the right side of the hero */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[78%] lg:w-[68%] xl:w-[62%]"
      style={{
        maskImage:
          "radial-gradient(ellipse 85% 80% at 55% 50%, black 50%, transparent 88%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 80% at 55% 50%, black 50%, transparent 88%)",
      }}
    >
      <div className="relative w-full h-full">
        {/* Soft warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 70% 45%, hsl(40 84% 58% / 0.10), transparent 70%)",
          }}
        />

        {/* Top chrome */}
        <div className="absolute top-28 right-8 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right space-y-1">
          <div>Atlas / Cohort 2026</div>
          <div className="text-primary flex items-center justify-end gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Four Nations · One Cohort
          </div>
        </div>

        <svg
          viewBox="0 0 600 800"
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="World map plotting India, Hong Kong, London and Dubai"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="muLineBg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#39B5D7" />
              <stop offset="50%" stopColor="#F7D544" />
              <stop offset="100%" stopColor="#E38330" />
            </linearGradient>
            <radialGradient id="muHaloBg" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#F7D544" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#F7D544" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#F7D544" stopOpacity="0" />
            </radialGradient>
            <pattern id="dotsBg" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="hsl(var(--foreground))" opacity="0.22" />
            </pattern>
            <filter id="softBg" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
          </defs>

          {/* Subtle graticule */}
          <g stroke="hsl(var(--border))" strokeWidth="0.4" opacity="0.35">
            {[120, 200, 280, 360, 440, 520, 600, 680].map((y) => (
              <line key={`h${y}`} x1="0" x2="600" y1={y} y2={y} />
            ))}
            {[60, 140, 220, 300, 380, 460, 540].map((x) => (
              <line key={`v${x}`} x1={x} x2={x} y1="80" y2="720" />
            ))}
            <line x1="0" x2="600" y1="440" y2="440" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.55" />
          </g>

          {/* Continents — subtle */}
          <g opacity="0.55">
            <path d={WORLD_PATH} fill="hsl(var(--foreground))" fillOpacity="0.04" fillRule="evenodd" />
            <path d={WORLD_PATH} fill="url(#dotsBg)" fillRule="evenodd" />
            <path d={WORLD_PATH} fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.18" strokeWidth="0.4" strokeLinejoin="round" />
          </g>

          {/* Halos */}
          <g>
            <circle cx="88" cy="84" r="46" fill="url(#muHaloBg)" />
            <circle cx="283" cy="294" r="46" fill="url(#muHaloBg)" />
            <circle cx="361" cy="267" r="46" fill="url(#muHaloBg)" />
            <circle cx="491" cy="318" r="46" fill="url(#muHaloBg)" />
          </g>

          {/* Journey arcs */}
          <g fill="none" stroke="url(#muLineBg)">
            <path d="M361,267 Q440,240 491,318" strokeWidth="1.6" strokeDasharray="3 5" />
            <path d="M491,318 Q300,40 88,84" strokeWidth="1.6" strokeDasharray="3 5" />
            <path d="M88,84 Q160,150 283,294" strokeWidth="1.6" strokeDasharray="3 5" />
            <path d="M283,294 Q322,275 361,267" strokeWidth="1.1" strokeDasharray="2 4" opacity="0.6" />
            <g filter="url(#softBg)" opacity="0.4">
              <path d="M361,267 Q440,240 491,318" strokeWidth="3" />
              <path d="M491,318 Q300,40 88,84" strokeWidth="3" />
              <path d="M88,84 Q160,150 283,294" strokeWidth="3" />
            </g>
          </g>

          {/* Plotted nations */}
          {[
            { x: 88, y: 84, n: "03", label: "London", sub: "Imperial College", coord: "51°N 0°W", anchor: "start" as const, lx: 14, ly: 22 },
            { x: 491, y: 318, n: "02", label: "Hong Kong", sub: "CUHK Business School", coord: "22°N 114°E", anchor: "end" as const, lx: -14, ly: 22 },
            { x: 283, y: 294, n: "04", label: "Dubai", sub: "DIFC · Optional", coord: "25°N 55°E", anchor: "end" as const, lx: -14, ly: -14 },
            { x: 361, y: 267, n: "01", label: "India", sub: "Delhi NCR", coord: "28°N 77°E", anchor: "start" as const, lx: 14, ly: -14 },
          ].map((p) => {
            const tx = p.x + p.lx;
            const ty = p.y + p.ly;
            return (
              <g key={p.label}>
                <line x1={p.x - 14} x2={p.x - 6} y1={p.y} y2={p.y} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <line x1={p.x + 6} x2={p.x + 14} y1={p.y} y2={p.y} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <line x1={p.x} x2={p.x} y1={p.y - 14} y2={p.y - 6} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <line x1={p.x} x2={p.x} y1={p.y + 6} y2={p.y + 14} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.45">
                  <animate attributeName="r" values="10;18;10" dur="3.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0;0.55" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={p.x} cy={p.y} r="4" fill="hsl(var(--primary))" />
                <circle cx={p.x} cy={p.y} r="1.6" fill="hsl(var(--primary-foreground))" />
                <text x={tx} y={ty + (p.ly > 0 ? -18 : -2)} textAnchor={p.anchor} fill="hsl(var(--primary))" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2">/{p.n}</text>
                <text x={tx} y={ty + (p.ly > 0 ? -2 : 14)} textAnchor={p.anchor} fill="hsl(var(--foreground))" fontFamily="Fraunces, serif" fontSize="17" fontWeight="500">{p.label}</text>
                <text x={tx} y={ty + (p.ly > 0 ? 10 : 26)} textAnchor={p.anchor} fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono, monospace" fontSize="7.5" letterSpacing="1.5">{p.sub.toUpperCase()}</text>
                <text x={tx} y={ty + (p.ly > 0 ? 22 : 38)} textAnchor={p.anchor} fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono, monospace" fontSize="7" opacity="0.7">{p.coord}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">Post Graduate Program</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four <span className="font-mono text-[0.4em] align-top text-muted-foreground">/04</span> cities.
          <br />
          <span className="block mt-4 text-[0.6em] leading-[1.15] text-foreground/90 font-normal italic">
            Infinite reasons to say<br />
            <span className="not-italic font-medium">"when I was in <span className="mu-hero-underline whitespace-nowrap">Hong Kong</span>…"</span>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale. Four nations, four cultures, four markets — one operator who can read all of them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
          {[
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "10+", l: "CXO Masterclasses" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating overlays anchored to the right (over blended map) */}
      <div className="hidden lg:block lg:col-span-5 relative min-h-[520px]">
        <div className="absolute bottom-4 right-0 bg-background/85 backdrop-blur border border-border text-foreground p-5 max-w-[280px] shadow-bold">
          <div className="font-mono text-xs uppercase tracking-widest mb-1 text-muted-foreground">The Outcome</div>
          <div className="font-display text-xl leading-tight">A professional who is fluent in four economies, not one.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
