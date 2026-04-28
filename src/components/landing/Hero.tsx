import heroImg from "@/assets/hero-leader.jpg";

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">PG Program</span>
        </div>

        <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] font-medium text-balance">
          Your <em className="italic text-primary not-italic font-normal">classroom</em>
          <br />
          is the <span className="font-mono text-[0.5em] align-top text-muted-foreground">/world</span>
          <br />
          across <span className="underline decoration-primary decoration-[6px] underline-offset-[10px]">4 nations.</span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          The <strong className="text-foreground">PG in Global Business & Entrepreneurship</strong> drops you straight into the boardrooms of <strong className="text-foreground">Mumbai</strong>, the trading floors of <strong className="text-foreground">London</strong>, the factories of <strong className="text-foreground">Shenzhen</strong> and the capital markets of <strong className="text-foreground">Hong Kong</strong>. Built with operators, not academics — so you graduate having already done the work.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#curriculum" className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See Curriculum
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
          {[
            { n: "4", l: "Nation Immersions" },
            { n: "258+", l: "Contact Hours" },
            { n: "10+", l: "CXO Sessions" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl font-medium">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="relative">
          <img
            src={heroImg}
            alt="Global business leader on rooftop"
            width={1080}
            height={1620}
            className="w-full aspect-[3/4] object-cover grayscale"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 max-w-[240px] shadow-bold">
            <div className="font-mono text-xs uppercase tracking-widest mb-1">Philosophy</div>
            <div className="font-display text-xl leading-tight">Learn by doing. Not by listening.</div>
          </div>
          <div className="absolute -top-4 -right-4 border border-primary bg-background/80 backdrop-blur px-4 py-2 font-mono text-xs uppercase tracking-widest">
            ◉ LIVE Cohort
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
