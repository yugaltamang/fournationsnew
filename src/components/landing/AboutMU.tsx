const milestones = [
  { y: "2020", t: "The Unofficial Launch", d: "Website goes live; 12,000 visits in <12 hours. 72 'early adopters' bet on an institution that didn't exist on Google Maps." },
  { y: "2021", t: "Cohort Two Aboard", d: "Nithin Kamath addresses Cohort 1. Student startups BullSpree & EIGHT raise $1M+." },
  { y: "2022", t: "Undergraduate Launch", d: "3,000 applications, <10% acceptance. Average salary jumps to ₹33 LPA. UG programme launches." },
  { y: "2023", t: "Campus & Startup Wins", d: "35,000 sq ft experiential campus. Mentor network crosses 200+ from Bain, BCG, Google, Microsoft. 6 affiliated startups on Shark Tank." },
  { y: "2024", t: "Global Recognition", d: "Peyush Bansal at 3rd Convocation. Avg package ₹34.07 LPA. Harvard MBAs visit annually for India Immersion." },
  { y: "2025", t: "GenAI Lab & New Era", d: "PwC × MU GenAI Lab launches. 2,000 students. New campus with AI Labs. Scholarship & seed fund for nontraditional founders." },
];

const stats = [
  { v: "2,000+", l: "Students" },
  { v: "200+", l: "Industry Mentors" },
  { v: "₹34 LPA", l: "Avg Package" },
  { v: "<10%", l: "Acceptance" },
];

const AboutMU = () => (
  <section id="about" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-16 pb-6 border-b border-border">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-4 sm:mb-6">
            <span className="w-8 h-px bg-primary" />
            <span>About Masters' Union</span>
            <span className="text-muted-foreground/50">/ Est. 2020</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Built by practitioners.{" "}
            <em className="italic text-primary not-italic">Run by them too.</em>
          </h2>
        </div>
        <div className="md:col-span-4">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Masters' Union is a new-age business school where MDs, founders and operators teach — not career academics. In five years, it has become one of India's most selective institutions and is now on a Top-10 global rank quest.
          </p>
        </div>
      </div>

      {/* Vision / Mission */}
      <div className="grid sm:grid-cols-2 gap-px bg-border mb-12 md:mb-16">
        <div className="bg-background p-6 sm:p-8 md:p-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Our Vision</div>
          <p className="font-display text-2xl sm:text-3xl leading-tight text-balance">
            To iterate an education model that <em className="italic text-primary not-italic">maximises human potential.</em>
          </p>
        </div>
        <div className="bg-background p-6 sm:p-8 md:p-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">Our Mission</div>
          <p className="font-display text-2xl sm:text-3xl leading-tight text-balance">
            To build a <em className="italic text-primary not-italic">globally eminent institution</em> that challenges pedagogy to deliver unparalleled human growth.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12 md:mb-16">
        {stats.map((s) => (
          <div key={s.l} className="bg-background p-5 sm:p-6 md:p-8">
            <div className="font-display text-3xl sm:text-4xl md:text-5xl mu-hero-gradient-text leading-none mb-2">{s.v}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6">
          <span className="w-8 h-px bg-primary" />
          <span>Five Years, In Motion</span>
        </div>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {milestones.map((m) => (
          <li key={m.y} className="bg-background p-5 sm:p-6 md:p-8 group hover:bg-secondary/40 transition-colors">
            <div className="flex items-baseline gap-3 mb-3 pb-3 border-b border-border/60">
              <span className="font-display text-3xl sm:text-4xl text-primary leading-none">{m.y}</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl mb-2 text-balance">{m.t}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.d}</p>
          </li>
        ))}
      </ol>

      {/* Chairman quote */}
      <figure className="mt-12 md:mt-16 border-t border-border pt-8 md:pt-12 max-w-4xl">
        <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-balance">
          "A future of education is not just a means to an end, but a{" "}
          <em className="italic text-primary not-italic">transformative journey</em> that shapes leaders and innovators."
        </blockquote>
        <figcaption className="mt-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Manoj Kohli — Chairman, Masters' Union
        </figcaption>
      </figure>
    </div>
  </section>
);

export default AboutMU;
