import { useState } from "react";

const curriculum = [
  {
    code: "FIFI",
    title: "Finance & FinTech",
    q: "How do you make your venture financially viable from day one?",
    modules: [
      "Read your numbers · spot hidden profit leaks",
      "Raise startup capital · pitch to VCs",
      "Leverage DeFi & Crypto in business",
      "CXO: Designing financially resilient companies",
    ],
    immersion: "ITC · Dixon · Liberty Footwear · Razorpay",
    hours: 14,
  },
  {
    code: "PRDT",
    title: "Product, Tech & AI",
    q: "How do you build products intelligently from scratch?",
    modules: [
      "Statistics for data-driven decisions",
      "Design Thinking for intuitive UX",
      "Build smart apps without code",
      "Prototype hardware at the Maker's Lab",
      "AI automation to scale rapidly",
    ],
    immersion: "Honda · Addverb · Zoho · Yellow.ai",
    hours: 22,
  },
  {
    code: "SAMA",
    title: "Sales & Marketing",
    q: "How do you win your first customers and validate demand?",
    modules: [
      "Microeconomics for market reading",
      "Marketing 101 & winning GTM",
      "Win your first 100 customers",
      "Digital algorithms · ROI mastery",
      "Sales without selling · Branding & Pricing",
    ],
    immersion: "Sonalika · Blue Tokai · Mamaearth · Nykaa · Lenskart",
    hours: 46,
  },
  {
    code: "OPSY",
    title: "Operations & Systems",
    q: "How do you create operational clarity early?",
    modules: [
      "Power BI dashboards in 10 minutes",
      "KPI & KRA for org alignment",
      "Production & manufacturing at scale",
      "CXO: Resilient supply chains",
    ],
    immersion: "Dixon · NIVEA · Delhivery · Flipkart",
    hours: 12,
  },
  {
    code: "LEAD",
    title: "Leadership & Execution",
    q: "How do you move from idea to traction fast?",
    modules: [
      "Organizational behaviour · team dynamics",
      "Networking effortlessly",
      "Handling pressure · prioritization",
      "People decisions as competitive advantage",
      "CXO: Scaling yourself with the company",
    ],
    immersion: "Parliament · Ola · Urban Company · Zomato",
    hours: 14,
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
              5 concentrations.<br />
              <em className="italic text-primary not-italic">Every</em> module begins with <em className="italic">"How to…"</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No abstract frameworks. No 200-page case studies. Every session ends with you having shipped something — a pitch deck, a Power BI dashboard, a no-code app, a brand.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div>
                <div className="font-display text-4xl text-primary">108</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">India hours</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">258+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">Total contact hours</div>
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
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Industry Immersion</div>
                          <div className="text-sm">{c.immersion}</div>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Contact Hours</div>
                          <div className="font-display text-2xl text-primary">{c.hours}h</div>
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
