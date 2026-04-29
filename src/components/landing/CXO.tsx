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
      "9 months across 4 countries spanning Asia, Europe & MENA",
      "On-ground company visits, factory floors & real boardrooms",
      "Imperial College London and CUHK Hong Kong certificates",
    ],
    stat: { value: "4", label: "Nations" },
    meta: ["IND", "HKG", "GBR", "UAE"],
    fit: "contain" as const,
  },
  {
    tag: "CXO Sessions",
    image: cxoImg,
    title: "Leaders,",
    titleEm: "not lecturers.",
    body: "Faculty drawn from the people actually running businesses. MDs, founders and senior executives lead live, unfiltered conversations.",
    points: [
      "Practising leaders from fintech, consumer, manufacturing & tech",
      "Live conversations — unfiltered and experience-first",
      "Lifelong access to the Masters' Union alumni network",
    ],
    stat: { value: "60+", label: "Sessions" },
    meta: ["MD", "CEO", "FOUNDER", "OPERATOR"],
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
    stat: { value: "3", label: "Ventures" },
    meta: ["D2C", "GBA", "CREATOR"],
    fit: "cover" as const,
  },
];

const CXO = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section
      id="faculty"
      className="relative bg-background border-y-2 border-foreground overflow-hidden"
    >
      {/* Full-bleed image overlay on hover */}
      {pillars.map((p, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            hover === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={p.image}
            alt=""
            className={`w-full h-full ${
              p.fit === "contain" ? "object-contain p-20" : "object-cover"
            }`}
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
      ))}

      <div className="container relative py-14 sm:py-16 md:py-20">
        {/* Brutalist masthead */}
        <div className="flex items-end justify-between gap-6 pb-3 mb-10 md:mb-14 border-b-2 border-foreground">
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
            <span className="text-foreground font-bold">§ Why This Programme</span>
          </div>
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground">
            03 / Pillars
          </div>
        </div>

        {/* Headline — oversized swiss */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <div className="md:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight uppercase text-balance">
              Hands-on
              <br />
              learning for{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                real
                <br />
                business impact.
              </em>
            </h2>
          </div>
          <div className="md:col-span-3 md:pt-6">
            <div className="border-t-2 border-foreground pt-3">
              <p className="font-mono text-xs uppercase tracking-wider leading-relaxed text-foreground">
                Direct execution.
                <br />
                No slide decks.
                <br />
                Real outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Three brutalist slabs */}
        <div className="border-t-2 border-foreground">
          {pillars.map((p, i) => (
            <article
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group relative grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b-2 border-foreground transition-colors duration-300 hover:bg-foreground hover:text-background cursor-default"
            >
              {/* Folio numeral */}
              <div className="md:col-span-2">
                <div className="font-display text-6xl md:text-8xl leading-[0.85] tracking-tight">
                  /0{i + 1}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                  {p.tag}
                </div>
              </div>

              {/* Title + body */}
              <div className="md:col-span-6">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.95] uppercase tracking-tight text-balance mb-4">
                  {p.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic group-hover:[&_*]:bg-none group-hover:[&_*]:text-background">
                    {p.titleEm}
                  </em>
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-80 max-w-lg">
                  {p.body}
                </p>
                {/* Meta tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {p.meta.map((m, k) => (
                    <span
                      key={k}
                      className="font-mono text-[9px] uppercase tracking-widest border border-current px-2 py-1 opacity-70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Points + stat */}
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                <ul className="space-y-2 border-t border-current pt-3">
                  {p.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-baseline gap-2 text-[12px] sm:text-[13px] leading-snug opacity-90"
                    >
                      <span className="font-mono text-[9px] shrink-0 opacity-60">
                        §{i + 1}.{j + 1}
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between border-t-2 border-current pt-3">
                  <div className="font-display text-5xl md:text-6xl leading-none tracking-tight">
                    {p.stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70 pb-1">
                    {p.stat.label}
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-0 font-mono text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                ↳ Hover
              </div>
            </article>
          ))}
        </div>

        {/* Footer ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
          <span>End / Feature</span>
          <span>Masters' Union · Four Nations MBA</span>
          <span>p. 03 / 03</span>
        </div>
      </div>
    </section>
  );
};

export default CXO;
