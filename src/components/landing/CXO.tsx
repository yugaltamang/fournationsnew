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
      "Imperial College London and CUHK Hong Kong certificates on completion",
    ],
    stat: { value: "4", label: "Nations" },
    fit: "contain" as const,
  },
  {
    tag: "CXO Sessions",
    image: cxoImg,
    title: "Learn from leaders",
    titleEm: "across every industry.",
    body: "The faculty isn't academic — it's the people actively running businesses. MDs, founders and senior executives lead sessions as live conversations.",
    points: [
      "Practising leaders from fintech, consumer, manufacturing & tech",
      "Live conversations — not lectures. Unfiltered and experience-first",
      "Access to the Masters' Union alumni network for life",
    ],
    stat: { value: "60+", label: "CXO Sessions" },
    fit: "cover" as const,
  },
  {
    tag: "Learning Module",
    image: immersionImg,
    title: "Build ventures,",
    titleEm: "not just business plans.",
    body: "Every term ends with a real, working business output. You leave every country with something tangible.",
    points: [
      "Launch a live D2C brand — Delhi, India (Term 1)",
      "Build a cross-border GBA venture — CUHK, Hong Kong (Term 2)",
      "Creator Challenge — Imperial College London (Term 3)",
    ],
    stat: { value: "3", label: "Live Ventures" },
    fit: "cover" as const,
  },
];

const CXO = () => (
  <section
    id="faculty"
    className="py-16 sm:py-20 md:py-32 relative overflow-hidden bg-secondary/20 border-y border-border"
  >
    {/* Ambient backdrop */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "96px 96px",
      }}
    />
    <div
      className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, #F7D544 0%, #E38330 40%, transparent 70%)",
      }}
    />

    <div className="container relative">
      {/* Manifesto Header */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-24 pb-8 md:pb-12 border-b-2 border-foreground">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
            <span className="w-8 h-px bg-primary" />
            <span>Why This Programme</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-balance">
            Hands-on learning for{" "}
            <em className="italic mu-hero-gradient-text not-italic">
              real business impact.
            </em>
          </h2>
        </div>
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
            The Manifesto
          </div>
          <p className="text-foreground/80 text-base sm:text-lg leading-snug font-display italic">
            Direct execution over passive learning. Real skills, real outcomes — not slide decks.
          </p>
        </div>
      </div>

      {/* Numbered Manifesto Pillars */}
      <div className="space-y-0 divide-y-2 divide-foreground/10">
        {pillars.map((p, i) => (
          <article
            key={i}
            className="group relative grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-16 hover:bg-background/40 transition-colors duration-500 -mx-4 sm:-mx-6 px-4 sm:px-6"
          >
            {/* Giant numeral */}
            <div className="md:col-span-3 flex md:block items-center gap-4">
              <div className="font-display text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] leading-[0.8] mu-hero-gradient-text tracking-tighter group-hover:translate-x-1 transition-transform duration-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">
                {p.tag}
              </div>
            </div>

            {/* Headline + body */}
            <div className="md:col-span-6 space-y-5 md:pl-6 md:border-l-2 md:border-foreground/15">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance">
                {p.title}{" "}
                <em className="italic mu-hero-gradient-text not-italic">
                  {p.titleEm}
                </em>
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                {p.body}
              </p>

              {/* Points as inline manifesto lines */}
              <ul className="space-y-2 pt-3">
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-3 font-mono text-xs sm:text-sm text-foreground/75 uppercase tracking-wider"
                  >
                    <span className="text-primary font-semibold shrink-0">
                      §{i + 1}.{j + 1}
                    </span>
                    <span className="normal-case font-sans tracking-normal text-foreground/80 text-sm sm:text-base">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Inline stat */}
              <div className="flex items-baseline gap-3 pt-4">
                <div className="font-display text-4xl sm:text-5xl mu-hero-gradient-text leading-none">
                  {p.stat.value}
                </div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                  {p.stat.label}
                </div>
              </div>
            </div>

            {/* Accent thumbnail */}
            <div className="md:col-span-3 md:flex hidden items-start justify-end">
              <div className="relative w-full max-w-[220px] aspect-square bg-[hsl(0,0%,6%)] border border-border overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                <img
                  src={p.image}
                  alt={p.tag}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full ${
                    p.fit === "contain"
                      ? "object-contain p-3"
                      : "object-cover grayscale group-hover:grayscale-0"
                  } group-hover:scale-105 transition-all duration-700`}
                />
                <div className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/80 bg-background/70 backdrop-blur px-1.5 py-0.5">
                  /0{i + 1}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer signature */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-10 mt-10 border-t-2 border-foreground/10 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span>End of Manifesto</span>
        <span>Three Pillars · One Cohort · Nine Months</span>
      </div>
    </div>
  </section>
);

export default CXO;
