import imperialImg from "@/assets/imperial-london.webp";
import cuhkImg from "@/assets/cuhk-hongkong.webp";
import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    tag: "Term 3 · London",
    name: "Imperial College London",
    image: imperialImg,
    headline: "Lead on the world stage.",
    body: "Learn at one of the world's top-ranked institutions — and graduate with an Imperial credential. Master capital strategy, global leadership, and pitch a creator brand from the heart of London.",
    stats: [
      { v: "#2", l: "QS World Rankings" },
      { v: "Top 1%", l: "Business Schools" },
      { v: "140+", l: "Nationalities" },
      { v: "14", l: "Nobel Laureates" },
    ],
  },
  {
    tag: "Term 2 · Hong Kong",
    name: "CUHK, Hong Kong",
    image: cuhkImg,
    headline: "Gateway to Greater China.",
    body: "Study in Hong Kong, understand China. Explore digital platforms, supply chains, AI innovation, and cross-cultural leadership at The Chinese University of Hong Kong — and build a cross-border GBA venture.",
    stats: [
      { v: "#32", l: "QS Ranking" },
      { v: "60+", l: "Years of Excellence" },
      { v: "60", l: "Contact Hours" },
      { v: "✓", l: "CUHK Certificate" },
    ],
  },
];

const Immersions = () => (
  <section className="py-16 sm:py-20 md:py-28 bg-secondary/20 border-y border-border relative overflow-hidden">
    {/* Ambient background glow */}
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, #39B5D7 0%, #F7D544 50%, transparent 70%)",
      }}
    />

    <div className="container relative">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16 pb-8 md:pb-10 border-b border-border">
        <div className="md:col-span-8">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Academic Partnerships
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Two of the world's{" "}
            <em className="italic mu-hero-gradient-text not-italic">
              great universities.
            </em>{" "}
            One cohort.
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            You don't just visit Hong Kong and London — you study at their flagship institutions and leave with two globally recognised credentials.
          </p>
        </div>
      </div>

      {/* Partner cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {partners.map((p) => (
          <article
            key={p.name}
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

            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,6%)] via-transparent to-transparent" />
              {/* Tag chip */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                {p.tag}
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 md:p-10">
              <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-3">
                {p.name}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1] mb-4 sm:mb-5 text-balance">
                {p.headline}
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                {p.body}
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-border mb-6">
                {p.stats.map((s) => (
                  <div key={s.l} className="bg-[hsl(0,0%,6%)] p-4">
                    <div className="font-display text-2xl sm:text-3xl mu-hero-gradient-text leading-none">
                      {s.v}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2 leading-tight">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer link */}
              <div className="flex items-center justify-between pt-5 border-t border-border">
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Certificate Awarded
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Immersions;
