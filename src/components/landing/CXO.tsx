import { useState } from "react";
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
      "9 months across 4 countries",
      "On-ground visits & boardrooms",
      "Imperial & CUHK certificates",
    ],
    stat: { value: "4", label: "Nations" },
    fit: "contain" as const,
  },
  {
    tag: "CXO Sessions",
    image: cxoImg,
    title: "Leaders,",
    titleEm: "not lecturers.",
    body: "Faculty drawn from people actively running businesses — MDs, founders and senior executives in unfiltered conversations.",
    points: [
      "Practising leaders, every sector",
      "Live conversations, not lectures",
      "Lifelong alumni network access",
    ],
    stat: { value: "60+", label: "Sessions" },
    fit: "cover" as const,
  },
  {
    tag: "Live Ventures",
    image: immersionImg,
    title: "Ventures,",
    titleEm: "not slide decks.",
    body: "Every term ends with a real, working business output. You leave each country with something tangible and shipped.",
    points: [
      "D2C brand — Delhi (Term 1)",
      "GBA venture — Hong Kong (Term 2)",
      "Creator Challenge — London (Term 3)",
    ],
    stat: { value: "3", label: "Ventures" },
    fit: "cover" as const,
  },
];

const CXO = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faculty"
      className="relative bg-secondary/20 border-y border-border overflow-hidden"
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

      <div className="container relative py-14 sm:py-16 md:py-20">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16 pb-6 border-b border-border">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" />
              <span>Why This Programme</span>
              <span className="text-muted-foreground/50">/ 03 Pillars</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Hands-on learning for{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                real business impact.
              </em>
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Direct execution over passive learning. Every term, every country, every session is engineered to build real skills — not slide decks.
            </p>
          </div>
        </div>

        {/* Radial badge orbits */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {pillars.map((p, i) => {
            const isActive = active === i;
            return (
              <article
                key={i}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="group relative outline-none"
              >
                {/* Orbit container */}
                <div className="relative aspect-square mx-auto max-w-[420px]">
                  {/* Outer dashed orbit */}
                  <div
                    className={`absolute inset-0 rounded-full border border-dashed transition-all duration-700 ${
                      isActive
                        ? "border-primary/60 rotate-[20deg]"
                        : "border-border rotate-0"
                    }`}
                  />
                  {/* Mid solid orbit */}
                  <div
                    className={`absolute inset-[8%] rounded-full border transition-all duration-700 ${
                      isActive ? "border-primary/40" : "border-border/60"
                    }`}
                  />
                  {/* Tick marks around outer orbit */}
                  {Array.from({ length: 12 }).map((_, k) => (
                    <div
                      key={k}
                      className={`absolute left-1/2 top-0 h-2 w-px origin-[50%_50vmin] transition-colors duration-500 ${
                        isActive ? "bg-primary/70" : "bg-border"
                      }`}
                      style={{
                        transform: `translateX(-50%) rotate(${k * 30}deg) translateY(-2px)`,
                        transformOrigin: "50% 50%",
                        height: "100%",
                      }}
                    >
                      <div
                        className={`mx-auto w-px transition-colors duration-500 ${
                          isActive ? "bg-primary/70" : "bg-border"
                        }`}
                        style={{ height: "8px" }}
                      />
                    </div>
                  ))}

                  {/* Center badge — image disc */}
                  <div className="absolute inset-[18%] rounded-full overflow-hidden bg-[hsl(0,0%,6%)] border border-border shadow-2xl">
                    {/* Glow */}
                    <div
                      className={`absolute -inset-4 rounded-full blur-2xl transition-opacity duration-700 ${
                        isActive ? "opacity-50" : "opacity-0"
                      }`}
                      style={{
                        background:
                          "radial-gradient(circle, #F7D544 0%, #E38330 50%, transparent 70%)",
                      }}
                    />
                    <img
                      src={p.image}
                      alt={p.tag}
                      loading="lazy"
                      decoding="async"
                      className={`relative w-full h-full transition-transform duration-700 ${
                        p.fit === "contain" ? "object-contain p-5" : "object-cover"
                      } ${isActive ? "scale-105" : "scale-100"}`}
                    />
                  </div>

                  {/* Folio numeral chip — top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                    /0{i + 1}
                  </div>

                  {/* Tag chip — bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">
                    {p.tag}
                  </div>

                  {/* Orbiting stat — top right */}
                  <div className="absolute top-[8%] right-[2%] flex items-baseline gap-1.5 bg-background border border-border px-2.5 py-1.5">
                    <span className="font-display text-xl mu-hero-gradient-text leading-none">
                      {p.stat.value}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {p.stat.label}
                    </span>
                  </div>

                  {/* Orbiting point chips — left/bottom-left/right */}
                  {p.points.map((pt, j) => {
                    const positions = [
                      "top-1/2 -left-2 -translate-y-1/2 -translate-x-full",
                      "bottom-[8%] left-[2%] translate-x-0",
                      "top-1/2 -right-2 -translate-y-1/2 translate-x-full",
                    ];
                    return (
                      <div
                        key={j}
                        className={`hidden lg:flex absolute ${positions[j]} items-center gap-1.5 bg-background/95 backdrop-blur border border-border px-2 py-1 max-w-[140px]`}
                      >
                        <span className="font-mono text-[8px] text-primary shrink-0">
                          §{i + 1}.{j + 1}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-foreground/80 leading-tight">
                          {pt}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Title + body below */}
                <div className="mt-10 text-center max-w-sm mx-auto">
                  <h3 className="font-display text-2xl sm:text-3xl leading-[0.95] text-balance mb-3">
                    {p.title}{" "}
                    <em className="italic mu-hero-gradient-text not-italic">
                      {p.titleEm}
                    </em>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>

                  {/* Mobile/tablet point list */}
                  <ul className="lg:hidden mt-4 pt-4 border-t border-border space-y-1.5 text-left">
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-baseline gap-2 text-[12px] text-foreground/80 leading-snug"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CXO;
