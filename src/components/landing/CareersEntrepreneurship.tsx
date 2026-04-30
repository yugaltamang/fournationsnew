const careerStats = [
  { v: "₹33.39L", l: "Average CTC" },
  { v: "₹1.28 Cr", l: "Highest CTC" },
  { v: "145+", l: "Marquee Recruiters" },
  { v: "11.2%", l: "EiR & CoS Roles" },
];

const roles = [
  "Product Manager", "Strategy Associate", "Chief of Staff",
  "Entrepreneur in Residence", "Founder's Office", "Growth Manager",
  "Business Analyst", "Consultant", "Brand Marketing", "Program Manager",
];

const recruiters = [
  "Google", "BCG", "Microsoft", "McKinsey", "Meta",
  "Bain", "Zomato", "Blinkit", "Zepto",
];

const ventureStats = [
  { v: "30+", l: "Startups Incubated" },
  { v: "₹593 Cr", l: "Total Valuation" },
  { v: "₹480 Cr", l: "Projected Revenue FY26" },
  { v: "180+", l: "Jobs Created" },
  { v: "6", l: "On Shark Tank India" },
];

const featuredVentures = [
  { name: "EIGHT", tag: "MEDIA · TECH", desc: "5M+ downloads across platforms." },
  { name: "Bullspree", tag: "FINTECH · S2 ST", desc: "India's favourite stock-market playground." },
  { name: "Nivara", tag: "D2C · LUXURY", desc: "Sustainable, accessible fine jewellery." },
  { name: "SeedsAI", tag: "AI · SAAS", desc: "Conversations into enterprise insights." },
  { name: "HookD", tag: "F&B · S5 ST", desc: "India's first ready-to-eat non-veg snacking brand." },
  { name: "Beyond Veda", tag: "WELLNESS · D2C", desc: "₹2 Cr revenue reimagining ayurveda." },
];

const CareersEntrepreneurship = () => (
  <section id="careers" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16 pb-6 border-b border-border">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6">
            <span className="w-8 h-px bg-primary" />
            <span>Careers &amp; Entrepreneurship</span>
            <span className="text-muted-foreground/50">/ Two Paths, One Cohort</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Get hired. Or get funded.{" "}
            <em className="italic text-primary not-italic">Often both.</em>
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Five graduating cohorts. 145+ recruiters. 30+ startups incubated. Whether you want a global P&amp;L role or to ship your own venture, the platform compounds for both.
          </p>
        </div>
      </div>

      {/* CAREERS */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
          <span className="w-8 h-px bg-primary" />
          <span>Career Outcomes</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-balance mb-8 max-w-3xl">
          Graduates don't just get jobs. <em className="italic text-primary not-italic">They get careers.</em>
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-8 md:mb-10">
          {careerStats.map((s) => (
            <div key={s.l} className="bg-background p-5 sm:p-6 md:p-8">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl mu-hero-gradient-text leading-none mb-2">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="mb-8 md:mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Roles graduates land</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r} className="border border-border bg-secondary/30 px-3 py-1.5 text-xs sm:text-sm text-foreground/85">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Recruiters */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">145+ recruiting companies — including</p>
          <div className="flex flex-wrap gap-2">
            {recruiters.map((r) => (
              <span key={r} className="border border-border px-3 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-foreground/80">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ENTREPRENEURSHIP */}
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
          <span className="w-8 h-px bg-primary" />
          <span>Entrepreneurship</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-balance mb-8 max-w-3xl">
          Where founders are built, <em className="italic text-primary not-italic">not just funded.</em>
        </h3>

        {/* Venture stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border mb-8 md:mb-10">
          {ventureStats.map((s) => (
            <div key={s.l} className="bg-background p-5 sm:p-6">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl mu-hero-gradient-text leading-none mb-2">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Featured ventures */}
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Featured ventures from the portfolio</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {featuredVentures.map((v) => (
            <div key={v.name} className="bg-background p-5 sm:p-6 group hover:bg-secondary/40 transition-colors">
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary mb-2">{v.tag}</div>
              <h4 className="font-display text-xl sm:text-2xl mb-2 text-balance">{v.name}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareersEntrepreneurship;
