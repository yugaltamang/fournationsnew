import { useState } from "react";

const curriculum = [
  {
    code: "FIFI",
    title: "Finance & FinTech",
    q: "How do you make capital decisions across four currencies and three regulators?",
    modules: [
      "Read your numbers · spot hidden profit leaks",
      "Raise capital · pitch to global VCs",
      "Cross-border finance · DeFi & digital assets",
      "Capital markets exposure at HKEX & London",
    ],
    geo: "India · Hong Kong · London",
    outcome: "Run a global P&L with conviction.",
  },
  {
    code: "PRDT",
    title: "Product, Tech & AI",
    q: "How do you build products that work in Mumbai, Shenzhen and Soho?",
    modules: [
      "Statistics for data-driven decisions",
      "Design Thinking for cross-cultural UX",
      "No-code product builds · AI automation",
      "Hardware prototyping · Maker's Lab",
      "Imperial College tech & innovation modules",
    ],
    geo: "India · London",
    outcome: "Ship product that travels across markets.",
  },
  {
    code: "SAMA",
    title: "Sales, Marketing & Brand",
    q: "How do you win customers across four cultures without losing your brand?",
    modules: [
      "Microeconomics for market reading",
      "Win your first 100 customers",
      "Digital algorithms & ROI mastery",
      "Luxury & brand strategy in London",
      "MENA & Asia GTM playbooks",
    ],
    geo: "India · London · Dubai",
    outcome: "Localize a brand without diluting it.",
  },
  {
    code: "OPSY",
    title: "Operations & Global Supply",
    q: "How do you build supply chains that survive geopolitics?",
    modules: [
      "Power BI dashboards · KPIs & KRAs",
      "Production at scale · India + China supply",
      "GBA sprint · Shenzhen hardware ecosystem",
      "Resilient cross-border logistics",
    ],
    geo: "India · Hong Kong",
    outcome: "Architect supply chains across continents.",
  },
  {
    code: "LEAD",
    title: "Leadership & Cross-Cultural Execution",
    q: "How do you lead teams across four cultures and twelve time zones?",
    modules: [
      "Organizational behaviour · team dynamics",
      "Cross-cultural negotiation",
      "Networking across global ecosystems",
      "Scaling yourself with the company",
      "CXO sessions in every nation",
    ],
    geo: "All 4 Nations",
    outcome: "Lead anywhere — fluently.",
  },
];

const Curriculum = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="curriculum" className="py-32 bg-secondary/20 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="tag-pill mb-6">◉ The Curriculum</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-6 text-balance">
              5 muscles.<br />
              <em className="italic text-primary not-italic">Built</em> across <em className="italic">4 markets.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every module is taught where it matters most. Finance gets sharper at HKEX. Brand gets sharper in London. Operations get sharper across India and the GBA. You don't read about global business. You practice it on the ground.
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
              return (
                <div key={c.code} className={`border ${isOpen ? 'border-primary bg-background' : 'border-border bg-background/40'} transition-colors`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-6 p-6 text-left">
                    <div className="flex items-center gap-6 min-w-0">
                      <span className="font-mono text-xs text-primary shrink-0">/{String(i + 1).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.code}</div>
                        <h3 className="font-display text-2xl md:text-3xl mt-0.5">{c.title}</h3>
                      </div>
                    </div>
                    <span className={`font-display text-3xl shrink-0 transition-transform ${isOpen ? 'rotate-45 text-primary' : ''}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-8 pt-2 animate-fade-up">
                      <p className="font-display italic text-xl text-primary mb-6">"{c.q}"</p>
                      <ul className="space-y-2 mb-6">
                        {c.modules.map((m) => (
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
