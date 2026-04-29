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
  <section id="admissions" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      <div className="max-w-3xl mb-12 md:mb-16">
        <div className="tag-pill mb-4 sm:mb-6">◉ Admissions</div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-4">
          What we look for in <em className="italic text-muted-foreground not-italic">every applicant.</em>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          A rigorous selection process to ensure every participant is ready to build, lead and grow alongside a world-class cohort.
        </p>
      </div>

      {/* Criteria */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-16 md:mb-20">
        {criteria.map((c) => (
          <div key={c.n} className="bg-background p-6 sm:p-8">
            <div className="font-mono text-xs text-primary mb-4">{c.n}.</div>
            <div className="font-display text-xl sm:text-2xl mb-3">{c.t}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>

      {/* Timeline table */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
          <h3 className="font-display text-2xl sm:text-3xl">Timeline & Process — Cohort 2026</h3>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Round 01</span>
        </div>
        <div className="border border-border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/30">
              <tr className="text-left">
                {["Round", "Application Deadline", "Interviews", "Fee", "Status"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground p-4 border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-display text-base">Round 1</td>
                <td className="p-4 font-mono">7 Aug 2026</td>
                <td className="p-4 font-mono">Jul – Sep 2026</td>
                <td className="p-4 font-mono">INR 500</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Process steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="font-mono text-xs text-muted-foreground mb-3">{s.n} / 03</div>
            <div className="h-px w-full bg-border mb-5" />
            <div className="font-display text-xl sm:text-2xl mb-3">{s.t}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-3 -right-4 font-mono text-primary">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
          Apply Now <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">Decision within 4 weeks of application deadline.</p>
      </div>
    </div>
  </section>
);

export default Admissions;
