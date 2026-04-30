const criteria = [
  { n: "01", t: "Academic Background", d: "Bachelor's degree from any recognised university. Any discipline welcome." },
  { n: "02", t: "Leadership Potential", d: "Demonstrated drive — academics, sport, business or community. We look for builders." },
  { n: "03", t: "Communication & Drive", d: "Clarity of thought, entrepreneurial ambition, and hunger to operate globally." },
];

const steps = [
  { n: "01", t: "Complete the Application", d: "Online form with personal details, professional background, resume and a 2-min video or 200-word essay." },
  { n: "02", t: "Online Interview", d: "Shortlisted applicants meet a panel of Masters from academia, industry and the core team." },
  { n: "03", t: "Admission Decision", d: "Committee evaluates feedback and notifies applicants by email. Entire process: up to 4 weeks." },
];

const Admissions = () => (
  <section id="admissions" className="relative py-16 sm:py-20 md:py-28">
    <div className="container">
      <div
        className="relative overflow-hidden border-2 border-primary/40 bg-[hsl(0,0%,6%)]"
        style={{
          boxShadow:
            "0 30px 80px -20px hsl(40 84% 58% / 0.25), 0 0 0 1px hsl(40 84% 58% / 0.15)",
        }}
      >
        {/* Gradient top bar */}
        <div className="mu-hero-divider w-full" />

        {/* Ambient gradient glows — boosted */}
        <div
          className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-50 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #E38330 0%, #F7D544 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-35 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #39B5D7 0%, transparent 70%)",
          }}
        />

        {/* Editorial grid */}
        <div className="absolute inset-0 editorial-grid opacity-[0.08] pointer-events-none" />

        {/* Top meta strip */}
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-primary/30 px-4 sm:px-10 py-3 bg-primary/5">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            Round 01 · Now Open
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
            <span className="text-muted-foreground">Deadline ·</span>
            <span className="text-primary font-bold">7 Aug 2026</span>
          </div>
        </div>

        {/* Header */}
        <div className="relative px-6 sm:px-10 md:px-14 pt-10 sm:pt-12 md:pt-16 pb-6 md:pb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="font-bold">Admissions / Selection</span>
            <span className="text-muted-foreground/50">/ 03 Criteria</span>
          </div>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] text-balance mb-4 max-w-3xl">
            What we look for in{" "}
            <em className="italic mu-hero-gradient-text not-italic">
              every applicant.
            </em>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A rigorous selection process to ensure every participant is ready to build, lead and grow alongside a world-class cohort.
          </p>
        </div>

        {/* Criteria grid */}
        <div className="relative px-6 sm:px-10 md:px-14 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {criteria.map((c) => (
              <div key={c.n} className="bg-[hsl(0,0%,6%)] p-5 sm:p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">{c.n} / 03</div>
                <div className="font-display text-lg sm:text-xl mb-2">{c.t}</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline strip */}
        <div className="relative border-y border-border/60 bg-background/20">
          <div className="px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between flex-wrap gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Cohort 2026 · Timeline
            </div>
            <div className="flex items-center gap-6 sm:gap-10 flex-wrap">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Deadline</div>
                <div className="font-display text-base sm:text-lg">7 Aug 2026</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Interviews</div>
                <div className="font-display text-base sm:text-lg">Jul – Sep 2026</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Fee</div>
                <div className="font-display text-base sm:text-lg">INR 500</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Status</div>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="relative px-6 sm:px-10 md:px-14 py-8 md:py-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-5">
            ◉ Process
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{s.n} / 03</div>
                <div className="h-px w-full bg-border mb-4" />
                <div className="font-display text-lg sm:text-xl mb-2">{s.t}</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-2 -right-4 font-mono text-primary">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="relative border-t border-border/60 px-6 sm:px-10 md:px-14 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground font-mono">
            Decision within 4 weeks of application deadline.
          </p>
          <a
            href="#apply"
            className="group inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-4 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all"
          >
            <span>Apply Now</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Admissions;
