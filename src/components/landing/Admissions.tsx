import { Sparkles, ArrowRight } from "lucide-react";

const steps = [
  "Submit application",
  "Admissions interview",
  "Offer letter",
  "Fee confirmation",
];

const Admissions = () => (
  <section id="admissions" className="relative py-12 sm:py-16 border-t border-border bg-card/30 overflow-hidden">
    <div className="absolute inset-0 editorial-grid opacity-[0.05] pointer-events-none" />

    <div className="container relative">
      {/* Header */}
      <div className="max-w-4xl mb-8">
        <div className="inline-flex items-center gap-2 border border-primary/40 text-primary px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Admissions & Fees
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl">
          Limited cohort seats. Apply now.
        </p>
        <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm">
          {steps.map((step, i, arr) => (
            <li key={step} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/40 bg-primary/10 font-mono text-[11px] text-primary">
                  {i + 1}
                </span>
                <span className="text-foreground whitespace-nowrap">{step}</span>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Fees */}
      <div className="border border-border bg-background mb-6">
        {/* India Fees */}
        <div className="p-4 sm:p-5 border-b border-border">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-4">India (in INR)</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Application Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">₹500</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">One-time, non-refundable</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Admissions Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">₹50,000</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Payable on offer acceptance</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Tuition Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">₹30,00,000</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Covers the full programme</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-1.5">Total Fee</div>
              <div className="font-display text-xl sm:text-2xl text-primary">₹30,50,500</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">All inclusive</div>
            </div>
          </div>
        </div>

        {/* International Fees */}
        <div className="p-4 sm:p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-4">International (in USD)</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Application Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">$50</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">One-time, non-refundable</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Admissions Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">$5,000</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Payable on offer acceptance</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">Tuition Fee</div>
              <div className="font-display text-xl sm:text-2xl text-foreground">$50,000</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Covers the full programme</div>
            </div>
            <div className="bg-background p-3 sm:p-4 text-center relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50" />
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-1.5">Total Fee</div>
              <div className="font-display text-xl sm:text-2xl text-primary">$55,050</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">All inclusive</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scholarship + CTA */}
      <div className="grid md:grid-cols-3 gap-px bg-border border border-primary/40">
        <div className="md:col-span-2 bg-primary/5 p-6 sm:p-8 flex gap-4 items-start">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Scholarships</div>
            <p className="text-sm sm:text-base">
              Merit-based and need-based scholarships available. Indicate interest when applying, assessed during the admissions interview.
            </p>
          </div>
        </div>
        <a
          href="#apply"
          className="bg-primary text-primary-foreground p-6 sm:p-8 flex items-center justify-between gap-4 group hover:opacity-90 transition-opacity"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2 opacity-80">Next step</div>
            <div className="font-display text-xl sm:text-2xl leading-tight">Start your application</div>
          </div>
          <ArrowRight className="w-6 h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default Admissions;
