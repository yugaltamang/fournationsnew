import nationHk from "@/assets/nation-hongkong.webp";
import immersionImg from "@/assets/immersion-factory.webp";
import { ArrowUpRight } from "lucide-react";
import FourCitiesMap from "./FourCitiesMap";

const pillars = [
  {
    tag: "Global Exposure",
    image: null as string | null,
    title: "Four countries.",
    titleEm: "One cohort.",
    body: "Live and build across India, Hong Kong, London and Dubai — four of the world's most dynamic business ecosystems.",
    points: [
      "9 months across 4 countries spanning Asia, Europe & MENA",
      "On-ground company visits, factory floors & real boardrooms",
      "Imperial College London and CUHK Hong Kong certificates on completion",
    ],
    stat: { value: "4", label: "Nations" },
  },
  {
    tag: "CXO Sessions",
    image: nationHk,
    title: "Learn from leaders",
    titleEm: "across every industry.",
    body: "The faculty isn't academic — it's the people actively running businesses. MDs, founders and senior executives lead sessions as live conversations.",
    points: [
      "Practising leaders from fintech, consumer, manufacturing & tech",
      "Live conversations — not lectures. Unfiltered and experience-first",
      "Access to the Masters' Union alumni network for life",
    ],
    stat: { value: "60+", label: "CXO Sessions" },
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
  },
];

const CXO = () => (
  <section id="faculty" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
    {/* Ambient background */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, #F7D544 0%, #E38330 40%, transparent 70%)",
      }}
    />

    <div className="container relative">
      {/* Header — split, editorial */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-20 pb-8 md:pb-10 border-b border-border">
        <div className="md:col-span-8">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why This Programme
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

      {/* Pillars */}
      <div className="space-y-6 md:space-y-8">
        {pillars.map((p, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={i}
              className="group relative overflow-hidden border border-border bg-[hsl(0,0%,6%)] hover:border-primary/40 transition-colors duration-500"
            >
              {/* Hover glow */}
              <div
                className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-0 group-hover:opacity-25 blur-3xl pointer-events-none transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle, #F7D544 0%, #E38330 50%, transparent 70%)",
                }}
              />

              <div className={`grid md:grid-cols-12 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* Image / visual side */}
                <div className="relative md:col-span-5 overflow-hidden bg-[hsl(0,0%,5%)] flex items-center justify-center min-h-[260px] sm:min-h-[340px] md:min-h-[460px]">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.tag}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center">
                      <FourCitiesMap />
                    </div>
                  )}
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-none mix-blend-difference pointer-events-none">
                    /0{i + 1}
                  </div>
                  {/* Tag chip */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                    {p.tag}
                  </div>
                </div>

                {/* Content side */}
                <div className="relative md:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-6 md:gap-8">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] mb-4 sm:mb-5 text-balance">
                      {p.title}{" "}
                      <em className="italic mu-hero-gradient-text not-italic">
                        {p.titleEm}
                      </em>
                    </h3>
                    <p className="text-muted-foreground mb-5 sm:mb-6 max-w-xl text-sm sm:text-base leading-relaxed">
                      {p.body}
                    </p>

                    {/* Points list */}
                    <ul className="space-y-2.5 sm:space-y-3">
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
                  </div>

                  {/* Footer stat */}
                  <div className="flex items-end justify-between pt-5 sm:pt-6 border-t border-border">
                    <div>
                      <div className="font-display text-3xl sm:text-4xl mu-hero-gradient-text leading-none">
                        {p.stat.value}
                      </div>
                      <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1.5">
                        {p.stat.label}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Pillar /0{i + 1} · 0{pillars.length}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default CXO;
