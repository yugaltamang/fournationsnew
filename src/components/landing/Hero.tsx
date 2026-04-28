// Hero showcases iconic monuments for the 4 cohort cities

const Hero = () => (
  <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    {/* Monuments — blended into the right side of the hero */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[58%] lg:w-[50%] xl:w-[46%]"
      style={{
        maskImage:
          "radial-gradient(ellipse 95% 80% at 60% 50%, black 55%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 95% 80% at 60% 50%, black 55%, transparent 95%)",
      }}
    >
      <div className="relative w-full h-full">
        {/* Soft warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 65% 45%, hsl(40 84% 58% / 0.10), transparent 70%)",
          }}
        />

        {/* Top chrome */}
        <div className="absolute top-28 right-8 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-right space-y-1">
          <div>Atlas / Cohort 2026</div>
          <div className="text-primary flex items-center justify-end gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Four Cities · One Cohort
          </div>
        </div>

        {/* Monument grid */}
        <div className="absolute inset-0 flex items-center justify-center pt-24 pb-12 px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-md">
            {[
              {
                n: "01",
                city: "India",
                sub: "India Gate · Delhi",
                svg: (
                  // India Gate — arch monument
                  <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M20 100 H80" />
                    <path d="M25 100 V40 Q25 25 50 25 Q75 25 75 40 V100" />
                    <path d="M35 100 V50 Q35 38 50 38 Q65 38 65 50 V100" />
                    <path d="M22 40 H78" />
                    <path d="M22 35 H78" />
                    <path d="M28 25 V18 H72 V25" />
                    <path d="M48 18 V10 H52 V18" />
                    <circle cx="50" cy="8" r="1.5" fill="currentColor" />
                    <path d="M30 60 H70 M30 75 H70 M30 90 H70" opacity="0.4" />
                  </svg>
                ),
              },
              {
                n: "02",
                city: "Hong Kong",
                sub: "Bank of China Tower",
                svg: (
                  // HK skyline — angular tower
                  <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M10 100 H90" />
                    <path d="M40 100 V35 L50 10 L60 35 V100 Z" />
                    <path d="M40 35 L60 35" />
                    <path d="M40 60 L60 45 M40 80 L60 65" />
                    <path d="M50 10 V100" opacity="0.5" />
                    {/* side buildings */}
                    <path d="M15 100 V70 H30 V100" />
                    <path d="M70 100 V55 H82 V100" />
                    <path d="M18 75 H27 M18 85 H27 M18 95 H27" opacity="0.5" />
                    <path d="M73 60 H79 M73 70 H79 M73 80 H79 M73 90 H79" opacity="0.5" />
                    {/* water */}
                    <path d="M10 105 q 5 -3 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0 t 10 0" opacity="0.4" />
                  </svg>
                ),
              },
              {
                n: "03",
                city: "London",
                sub: "Big Ben · Westminster",
                svg: (
                  // Big Ben clock tower
                  <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M15 100 H85" />
                    <path d="M40 100 V30 H60 V100" />
                    <path d="M38 30 H62" />
                    <circle cx="50" cy="42" r="6" />
                    <path d="M50 42 V37 M50 42 L54 44" strokeWidth="0.8" />
                    <path d="M40 55 H60 M40 70 H60 M40 85 H60" opacity="0.4" />
                    <path d="M38 30 V25 H62 V30" />
                    <path d="M40 25 L50 12 L60 25 Z" />
                    <path d="M50 12 V5" />
                    <circle cx="50" cy="4" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                n: "04",
                city: "Dubai",
                sub: "Burj Khalifa · DIFC",
                svg: (
                  // Burj Khalifa — tapering spire
                  <svg viewBox="0 0 100 110" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M10 100 H90" />
                    <path d="M38 100 L42 60 L46 30 L48 15 L50 5 L52 15 L54 30 L58 60 L62 100 Z" />
                    <path d="M50 5 V100" opacity="0.4" />
                    <path d="M40 80 H60 M42 65 H58 M44 50 H56 M45 38 H55 M46 28 H54 M47 20 H53" opacity="0.5" />
                    {/* small adjacent buildings */}
                    <path d="M15 100 V80 H28 V100" />
                    <path d="M72 100 V72 H85 V100" />
                    <path d="M18 85 H25 M18 92 H25" opacity="0.5" />
                    <path d="M75 78 H82 M75 86 H82 M75 94 H82" opacity="0.5" />
                  </svg>
                ),
              },
            ].map((m) => (
              <div key={m.city} className="group relative">
                <div className="aspect-square text-foreground/70 p-2 border border-border/50 bg-background/30 backdrop-blur-sm">
                  {m.svg}
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">/{m.n}</div>
                    <div className="font-display text-base leading-tight">{m.city}</div>
                  </div>
                </div>
                <div className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">Post Graduate Program</span>
        </div>

        <h1 className="font-display text-[clamp(2.25rem,8vw,6rem)] leading-[0.95] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four <span className="font-mono text-[0.4em] align-top text-muted-foreground">/04</span> cities.
          <br />
          <span className="block mt-4 text-[0.6em] leading-[1.15] text-foreground/90 font-normal italic">
            Infinite reasons to say<br />
            <span className="not-italic font-medium">"when I was in <span className="mu-hero-underline whitespace-nowrap">Hong Kong</span>…"</span>
          </span>
        </h1>

        <p className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale. Four nations, four cultures, four markets — one operator who can read all of them.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg border-t border-border pt-6 sm:pt-8">
          {[
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "10+", l: "CXO Masterclasses" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5" />
    </div>
  </section>
);

export default Hero;
