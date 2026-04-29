import { useState } from "react";

type TabKey = "inClass" | "outClass" | "immersions" | "cultural";

interface Concentration {
  code: string;
  title: string;
  q: string;
  geo: string;
  outcome: string;
  tabs: Record<TabKey, { heading: string; items: string[] }>;
}

const curriculum: Concentration[] = [
  {
    code: "FIFI",
    title: "Finance & FinTech",
    q: "How do you make capital decisions across four currencies and three regulators?",
    geo: "India · Hong Kong · London",
    outcome: "Run a global P&L with conviction.",
    tabs: {
      inClass: {
        heading: "Core academic spine",
        items: [
          "Read your numbers · spot hidden profit leaks",
          "Corporate finance · capital structure & valuation",
          "DeFi, digital assets & cross-border payments",
          "Capital markets electives at CUHK & Imperial",
        ],
      },
      outClass: {
        heading: "Build a live finance asset",
        items: [
          "Live deal sprint — diligence a real Asia-listed company",
          "Pitch a fund thesis to global VCs in London",
          "Stress-test a startup P&L with operating CFOs",
        ],
      },
      immersions: {
        heading: "Inside the institutions",
        items: [
          "HKEX trading floor · HSBC Asia treasury",
          "London — Barclays, PE & VC houses",
          "DIFC family offices & sovereign capital (optional)",
        ],
      },
      cultural: {
        heading: "Read the room",
        items: [
          "How Asian capital allocates differently from Western capital",
          "Negotiation playbooks across HK · London · Mumbai",
          "Networking nights with operators in every nation",
        ],
      },
    },
  },
  {
    code: "PRDT",
    title: "Product, Tech & AI",
    q: "How do you build products that work in Mumbai, Shenzhen and Soho?",
    geo: "India · Hong Kong · London",
    outcome: "Ship product that travels across markets.",
    tabs: {
      inClass: {
        heading: "Core academic spine",
        items: [
          "Statistics & experimentation for product decisions",
          "Design Thinking for cross-cultural UX",
          "Applied AI · agents, automation, evaluation",
          "Imperial College tech & innovation electives",
        ],
      },
      outClass: {
        heading: "Ship something real",
        items: [
          "0→1 build sprint — launch an AI product in 6 weeks",
          "Hardware prototype at the Maker's Lab",
          "Cross-border product teardown · India vs GBA vs UK",
        ],
      },
      immersions: {
        heading: "Inside the builders",
        items: [
          "Shenzhen GBA hardware sprint",
          "ByteDance, Tencent & Alibaba product orgs",
          "London deep-tech labs & creator-tech studios",
        ],
      },
      cultural: {
        heading: "Read the user",
        items: [
          "How users in 4 markets actually behave online",
          "Localising UX without rebuilding the product",
          "Working with engineering teams across time zones",
        ],
      },
    },
  },
  {
    code: "SAMA",
    title: "Sales, Marketing & Brand",
    q: "How do you win customers across four cultures without losing your brand?",
    geo: "India · London · Dubai",
    outcome: "Localize a brand without diluting it.",
    tabs: {
      inClass: {
        heading: "Core academic spine",
        items: [
          "Microeconomics for market reading",
          "Performance marketing · algorithms & ROI",
          "Luxury & brand strategy (London module)",
          "GTM frameworks for emerging markets",
        ],
      },
      outClass: {
        heading: "Win your first 100 customers",
        items: [
          "Launch a live D2C brand in India",
          "Creator challenge — build & monetise an audience",
          "Cross-border GTM playbook for Asia & MENA",
        ],
      },
      immersions: {
        heading: "Inside the brand houses",
        items: [
          "Burberry, Saatchi & Saatchi, WPP in London",
          "Nykaa, Lenskart, Blue Tokai in India",
          "MENA family-run conglomerates (Dubai)",
        ],
      },
      cultural: {
        heading: "Read the consumer",
        items: [
          "What luxury means in London vs Dubai vs Delhi",
          "Storytelling across high- and low-context cultures",
          "Building trust as a foreign brand",
        ],
      },
    },
  },
  {
    code: "OPSY",
    title: "Operations & Global Supply",
    q: "How do you build supply chains that survive geopolitics?",
    geo: "India · Hong Kong",
    outcome: "Architect supply chains across continents.",
    tabs: {
      inClass: {
        heading: "Core academic spine",
        items: [
          "Power BI dashboards · KPIs & KRAs",
          "Production at scale · India + China supply",
          "Resilient cross-border logistics",
          "Procurement & supplier strategy",
        ],
      },
      outClass: {
        heading: "Operate something real",
        items: [
          "Factory-floor diagnostic with an Indian manufacturer",
          "GBA sprint — design a Shenzhen-to-Delhi supply line",
          "Run an ops war-room simulation with live constraints",
        ],
      },
      immersions: {
        heading: "Inside the factories",
        items: [
          "ITC, Dixon, Sonalika, Addverb plant visits",
          "Shenzhen hardware ecosystem & contract manufacturers",
          "Hong Kong port & logistics operators",
        ],
      },
      cultural: {
        heading: "Read the system",
        items: [
          "How geopolitics actually moves supply chains",
          "Working with Chinese and Indian shop floors",
          "Compliance & ESG across three jurisdictions",
        ],
      },
    },
  },
  {
    code: "LEAD",
    title: "Leadership & Cross-Cultural Execution",
    q: "How do you lead teams across four cultures and twelve time zones?",
    geo: "All 4 Nations",
    outcome: "Lead anywhere — fluently.",
    tabs: {
      inClass: {
        heading: "Core academic spine",
        items: [
          "Organisational behaviour · team dynamics",
          "Cross-cultural negotiation",
          "Personal leadership & decision-making under pressure",
          "Scaling yourself with the company",
        ],
      },
      outClass: {
        heading: "Lead something real",
        items: [
          "Run a cross-country cohort project end-to-end",
          "Coach-led 1:1 leadership track across 9 months",
          "Board-style review of your own venture in London",
        ],
      },
      immersions: {
        heading: "Inside the operators",
        items: [
          "CXO firesides in every nation",
          "Founder dinners with India's unicorn builders",
          "Family-office leadership sessions in DIFC",
        ],
      },
      cultural: {
        heading: "Read the people",
        items: [
          "How feedback works in Asia vs UK vs MENA",
          "Building trust as a young leader abroad",
          "Lifelong network across 4 alumni ecosystems",
        ],
      },
    },
  },
];

const tabMeta: { key: TabKey; label: string; sub: string }[] = [
  { key: "inClass", label: "In Class", sub: "Academic spine" },
  { key: "outClass", label: "Out Class", sub: "Live builds" },
  { key: "immersions", label: "Business Immersions", sub: "On-ground access" },
  { key: "cultural", label: "Cultural Immersion", sub: "Read the room" },
];

const Curriculum = () => {
  const [open, setOpen] = useState(0);
  const [activeTab, setActiveTab] = useState<Record<number, TabKey>>({});

  return (
    <section id="curriculum" className="py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="tag-pill mb-4 sm:mb-6">◉ The Curriculum</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6 text-balance">
              5 muscles.<br />
              <em className="italic text-primary not-italic">Built</em> across <em className="italic">4 markets.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every module is taught where it matters most. Finance gets sharper at HKEX. Brand gets sharper in London. Operations get sharper across India and the GBA. You don't read about global business — you practice it on the ground, in class and out.
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

          <div className="lg:col-span-8 space-y-3">
            {curriculum.map((c, i) => {
              const isOpen = open === i;
              const tab = activeTab[i] ?? "inClass";
              const tabContent = c.tabs[tab];
              return (
                <div key={c.code} className={`border ${isOpen ? 'border-primary bg-background' : 'border-border bg-background/40'} transition-colors`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 text-left">
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span className="font-mono text-xs text-primary shrink-0 hidden sm:inline">/{String(i + 1).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.code}</div>
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl mt-0.5">{c.title}</h3>
                      </div>
                    </div>
                    <span className={`font-display text-2xl sm:text-3xl shrink-0 transition-transform ${isOpen ? 'rotate-45 text-primary' : ''}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-6 sm:pb-8 pt-2 animate-fade-up">
                      <p className="font-display italic text-lg sm:text-xl text-primary mb-6">"{c.q}"</p>

                      {/* Tabs */}
                      <div className="flex flex-wrap gap-1 border-b border-border mb-6">
                        {tabMeta.map((t) => {
                          const active = tab === t.key;
                          return (
                            <button
                              key={t.key}
                              onClick={() => setActiveTab((prev) => ({ ...prev, [i]: t.key }))}
                              className={`relative px-3 sm:px-4 py-2.5 text-left transition-colors ${active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                              <div className="font-display text-sm sm:text-base leading-tight">{t.label}</div>
                              <div className="font-mono text-[9px] uppercase tracking-widest mt-0.5 opacity-70">{t.sub}</div>
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
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Taught Across</div>
                          <div className="text-sm">{c.geo}</div>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Outcome</div>
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
    </section>
  );
};

export default Curriculum;
