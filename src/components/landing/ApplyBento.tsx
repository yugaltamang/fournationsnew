import { ArrowRight } from "lucide-react";

const ApplyBento = () => (
  <section className="relative py-10 sm:py-12 md:py-16" id="apply-bento">
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
        <div className="relative flex items-center justify-between border-b border-border/60 px-4 sm:px-10 py-3">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Cohort 04 · Now Accepting
          </div>
          <div className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Aug 2026 · Cohort 04
          </div>
        </div>

        {/* Main content */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center px-4 sm:px-10 md:px-14 py-8 sm:py-10 md:py-12">
          {/* Left: editorial copy */}
          <div className="md:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
              ◉ The Application
            </div>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.75rem)] leading-[1] text-balance mb-3">
              Every seat you don't claim,{" "}
              <em className="italic mu-hero-gradient-text not-italic">
                someone else will.
              </em>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Four nations. One audacious year.
            </p>
          </div>

          {/* Right: CTA + stats */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href="#apply"
              className="group relative inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-4 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all w-full"
            >
              <span>Begin Application</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <div className="grid grid-cols-3 gap-px bg-border">
              <div className="bg-[hsl(0,0%,6%)] p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Deadline
                </div>
                <div className="font-display text-base sm:text-lg">7 Aug 2026</div>
              </div>
              <div className="bg-[hsl(0,0%,6%)] p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Interviews
                </div>
                <div className="font-display text-base sm:text-lg">Jul – Sep 2026</div>
              </div>
              <div className="bg-[hsl(0,0%,6%)] p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Fee
                </div>
                <div className="font-display text-base sm:text-lg">INR 500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApplyBento;
