// Hero now showcases an editorial world map plotting the 4 nations
import { WORLD_PATH } from "./worldMapPath";

const Hero = () => (
  <section className="relative pt-32 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial opacity-60 pointer-events-none" />

    {/* Atlas map — quiet, blended into the right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[70%] lg:w-[60%] xl:w-[55%]"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 65% at 55% 50%, black 45%, transparent 92%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 65% at 55% 50%, black 45%, transparent 92%)",
      }}
    >
      <div className="relative w-full h-full">
        <svg
          viewBox="20 0 560 500"
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
          </defs>

          {/* Continents — very subtle */}
          <g opacity="0.5">
            <path d={WORLD_PATH} fill="hsl(var(--foreground))" fillOpacity="0.05" fillRule="evenodd" />
            <path d={WORLD_PATH} fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.14" strokeWidth="0.4" strokeLinejoin="round" />
          </g>

          {/* Journey arcs — single, refined */}
          <g fill="none" stroke="url(#muLineBg)" opacity="0.85">
            <path d="M361,267 Q440,240 491,318" strokeWidth="1.2" strokeDasharray="3 5" />
            <path d="M491,318 Q300,40 88,84" strokeWidth="1.2" strokeDasharray="3 5" />
            <path d="M88,84 Q160,150 283,294" strokeWidth="1.2" strokeDasharray="3 5" />
            <path d="M283,294 Q322,275 361,267" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
          </g>

          {/* Plotted nations */}
          {[
            { x: 88, y: 84, label: "London", anchor: "start" as const, lx: 12, ly: 4 },
            { x: 491, y: 318, label: "Hong Kong", anchor: "end" as const, lx: -12, ly: 4 },
            { x: 283, y: 294, label: "Dubai", anchor: "end" as const, lx: -12, ly: 4 },
            { x: 361, y: 267, label: "India", anchor: "start" as const, lx: 12, ly: 4 },
          ].map((p) => (
            <g key={p.label}>
              <circle cx={p.x} cy={p.y} r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4">
                <animate attributeName="r" values="6;14;6" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3.6s" repeatCount="indefinite" />
              </circle>
              <circle cx={p.x} cy={p.y} r="3" fill="hsl(var(--primary))" />
              <text x={p.x + p.lx} y={p.y + p.ly} textAnchor={p.anchor} fill="hsl(var(--foreground))" fontFamily="Fraunces, serif" fontSize="14" fontWeight="500">{p.label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four cities.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale.
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
            { n: "4", l: "Nations" },
            { n: "2", l: "Global Partners" },
            { n: "10+", l: "CXO Masterclasses" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5 relative min-h-[480px]" />
    </div>
  </section>
);

export default Hero;
