import heroImg from "@/assets/hero-leader.jpg";

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7 animate-fade-up">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag-pill"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Cohort 2026 · Applications Open</span>
          <span className="tag-pill hidden sm:inline-flex">Post Graduate Program</span>
        </div>

        <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] font-medium text-balance">
          One <em className="italic mu-hero-gradient-text not-italic font-normal">degree.</em>
          <br />
          Four <span className="font-mono text-[0.5em] align-top text-muted-foreground">/04</span> cities.
          <br />
          Infinite reasons to say <span className="mu-hero-underline">"when I was in Hong Kong…"</span>
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A Post Graduate program that moves with you across <strong className="text-foreground">India</strong>, <strong className="text-foreground">Hong Kong</strong> (CUHK), <strong className="text-foreground">London</strong> (Imperial College) and an optional <strong className="text-foreground">Dubai</strong> finale. Four nations, four cultures, four markets — one operator who can read all of them.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-8 py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
          {[
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "10+", l: "CXO Masterclasses" },
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
          <div className="absolute inset-x-0 bottom-0 h-2 mu-hero-gradient" />
          <div className="absolute -bottom-6 -left-6 bg-background border border-border text-foreground p-5 max-w-[260px] shadow-bold">
            <div className="font-mono text-xs uppercase tracking-widest mb-1 text-muted-foreground">The Outcome</div>
            <div className="font-display text-xl leading-tight">A professional who is fluent in four economies, not one.</div>
          </div>
          <div className="absolute -top-4 -right-4 border border-primary bg-background/80 backdrop-blur px-4 py-2 font-mono text-xs uppercase tracking-widest">
            ◉ India → HK → London → Dubai
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
