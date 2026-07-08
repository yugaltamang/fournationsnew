import imperialImg from "@/assets/imperial-london.png";
import cuhkImg from "@/assets/cuhk-hongkong.png";
import muLogo from "@/assets/masters-union-delhi.png";
import muSvgLogo from "@/assets/mu-logo.svg";
import SectionEyebrow from "./SectionEyebrow";


const partners = [
  {
    tag: "Term 1 · Gurugram · 12 Weeks",
    name: "Masters' Union",
    image: muLogo,
    logo: muSvgLogo,
    headline: "Built by practitioners.",
    body: "The home institution. A new-age business school where MDs, founders and operators teach - not career academics. In five years, one of India's most selective programmes, on a Top-10 global rank quest.",
    stats: [
      { v: "2,000+", l: "Students" },
      { v: "200+", l: "Industry Mentors" },
      { v: "₹100 Cr", l: "Venture Fund" },
    ],
  },
  {
    tag: "Term 2 · London · 8 Weeks",
    name: "Imperial College London",
    image: imperialImg,
    logo: "https://logo.clearbit.com/imperial.ac.uk",
    headline: "Lead on the world stage.",
    body: "Learn at one of the world's top-ranked institutions – and graduate with an Imperial credential. Master capital strategy, global leadership, and pitch your innovative startup from the heart of London.",
    stats: [
      { v: "#2", l: "QS World Rankings" },
      { v: "Top 1%", l: "Business Schools" },
      { v: "140+", l: "Nationalities" },
      { v: "14", l: "Nobel Laureates" },
    ],
  },
  {
    tag: "Term 3 · Hong Kong · 10 Weeks",
    name: "CUHK, Hong Kong",
    image: cuhkImg,
    logo: "https://logo.clearbit.com/cuhk.edu.hk",
    headline: "Gateway to Greater China.",
    body: "Study in Hong Kong, understand China. Explore digital platforms, supply chains, AI innovation, and cross-cultural leadership at The Chinese University of Hong Kong - and build a cross-border GBA venture.",
    stats: [
      { v: "#32", l: "QS Ranking" },
      { v: "60+", l: "Years of Excellence" },
      { v: "60", l: "Contact Hours" },
      { v: "✓", l: "CUHK Certificate" },
    ],
  },
];

const Immersions = () => (
  <section className="py-14 sm:py-20 md:py-28 relative overflow-hidden">
    {/* Ambient backdrop */}
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
      aria-hidden
      className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, #F7D544 0%, #39B5D7 50%, transparent 70%)",
      }}
    />

    <div className="container relative">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-14 md:mb-20">
          <SectionEyebrow className="mb-6">The Pedigree</SectionEyebrow>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] text-balance mb-6">
          Three institutions.{" "}
          <em className="italic mu-hero-gradient-text not-italic">One cohort.</em>{" "}
          Three credentials.
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
          Anchored at Masters' Union in Delhi, with terms at Imperial College London and CUHK Hong Kong - you graduate with credentials from all three.
        </p>
      </div>

      {/* Partner cards - vertical editorial layout */}
      <div className="space-y-8 md:space-y-12">
        {partners.map((p, idx) => (
          <article
            key={p.name}
            className="group relative grid md:grid-cols-12 gap-6 md:gap-10 items-center"
          >
            {/* Index marker rail */}
            <div className="hidden md:flex md:col-span-1 flex-col items-center gap-3 self-stretch">
              <div className="font-display text-3xl mu-hero-gradient-text leading-none">
                0{idx + 1}
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-primary/60 via-border to-transparent" />
            </div>

            {/* Image panel */}
            <div className={`md:col-span-5 ${idx % 2 === 1 ? "md:order-3" : ""}`}>
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
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Term tag */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                  <span className="tag-pill">{p.tag}</span>
                </div>
                {/* Corner mark */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="tag-pill">Cert · Awarded</span>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  {p.name}
                </div>
                <h3 className="font-display text-base sm:text-lg md:text-xl text-balance">
                  {p.headline}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                {p.body}
              </p>

              {/* Stats row */}
              <div className={`grid grid-cols-2 ${p.stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"} gap-px bg-border border border-border`}>
                {p.stats.map((s) => (
                  <div key={s.l} className="bg-background p-3 sm:p-4 min-w-0">
                    <div className="font-display text-3xl sm:text-4xl md:text-5xl mu-hero-gradient-text leading-none break-words">
                      {s.v}
                    </div>
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mt-2 leading-tight">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Immersions;
