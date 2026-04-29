import { ArrowUpRight } from "lucide-react";

const ApplyBento = () => (
  <section className="relative py-12 sm:py-16 md:py-20" id="apply-bento">
    <div className="container">
      {/* Gradient border wrapper */}
      <div
        className="p-px rounded-sm"
        style={{
          background:
            "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)",
        }}
      >
        <div className="bg-[hsl(0,0%,7%)] rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12">
            {/* Left: copy */}
            <div className="min-w-0">
              <h3 className="font-display italic text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-2 sm:mb-3">
                Want a transformation like theirs?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The next cohort starts Aug 2026. Seats are limited.
              </p>
            </div>

            {/* Right: CTA with gradient border */}
            <a
              href="#apply"
              className="shrink-0 self-start md:self-auto p-px rounded-sm group"
              style={{
                background:
                  "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)",
              }}
            >
              <span className="flex items-center gap-3 bg-[hsl(0,0%,7%)] text-foreground rounded-sm px-6 sm:px-8 py-4 sm:py-5 font-bold text-sm sm:text-base group-hover:bg-[hsl(0,0%,10%)] transition-colors">
                Start Your Application
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApplyBento;
