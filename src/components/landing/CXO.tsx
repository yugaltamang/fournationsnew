import { useEffect, useRef, useState } from "react";
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

const CXO = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to viewport center
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = refs.current.findIndex((r) => r === visible[0].target);
          if (idx !== -1) setActive(idx);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

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

      <div className="container relative py-16 sm:py-20 md:py-32">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-20 pb-8 md:pb-10 border-b border-border">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
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
              Direct execution over passive learning. Every term, every country, every session is engineered to build real skills and real outcomes — not slide decks.
            </p>
          </div>
        </div>

        {/* Sticky scroll storytelling */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 relative">
          {/* Left: sticky visual stage */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative aspect-square bg-[hsl(0,0%,6%)] border border-border overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl pointer-events-none transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle, #F7D544 0%, #E38330 50%, transparent 70%)",
                  }}
                />

                {/* Cross-fade images */}
                {pillars.map((p, i) => (
                  <img
                    key={i}
                    src={p.image}
                    alt={p.tag}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ${
                      p.fit === "contain" ? "object-contain p-6" : "object-cover"
                    } ${
                      i === active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                {/* Tag chip */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest z-10 transition-all duration-500">
                  {pillars[active].tag}
                </div>

                {/* Big numeral overlay */}
                <div className="absolute bottom-5 right-5 font-display text-7xl md:text-8xl mu-hero-gradient-text leading-none mix-blend-difference z-10">
                  /0{active + 1}
                </div>
              </div>

              {/* Progress indicators */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {pillars.map((p, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      refs.current[i]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    className="text-left group/p"
                  >
                    <div
                      className={`h-0.5 w-full transition-colors duration-500 ${
                        i === active ? "bg-primary" : "bg-border"
                      }`}
                    />
                    <div
                      className={`mt-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                        i === active
                          ? "text-foreground"
                          : "text-muted-foreground group-hover/p:text-foreground/70"
                      }`}
                    >
                      0{i + 1} · {p.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: scrolling content */}
          <div className="md:col-span-7 lg:col-span-7 space-y-16 md:space-y-32">
            {pillars.map((p, i) => (
              <article
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className="relative scroll-mt-32"
              >
                {/* Mobile-only image */}
                <div className="md:hidden mb-6 relative aspect-square bg-[hsl(0,0%,6%)] border border-border overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.tag}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${
                      p.fit === "contain" ? "object-contain p-4" : "object-cover"
                    }`}
                  />
                  <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                    {p.tag}
                  </div>
                </div>

                {/* Numeral + tag (desktop) */}
                <div className="hidden md:flex items-baseline gap-4 mb-5">
                  <div className="font-display text-5xl mu-hero-gradient-text leading-none">
                    /0{i + 1}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                    {p.tag}
                  </div>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance mb-5">
                  {p.title}{" "}
                  <em className="italic mu-hero-gradient-text not-italic">
                    {p.titleEm}
                  </em>
                </h3>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-6">
                  {p.body}
                </p>

                {/* Points */}
                <ul className="space-y-3 border-t border-border pt-5">
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

                {/* Stat strip */}
                <div className="flex items-end justify-between pt-6 mt-6 border-t border-border">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CXO;
