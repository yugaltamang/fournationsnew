// Hero now showcases an editorial world map plotting the 4 nations
import { WORLD_PATH } from "./worldMapPath";

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

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

      <div className="lg:col-span-5 relative">
        <div className="relative">
          {/* Editorial world map with 4 plotted nations */}
          <div className="relative w-full aspect-[3/4] bg-card border border-border overflow-hidden">
            {/* Soft radial wash */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 35%, hsl(40 84% 58% / 0.10), transparent 70%)",
              }}
            />
            <div className="absolute inset-0 editorial-grid opacity-25 pointer-events-none" />

            {/* Top chrome */}
            <div className="absolute top-5 left-5 right-5 z-20 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <div className="space-y-1">
                <div>Atlas / Cohort 2026</div>
                <div className="text-primary flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Four Nations · One Cohort
                </div>
              </div>
              <div className="text-right space-y-1">
                <div>Equirectangular</div>
                <div className="text-foreground">N 51° → N 22°</div>
              </div>
            </div>

            <svg
              viewBox="0 0 600 800"
              className="absolute inset-0 w-full h-full"
              role="img"
              aria-label="World map plotting India, Hong Kong, London and Dubai"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="muLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#39B5D7" />
                  <stop offset="50%" stopColor="#F7D544" />
                  <stop offset="100%" stopColor="#E38330" />
                </linearGradient>
                <radialGradient id="muHalo" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#F7D544" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#F7D544" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#F7D544" stopOpacity="0" />
                </radialGradient>
                <pattern id="dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.9" fill="hsl(var(--foreground))" opacity="0.55" />
                </pattern>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.2" />
                </filter>
              </defs>

              {/* Latitude / longitude graticule */}
              <g stroke="hsl(var(--border))" strokeWidth="0.4" opacity="0.55">
                {[120, 200, 280, 360, 440, 520, 600, 680].map((y) => (
                  <line key={`h${y}`} x1="0" x2="600" y1={y} y2={y} />
                ))}
                {[60, 140, 220, 300, 380, 460, 540].map((x) => (
                  <line key={`v${x}`} x1={x} x2={x} y1="80" y2="720" />
                ))}
                {/* Equator emphasised */}
                <line x1="0" x2="600" y1="440" y2="440" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.7" />
              </g>

              {/* Real-world geographic continent silhouettes */}
              <g>
                {/* Soft fill base */}
                <path
                  d={WORLD_PATH}
                  fill="hsl(var(--foreground))"
                  fillOpacity="0.10"
                  fillRule="evenodd"
                />
                {/* Dotted overlay for editorial texture */}
                <path
                  d={WORLD_PATH}
                  fill="url(#dots)"
                  fillRule="evenodd"
                />
                {/* Coastline stroke */}
                <path
                  d={WORLD_PATH}
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  strokeOpacity="0.45"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                />
              </g>

              {/* Halos behind plotted nations */}
              <g>
                <circle cx="252" cy="248" r="50" fill="url(#muHalo)" />
                <circle cx="368" cy="350" r="50" fill="url(#muHalo)" />
                <circle cx="412" cy="356" r="50" fill="url(#muHalo)" />
                <circle cx="478" cy="320" r="50" fill="url(#muHalo)" />
              </g>

              {/* Great-circle arcs — sequential journey */}
              <g fill="none" stroke="url(#muLine)">
                {/* India → Hong Kong */}
                <path d="M412,356 Q455,300 478,320" strokeWidth="1.4" strokeDasharray="3 5" />
                {/* Hong Kong → London */}
                <path d="M478,320 Q360,140 252,248" strokeWidth="1.4" strokeDasharray="3 5" />
                {/* London → Dubai */}
                <path d="M252,248 Q310,280 368,350" strokeWidth="1.4" strokeDasharray="3 5" />
                {/* Dubai → India (return / loop) */}
                <path d="M368,350 Q390,360 412,356" strokeWidth="1" strokeDasharray="2 4" opacity="0.55" />

                {/* Glow underlay */}
                <g filter="url(#soft)" opacity="0.35">
                  <path d="M412,356 Q455,300 478,320" strokeWidth="3" />
                  <path d="M478,320 Q360,140 252,248" strokeWidth="3" />
                  <path d="M252,248 Q310,280 368,350" strokeWidth="3" />
                </g>
              </g>

              {/* Plotted nations — order matters for label spacing */}
              {[
                { x: 252, y: 248, n: "03", label: "London", sub: "Imperial College", coord: "51°N 0°W", anchor: "start", lx: 14, ly: -14 },
                { x: 478, y: 320, n: "02", label: "Hong Kong", sub: "CUHK Business School", coord: "22°N 114°E", anchor: "end", lx: -14, ly: -14 },
                { x: 368, y: 350, n: "04", label: "Dubai", sub: "DIFC · Optional", coord: "25°N 55°E", anchor: "end", lx: -14, ly: 22 },
                { x: 412, y: 356, n: "01", label: "India", sub: "Delhi NCR", coord: "28°N 77°E", anchor: "start", lx: 14, ly: 22 },
              ].map((p) => {
                const tx = p.x + p.lx;
                const ty = p.y + p.ly;
                return (
                  <g key={p.label}>
                    {/* Crosshair */}
                    <line x1={p.x - 14} x2={p.x - 6} y1={p.y} y2={p.y} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                    <line x1={p.x + 6} x2={p.x + 14} y1={p.y} y2={p.y} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                    <line x1={p.x} x2={p.x} y1={p.y - 14} y2={p.y - 6} stroke="hsl(var(--primary))" strokeWidth="0.8" />
                    <line x1={p.x} x2={p.x} y1={p.y + 6} y2={p.y + 14} stroke="hsl(var(--primary))" strokeWidth="0.8" />

                    {/* Pulsing outer ring */}
                    <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.45">
                      <animate attributeName="r" values="10;18;10" dur="3.6s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.55;0;0.55" dur="3.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Core dot */}
                    <circle cx={p.x} cy={p.y} r="4" fill="hsl(var(--primary))" />
                    <circle cx={p.x} cy={p.y} r="1.6" fill="hsl(var(--primary-foreground))" />

                    {/* Leader line to label */}
                    <line
                      x1={p.x + (p.lx > 0 ? 6 : -6)}
                      y1={p.y + (p.ly > 0 ? 6 : -6)}
                      x2={tx + (p.anchor === "end" ? 4 : -4)}
                      y2={ty + (p.ly > 0 ? -4 : 4)}
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      opacity="0.7"
                    />

                    {/* Index */}
                    <text
                      x={tx}
                      y={ty + (p.ly > 0 ? -18 : -2)}
                      textAnchor={p.anchor as "start" | "end"}
                      fill="hsl(var(--primary))"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="8"
                      letterSpacing="2"
                    >
                      /{p.n}
                    </text>
                    {/* Label */}
                    <text
                      x={tx}
                      y={ty + (p.ly > 0 ? -2 : 14)}
                      textAnchor={p.anchor as "start" | "end"}
                      fill="hsl(var(--foreground))"
                      fontFamily="Fraunces, serif"
                      fontSize="17"
                      fontWeight="500"
                    >
                      {p.label}
                    </text>
                    {/* Sub */}
                    <text
                      x={tx}
                      y={ty + (p.ly > 0 ? 10 : 26)}
                      textAnchor={p.anchor as "start" | "end"}
                      fill="hsl(var(--muted-foreground))"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="7.5"
                      letterSpacing="1.5"
                    >
                      {p.sub.toUpperCase()}
                    </text>
                    {/* Coord */}
                    <text
                      x={tx}
                      y={ty + (p.ly > 0 ? 22 : 38)}
                      textAnchor={p.anchor as "start" | "end"}
                      fill="hsl(var(--muted-foreground))"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="7"
                      opacity="0.7"
                    >
                      {p.coord}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Bottom legend */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-t border-border/60 pt-3">
              <div className="space-y-1">
                <div className="text-foreground">Sequential Journey</div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 h-[2px] mu-hero-gradient" />
                  <span>Cohort Route</span>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div>Duration</div>
                <div className="text-foreground font-display text-base normal-case tracking-normal">11 Months</div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2 mu-hero-gradient" />
          <div className="absolute -bottom-6 -left-6 bg-background border border-border text-foreground p-5 max-w-[260px] shadow-bold">
            <div className="font-mono text-xs uppercase tracking-widest mb-1 text-muted-foreground">The Outcome</div>
            <div className="font-display text-xl leading-tight">A professional who is fluent in four economies, not one.</div>
          </div>
          <div className="absolute -top-4 -right-4 border border-primary bg-background/80 backdrop-blur px-4 py-2 font-mono text-xs uppercase tracking-widest">
            ◉ India → HK → London → Dubai
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
