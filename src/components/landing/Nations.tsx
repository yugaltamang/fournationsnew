import { useState } from "react";
import india from "@/assets/nation-india.webp";
import hk from "@/assets/nation-hongkong.webp";
import london from "@/assets/nation-london.webp";
import dubai from "@/assets/nation-dubai.webp";

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
  const n = nations[active];

  return (
    <section
      id="nations"
      className="py-20 md:py-32 relative overflow-hidden"
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
                onClick={() => setActive(i)}
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
                  onClick={() => setActive(i)}
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

          {/* Right: feature panel */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <article
              key={n.country}
              className="relative border border-border bg-background animate-fade-up"
            >
              {/* Hero image with country mark overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={n.img}
                  alt={n.country}
                  loading="lazy"
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
                    <h3 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight break-words">
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

                {/* Outcome strip */}
                <div className="relative bg-primary text-primary-foreground p-5 sm:p-6 shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-2">
                    You walk away able to →
                  </div>
                  <div className="font-display text-lg sm:text-xl md:text-2xl leading-snug">
                    {n.outcome}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nations;
