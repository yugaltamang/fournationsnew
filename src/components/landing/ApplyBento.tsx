import { ArrowUpRight, Calendar, Users, Globe2, Sparkles } from "lucide-react";

const ApplyBento = () => (
  <section aria-labelledby="apply-bento-title" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-60" />
    <div className="container relative">
      <div className="grid grid-cols-6 md:grid-cols-12 grid-flow-row-dense gap-3 sm:gap-4 auto-rows-[minmax(140px,auto)]">
        {/* Headline tile */}
        <div className="col-span-6 md:col-span-7 row-span-2 relative bg-primary text-primary-foreground p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden group">
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest opacity-80 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            Cohort 2026 · Applications Open
          </div>
          <div>
            <h2 id="apply-bento-title" className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] mt-6 sm:mt-8 text-balance">
              Stop reading.<br />
              <em className="italic">Start the journey.</em>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base opacity-90 leading-relaxed">
              60 seats. 4 nations. One year that rewrites your career trajectory. Applications close in 42 days.
            </p>
          </div>
          <a
            href="#apply"
            className="mt-6 sm:mt-8 inline-flex w-fit items-center gap-3 bg-primary-foreground text-primary px-5 sm:px-6 py-3 sm:py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:translate-x-1 transition-transform"
          >
            Apply Now
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          {/* decorative oversized digit */}
          <div aria-hidden className="pointer-events-none absolute -right-4 -bottom-10 font-display text-[10rem] sm:text-[14rem] leading-none opacity-10 select-none">
            42
          </div>
        </div>

        {/* Seats tile */}
        <div className="col-span-3 md:col-span-5 bg-background border border-border p-5 sm:p-6 flex flex-col justify-between hover:border-primary transition-colors">
          <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <div>
            <div className="font-display text-4xl sm:text-5xl">60<span className="text-primary">.</span></div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Builders per cohort</div>
          </div>
        </div>

        {/* Start date tile */}
        <div className="col-span-3 md:col-span-5 bg-background border border-border p-5 sm:p-6 flex flex-col justify-between hover:border-primary transition-colors">
          <Calendar className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <div>
            <div className="font-display text-4xl sm:text-5xl">Aug<span className="text-primary">.</span></div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Cohort starts 2026</div>
          </div>
        </div>

        {/* Quote tile */}
        <div className="col-span-6 md:col-span-5 bg-secondary/40 border border-border p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-primary transition-colors">
          <Sparkles className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <p className="font-display italic text-base sm:text-lg md:text-xl leading-snug text-foreground/90 mt-4">
            "I went in an analyst. I came out running a global P&L."
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-3">
            Cohort '25 · Now @ DIFC
          </div>
        </div>

        {/* Cities tile */}
        <div className="col-span-6 md:col-span-4 bg-background border border-border p-5 sm:p-6 flex flex-col justify-between hover:border-primary transition-colors">
          <Globe2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <div>
            <div className="font-display text-2xl sm:text-3xl leading-tight">Delhi · HK · London · Dubai</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">9 + 1 months on the ground</div>
          </div>
        </div>

        {/* Talk tile */}
        <a
          href="#apply"
          className="col-span-6 md:col-span-3 group bg-foreground text-background p-5 sm:p-6 flex flex-col justify-between hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">Not ready yet?</div>
          <div>
            <div className="font-display text-2xl sm:text-3xl leading-tight">Talk to admissions</div>
            <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
              Book a call
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default ApplyBento;
