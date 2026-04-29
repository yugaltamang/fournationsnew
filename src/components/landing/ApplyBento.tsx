import { ArrowRight } from "lucide-react";

const ApplyBento = () => (
  <section className="relative py-16 sm:py-20 md:py-28" id="apply-bento">
    <div className="container">
      <div className="relative overflow-hidden border border-border bg-[hsl(0,0%,6%)]">
        {/* Ambient gradient glow */}
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #E38330 0%, #F7D544 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #39B5D7 0%, transparent 70%)",
          }}
        />

        {/* Editorial grid */}
        <div className="absolute inset-0 editorial-grid opacity-[0.07] pointer-events-none" />

        {/* Top meta strip */}
        <div className="relative flex items-center justify-between border-b border-border/60 px-6 sm:px-10 py-3">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Cohort 04 · Now Accepting
          </div>
          <div className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Aug 2026 · 60 Seats
          </div>
        </div>

        {/* Main content */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-20">
          {/* Left: editorial copy */}
          <div className="md:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-5">
              ◉ The Application
            </div>
            <h3 className="font-display text-[clamp(1.75rem,5vw,3.75rem)] leading-[0.95] text-balance mb-5 sm:mb-6">
              Build the career your{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                next decade
              </em>{" "}
              deserves.
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              60 builders. Four nations. One audacious year. Seats fill in the order applications arrive — and Cohort 04 is already moving fast.
            </p>
          </div>

          {/* Right: CTA + stats */}
          <div className="md:col-span-4 flex flex-col justify-between gap-8">
            <a
              href="#apply"
              className="group relative inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all w-full"
            >
              <span>Begin Application</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-[hsl(0,0%,6%)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                  Closes In
                </div>
                <div className="font-display text-2xl">42d</div>
              </div>
              <div className="bg-[hsl(0,0%,6%)] p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                  Decision
                </div>
                <div className="font-display text-2xl">14d</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApplyBento;
