import factory from "@/assets/immersion-factory.jpg";

const stats = [
  { n: "20+", l: "Industry Site Visits" },
  { n: "5", l: "Concentrations" },
  { n: "4", l: "Cultural Immersions" },
  { n: "100%", l: "Build · Pitch · Ship" },
];

const Immersions = () => (
  <section className="py-32 bg-secondary/20 border-y border-border">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={factory} alt="Students on factory floor" loading="lazy" className="w-full aspect-[4/3] object-cover grayscale" />
          <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest bg-background/80 backdrop-blur px-3 py-2">
            ◉ Sonalika Tractors · Jalandhar
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block border-4 border-primary p-4 bg-background">
            <div className="font-display text-5xl text-primary leading-none">8h</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">avg per immersion</div>
          </div>
        </div>

        <div>
          <div className="tag-pill mb-6">◉ Industry Immersions</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-6 text-balance">
            The classroom is a <em className="italic text-primary not-italic">factory floor.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Every concentration ends inside a working business. Watch how Honda runs Just-In-Time. Stand on Dixon's electronics line. See Mercedes-Benz pricing strategy live. Audit Blue Tokai's unit economics with their CFO.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border">
            {stats.map((s) => (
              <div key={s.l} className="bg-background p-6">
                <div className="font-display text-5xl text-primary">{s.n}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Immersions;
