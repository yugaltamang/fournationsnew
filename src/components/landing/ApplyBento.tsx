import { ArrowUpRight, Phone } from "lucide-react";

const ApplyBento = () => (
  <section className="relative overflow-hidden" id="apply-bento">
    {/* Background — same layered gradient as PGP TBM FinalCTA */}
    <div className="absolute inset-0">
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, hsl(160,30%,8%), hsl(180,20%,6%), hsl(200,25%,10%))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255,208,0,0.08) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>

    {/* Content */}
    <div className="relative z-10 container py-12 sm:py-28 md:py-36 lg:py-44">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4 sm:mb-6 leading-[0.95]">
          Your Career Transformation Starts Here.
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground mb-3 max-w-lg leading-relaxed">
          Join the next cohort of founders, strategists, and product leaders.
        </p>
        <p className="text-[10px] sm:text-sm font-bold text-muted-foreground/80 mb-6 sm:mb-10 tracking-wide font-mono uppercase">
          Aug 2026 · 60 Seats · Round 3 Closing Soon
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all"
          >
            Apply Now <ArrowUpRight size={16} />
          </a>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-6 py-4 font-bold uppercase tracking-wider text-sm bg-transparent hover:bg-foreground/10 transition-colors"
          >
            <Phone size={16} />
            Book an Admissions Call
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ApplyBento;
