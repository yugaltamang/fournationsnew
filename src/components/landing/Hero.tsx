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

    {/* The Outcome — highlighted editorial banner with city monuments */}
    <div className="container relative mt-20">
      <div className="relative bg-primary text-primary-foreground p-8 md:p-12 shadow-[10px_10px_0_0_hsl(var(--foreground))] border border-foreground">
        <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]">
          ◉ The Outcome
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3">/ Cohort 2026 · The Graduate</div>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-balance">
              Read four <em className="not-italic underline decoration-2 underline-offset-4">markets</em>. Speak four <em className="not-italic underline decoration-2 underline-offset-4">cultures</em>. Lead in any room — Delhi to Dubai.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-4 gap-3">
              {[
                {
                  n: "01",
                  city: "India",
                  svg: (
                    <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
                      <path d="M20 100 H80" />
                      <path d="M25 100 V40 Q25 25 50 25 Q75 25 75 40 V100" />
                      <path d="M35 100 V50 Q35 38 50 38 Q65 38 65 50 V100" />
                      <path d="M22 40 H78" />
                      <path d="M28 25 V18 H72 V25" />
                      <path d="M48 18 V10 H52 V18" />
                      <circle cx="50" cy="8" r="1.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  n: "02",
                  city: "HK",
                  svg: (
                    <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
                      <path d="M10 100 H90" />
                      <path d="M40 100 V35 L50 10 L60 35 V100 Z" />
                      <path d="M40 35 L60 35" />
                      <path d="M40 60 L60 45 M40 80 L60 65" />
                      <path d="M15 100 V70 H30 V100" />
                      <path d="M70 100 V55 H82 V100" />
                    </svg>
                  ),
                },
                {
                  n: "03",
                  city: "London",
                  svg: (
                    <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
                      <path d="M15 100 H85" />
                      <path d="M40 100 V30 H60 V100" />
                      <path d="M38 30 H62" />
                      <circle cx="50" cy="42" r="6" />
                      <path d="M50 42 V37 M50 42 L54 44" strokeWidth="1" />
                      <path d="M38 30 V25 H62 V30" />
                      <path d="M40 25 L50 12 L60 25 Z" />
                      <path d="M50 12 V5" />
                    </svg>
                  ),
                },
                {
                  n: "04",
                  city: "Dubai",
                  svg: (
                    <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
                      <path d="M10 100 H90" />
                      <path d="M38 100 L42 60 L46 30 L48 15 L50 5 L52 15 L54 30 L58 60 L62 100 Z" />
                      <path d="M15 100 V80 H28 V100" />
                      <path d="M72 100 V72 H85 V100" />
                    </svg>
                  ),
                },
              ].map((m) => (
                <div key={m.city} className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square text-primary-foreground/85 p-1.5">
                    {m.svg}
                  </div>
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.2em] mt-1.5 opacity-70">/{m.n}</div>
                  <div className="font-display text-xs leading-tight mt-0.5">{m.city}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
