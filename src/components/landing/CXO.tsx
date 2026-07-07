import { useState } from "react";
import { Check } from "lucide-react";
import globeImg from "@/assets/four-nations-globe.png";
import cxoImg from "@/assets/cxo-masterclass.webp";
import immersionImg from "@/assets/immersion-factory.webp";

const pillars = [
  {
    tag: "Global Exposure",
    image: globeImg,
    title: "Four countries.",
    titleEm: "One cohort.",
    body: "Live and build across India, London, Hong Kong and Dubai - four of the world's most dynamic business ecosystems.",
    points: [
      "9 months across 4 countries",
      "On-ground visits & boardrooms",
      "Imperial & CUHK certificates",
    ],
    stat: { value: "4", label: "Nations" },
    fit: "contain" as const,
  },
  {
    tag: "Business Immersions",
    image: cxoImg,
    title: "Leaders,",
    titleEm: "not lecturers.",
    body: "Faculty drawn from people actively running businesses - MDs, founders and senior executives in unfiltered conversations.",
    points: [
      "15+ business immersions across the programme",
      "Live conversations, not lectures",
      "Lifelong alumni network access",
    ],
    stat: { value: "15+", label: "Business Immersions" },
    fit: "cover" as const,
  },
  {
    tag: "Live Ventures",
    image: immersionImg,
    title: "Ventures,",
    titleEm: "not slide decks.",
    body: "Two Outclass activities, a D2C brand sprint and a creators challenge, plus capstone projects across countries. Every term ends with real, shipped work.",
    points: [
      "Build a D2C brand",
      "Creators challenge - London",
      "Capstone projects across countries",
    ],
    stat: { value: "3+", label: "Live Outputs" },
    fit: "cover" as const,
  },
];

const SKEW = 8; // degrees

const CXO = () => {
  const [active, setActive] = useState(1);

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

      <div className="container relative py-14 sm:py-16 md:py-20">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14 pb-6 border-b border-border">
          <div className="md:col-span-12">
            <SectionEyebrow className="mb-4">Why This Programme</SectionEyebrow>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Hands-on learning for{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                real business impact.
              </em>
            </h2>
          </div>
        </div>

        {/* Diagonal split panels - desktop */}
        <div
          className="hidden md:flex relative w-full h-[640px] gap-2"
          onMouseLeave={() => setActive(1)}
        >
          {pillars.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className="relative h-full overflow-hidden cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border border-border"
                style={{
                  flex: isActive ? 5 : 1.5,
                  clipPath:
                    i === 0
                      ? `polygon(0 0, 100% 0, calc(100% - ${SKEW * 8}px) 100%, 0 100%)`
                      : i === pillars.length - 1
                      ? `polygon(${SKEW * 8}px 0, 100% 0, 100% 100%, 0 100%)`
                      : `polygon(${SKEW * 8}px 0, 100% 0, calc(100% - ${SKEW * 8}px) 100%, 0 100%)`,
                  marginLeft: i === 0 ? 0 : -SKEW * 4,
                }}
              >
                {/* Image */}
                <img
                  src={p.image}
                  alt={p.tag}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full transition-transform duration-[1200ms] ease-out ${
                    p.fit === "contain" ? "object-contain p-10 bg-[hsl(0,0%,6%)]" : "object-cover"
                  } ${isActive ? "scale-105" : "scale-110 grayscale"}`}
                />

                {/* Dark overlay - flat tint only on collapsed panels */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive ? "bg-background/30" : "bg-background/80"
                  }`}
                />

                {/* Accent bar removed */}

                {/* Folio numeral - always visible */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                  /0{i + 1}
                </div>

                {/* Collapsed state - vertical tag */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-foreground whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                    {p.tag}
                  </div>
                </div>

                {/* Expanded content */}
                {/* Bottom fade for text legibility */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-background via-background/85 to-transparent transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {/* Top fade for tag + stat legibility */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/85 to-transparent transition-opacity duration-700 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Expanded content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 lg:p-12 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  {/* Top meta */}
                  <div className="absolute top-6 left-8 lg:left-12 flex items-center gap-3">
                    <span className="tag-pill">
                      {p.tag}
                    </span>
                  </div>

                  {/* Stat - top right */}
                  <div className="absolute top-6 right-8 lg:right-16 flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl mu-hero-gradient-text leading-none">
                      {p.stat.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.stat.label}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl lg:text-5xl leading-[0.95] text-balance mb-4 max-w-xl">
                    {p.title}{" "}
                    <em className="italic mu-hero-gradient-text not-italic">
                      {p.titleEm}
                    </em>
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md mb-6">
                    {p.body}
                  </p>

                  <ul className="space-y-2 max-w-md border-t border-border/60 pt-4">
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[12px] lg:text-sm text-foreground/85 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile - stacked panels */}
        <div className="md:hidden space-y-4">
          {pillars.map((p, i) => (
            <article
              key={i}
              className="relative overflow-hidden border border-border h-[420px]"
            >
              <img
                src={p.image}
                alt={p.tag}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full ${
                  p.fit === "contain" ? "object-contain p-6 bg-[hsl(0,0%,6%)]" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-background/40" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="tag-pill">
                  {p.tag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                  /0{i + 1}
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-4xl mu-hero-gradient-text leading-none">
                    {p.stat.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.stat.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-[0.95] text-balance mb-2">
                  {p.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic">
                    {p.titleEm}
                  </em>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {p.body}
                </p>
                <ul className="space-y-1.5 border-t border-border/60 pt-3">
                  {p.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[11px] text-foreground/85 leading-snug"
                    >
                      <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CXO;
