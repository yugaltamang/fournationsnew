import { useState } from "react";

type TabKey = "inClass" | "outClass" | "immersions" | "cultural";

interface Module {
  code: string;
  title: string;
  q: string;
  outcome: string;
  tabs: Record<TabKey, { heading: string; items: string[] }>;
}

interface Geography {
  key: string;
  country: string;
  flag: string;
  city: string;
  term: string;
  partner: string;
  intro: string;
  modules: Module[];
}

const geographies: Geography[] = [
  {
    key: "india",
    country: "India",
    flag: "🇮🇳",
    city: "Delhi NCR · Gurugram",
    term: "Term 1 · Nov – Jan",
    partner: "Masters' Union Campus",
    intro:
      "Your operating base. Build the muscle of running a venture end-to-end — finance, product, GTM, ops & leadership — with India's top founders and operators in the room.",
    modules: [
      {
        code: "FIFI",
        title: "Finance & FinTech",
        q: "How do you read a P&L like an operator, not a student?",
        outcome: "Run a venture P&L with conviction.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Read your numbers · spot hidden profit leaks",
              "Corporate finance · capital structure & valuation",
              "Indian capital markets · public & private",
              "FinTech rails · UPI, lending, digital assets",
            ],
          },
          outClass: {
            heading: "Build a live finance asset",
            items: [
              "Stress-test a startup P&L with operating CFOs",
              "Diligence a real Indian growth-stage company",
              "Pitch a fund thesis to India VCs",
            ],
          },
          immersions: {
            heading: "Inside the institutions",
            items: [
              "Razorpay, Zerodha & leading Indian FinTechs",
              "Bulge-bracket banking floors in BKC & Gurugram",
              "Family offices & PE houses in Delhi NCR",
            ],
          },
          cultural: {
            heading: "Read the room",
            items: [
              "How Indian capital actually allocates",
              "Negotiation playbooks with Indian founders",
              "Networking nights with operators across NCR",
            ],
          },
        },
      },
      {
        code: "PRDT",
        title: "Product, Tech & AI",
        q: "How do you ship product for the world's largest internet market?",
        outcome: "Launch a product that scales in India.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Statistics & experimentation for product decisions",
              "Design Thinking for Indian users",
              "Applied AI · agents, automation, evaluation",
              "Product analytics with Power BI & SQL",
            ],
          },
          outClass: {
            heading: "Ship something real",
            items: [
              "0→1 build sprint — launch an AI product in 6 weeks",
              "Hardware prototype at the Maker's Lab",
              "Run user research with real Bharat users",
            ],
          },
          immersions: {
            heading: "Inside the builders",
            items: [
              "Zomato, Nykaa, Lenskart product orgs",
              "Startup studios & accelerators across NCR",
              "Founder-led teardowns of live Indian apps",
            ],
          },
          cultural: {
            heading: "Read the user",
            items: [
              "How Tier 1 vs Tier 2/3 users actually behave",
              "Vernacular UX & multi-language design",
              "Trust & payments behaviour in India",
            ],
          },
        },
      },
      {
        code: "SAMA",
        title: "Sales, Marketing & Brand",
        q: "How do you build a D2C brand from scratch in India?",
        outcome: "Win your first 100 customers.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Microeconomics for market reading",
              "Performance marketing · Meta, Google, Amazon",
              "GTM frameworks for emerging markets",
              "Brand positioning & storytelling",
            ],
          },
          outClass: {
            heading: "Win your first 100 customers",
            items: [
              "Launch a live D2C brand in India",
              "Creator challenge — build & monetise an audience",
              "Run a paid-media sprint with real budget",
            ],
          },
          immersions: {
            heading: "Inside the brand houses",
            items: [
              "Nykaa, Lenskart, Blue Tokai brand teams",
              "Indian creator economy — agencies & talent",
              "Retail walk-throughs across NCR",
            ],
          },
          cultural: {
            heading: "Read the consumer",
            items: [
              "What 'premium' means in Delhi vs Mumbai vs Bharat",
              "Storytelling across Hindi & regional audiences",
              "Building trust as a new-age Indian brand",
            ],
          },
        },
      },
      {
        code: "OPSY",
        title: "Operations & Supply",
        q: "How do you build supply chains that survive India's complexity?",
        outcome: "Operate a factory floor with confidence.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Power BI dashboards · KPIs & KRAs",
              "Production at scale · Indian manufacturing",
              "Procurement & supplier strategy",
              "Logistics & last-mile in India",
            ],
          },
          outClass: {
            heading: "Operate something real",
            items: [
              "Factory-floor diagnostic with an Indian manufacturer",
              "Run an ops war-room simulation",
              "Design a Tier 2/3 distribution playbook",
            ],
          },
          immersions: {
            heading: "Inside the factories",
            items: [
              "ITC, Dixon, Sonalika, Addverb plant visits",
              "Warehousing & 3PL operators in NCR",
              "NIVEA & FMCG manufacturing lines",
            ],
          },
          cultural: {
            heading: "Read the system",
            items: [
              "Working with Indian shop floors & labour",
              "Compliance, GST & state-by-state regulation",
              "ESG & sustainability in Indian ops",
            ],
          },
        },
      },
      {
        code: "LEAD",
        title: "Leadership Foundations",
        q: "How do you lead before you have authority?",
        outcome: "Lead a team from day one.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Organisational behaviour · team dynamics",
              "Personal leadership & decision-making",
              "Communication & executive presence",
              "First-principles problem solving",
            ],
          },
          outClass: {
            heading: "Lead something real",
            items: [
              "Run a cohort project end-to-end",
              "Coach-led 1:1 leadership track",
              "Lead a cross-functional sprint team",
            ],
          },
          immersions: {
            heading: "Inside the operators",
            items: [
              "CXO firesides with Indian unicorn founders",
              "Founder dinners across Delhi NCR",
              "Boardroom shadowing with Indian CEOs",
            ],
          },
          cultural: {
            heading: "Read the people",
            items: [
              "How feedback works in Indian orgs",
              "Hierarchy, authority & influence in India",
              "Building your first professional network",
            ],
          },
        },
      },
    ],
  },
  {
    key: "hk",
    country: "Hong Kong",
    flag: "🇭🇰",
    city: "Central · Greater Bay Area",
    term: "Term 2 · Mar – May",
    partner: "CUHK Business School",
    intro:
      "Asia's capital gateway. Decode how Asian capital, manufacturing and platforms actually move — from CUHK classrooms to HKEX trading floors and Shenzhen's hardware ecosystem.",
    modules: [
      {
        code: "FIFI",
        title: "Global Finance & Asian Capital",
        q: "How does Asian capital allocate differently from Western capital?",
        outcome: "Navigate Asian capital markets & cross-border deals.",
        tabs: {
          inClass: {
            heading: "Core academic spine at CUHK",
            items: [
              "Asian capital markets electives at CUHK",
              "Cross-border M&A & deal structuring",
              "DeFi, digital assets & HK's crypto framework",
              "Wealth management & private banking in Asia",
            ],
          },
          outClass: {
            heading: "Build a live finance asset",
            items: [
              "Live deal sprint — diligence an HK-listed company",
              "Pitch an Asia-focused fund thesis",
              "Trading-desk simulation with real Asia data",
            ],
          },
          immersions: {
            heading: "Inside the institutions",
            items: [
              "HKEX trading floor visit",
              "HSBC Asia treasury & global banking",
              "Family offices & sovereign capital in Central",
            ],
          },
          cultural: {
            heading: "Read the room",
            items: [
              "How relationships drive Asian deal-making",
              "Negotiation across HK · Mainland · Western desks",
              "Networking nights in Central",
            ],
          },
        },
      },
      {
        code: "PRDT",
        title: "Product & Hardware (GBA)",
        q: "How do you build hardware-software products at Shenzhen speed?",
        outcome: "Ship a hardware-backed product idea.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Hardware-software co-design",
              "Platform economics in Asia",
              "Applied AI in Asian super-apps",
              "Cross-border product strategy",
            ],
          },
          outClass: {
            heading: "Ship something real",
            items: [
              "Shenzhen hardware prototype sprint",
              "Cross-border product teardown · India vs GBA",
              "Build an Asia-first AI workflow",
            ],
          },
          immersions: {
            heading: "Inside the builders",
            items: [
              "Shenzhen GBA hardware sprint",
              "ByteDance, Tencent & Alibaba product orgs",
              "Contract manufacturers & component markets",
            ],
          },
          cultural: {
            heading: "Read the user",
            items: [
              "How Mainland vs HK users behave online",
              "Super-app behaviour & WeChat economy",
              "Working with Mainland engineering teams",
            ],
          },
        },
      },
      {
        code: "OPSY",
        title: "Supply Chain & Geopolitics",
        q: "How do you architect supply chains across India + China?",
        outcome: "Design a Shenzhen-to-Delhi supply line.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Resilient cross-border logistics",
              "China + India dual-sourcing strategy",
              "Geopolitics & trade flows",
              "Port economics & global shipping",
            ],
          },
          outClass: {
            heading: "Operate something real",
            items: [
              "GBA sprint — design a Shenzhen-to-Delhi supply line",
              "Run an ops war-room with live constraints",
              "Map a real product's global supply chain",
            ],
          },
          immersions: {
            heading: "Inside the factories",
            items: [
              "Shenzhen hardware ecosystem",
              "Hong Kong port & logistics operators",
              "Cross-border customs & freight forwarders",
            ],
          },
          cultural: {
            heading: "Read the system",
            items: [
              "How geopolitics actually moves supply chains",
              "Working with Chinese shop floors",
              "Compliance across HK · Mainland · India",
            ],
          },
        },
      },
      {
        code: "LEAD",
        title: "Leading in Asia",
        q: "How do you lead and influence in high-context Asian cultures?",
        outcome: "Operate effectively across Asian teams.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Cross-cultural negotiation in Asia",
              "Confucian hierarchy & modern leadership",
              "Decision-making under regulatory ambiguity",
              "Stakeholder mapping across HK & Mainland",
            ],
          },
          outClass: {
            heading: "Lead something real",
            items: [
              "Run a GBA cohort project across borders",
              "Coach-led 1:1 leadership track continues",
              "Cross-cultural team simulation",
            ],
          },
          immersions: {
            heading: "Inside the operators",
            items: [
              "CXO firesides at CUHK & Central",
              "Founder dinners with HK & Mainland operators",
              "Boardroom shadowing in Asian conglomerates",
            ],
          },
          cultural: {
            heading: "Read the people",
            items: [
              "How feedback works in Asia vs the West",
              "Face, harmony & getting things done",
              "Building trust as a foreign operator in Asia",
            ],
          },
        },
      },
    ],
  },
  {
    key: "london",
    country: "London",
    flag: "🇬🇧",
    city: "London · Imperial College",
    term: "Term 3 · Jun – Jul",
    partner: "Imperial College London",
    intro:
      "Command global capital. Imperial College London — innovation, deep tech and entrepreneurship at one of the world's top business schools. Decode PE/VC, M&A, luxury and creator playbooks shaping the West.",
    modules: [
      {
        code: "FIFI",
        title: "Global Capital & PE/VC",
        q: "How do you raise and deploy capital at global standards?",
        outcome: "Pitch, raise and scale at global capital standards.",
        tabs: {
          inClass: {
            heading: "Core academic spine at Imperial",
            items: [
              "Capital markets electives at Imperial",
              "PE / VC frameworks & deal structuring",
              "M&A · LBOs · growth equity",
              "Risk, derivatives & global macro",
            ],
          },
          outClass: {
            heading: "Build a live finance asset",
            items: [
              "Pitch a fund thesis to global VCs in London",
              "Diligence a UK growth-stage company",
              "Board-style review of your own venture",
            ],
          },
          immersions: {
            heading: "Inside the institutions",
            items: [
              "Barclays, PE & VC houses in Mayfair",
              "London Stock Exchange & City institutions",
              "Sovereign & pension fund offices",
            ],
          },
          cultural: {
            heading: "Read the room",
            items: [
              "How Western LPs actually evaluate funds",
              "Negotiation playbooks in London capital",
              "Founder–investor dynamics in the UK",
            ],
          },
        },
      },
      {
        code: "PRDT",
        title: "Deep Tech & Innovation",
        q: "How do you commercialise deep tech & frontier R&D?",
        outcome: "Take research-grade tech to market.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Imperial tech & innovation electives",
              "Deep tech commercialisation",
              "AI policy & responsible deployment",
              "IP strategy for global ventures",
            ],
          },
          outClass: {
            heading: "Ship something real",
            items: [
              "Deep tech build sprint with Imperial labs",
              "Creator-tech studio collaboration",
              "Pitch a frontier-tech venture in London",
            ],
          },
          immersions: {
            heading: "Inside the builders",
            items: [
              "London deep-tech labs & Imperial ventures",
              "Creator-tech studios in Soho",
              "AI & climate-tech startups across the UK",
            ],
          },
          cultural: {
            heading: "Read the user",
            items: [
              "How UK & EU users adopt new tech",
              "Privacy, GDPR & product design",
              "Working with European engineering teams",
            ],
          },
        },
      },
      {
        code: "SAMA",
        title: "Luxury & Brand Strategy",
        q: "How do you build and protect a luxury brand?",
        outcome: "Localise a brand without diluting it.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Luxury & brand strategy (London module)",
              "Heritage, scarcity & price architecture",
              "Creator economy & cultural capital",
              "Cross-border brand portfolios",
            ],
          },
          outClass: {
            heading: "Win in a Western market",
            items: [
              "Build a UK launch plan for an Indian brand",
              "Creator challenge — Western audience build",
              "Brand audit for a real luxury house",
            ],
          },
          immersions: {
            heading: "Inside the brand houses",
            items: [
              "Burberry, Saatchi & Saatchi, WPP",
              "Soho creative agencies & studios",
              "Mayfair luxury retail walk-throughs",
            ],
          },
          cultural: {
            heading: "Read the consumer",
            items: [
              "What luxury means in London vs Delhi",
              "Storytelling for high-context Western buyers",
              "Building trust as a foreign brand in the UK",
            ],
          },
        },
      },
      {
        code: "LEAD",
        title: "Global Leadership",
        q: "How do you lead a venture on a global stage?",
        outcome: "Operate as a globally credible founder.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Scaling yourself with the company",
              "Boardroom dynamics & governance",
              "Crisis communication & media",
              "Executive storytelling",
            ],
          },
          outClass: {
            heading: "Lead something real",
            items: [
              "Board-style review of your own venture in London",
              "Coach-led 1:1 leadership track continues",
              "Cross-cultural leadership simulation",
            ],
          },
          immersions: {
            heading: "Inside the operators",
            items: [
              "CXO firesides across London",
              "Founder dinners with UK & EU operators",
              "Boardroom shadowing in global firms",
            ],
          },
          cultural: {
            heading: "Read the people",
            items: [
              "How feedback works in the UK vs Asia",
              "British directness, restraint & power",
              "Building a global alumni network",
            ],
          },
        },
      },
    ],
  },
  {
    key: "dubai",
    country: "Dubai",
    flag: "🇦🇪",
    city: "DIFC · UAE",
    term: "Optional · 1 Week",
    partner: "Optional Immersion",
    intro:
      "Optional finale in the world's fastest-growing business hub. Inside DIFC, family offices, sovereign wealth and the founders building MENA's next wave — the bridge between Asian capital and Western markets.",
    modules: [
      {
        code: "FIFI",
        title: "MENA Capital & Family Offices",
        q: "How does family-office and sovereign capital actually deploy?",
        outcome: "Position yourself for MENA capital opportunities.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "DIFC regulatory & free-zone frameworks",
              "Family-office structures & succession",
              "Sovereign wealth & state-led investing",
              "Islamic finance fundamentals",
            ],
          },
          outClass: {
            heading: "Build a live asset",
            items: [
              "Pitch to a MENA family office",
              "Map a sovereign capital allocation thesis",
              "Diligence a UAE growth-stage company",
            ],
          },
          immersions: {
            heading: "Inside the institutions",
            items: [
              "DIFC family offices & private banks",
              "Sovereign wealth & state funds",
              "MENA founders building the next wave",
            ],
          },
          cultural: {
            heading: "Read the room",
            items: [
              "How relationships drive MENA capital",
              "Trust, religion & long-term partnerships",
              "Networking nights across DIFC",
            ],
          },
        },
      },
      {
        code: "SAMA",
        title: "MENA Markets & Brand",
        q: "How do you win consumers in the GCC?",
        outcome: "Build a GCC entry plan that actually works.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "GCC consumer psychographics",
              "Luxury & premium positioning in MENA",
              "Cross-border GTM for Asia → MENA",
              "Retail & mall economics in the Gulf",
            ],
          },
          outClass: {
            heading: "Win in MENA",
            items: [
              "Build a GCC launch plan for an Indian brand",
              "Creator collaboration with MENA talent",
              "Retail audit across Dubai's flagship malls",
            ],
          },
          immersions: {
            heading: "Inside the brand houses",
            items: [
              "MENA family-run conglomerates",
              "Luxury retail in Dubai & Abu Dhabi",
              "Regional creator agencies",
            ],
          },
          cultural: {
            heading: "Read the consumer",
            items: [
              "What luxury means in Dubai vs London",
              "Cultural sensitivity & brand safety in MENA",
              "Building trust as a foreign brand in the Gulf",
            ],
          },
        },
      },
      {
        code: "LEAD",
        title: "Global Mobility & Network",
        q: "How do you position yourself for the world's next decade?",
        outcome: "Build optionality across Asia, West & MENA.",
        tabs: {
          inClass: {
            heading: "Core academic spine",
            items: [
              "Golden visas & global mobility frameworks",
              "Building a multi-jurisdiction operator profile",
              "Lifelong network design",
              "Personal brand for global founders",
            ],
          },
          outClass: {
            heading: "Lead something real",
            items: [
              "Final board-style review of your venture",
              "Capstone leadership reflection",
              "Cross-nation cohort showcase",
            ],
          },
          immersions: {
            heading: "Inside the operators",
            items: [
              "Family-office leadership sessions in DIFC",
              "MENA founder dinners",
              "Cross-border operator roundtables",
            ],
          },
          cultural: {
            heading: "Read the people",
            items: [
              "How MENA leadership differs from Asia & West",
              "Building trust across four cultures",
              "Lifelong network across 4 alumni ecosystems",
            ],
          },
        },
      },
    ],
  },
];

const tabMeta: { key: TabKey; label: string; sub: string }[] = [
  { key: "inClass", label: "In Class", sub: "Academic spine" },
  { key: "outClass", label: "Out Class", sub: "Live builds" },
  { key: "immersions", label: "Business Immersions", sub: "On-ground access" },
  { key: "cultural", label: "Cultural Immersion", sub: "Read the room" },
];

const Curriculum = () => {
  const [geoIdx, setGeoIdx] = useState(0);
  const [open, setOpen] = useState(0);
  const [activeTab, setActiveTab] = useState<Record<string, TabKey>>({});

  const geo = geographies[geoIdx];

  const handleGeoChange = (i: number) => {
    setGeoIdx(i);
    setOpen(0);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="tag-pill mb-4 sm:mb-6">◉ The Curriculum</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6 text-balance">
              5 muscles.<br />
              <em className="italic text-primary not-italic">Built</em> across <em className="italic">4 markets.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every module is taught where it matters most. Toggle a country to see exactly what you'll study, build and experience on the ground — in class and out.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div>
                <div className="font-display text-4xl text-primary">5</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">Concentrations</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">4</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">Nations</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* Country toggle */}
            <div
              role="tablist"
              aria-label="Curriculum by country"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
            >
              {geographies.map((g, i) => {
                const isActive = i === geoIdx;
                return (
                  <button
                    key={g.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleGeoChange(i)}
                    className={`group relative border text-left p-3 sm:p-4 transition-all ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                        : "border-border bg-background/40 hover:border-foreground/40 hover:bg-background/70"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl leading-none">{g.flag}</span>
                      <span className="font-display text-base sm:text-lg leading-tight">{g.country}</span>
                    </div>
                    <div
                      className={`font-mono text-[9px] uppercase tracking-widest mt-1.5 leading-tight ${
                        isActive ? "opacity-80" : "text-muted-foreground"
                      }`}
                    >
                      {g.term}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Geography intro */}
            <div
              key={geo.key}
              className="border border-border bg-background p-5 sm:p-6 mb-6 animate-fade-up"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                <span>{geo.term}</span>
                <span className="text-muted-foreground/40">·</span>
                <span>{geo.city}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-primary">{geo.partner}</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {geo.intro}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                {geo.modules.length} concentrations · taught in {geo.country}
              </div>
            </div>

            {/* Modules accordion */}
            <div className="space-y-3">
              {geo.modules.map((c, i) => {
                const isOpen = open === i;
                const tabKey = `${geo.key}-${i}`;
                const tab = activeTab[tabKey] ?? "inClass";
                const tabContent = c.tabs[tab];
                return (
                  <div
                    key={tabKey}
                    className={`border ${isOpen ? "border-primary bg-background" : "border-border bg-background/40"} transition-colors`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 text-left"
                    >
                      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                        <span className="font-mono text-xs text-primary shrink-0 hidden sm:inline">
                          /{String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            {c.code} · {geo.country}
                          </div>
                          <h3 className="font-display text-xl sm:text-2xl md:text-3xl mt-0.5">{c.title}</h3>
                        </div>
                      </div>
                      <span
                        className={`font-display text-2xl sm:text-3xl shrink-0 transition-transform ${
                          isOpen ? "rotate-45 text-primary" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-6 pb-6 sm:pb-8 pt-2 animate-fade-up">
                        <p className="font-display italic text-lg sm:text-xl text-primary mb-6">"{c.q}"</p>

                        {/* Tabs */}
                        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-1 border-b border-border mb-6">
                          {tabMeta.map((t) => {
                            const active = tab === t.key;
                            return (
                              <button
                                key={t.key}
                                onClick={() =>
                                  setActiveTab((prev) => ({ ...prev, [tabKey]: t.key }))
                                }
                                className={`relative px-2.5 sm:px-4 py-2.5 text-left transition-colors ${
                                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <div className="font-display text-[13px] sm:text-base leading-tight">{t.label}</div>
                                <div className="font-mono text-[9px] uppercase tracking-widest mt-0.5 opacity-70 leading-tight">
                                  {t.sub}
                                </div>
                                {active && <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary" />}
                              </button>
                            );
                          })}
                        </div>

                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                          {tabContent.heading}
                        </div>
                        <ul className="space-y-2 mb-6">
                          {tabContent.items.map((m) => (
                            <li key={m} className="flex gap-3 text-foreground/80">
                              <span className="text-primary font-mono text-xs mt-1.5">▸</span>
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                              Taught In
                            </div>
                            <div className="text-sm">
                              {geo.flag} {geo.country} · {geo.partner}
                            </div>
                          </div>
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                              Outcome
                            </div>
                            <div className="font-display text-base text-primary">{c.outcome}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
