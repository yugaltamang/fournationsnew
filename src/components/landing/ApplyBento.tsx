import { ArrowUpRight, Phone, Calendar, Users, Globe2, Sparkles, TrendingUp } from "lucide-react";

const tile =
  "rounded-lg bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,15%)] shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(247,213,68,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(247,213,68,0.12)] hover:-translate-y-1 transition-all duration-300";

const ApplyBento = () => (
  <section
    aria-labelledby="apply-bento-title"
    id="apply-bento"
    className="relative overflow-hidden py-16 sm:py-24 md:py-28"
  >
    {/* Layered background — borrowed from PGP TBM FinalCTA */}
    <div className="absolute inset-0">
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, hsl(40,30%,8%), hsl(20,20%,6%), hsl(0,0%,5%))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(247,213,68,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(57,181,215,0.06) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 50% 50%, rgba(227,131,48,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>

    <div className="relative z-10 container">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] mu-hero-gradient-text">
          Cohort 2026 · Applications Open
        </span>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 gap-3 sm:gap-4 auto-rows-[minmax(140px,auto)]">
        {/* Headline / CTA tile */}
        <div className={`col-span-6 md:col-span-7 row-span-2 relative overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col justify-between ${tile}`}>
          <div>
            <h2
              id="apply-bento-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] text-balance"
            >
              Your global career<br />
              <em className="italic mu-hero-gradient-text not-italic">starts here.</em>
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Join the next cohort of founders, operators and cross-border leaders. 60 seats. 4 nations. One year that rewrites your trajectory.
            </p>
            <p className="mt-3 font-mono text-[10px] sm:text-xs font-bold text-muted-foreground/80 tracking-wide uppercase">
              Aug 2026 · 60 Seats · Round closes in 42 days
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 mt-6 sm:mt-8">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:shadow-bold transition-all"
            >
              Apply Now
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-5 sm:px-6 py-3 sm:py-3.5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={16} />
              Book Admissions Call
            </a>
          </div>

          {/* Decorative oversized digit */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -bottom-12 font-display text-[9rem] sm:text-[13rem] leading-none opacity-[0.06] select-none"
          >
            42
          </div>
        </div>

        {/* Seats */}
        <div className={`col-span-3 md:col-span-5 p-5 sm:p-6 flex flex-col justify-between ${tile}`}>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Cohort size</span>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">60</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/80 mt-1">Builders per cohort</p>
          </div>
        </div>

        {/* Start */}
        <div className={`col-span-3 md:col-span-5 p-5 sm:p-6 flex flex-col justify-between ${tile}`}>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Programme starts</span>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">Aug 2026</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/80 mt-1">9 + 1 months · 4 nations</p>
          </div>
        </div>

        {/* Quote */}
        <div className={`col-span-6 md:col-span-5 p-5 sm:p-6 md:p-7 flex flex-col justify-between ${tile}`}>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Alum voice</span>
          </div>
          <p className="font-display italic text-base sm:text-lg md:text-xl leading-snug text-foreground/90 mt-4">
            "I went in an analyst. I came out running a global P&amp;L."
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-3">
            Cohort '25 · Now @ DIFC
          </p>
        </div>

        {/* Cities */}
        <div className={`col-span-6 md:col-span-4 p-5 sm:p-6 flex flex-col justify-between ${tile}`}>
          <div className="flex items-center gap-2">
            <Globe2 size={16} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">On the ground</span>
          </div>
          <div>
            <p className="font-display text-xl sm:text-2xl md:text-[1.65rem] text-foreground leading-tight tracking-[-0.01em]">
              Delhi · HK · London · Dubai
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground/80 mt-2">CUHK · Imperial · DIFC</p>
          </div>
        </div>

        {/* Brochure / next step */}
        <a
          href="#apply"
          className={`col-span-6 md:col-span-3 group p-5 sm:p-6 flex flex-col justify-between ${tile} hover:border-primary`}
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Next step</span>
          </div>
          <div>
            <p className="font-display text-xl sm:text-2xl md:text-[1.5rem] text-foreground leading-tight">
              Download brochure
            </p>
            <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
              Get the PDF
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default ApplyBento;
