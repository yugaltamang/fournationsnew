import SectionEyebrow from "./SectionEyebrow";

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
  "Google", "Microsoft", "Meta", "McKinsey & Co.", "BCG", "Bain & Co.",
  "Flipkart", "Zomato", "Blinkit", "Zepto", "MakeMyTrip", "Careem",
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
          <SectionEyebrow className="mb-4 sm:mb-6">Careers &amp; Entrepreneurship / Two Paths, One Cohort</SectionEyebrow>
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
        <SectionEyebrow className="mb-6">Career Outcomes</SectionEyebrow>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-balance max-w-3xl mb-8">
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
              <span key={r} className="tag-pill">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Recruiters */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">145+ recruiting companies - including</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-border border border-border">
            {recruiters.map((name) => (
              <div
                key={name}
                className="bg-background flex items-center justify-center p-4 sm:p-5 md:p-6 aspect-[3/2]"
                title={name}
              >
                <span className="font-display text-base sm:text-lg md:text-xl text-foreground/85 hover:text-foreground transition-colors text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex justify-start">
          <a
            href="#"
            download
            className="inline-flex items-center gap-2 border border-primary bg-primary text-primary-foreground px-5 py-3 font-display text-sm sm:text-base tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            ↓ Download Placement Report
          </a>
        </div>
      </div>

      {/* ENTREPRENEURSHIP */}
      <div>
        <SectionEyebrow className="mb-6">Entrepreneurship</SectionEyebrow>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-balance max-w-3xl mb-8">
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

        <div className="mt-8 md:mt-10 flex justify-start">
          <a
            href="#"
            download
            className="inline-flex items-center gap-2 border border-primary bg-primary text-primary-foreground px-5 py-3 font-display text-sm sm:text-base tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            ↓ Download Entrepreneurship Report
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CareersEntrepreneurship;
