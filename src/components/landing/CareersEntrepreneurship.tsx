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

const recruitersByCategory: { category: string; companies: string[] }[] = [
  {
    category: "Consulting",
    companies: ["McKinsey & Co.", "BCG", "Bain & Co.", "Kearney", "Deloitte"],
  },
  {
    category: "Technology",
    companies: ["Google", "Microsoft", "Meta", "Amazon", "Atlassian"],
  },
  {
    category: "Consumer & D2C",
    companies: ["Flipkart", "Zomato", "Blinkit", "Zepto", "MakeMyTrip"],
  },
  {
    category: "Finance & Global",
    companies: ["Careem", "JP Morgan", "HSBC", "Bain Capital", "Standard Chartered"],
  },
];

const ventureStats = [
  { v: "30+", l: "Startups Incubated" },
  { v: "₹593 Cr", l: "Total Valuation" },
  { v: "₹480 Cr", l: "Projected Revenue FY26" },
  { v: "180+", l: "Jobs Created" },
  { v: "6", l: "On Shark Tank India" },
];

const featuredVentures = [
  { name: "EIGHT", tag: "Media · Tech", desc: "5M+ downloads across platforms.", metric: "5M+ DL" },
  { name: "Bullspree", tag: "Fintech · S2 ST", desc: "India's favourite stock-market playground.", metric: "Shark Tank S2" },
  { name: "Nivara", tag: "D2C · Luxury", desc: "Sustainable, accessible fine jewellery.", metric: "D2C" },
  { name: "SeedsAI", tag: "AI · SaaS", desc: "Conversations into enterprise insights.", metric: "Enterprise AI" },
  { name: "HookD", tag: "F&B · S5 ST", desc: "India's first ready-to-eat non-veg snacking brand.", metric: "Shark Tank S5" },
  { name: "Beyond Veda", tag: "Wellness · D2C", desc: "Reimagining ayurveda for modern wellness.", metric: "₹2 Cr ARR" },
];

const SectionLabel = ({ index, label }: { index: string; label: string }) => (
  <div className="flex items-center gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">
    <span className="text-muted-foreground/60">{index}</span>
    <span className="w-8 h-px bg-primary" />
    <span>{label}</span>
  </div>
);

const CareersEntrepreneurship = () => (
  <section id="careers" className="border-t border-border">
    {/* ============ INTRO ============ */}
    <div className="py-20 md:py-32 border-b border-border">
      <div className="container">
        <SectionLabel index="03" label="Careers & Entrepreneurship" />
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mt-8 md:mt-12">
          <h2 className="md:col-span-9 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.9] text-balance tracking-tight">
            Get hired.<br />
            Or get funded.<br />
            <em className="italic text-primary not-italic">Often both.</em>
          </h2>
          <div className="md:col-span-3 md:pt-6 flex md:items-end">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed border-l-2 border-primary pl-4">
              Five graduating cohorts. 145+ recruiters. 30+ startups incubated. Whether you want a global P&amp;L role or to ship your own venture — the platform compounds for both.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ============ ACT 01 — CAREERS ============ */}
    <div className="py-20 md:py-32 border-b border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <div className="font-display text-6xl md:text-7xl text-primary leading-none">01</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">Hired.</div>
          </div>
          <div className="md:col-span-10">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
              Graduates don't just get jobs.{" "}
              <em className="italic text-primary not-italic">They get careers.</em>
            </h3>
          </div>
        </div>

        {/* Stats — full bleed band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-y border-border mb-16 md:mb-20">
          {careerStats.map((s, i) => (
            <div key={s.l} className="bg-background p-6 sm:p-8 md:p-10 relative">
              <div className="font-mono text-[10px] text-muted-foreground/60 absolute top-3 right-4">0{i + 1}</div>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl mu-hero-gradient-text leading-none mb-3">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Roles + Recruiters — two columns */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Roles */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" /> Roles landed
            </p>
            <ul className="space-y-0 border-t border-border">
              {roles.map((r) => (
                <li
                  key={r}
                  className="border-b border-border py-3 font-display text-lg sm:text-xl text-foreground/90 hover:text-primary hover:pl-2 transition-all"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Recruiters categorized */}
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" /> 145+ recruiting companies — by sector
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {recruitersByCategory.map((cat) => (
                <div key={cat.category} className="bg-background p-6 sm:p-7">
                  <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-border">
                    <h4 className="font-display text-xl sm:text-2xl">{cat.category}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {String(cat.companies.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {cat.companies.map((c) => (
                      <li key={c} className="font-display text-base sm:text-lg text-foreground/85 leading-snug">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex justify-start">
          <a
            href="#"
            download
            className="inline-flex items-center gap-3 border border-primary bg-primary text-primary-foreground px-6 py-4 font-display text-base sm:text-lg tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <span className="text-xl">↓</span> Download Placement Report
          </a>
        </div>
      </div>
    </div>

    {/* ============ ACT 02 — ENTREPRENEURSHIP ============ */}
    <div className="py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <div className="font-display text-6xl md:text-7xl text-primary leading-none">02</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">Funded.</div>
          </div>
          <div className="md:col-span-10">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
              Where founders are built,{" "}
              <em className="italic text-primary not-italic">not just funded.</em>
            </h3>
          </div>
        </div>

        {/* Venture stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border-y border-border mb-16 md:mb-20">
          {ventureStats.map((s, i) => (
            <div key={s.l} className="bg-background p-6 sm:p-8 relative">
              <div className="font-mono text-[10px] text-muted-foreground/60 absolute top-3 right-4">0{i + 1}</div>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl mu-hero-gradient-text leading-none mb-3">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Featured ventures — numbered editorial list */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" /> Portfolio
            </p>
            <h4 className="font-display text-2xl sm:text-3xl leading-tight text-balance">
              Featured ventures from the cohort.
            </h4>
          </div>

          <ol className="md:col-span-9 border-t border-border">
            {featuredVentures.map((v, i) => (
              <li
                key={v.name}
                className="group border-b border-border py-6 sm:py-7 grid grid-cols-12 gap-4 items-baseline hover:bg-secondary/20 hover:px-4 transition-all"
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 sm:col-span-4">
                  <h5 className="font-display text-2xl sm:text-3xl md:text-4xl leading-none group-hover:text-primary transition-colors">
                    {v.name}
                  </h5>
                </div>
                <div className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:pt-2">
                  {v.tag}
                </div>
                <div className="col-span-12 sm:col-span-3 text-sm text-foreground/80 leading-relaxed sm:text-right sm:pt-2">
                  {v.desc}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 md:mt-16 flex justify-start">
          <a
            href="#"
            download
            className="inline-flex items-center gap-3 border border-primary bg-primary text-primary-foreground px-6 py-4 font-display text-base sm:text-lg tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <span className="text-xl">↓</span> Download Entrepreneurship Report
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CareersEntrepreneurship;
