const outcomes = [
  { n: "01", t: "Launch your venture", d: "Walk in with an idea, walk out with a brand, GTM, financial model and first 100 customers." },
  { n: "02", t: "Run a P&L by Day 1", d: "Read balance sheets, build forecasts and pitch to PE/VC investors with conviction." },
  { n: "03", t: "Operate globally", d: "Decode India's distribution, London's capital, China's manufacturing and HK's gateway to Asia." },
  { n: "04", t: "Network that compounds", d: "10+ CXO sessions, 20+ industry visits, peers from across the world. Your warm intros for life." },
];

const Outcomes = () => (
  <section id="outcomes" className="py-32">
    <div className="container">
      <div className="max-w-4xl mb-16">
        <div className="tag-pill mb-6">◉ Outcomes</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
          What you walk away with.<br />
          <em className="italic text-primary not-italic">(Not just a certificate.)</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {outcomes.map((o) => (
          <div key={o.n} className="bg-background p-10 group hover:bg-secondary/40 transition-colors">
            <div className="flex items-start gap-6">
              <span className="font-display text-6xl text-primary leading-none">{o.n}</span>
              <div>
                <h3 className="font-display text-3xl mb-3">{o.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{o.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Outcomes;
