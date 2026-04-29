const Apply = () => (
  <section id="apply" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="font-display text-[clamp(2rem,8vw,8rem)] leading-[0.9] mb-6 sm:mb-10 text-balance break-words">
          Four nations are <em className="italic mu-hero-gradient-text not-italic">waiting.</em><br />
          Step into the journey.
        </h2>
        <div className="mu-hero-divider w-24 mx-auto mb-8 sm:mb-10" />
        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12">
          Applications close in <strong className="text-primary font-mono">42 days</strong>. A focused cohort to protect the immersion experience.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a href="#" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 sm:px-10 py-5 sm:py-6 font-bold uppercase tracking-wider text-sm sm:text-base hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-3 border border-border px-8 sm:px-10 py-5 sm:py-6 font-bold uppercase tracking-wider text-sm sm:text-base hover:border-primary hover:text-primary transition-colors">
            Talk to Admissions
          </a>
        </div>

        <div className="grid grid-cols-3 gap-px bg-border max-w-3xl mx-auto">
          {[
            { l: "Journey", v: "India → HK → London → Dubai" },
            { l: "Decision", v: "Within 14 days" },
            { l: "Start", v: "Aug 2026" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-4 sm:p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{s.l}</div>
              <div className="font-display text-sm sm:text-base">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Apply;
