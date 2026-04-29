import globeImg from "@/assets/four-nations-globe.png";
import cxoImg from "@/assets/cxo-masterclass.webp";
import immersionImg from "@/assets/immersion-factory.webp";
import { ArrowUpRight } from "lucide-react";

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
  <section id="faculty" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-secondary/20 border-y border-border">
    {/* Ambient background */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, #F7D544 0%, #E38330 40%, transparent 70%)",
      }}
    />

    <div className="container relative">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-14 md:mb-20">
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
          <span className="w-8 h-px bg-primary" />
          <span>Why This Programme</span>
          <span className="text-muted-foreground/50">/ 03 Pillars</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance mb-6">
          Hands-on learning for{" "}
          <em className="italic mu-hero-gradient-text not-italic">
            real business impact.
          </em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
          Direct execution over passive learning. Every term, every country, every session is engineered to build real skills and real outcomes — not slide decks.
        </p>
      </div>

      {/* Pillars — alternating editorial layout */}
      <div className="space-y-8 md:space-y-12">
        {pillars.map((p, i) => (
          <article
            key={i}
            className="group relative grid md:grid-cols-12 gap-6 md:gap-10 items-center"
          >
            {/* Index marker rail */}
            <div className="hidden md:flex md:col-span-1 flex-col items-center gap-3 self-stretch">
              <div className="font-display text-3xl mu-hero-gradient-text leading-none">
                0{i + 1}
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-primary/60 via-border to-transparent" />
            </div>

            {/* Image panel — alternates side */}
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-3" : ""}`}>
              <div className="relative aspect-square bg-[hsl(0,0%,6%)] border border-border overflow-hidden group-hover:border-primary/40 transition-colors duration-500">
                {/* Hover glow */}
                <div
                  className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-0 group-hover:opacity-30 blur-3xl pointer-events-none transition-opacity duration-700"
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
                  className={`relative w-full h-full ${
                    p.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover grayscale group-hover:grayscale-0"
                  } group-hover:scale-105 transition-all duration-700`}
                />
                {/* Tag chip */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest z-10">
                  {p.tag}
                </div>
                {/* Corner mark */}
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 z-10">
                  Pillar /0{i + 1}
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance">
                  {p.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic">
                    {p.titleEm}
                  </em>
                </h3>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                {p.body}
              </p>

              {/* Points list */}
              <ul className="space-y-2.5 sm:space-y-3 border-t border-border pt-5">
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm sm:text-base text-foreground/85"
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-primary mt-1 shrink-0"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Footer stat strip */}
              <div className="flex items-end justify-between pt-4 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="font-display text-3xl sm:text-4xl mu-hero-gradient-text leading-none">
                    {p.stat.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                    {p.stat.label}
                  </div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  /0{i + 1} · 0{pillars.length}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CXO;
