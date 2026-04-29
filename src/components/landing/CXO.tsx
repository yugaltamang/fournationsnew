import globeImg from "@/assets/four-nations-globe.png";
import cxoImg from "@/assets/cxo-masterclass.webp";
import immersionImg from "@/assets/immersion-factory.webp";

const pillars = [
  {
    tag: "Global Exposure",
    image: globeImg,
    title: "Four countries.",
    titleEm: "One cohort.",
    body: "Live and build across India, Hong Kong, London and Dubai — four of the world's most dynamic business ecosystems.",
    points: [
      "9 months across 4 countries spanning Asia, Europe & MENA",
      "On-ground company visits, factory floors & real boardrooms",
      "Imperial College London and CUHK Hong Kong certificates",
    ],
    pull: "Four passports stamped. One cohort forged.",
    stat: { value: "4", label: "Nations" },
    fit: "contain" as const,
  },
  {
    tag: "CXO Sessions",
    image: cxoImg,
    title: "Leaders,",
    titleEm: "not lecturers.",
    body: "The faculty isn't academic — it's the people actively running businesses. MDs, founders and senior executives lead live conversations.",
    points: [
      "Practising leaders from fintech, consumer, manufacturing & tech",
      "Live conversations — unfiltered and experience-first",
      "Lifelong access to the Masters' Union alumni network",
    ],
    pull: "Sixty rooms. Sixty unfiltered conversations.",
    stat: { value: "60+", label: "CXO Sessions" },
    fit: "cover" as const,
  },
  {
    tag: "Live Ventures",
    image: immersionImg,
    title: "Ventures,",
    titleEm: "not slide decks.",
    body: "Every term ends with a real, working business output. You leave every country with something tangible.",
    points: [
      "Launch a live D2C brand — Delhi, India (Term 1)",
      "Build a cross-border GBA venture — CUHK, Hong Kong (Term 2)",
      "Creator Challenge — Imperial College London (Term 3)",
    ],
    pull: "Three terms. Three shipped ventures.",
    stat: { value: "3", label: "Live Ventures" },
    fit: "cover" as const,
  },
];

const CXO = () => {
  return (
    <section
      id="faculty"
      className="relative bg-secondary/20 border-y border-border overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #F7D544 0%, #E38330 40%, transparent 70%)",
        }}
      />

      <div className="container relative py-14 sm:py-16 md:py-20">
        {/* Masthead */}
        <div className="flex items-end justify-between gap-6 pb-3 mb-6 border-b-2 border-foreground">
          <div className="flex items-baseline gap-3 sm:gap-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground font-semibold">The Programme</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Vol. 04</span>
            <span>·</span>
            <span>Issue 03</span>
          </div>
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            03 Pillars
          </div>
        </div>

        {/* Editorial headline row */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-8 md:mb-10 pb-6 border-b border-border">
          <div className="md:col-span-8">
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Why This Programme
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-balance">
              Hands-on learning for{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                real business impact.
              </em>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary pl-4">
              Direct execution over passive learning. Every term, every country, every session is engineered to build real skills — not slide decks.
            </p>
          </div>
        </div>

        {/* Magazine 3-column feature */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((p, i) => (
            <article
              key={i}
              className="group relative bg-background flex flex-col"
            >
              {/* Image plate */}
              <div className="relative aspect-[4/3] bg-[hsl(0,0%,6%)] overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.tag}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    p.fit === "contain" ? "object-contain p-4" : "object-cover"
                  }`}
                />
                {/* Folio numeral */}
                <div className="absolute top-3 left-3 font-display text-4xl mu-hero-gradient-text leading-none">
                  /0{i + 1}
                </div>
                {/* Tag chip */}
                <div className="absolute bottom-3 left-3 bg-foreground text-background px-2.5 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                  {p.tag}
                </div>
                {/* Stat corner */}
                <div className="absolute top-3 right-3 text-right">
                  <div className="font-display text-2xl sm:text-3xl text-background mix-blend-difference leading-none">
                    {p.stat.value}
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-background/80 mix-blend-difference mt-1">
                    {p.stat.label}
                  </div>
                </div>
              </div>

              {/* Editorial body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl sm:text-3xl leading-[0.95] text-balance mb-3">
                  {p.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic">
                    {p.titleEm}
                  </em>
                </h3>

                {/* Body with drop cap */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 [&::first-letter]:font-display [&::first-letter]:text-4xl [&::first-letter]:float-left [&::first-letter]:leading-[0.9] [&::first-letter]:mr-2 [&::first-letter]:mt-1 [&::first-letter]:text-foreground">
                  {p.body}
                </p>

                {/* Pull quote */}
                <blockquote className="border-l-2 border-primary pl-3 my-3 font-display italic text-base sm:text-lg leading-snug text-foreground/90">
                  "{p.pull}"
                </blockquote>

                {/* Bullet ledger */}
                <ul className="mt-auto pt-4 border-t border-border space-y-1.5">
                  {p.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-baseline gap-2 text-[12px] sm:text-[13px] text-foreground/80 leading-snug"
                    >
                      <span className="font-mono text-[9px] text-primary shrink-0">
                        §{i + 1}.{j + 1}
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Footer ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t-2 border-foreground font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>End of Feature</span>
          <span className="text-foreground">Masters' Union · Four Nations MBA</span>
          <span>p. 03 / 03</span>
        </div>
      </div>
    </section>
  );
};

export default CXO;
