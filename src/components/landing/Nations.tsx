import { useRef, useState } from "react";
import india from "@/assets/nation-india.webp";
import hk from "@/assets/nation-hongkong.webp";
import london from "@/assets/nation-london.webp";
import dubai from "@/assets/nation-dubai.webp";
import { terms as curriculumTerms } from "./Curriculum";

type Nation = {
  n: string;
  country: string;
  flag: string;
  city: string;
  term: string;
  partner: string;
  img: string;
  title: string;
  desc: string;
  outcome: string;
  tags: string[];
  optional?: boolean;
  coords: string;
};

const nations: Nation[] = [
  {
    n: "01",
    country: "India",
    flag: "🇮🇳",
    city: "Delhi NCR · Gurugram",
    term: "Term 1 · Nov – Jan",
    partner: "Masters' Union Campus",
    img: india,
    title: "Build the foundation.",
    desc: "Your operating base. Read P&Ls, ship products, run GTM sprints and pitch to founders of Razorpay, Zomato, Nykaa & Lenskart. Walk the floors of ITC, Dixon, NIVEA and Sonalika. You leave India having already done the work — not having only studied it.",
    outcome: "Operate a venture end-to-end: finance, product, GTM, ops & leadership.",
    tags: ["Finance & FinTech", "Product & AI", "Sales & GTM", "Operations", "Leadership"],
    coords: "28.4°N · 77.0°E",
  },
  {
    n: "02",
    country: "Hong Kong",
    flag: "🇭🇰",
    city: "Central · Greater Bay Area",
    term: "Term 2 · Mar – May",
    partner: "CUHK Business School",
    img: hk,
    title: "Read the East.",
    desc: "Asia's capital gateway. Sessions at CUHK Business School, trading floors at HKEX & HSBC, and a Greater Bay Area sprint into Shenzhen's hardware ecosystem. Decode how Asian capital, manufacturing and platforms actually move.",
    outcome: "Navigate Asian capital markets, supply chains and cross-border deals.",
    tags: ["Global Finance", "Asia Strategy", "Supply Chain", "FinTech"],
    coords: "22.3°N · 114.1°E",
  },
  {
    n: "03",
    country: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    term: "Term 3 · Jun – Jul",
    partner: "Imperial College London",
    img: london,
    title: "Command global capital.",
    desc: "Imperial College London — innovation, deep tech and entrepreneurship at one of the world's top business schools. Decode PE/VC, M&A, luxury brand strategy and the creator-economy playbooks shaping the West.",
    outcome: "Pitch, raise and scale a venture at global capital standards.",
    tags: ["Capital Markets", "Tech & Innovation", "Luxury & Brand", "Strategy"],
    coords: "51.5°N · 0.12°W",
  },
  {
    n: "04",
    country: "Dubai",
    flag: "🇦🇪",
    city: "DIFC · UAE",
    term: "Optional · 1 Week",
    partner: "Optional Immersion",
    img: dubai,
    title: "Operate at the crossroads.",
    desc: "Optional finale in the world's fastest-growing business hub. Inside DIFC, family offices, sovereign wealth and the founders building MENA's next wave. The bridge between Asian capital and Western markets.",
    outcome: "Position yourself for MENA opportunities, family offices & global mobility.",
    tags: ["MENA Markets", "Family Office", "Free Zones", "Global Mobility"],
    optional: true,
    coords: "25.2°N · 55.3°E",
  },
];

const Nations = () => {
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("in-class");
  const panelRef = useRef<HTMLDivElement>(null);
  const n = nations[active];
  const term = curriculumTerms[active];
  const curriculumSections = term
    ? [
        { label: term.academic.label || "In Class", items: term.academic.items },
        { label: term.outclass.label || "Out Class", items: term.outclass.items },
      ].filter((section) => section.items.length > 0)
    : [];

  const tabs = term
    ? [
        term.academic.items.length > 0 && { id: "in-class", label: term.academic.label || "In Class" },
        term.outclass.items.length > 0 && { id: "out-class", label: term.outclass.label || "Out Class" },
        term.immersions && { id: "business", label: "Business Immersions" },
        term.cultural && { id: "cultural", label: term.cultural.chip || "Cultural Immersion" },
      ].filter(Boolean) as { id: string; label: string }[]
    : [];

  const handleSetActive = (i: number) => {
    setFlipped(false);
    setActive(i);
    setActiveTab("in-class");
  };


  const openCurriculum = () => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setFlipped(true), 180);
  };

  return (
    <section
      id="nations"
      className="py-16 sm:py-20 md:py-32 relative overflow-hidden"
    >
      {/* Ambient grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-10 md:mb-14">
          <div>
            <div className="tag-pill mb-4 sm:mb-6">◉ The Journey</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl text-balance">
              Four nations.<br />
              <em className="italic mu-hero-gradient-text not-italic">Four markets.</em><br />
              One global operator.
            </h2>
          </div>
          <p className="md:max-w-sm text-sm sm:text-base text-muted-foreground">
            The journey is sequential, not symbolic. Build in India. Read Asia from Hong Kong. Raise capital in London. Bridge the world from Dubai.
          </p>
        </div>

        {/* Itinerary rail */}
        <div className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 font-mono text-[11px] uppercase tracking-widest">
          {nations.map((it, i) => (
            <div key={it.country} className="flex items-center gap-3">
              <button
                onClick={() => handleSetActive(i)}
                className={`transition-colors ${i === active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {it.country}{it.optional ? " (opt)" : ""}
              </button>
              {i < nations.length - 1 && <span className="text-muted-foreground/50">→</span>}
            </div>
          ))}
          <span className="lg:ml-auto text-muted-foreground/70">Click any stop to explore</span>
        </div>

        {/* Main feature board */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left: tabs as boarding-pass cards */}
          <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
            {nations.map((it, i) => {
              const isActive = i === active;
              return (
                <button
                  key={it.country}
                  onClick={() => handleSetActive(i)}
                  className={`group relative w-full text-left border transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                      : "border-border bg-background/40 hover:border-foreground/40 hover:bg-background/70"
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Stub */}
                    <div
                      className={`flex flex-col items-center justify-center px-3 py-4 border-r ${
                        isActive ? "border-primary-foreground/30" : "border-border"
                      }`}
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                        {it.optional ? "Opt" : it.n}
                      </div>
                      <div className="text-2xl mt-1 leading-none">{it.flag}</div>
                    </div>
                    {/* Body */}
                    <div className="flex-1 px-4 py-4 min-w-0">
                      <div className={`font-mono text-[9px] uppercase tracking-widest ${isActive ? "opacity-80" : "text-muted-foreground"}`}>
                        {it.term}
                      </div>
                      <div className="font-display text-lg sm:text-xl mt-0.5 truncate">
                        {it.country}
                      </div>
                      <div className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${isActive ? "opacity-70" : "text-muted-foreground/80"}`}>
                        {it.partner}
                      </div>
                    </div>
                    {/* Arrow */}
                    <div
                      className={`flex items-center pr-4 text-2xl font-display transition-transform ${
                        isActive ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"
                      }`}
                    >
                      →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: feature panel with book-style page sweep */}
          <div ref={panelRef} className="lg:col-span-8 order-1 lg:order-2 scroll-mt-24">
            <div
              className="relative grid w-full overflow-visible [perspective:2200px]"
              style={{ transformStyle: "preserve-3d" }}
            >
            {/* Spine shadow on the left edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-6 z-40"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--foreground) / 0.22) 0%, hsl(var(--foreground) / 0.08) 42%, transparent 100%)",
              }}
            />
            <article
              key={n.country}
              className={`col-start-1 row-start-1 relative border border-border bg-background z-30 origin-left ${
                flipped ? "pointer-events-none" : ""
              }`}
              style={{
                transitionProperty: "transform, opacity, filter",
                transitionDuration: "2500ms",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                transform: flipped
                  ? "translateX(-105%) rotateY(-34deg) rotateZ(-1.5deg) scale(0.96)"
                  : "translateX(0) rotateY(0deg) rotateZ(0deg) scale(1)",
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                willChange: "transform",
                opacity: flipped ? 0 : 1,
                filter: flipped ? "blur(0.4px)" : "blur(0px)",
                boxShadow: "0 10px 30px -10px hsl(var(--foreground) / 0.28)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-500"
                style={{
                  opacity: flipped ? 1 : 0,
                  background:
                    "linear-gradient(90deg, hsl(var(--background) / 0.88) 0%, transparent 34%, hsl(var(--foreground) / 0.16) 78%, hsl(var(--background) / 0.72) 100%)",
                }}
              />
              {/* Hero image with country mark overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={n.img}
                  alt={n.country}
                  loading="lazy" decoding="async"
                  className="w-full h-64 sm:h-80 md:h-[440px] object-cover grayscale-[0.4] transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

                {/* Top meta strip */}
                <div className="absolute top-0 inset-x-0 flex items-center justify-between gap-3 p-4 sm:p-6">
                  <div className="bg-background/80 backdrop-blur px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest border border-border">
                    {n.n} / 04 · {n.coords}
                  </div>
                  {n.optional && (
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                      Optional Immersion
                    </div>
                  )}
                </div>

                {/* Country mark */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      {n.term} · {n.city}
                    </div>
                    <h3 className="font-display text-[clamp(2.25rem,9vw,7rem)] leading-[0.9] tracking-tight break-words">
                      {n.country}
                    </h3>
                  </div>
                  <div className="hidden sm:block text-right shrink-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Partner</div>
                    <div className="font-display text-base md:text-lg text-primary mt-1 max-w-[180px] leading-tight">
                      {n.partner}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-8 md:p-10 space-y-6">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl italic text-foreground/90 leading-snug">
                  "{n.title}"
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {n.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {n.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                {/* Outcome strip — highlighted with gradient border + glow */}
                <div
                  className="relative p-px shadow-[0_20px_60px_-20px_rgba(247,213,68,0.35)]"
                  style={{
                    background:
                      "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)",
                  }}
                >
                  <div className="relative overflow-hidden bg-[hsl(0,0%,5%)] p-5 sm:p-6">
                    <div
                      className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, #E38330 0%, #F7D544 40%, transparent 70%)",
                      }}
                    />
                    <div
                      className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, #39B5D7 0%, transparent 70%)",
                      }}
                    />
                    <div className="absolute inset-0 editorial-grid opacity-[0.08] pointer-events-none" />

                    <div className="relative">
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="mu-hero-gradient-text font-bold">You walk away able to →</span>
                      </div>
                      <div className="font-display text-lg sm:text-xl md:text-2xl leading-snug text-foreground">
                        {n.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA: simple text link to flip */}
                <div className="pt-2">
                  <button
                    onClick={openCurriculum}
                    className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors"
                  >
                    <span className="w-8 h-px bg-foreground group-hover:bg-primary group-hover:w-12 transition-all" />
                    View {n.country} Curriculum
                    <span className="font-display text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </article>

            {/* Underneath page: curriculum (revealed after the page sweep) */}
            <article
              className={`col-start-1 row-start-1 border border-border bg-background z-10 ${
                flipped
                  ? "opacity-100 translate-y-0 max-h-[6000px] pointer-events-auto delay-150"
                  : "opacity-0 translate-y-5 max-h-0 overflow-hidden pointer-events-none"
              }`}
              style={{
                transitionProperty: "opacity, transform, max-height",
                transitionDuration: "2000ms",
                transitionTimingFunction: "ease-out",
              }}
              aria-hidden={!flipped}
            >
              {/* inner spine shading on the left edge of the back page */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-8"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(0 0% 0% / 0.35) 0%, transparent 100%)",
                }}
              />
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-b border-border bg-background/95 backdrop-blur">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-1">
                    Curriculum · {n.term}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl truncate">
                    {n.country} — Full Curriculum
                  </h3>
                </div>
                <button
                  onClick={() => setFlipped(false)}
                  className="group inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <span className="font-display text-lg group-hover:-translate-x-1 transition-transform">←</span>
                  Back
                </button>
              </div>
              <div className="px-6 sm:px-12 lg:px-16 py-8 sm:py-12">
                {term && (
                  <div className="max-w-4xl mx-auto">
                    {/* Header — minimal academic */}
                    <header className="mb-10 sm:mb-14 pb-8 border-b border-border">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                        {term.outcomeLabel}
                      </div>
                      <h4 className="font-display text-3xl sm:text-5xl leading-[1.1] tracking-tight mb-4 text-foreground">
                        {term.outcome}
                      </h4>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {term.outcomeSub}
                      </p>
                    </header>

                    {/* Tabs */}
                    {tabs.length > 0 && (
                      <div className="mb-10 border-b border-border">
                        <div className="flex flex-wrap -mb-px">
                          {tabs.map((tab) => {
                            const isActive = activeTab === tab.id || (!tabs.find((t) => t.id === activeTab) && tab.id === tabs[0].id);
                            return (
                              <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-4 sm:px-5 py-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] transition-colors ${
                                  isActive
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {tab.label}
                                {isActive && (
                                  <span className="absolute left-0 right-0 -bottom-px h-px bg-foreground" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Tab Panels */}
                    <div className="min-h-[300px]">
                      {/* In Class */}
                      {(activeTab === "in-class" || (!tabs.find((t) => t.id === activeTab) && tabs[0]?.id === "in-class")) && term.academic.items.length > 0 && (
                        <div className="space-y-1">
                          {term.academic.items.map((item, idx) => (
                            <div
                              key={`ac-${idx}`}
                              className="grid grid-cols-[60px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-5 border-b border-border/60 last:border-b-0"
                            >
                              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-1">
                                {item.code || item.num}
                              </div>
                              <div className="font-display text-lg sm:text-xl leading-snug tracking-tight">
                                {item.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Out Class */}
                      {activeTab === "out-class" && term.outclass.items.length > 0 && (
                        <div className="space-y-1">
                          {term.outclass.items.map((item, idx) => (
                            <div
                              key={`oc-${idx}`}
                              className="grid grid-cols-[60px_1fr] sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 py-5 border-b border-border/60 last:border-b-0"
                            >
                              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-1">
                                {item.code || item.num}
                              </div>
                              <div className="font-display text-lg sm:text-xl leading-snug tracking-tight">
                                {item.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Business Immersions */}
                      {activeTab === "business" && term.immersions && (
                        <div>
                          <div className="mb-8 pb-6 border-b border-border/60">
                            <h5 className="font-display text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
                              {term.immersions.header.title}
                            </h5>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                              {term.immersions.header.body}
                            </p>
                          </div>
                          {term.immersions.cards.length > 0 && (
                            <div className="space-y-1">
                              {term.immersions.cards.map((card) => (
                                <div
                                  key={card.title}
                                  className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 py-5 border-b border-border/60 last:border-b-0"
                                >
                                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-1">
                                    {card.cat}
                                  </div>
                                  <div>
                                    <div className="font-display text-lg sm:text-xl leading-snug tracking-tight mb-1">
                                      {card.title}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {card.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {term.immersions.header.note && (
                            <div className="mt-8 pt-6 border-t border-border/60">
                              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                {term.immersions.header.note.title}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                {term.immersions.header.note.desc}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Cultural */}
                      {activeTab === "cultural" && term.cultural && (
                        <div>
                          <div className="mb-8 pb-6 border-b border-border/60">
                            <h5 className="font-display text-2xl sm:text-3xl leading-tight tracking-tight mb-3">
                              {term.cultural.title}
                            </h5>
                            <p
                              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl"
                              dangerouslySetInnerHTML={{ __html: term.cultural.body }}
                            />
                          </div>
                          {term.cultural.cards.length > 0 && (
                            <div className="space-y-1">
                              {term.cultural.cards.map((card) => (
                                <div
                                  key={card.name}
                                  className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 py-5 border-b border-border/60 last:border-b-0"
                                >
                                  <div className="font-display text-base sm:text-lg leading-snug tracking-tight">
                                    {card.name}
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {card.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {term.cultural.note && (
                            <p className="mt-8 pt-6 border-t border-border/60 text-sm italic text-muted-foreground leading-relaxed">
                              {term.cultural.note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {curriculumSections.length === 0 && !term.immersions && !term.cultural && (
                      <div className="border border-border bg-secondary/20 p-8">
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                          Optional · 1 Week Immersion
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Experience a city built on speed and capital through DIFC, JAFZA, family offices and global operators.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nations;

