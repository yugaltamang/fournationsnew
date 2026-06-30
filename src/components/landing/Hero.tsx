// Hero showcases iconic monuments for the 4 cohort cities
import heroCollage from "@/assets/hero-collage.png";

const Hero = () => (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    {/* Monument collage - blended into the right side of the hero */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block lg:w-[58%] xl:w-[55%]"
    >
      <div className="relative w-full h-full">
        {/* Warm glow behind to lift the collage off the dark bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 60% 50%, hsl(40 84% 58% / 0.22), transparent 75%)",
          }}
        />

        {/* Top chrome */}
        <div className="absolute top-28 right-8 z-20 font-mono text-[10px] uppercase tracking-[0.25em] text-primary text-right flex items-center justify-end gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Four Cities · One Cohort
        </div>

        {/* Collage image - transparent PNG, blended into dark hero */}
        <img
          src={heroCollage}
          alt=""
          className="absolute inset-y-8 right-8 lg:right-16 xl:right-24 h-[88%] w-full object-contain object-right"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
            filter:
              "saturate(1.15) contrast(1.05) drop-shadow(0 18px 40px hsl(40 84% 58% / 0.25))",
          }}
        />
      </div>
    </div>

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7 animate-fade-up">

        <h1 className="font-display text-[clamp(2.25rem,9vw,6rem)] leading-[0.95] font-medium text-balance break-words">
          Four <em className="italic mu-hero-gradient-text not-italic font-normal">Countries.</em>
          <br />
          One Transformative Journey.
        </h1>

        <p className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Study across three world-class institutions - Masters' Union, Imperial College London, and CUHK - and conclude your journey with an optional Dubai finale.
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

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5 sm:gap-6 max-w-3xl border-t border-border pt-6 sm:pt-8">
          {[
            { n: "9", l: "Months · Core Program" },
            { n: "1", l: "Week · Optional Dubai" },
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "15+", l: "Business Immersions" },
          ].map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-none">{s.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5" />
    </div>
  </section>
);

export default Hero;
