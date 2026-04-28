const cityOutcomes = [
  {
    n: "01",
    city: "India",
    sub: "Delhi NCR · Gurugram",
    outcome: "Operate a venture end-to-end",
    desc: "Read Indian distribution, ship product, run GTM and own a P&L from day one.",
    svg: (
      <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M20 100 H80" />
        <path d="M25 100 V40 Q25 25 50 25 Q75 25 75 40 V100" />
        <path d="M35 100 V50 Q35 38 50 38 Q65 38 65 50 V100" />
        <path d="M22 40 H78" />
        <path d="M22 35 H78" />
        <path d="M28 25 V18 H72 V25" />
        <path d="M48 18 V10 H52 V18" />
        <circle cx="50" cy="8" r="1.5" fill="currentColor" />
        <path d="M30 60 H70 M30 75 H70 M30 90 H70" opacity="0.4" />
      </svg>
    ),
  },
  {
    n: "02",
    city: "Hong Kong",
    sub: "Central · CUHK",
    outcome: "Navigate Asian capital",
    desc: "Decode capital markets, supply chains and cross-border deals across the Greater Bay Area.",
    svg: (
      <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M10 100 H90" />
        <path d="M40 100 V35 L50 10 L60 35 V100 Z" />
        <path d="M40 35 L60 35" />
        <path d="M40 60 L60 45 M40 80 L60 65" />
        <path d="M50 10 V100" opacity="0.5" />
        <path d="M15 100 V70 H30 V100" />
        <path d="M70 100 V55 H82 V100" />
        <path d="M18 75 H27 M18 85 H27 M18 95 H27" opacity="0.5" />
        <path d="M73 60 H79 M73 70 H79 M73 80 H79 M73 90 H79" opacity="0.5" />
        <path d="M10 105 q 5 -3 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0" opacity="0.4" />
      </svg>
    ),
  },
  {
    n: "03",
    city: "London",
    sub: "Imperial College",
    outcome: "Command global capital",
    desc: "Pitch, raise and scale at PE/VC standards. Brand strategy at world-class depth.",
    svg: (
      <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M15 100 H85" />
        <path d="M40 100 V30 H60 V100" />
        <path d="M38 30 H62" />
        <circle cx="50" cy="42" r="6" />
        <path d="M50 42 V37 M50 42 L54 44" strokeWidth="0.8" />
        <path d="M40 55 H60 M40 70 H60 M40 85 H60" opacity="0.4" />
        <path d="M38 30 V25 H62 V30" />
        <path d="M40 25 L50 12 L60 25 Z" />
        <path d="M50 12 V5" />
        <circle cx="50" cy="4" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "04",
    city: "Dubai",
    sub: "DIFC · Optional",
    outcome: "Bridge MENA and the world",
    desc: "Position for family-office mandates, sovereign capital and global mobility.",
    svg: (
      <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M10 100 H90" />
        <path d="M38 100 L42 60 L46 30 L48 15 L50 5 L52 15 L54 30 L58 60 L62 100 Z" />
        <path d="M50 5 V100" opacity="0.4" />
        <path d="M40 80 H60 M42 65 H58 M44 50 H56 M45 38 H55 M46 28 H54 M47 20 H53" opacity="0.5" />
        <path d="M15 100 V80 H28 V100" />
        <path d="M72 100 V72 H85 V100" />
        <path d="M18 85 H25 M18 92 H25" opacity="0.5" />
        <path d="M75 78 H82 M75 86 H82 M75 94 H82" opacity="0.5" />
      </svg>
    ),
  },
];

const Outcomes = () => (
  <section id="outcomes" className="py-32">
    <div className="container">
      <div className="max-w-4xl mb-16">
        <div className="tag-pill mb-6">◉ Outcomes</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
          What you walk away with.<br />
          <em className="italic text-primary not-italic">(A passport that does work.)</em>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {cityOutcomes.map((o) => (
          <article key={o.n} className="bg-background p-8 group hover:bg-secondary/30 transition-colors flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">/{o.n}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{o.sub}</span>
            </div>

            <div className="aspect-square w-full text-foreground/80 group-hover:text-primary transition-colors duration-500 mb-6 px-4">
              {o.svg}
            </div>

            <div className="border-t border-border pt-5 mt-auto">
              <h3 className="font-display text-2xl leading-tight">{o.city}</h3>
              <p className="font-display text-base italic text-primary mt-1 mb-3">"{o.outcome}"</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-muted-foreground leading-relaxed">
        Four monuments. Four economies. One operator who can read all of them — and walk into a room in Delhi, Hong Kong, London or Dubai already fluent.
      </p>
    </div>
  </section>
);

export default Outcomes;
