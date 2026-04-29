import globeImg from "@/assets/four-nations-globe.png";
import cxoImg from "@/assets/cxo-masterclass.webp";
import immersionImg from "@/assets/immersion-factory.webp";

const hero = {
  tag: "Global Exposure",
  image: globeImg,
  title: "Four countries.",
  titleEm: "One cohort.",
  body: "Live and build across India, Hong Kong, London and Dubai — four of the world's most dynamic business ecosystems. Nine months of momentum across Asia, Europe and MENA, with on-ground company visits, factory floors and real boardrooms.",
  pull: "Four passports stamped. One cohort forged.",
  points: [
    "9 months across 4 countries",
    "On-ground visits & boardrooms",
    "Imperial & CUHK certificates",
  ],
  stat: { value: "4", label: "Nations" },
  fit: "contain" as const,
};

const sidebars = [
  {
    tag: "CXO Sessions",
    image: cxoImg,
    title: "Leaders,",
    titleEm: "not lecturers.",
    body: "Faculty drawn from the people actually running businesses — MDs, founders and senior executives leading unfiltered, experience-first conversations.",
    stat: { value: "60+", label: "Sessions" },
    fit: "cover" as const,
  },
  {
    tag: "Live Ventures",
    image: immersionImg,
    title: "Ventures,",
    titleEm: "not slide decks.",
    body: "Every term ends with a real, working business output — a D2C brand in Delhi, a GBA venture in Hong Kong, a Creator Challenge at Imperial.",
    stat: { value: "3", label: "Ventures" },
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
            <span>Feature</span>
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

        {/* Asymmetric magazine spread */}
        <div className="grid md:grid-cols-12 gap-px bg-border border border-border">
          {/* HERO pillar — left */}
          <article className="md:col-span-7 bg-background relative group">
            <div className="grid md:grid-rows-[auto_1fr] h-full">
              {/* Hero image */}
              <div className="relative aspect-[16/10] bg-[hsl(0,0%,6%)] overflow-hidden border-b border-border">
                <img
                  src={hero.image}
                  alt={hero.tag}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    hero.fit === "contain" ? "object-contain p-6" : "object-cover"
                  }`}
                />
                {/* Folio */}
                <div className="absolute top-4 left-4 font-display text-5xl sm:text-6xl mu-hero-gradient-text leading-none">
                  /01
                </div>
                {/* Tag */}
                <div className="absolute bottom-4 left-4 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                  {hero.tag}
                </div>
                {/* Stat */}
                <div className="absolute top-4 right-4 text-right">
                  <div className="font-display text-4xl sm:text-5xl text-background mix-blend-difference leading-none">
                    {hero.stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-background/80 mix-blend-difference mt-1">
                    {hero.stat.label}
                  </div>
                </div>
              </div>

              {/* Hero body — broadsheet 2-col */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.95] text-balance mb-5">
                  {hero.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic">
                    {hero.titleEm}
                  </em>
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed [&::first-letter]:font-display [&::first-letter]:text-5xl [&::first-letter]:float-left [&::first-letter]:leading-[0.85] [&::first-letter]:mr-2 [&::first-letter]:mt-1 [&::first-letter]:text-foreground">
                    {hero.body}
                  </p>
                  <div className="flex flex-col justify-between gap-4">
                    <blockquote className="border-l-2 border-primary pl-3 font-display italic text-lg sm:text-xl leading-snug text-foreground/90">
                      "{hero.pull}"
                    </blockquote>
                    <ul className="pt-3 border-t border-border space-y-1.5">
                      {hero.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-baseline gap-2 text-[12px] sm:text-[13px] text-foreground/80 leading-snug"
                        >
                          <span className="font-mono text-[9px] text-primary shrink-0">
                            §1.{j + 1}
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SIDEBAR pillars — right, stacked */}
          <div className="md:col-span-5 grid grid-rows-2 gap-px bg-border">
            {sidebars.map((p, i) => (
              <article
                key={i}
                className="bg-background relative group grid grid-cols-5 min-h-[260px]"
              >
                {/* Inline image */}
                <div className="col-span-2 relative bg-[hsl(0,0%,6%)] overflow-hidden border-r border-border">
                  <img
                    src={p.image}
                    alt={p.tag}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 font-display text-3xl mu-hero-gradient-text leading-none">
                    /0{i + 2}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-foreground text-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest">
                    {p.tag}
                  </div>
                </div>

                {/* Body */}
                <div className="col-span-3 p-4 sm:p-5 flex flex-col">
                  <h3 className="font-display text-xl sm:text-2xl leading-[0.95] text-balance mb-2">
                    {p.title}{" "}
                    <em className="italic mu-hero-gradient-text not-italic">
                      {p.titleEm}
                    </em>
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed flex-1">
                    {p.body}
                  </p>
                  <div className="flex items-baseline justify-between gap-3 pt-3 mt-3 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl mu-hero-gradient-text leading-none">
                        {p.stat.value}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                        {p.stat.label}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      /0{i + 2}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
