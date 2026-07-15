import { useRef, useState } from "react";
import india from "@/assets/nation-india.webp";
import hk from "@/assets/nation-hongkong.webp";
import london from "@/assets/nation-london.webp";
import dubai from "@/assets/nation-dubai.webp";
import { terms as curriculumTerms } from "./Curriculum";
import SectionEyebrow from "./SectionEyebrow";
import addverbLogo from "@/assets/immersion-logos/addverb.png.asset.json";
import itcLogo from "@/assets/immersion-logos/itc.png.asset.json";
import sonalikaLogo from "@/assets/immersion-logos/sonalika.png.asset.json";
import hondaLogo from "@/assets/immersion-logos/honda.png.asset.json";
import bluetokaiLogo from "@/assets/immersion-logos/bluetokai.png.asset.json";
import shiprocketLogo from "@/assets/immersion-logos/shiprocket.png.asset.json";
import niviaLogo from "@/assets/immersion-logos/nivia.png.asset.json";
import lpuLogo from "@/assets/immersion-logos/lpu.png.asset.json";
import arctosLogo from "@/assets/immersion-logos/arctos.png.asset.json";
import blenheimLogo from "@/assets/immersion-logos/blenheim.png.asset.json";
import rippleLogo from "@/assets/immersion-logos/ripple.png.asset.json";
import octopusLogo from "@/assets/immersion-logos/octopus.png.asset.json";
import deloitteLogo from "@/assets/immersion-logos/deloitte.png.asset.json";
import candesicLogo from "@/assets/immersion-logos/candesic.png.asset.json";
import burberryLogo from "@/assets/immersion-logos/burberry.png.asset.json";
import jnjLogo from "@/assets/immersion-logos/jnj.png.asset.json";
import hkexLogo from "@/assets/immersion-logos/hkex.png.asset.json";
import hsbcLogo from "@/assets/immersion-logos/hsbc.png.asset.json";
import alibabaLogo from "@/assets/immersion-logos/alibaba.png.asset.json";
import bytedanceLogo from "@/assets/immersion-logos/bytedance.png.asset.json";
import kerryLogo from "@/assets/immersion-logos/kerry.png.asset.json";
import lifungLogo from "@/assets/immersion-logos/lifung.png.asset.json";
import sensetimeLogo from "@/assets/immersion-logos/sensetime.png.asset.json";
import tencentLogo from "@/assets/immersion-logos/tencent.png.asset.json";
import difcLogo from "@/assets/immersion-logos/difc.png.asset.json";
import jafzaLogo from "@/assets/immersion-logos/jafza.png.asset.json";

const LOGO_MAP: Record<string, string> = {
  Addverb: addverbLogo.url,
  "ITC Limited": itcLogo.url,
  "Sonalika Tractors": sonalikaLogo.url,
  Honda: hondaLogo.url,
  "Blue Tokai": bluetokaiLogo.url,
  Shiprocket: shiprocketLogo.url,
  "Nivia Sports": niviaLogo.url,
  "LPU Jalandhar": lpuLogo.url,
  Arctos: arctosLogo.url,
  "Blenheim Chalcot": blenheimLogo.url,
  Ripple: rippleLogo.url,
  "Octopus Energy": octopusLogo.url,
  Deloitte: deloitteLogo.url,
  Candesic: candesicLogo.url,
  Burberry: burberryLogo.url,
  "Johnson & Johnson": jnjLogo.url,
  "Hong Kong Stock Exchange": hkexLogo.url,
  HSBC: hsbcLogo.url,
  "Alibaba Group": alibabaLogo.url,
  ByteDance: bytedanceLogo.url,
  "Kerry Logistics": kerryLogo.url,
  "Li & Fung": lifungLogo.url,
  SenseTime: sensetimeLogo.url,
  Tencent: tencentLogo.url,
  DIFC: difcLogo.url,
  JAFZA: jafzaLogo.url,
};


const splitBrands = (logos: string) => logos.split(" · ").map((brand) => brand.trim()).filter(Boolean);

const BrandLogoTile = ({ name }: { name: string }) => {
  const logo = LOGO_MAP[name];

  if (!logo) {
    return (
      <span className="inline-flex h-8 items-center justify-center border border-border bg-secondary/40 px-2.5 font-mono text-[9px] uppercase tracking-wider text-foreground">
        {name}
      </span>
    );
  }

  return (
    <span title={name} className="inline-flex h-8 w-16 shrink-0 items-center justify-center border border-border bg-background p-1.5">
      <img src={logo} alt={name} loading="lazy" decoding="async" className="max-h-5 max-w-12 object-contain" />
    </span>
  );
};

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
    term: "Term 1 · Feb – May",
    partner: "Masters' Union Campus",
    img: india,
    title: "Build the foundation.",
    desc: "Your operating base. Read P&Ls, ship products, run GTM sprints and pitch to founders scaling across India. Walk the floors of world-class manufacturing, FMCG and digital-native operations. You leave India having already done the work - not having only studied it.",
    outcome: "Operate a venture end-to-end: finance, product, GTM, ops & leadership.",
    tags: ["Finance & FinTech", "Product & AI", "Sales & GTM", "Operations", "Leadership"],
    coords: "28.4°N · 77.0°E",
  },
  {
    n: "02",
    country: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    term: "Term 2 · Jun – Jul",
    partner: "Imperial College London",
    img: london,
    title: "Command global capital.",
    desc: "Imperial College London - innovation, deep tech and entrepreneurship at one of the world's top business schools. Decode PE/VC, M&A, luxury brand strategy and the startup pitch playbooks shaping the West.",
    outcome: "Master global capital, data and innovation strategy and lead ventures from London to the world.",
    tags: ["Capital Markets", "Tech & Innovation", "Luxury & Brand", "Strategy"],
    coords: "51.5°N · 0.12°W",
  },
  {
    n: "03",
    country: "Hong Kong",
    flag: "🇭🇰",
    city: "Central · Greater Bay Area",
    term: "Term 3 · Aug – Oct",
    partner: "CUHK Business School",
    img: hk,
    title: "Scale Global Growth",
    desc: "Asia's capital gateway. Sessions at CUHK Business School, trading floors at HKEX & HSBC, and a Greater Bay Area sprint into Shenzhen's hardware ecosystem. Decode how Asian capital, manufacturing and platforms actually move.",
    outcome: "Navigate Asian capital markets, supply chains and cross-border deals.",
    tags: ["Global Finance", "Asia Strategy", "Supply Chain", "FinTech"],
    coords: "22.3°N · 114.1°E",
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
        (term.outclass.items.length > 0 || (term.outclass.summary && term.outclass.summary.length > 0)) && { id: "out-class", label: term.outclass.label || "Out Class" },
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
            <SectionEyebrow className="mb-4 sm:mb-6">The Journey / Curriculum</SectionEyebrow>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] max-w-3xl text-balance">
              One Curriculum.<br />
              <em className="italic mu-hero-gradient-text not-italic">Leadership Without Borders.</em>
            </h2>
          </div>
          <div className="md:max-w-sm" />

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
          
        </div>

        {/* Main feature board */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left: tabs as boarding-pass cards */}
          <div className="lg:col-span-4 space-y-3 order-2 lg:order-1 min-w-0">
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
          <div ref={panelRef} className="lg:col-span-8 order-1 lg:order-2 scroll-mt-24 min-w-0">
            <div className="relative grid w-full min-w-0">
            <article
              key={n.country}
              className={`col-start-1 row-start-1 relative border border-border bg-background z-30 min-w-0 transition-opacity duration-300 ${
                flipped ? "opacity-0 pointer-events-none hidden" : "opacity-100"
              }`}
              style={{
                boxShadow: "0 10px 30px -10px hsl(var(--foreground) / 0.28)",
              }}
            >
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
                <div className="absolute top-0 inset-x-0 flex items-start justify-end gap-2 p-3 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-end">
                    {n.optional && (
                      <span className="tag-pill">
                        Optional
                      </span>
                    )}
                    {n.country !== "Dubai" && (
                      <button
                        onClick={openCurriculum}
                        className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 sm:py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest border border-primary transition-colors min-h-[36px]"
                      >
                        <span className="hidden sm:inline">View </span>Curriculum
                        <span className="font-display text-sm group-hover:translate-x-0.5 transition-transform">→</span>
                      </button>
                    )}
                  </div>
                </div>



                {/* Country mark */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 flex items-end justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      {n.term} · {n.city}
                    </div>
                    <h3 className="font-display text-[clamp(1.5rem,6vw,5rem)] leading-[0.9] tracking-tight break-words hyphens-auto">
                      {n.country}
                    </h3>
                  </div>
                  <div className="hidden sm:block text-right shrink-0">
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
                <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground/90 leading-snug">
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



                {/* Outcome strip - highlighted with gradient border + glow */}
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
                        <span className="mu-hero-gradient-text font-bold">What You'll Be Able To:</span>
                      </div>
                      <div className="font-display text-base sm:text-lg md:text-xl leading-snug text-foreground">
                        {n.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {(() => {
                  const brands = n.country === "Dubai"
                    ? ["DIFC", "JAFZA"]
                    : term?.immersions
                      ? Array.from(new Set(term.immersions.cards.flatMap((c) => splitBrands(c.logos))))
                      : [];
                  return brands.length > 0 ? (
                    <div className="border border-border bg-secondary/20 p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
                        Business Immersions at {n.country}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {brands.map((brand) => (
                          <BrandLogoTile key={brand} name={brand} />
                        ))}
                      </div>
                    </div>
                  ) : null;
                })()}

                {/* CTA: yellow pill matching top */}
                {n.country !== "Dubai" && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={openCurriculum}
                      className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest border border-primary transition-colors"
                    >
                      View Curriculum
                      <span className="font-display text-sm group-hover:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                )}


              </div>
            </article>

            {/* Underneath page: curriculum (revealed after the page sweep) */}
            <article
              className={`col-start-1 row-start-1 border border-border bg-background z-10 min-w-0 transition-opacity duration-300 ${
                flipped
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 max-h-0 overflow-hidden pointer-events-none hidden"
              }`}
              aria-hidden={!flipped}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 sm:px-8 py-3 sm:py-4 border-b border-border bg-background/95 backdrop-blur">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-1">
                    Curriculum · {n.term}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl truncate">
                    {n.country} - Full Curriculum
                  </h3>
                </div>
                <button
                  onClick={() => setFlipped(false)}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] border border-primary shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] transition-all shrink-0 min-h-[40px]"
                >
                  <span className="font-display text-lg group-hover:-translate-x-1 transition-transform">←</span>
                  Back
                </button>
              </div>
              <div className="pb-12">
                {term && (
                  <div>
                    <div className="px-4 sm:px-12 lg:px-16 pt-6 sm:pt-8">

                      {/* Tabs */}
                      {tabs.length > 0 && (
                        <div className="mb-8 sm:mb-10 border-b border-border">
                          <div className="flex flex-nowrap -mb-px overflow-x-auto">
                            {tabs.map((tab) => {
                              const isActive = activeTab === tab.id || (!tabs.find((t) => t.id === activeTab) && tab.id === tabs[0].id);
                              return (
                                <button
                                  key={tab.id}
                                  onClick={() => setActiveTab(tab.id)}
                                  className={`relative flex-shrink-0 px-3 sm:px-5 py-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] transition-colors text-left leading-tight min-h-[44px] whitespace-nowrap ${
                                    isActive
                                      ? "text-ink bg-paper"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {tab.label}
                                  {isActive && (
                                    <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Tab Panels */}
                      <div className="min-h-[300px] animate-fade-in" key={activeTab}>
                        {/* In Class */}
                        {(activeTab === "in-class" || (!tabs.find((t) => t.id === activeTab) && tabs[0]?.id === "in-class")) && term.academic.items.length > 0 && (
                          <div>
                            {term.academic.hero && (
                              <div className="relative aspect-[21/9] overflow-hidden mb-8 group">
                                <img
                                  src={term.academic.hero.img}
                                  alt={term.academic.hero.title}
                                  loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                                    {term.academic.hero.chip}
                                  </div>
                                  <h5 className="font-display text-xl sm:text-2xl leading-tight text-foreground max-w-2xl"
                                    dangerouslySetInnerHTML={{ __html: term.academic.hero.title }} />
                                </div>
                              </div>
                            )}
                            <div className="grid sm:grid-cols-2 gap-3">
                              {term.academic.items.map((item, idx) => (
                                <div
                                  key={`ac-${idx}`}
                                  className="group relative border border-border bg-secondary/20 p-5 hover:border-primary hover:bg-secondary/40 transition-all"
                                >
                                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-2">
                                    {item.code || item.num}
                                  </div>
                                  <div className="font-display text-base sm:text-lg leading-snug tracking-tight">
                                    {item.title}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Out Class */}
                        {activeTab === "out-class" && (term.outclass.items.length > 0 || (term.outclass.summary && term.outclass.summary.length > 0)) && (
                          <div>
                            {term.outclass.hero && (
                              <div className="relative aspect-[21/9] overflow-hidden mb-8 group">
                                <img
                                  src={term.outclass.hero.img}
                                  alt={term.outclass.hero.title}
                                  loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                                    {term.outclass.hero.chip}
                                  </div>
                                  <h5 className="font-display text-xl sm:text-2xl leading-tight text-foreground max-w-2xl">
                                    {term.outclass.hero.title}
                                  </h5>
                                </div>
                              </div>
                            )}
                            {term.outclass.summary && term.outclass.summary.length > 0 ? (
                              <div className="max-w-3xl">
                                <p className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: term.outclass.hero.body }} />
                                <div className="flex flex-col gap-4">
                                  {term.outclass.summary.map((s, i) => (
                                    <p key={i} className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                                      {s}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="grid sm:grid-cols-2 gap-3">
                                {term.outclass.items.length === 1 ? (
                                  term.outclass.items[0].rows.map((r, idx) => (
                                    <div
                                      key={`oc-${idx}`}
                                      className="group relative border border-border bg-secondary/20 p-5 hover:border-primary hover:bg-secondary/40 transition-all"
                                    >
                                      <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-2">
                                        {String(idx + 1).padStart(2, "0")}
                                      </div>
                                      <div className="font-display text-base sm:text-lg leading-snug tracking-tight">
                                        {r}
                                      </div>
                                    </div>
                                  ))
                                ) : (
                                  term.outclass.items.map((item, idx) => (
                                    <div
                                      key={`oc-${idx}`}
                                      className="group relative border border-border bg-secondary/20 p-5 hover:border-primary hover:bg-secondary/40 transition-all"
                                    >
                                      <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-2">
                                        {item.num}
                                      </div>
                                      <div className="font-display text-base sm:text-lg leading-snug tracking-tight">
                                        {item.title}
                                      </div>
                                    </div>
                                  ))
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Business Immersions - image cards */}
                        {activeTab === "business" && term.immersions && (
                          <div>
                            <div className="mb-8 max-w-2xl">
                              <h5 className="font-display text-base sm:text-lg md:text-xl leading-snug text-balance mb-3">
                                {term.immersions.header.title}
                              </h5>
                              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {term.immersions.header.body}
                              </p>
                            </div>
                            {term.immersions.cards.length > 0 && (
                              <div className="grid sm:grid-cols-2 gap-4">
                                {term.immersions.cards.map((card) => (
                                  <div
                                    key={card.title}
                                    className="group relative overflow-hidden border border-border bg-background hover:border-primary transition-all"
                                  >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                      <img
                                        src={card.img}
                                        alt={card.title}
                                        loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                                      <div className="absolute top-3 left-3">
                                        <span className="tag-pill">
                                          {card.cat}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="p-5">
                                      <div className="font-display text-lg leading-snug tracking-tight mb-2">
                                        {card.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                        {card.desc}
                                      </p>
                                      {card.logos && (
                                        <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                                          {splitBrands(card.logos).map((brand) => (
                                            <BrandLogoTile key={brand} name={brand} />
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            {term.immersions.header.note && (
                              <div className="mt-8 p-5 border-l-2 border-primary bg-secondary/20">
                                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                                  {term.immersions.header.note.title}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {term.immersions.header.note.desc}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Faculty - headshots grid */}
                        {activeTab === "faculty" && term.faculty && term.faculty.length > 0 && (
                          <div>
                            <div className="mb-8 max-w-2xl">
                              <div className="tag-pill mb-4">{term.id === 0 ? "Masters' Union · Faculty" : term.id === 2 ? "CUHK, Hong Kong · Faculty" : "Imperial College London · Faculty"}</div>
                              <h5 className="font-display text-base sm:text-lg md:text-xl leading-snug text-balance mb-3">
                                Learn from <em className="italic not-italic text-primary">world-class faculty.</em>
                              </h5>
                              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {term.id === 0
                                  ? "Masters' Union faculty - practitioners and academics across finance, marketing, strategy, product and operations - building India's next generation of founders and leaders."
                                  : term.id === 2
                                  ? "CUHK professors and practitioners - leaders in economics, innovation, analytics, decisions and technology - shaping how business is taught in Asia."
                                  : "Eight Imperial professors and practitioners - leaders in finance, AI, marketing, strategy and entrepreneurship - shaping how global business is taught."}
                              </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                              {term.faculty.map((f) => (
                                <div key={f.name} className="flex flex-col items-center text-center group">
                                  <div className="relative mb-3">
                                    <div className="w-[96px] h-[96px] rounded-full p-[2px] bg-gradient-to-br from-primary to-primary/40 transition-all duration-300">
                                      <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                        <img src={f.photo} alt={f.name} loading="lazy" decoding="async" className={"w-full h-full object-cover " + (term.id === 0 ? "object-[50%_10%] scale-105" : "object-center")} />
                                      </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md bg-primary" />
                                  </div>
                                  <p className="text-sm font-semibold text-foreground leading-tight">{f.name}</p>
                                  <p className="text-[11px] text-muted-foreground leading-snug mt-1">{f.designation}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Cultural - magazine-style image collage */}
                        {activeTab === "cultural" && term.cultural && (
                          <div>
                            {term.cultural.imgs && term.cultural.imgs.length >= 2 && (
                              <div className="grid grid-cols-3 gap-3 mb-8 h-64 sm:h-80">
                                <div className="col-span-2 relative overflow-hidden group">
                                  <img
                                    src={term.cultural.imgs[0]}
                                    alt=""
                                    loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                </div>
                                <div className="relative overflow-hidden group">
                                  <img
                                    src={term.cultural.imgs[1]}
                                    alt=""
                                    loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                            )}
                            <div className="mb-8 max-w-2xl">
                              <h5 className="font-display text-base sm:text-lg md:text-xl leading-snug text-balance mb-3">
                                {term.cultural.title}
                              </h5>
                              <p
                                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: term.cultural.body }}
                              />
                            </div>
                            {term.cultural.cards.length > 0 && (
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {term.cultural.cards.map((card) => (
                                  <div
                                    key={card.name}
                                    className="border border-border bg-secondary/20 p-5 hover:border-primary hover:bg-secondary/40 transition-all"
                                  >
                                    <div className="font-display text-base sm:text-lg leading-snug tracking-tight mb-2">
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

