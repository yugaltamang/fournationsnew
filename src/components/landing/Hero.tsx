// Hero — editorial intro for the cohort

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">Post Graduate Program</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four <span className="font-mono text-[0.4em] align-top text-muted-foreground">/04</span> cities.
          <br />
          <span className="block mt-4 text-[0.6em] leading-[1.15] text-foreground/90 font-normal italic">
            Infinite reasons to say<br />
            <span className="not-italic font-medium">"when I was in <span className="mu-hero-underline whitespace-nowrap">Hong Kong</span>…"</span>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale. Four nations, four cultures, four markets — one operator who can read all of them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
          {[
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "10+", l: "CXO Masterclasses" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* The Outcome — highlighted editorial banner */}
    <div className="container relative mt-20">
      <div className="relative bg-primary text-primary-foreground p-8 md:p-12 shadow-[10px_10px_0_0_hsl(var(--foreground))] border border-foreground">
        <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]">
          ◉ The Outcome
        </div>
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">/ Cohort 2026</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mt-2">You walk away as →</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              A professional who is fluent in <em className="italic mu-hero-gradient-text not-italic">four economies</em>, not one.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
