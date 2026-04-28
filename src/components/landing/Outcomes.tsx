const outcomes = [
  { n: "01", t: "Operate across four markets", d: "Read Indian distribution, Asian capital, European brand and MENA family-office economics — and switch contexts without missing a beat." },
  { n: "02", t: "A network in four cultures", d: "Peers, faculty and CXOs from CUHK, Imperial College London, Indian unicorns and DIFC. Warm intros that compound for life." },
  { n: "03", t: "Cultural fluency as a moat", d: "Negotiate, hire, sell and lead across India, Asia, Europe and MENA. The skill nobody learns in a classroom — and everybody hires for." },
  { n: "04", t: "A global career, not a local job", d: "Walk out positioned for cross-border roles, founder paths, family-office mandates or global P&L responsibility — wherever the opportunity is." },
];

const Outcomes = () => (
  <section id="outcomes" className="py-20 md:py-32">
    <div className="container">
      <div className="max-w-4xl mb-12 md:mb-16">
        <div className="tag-pill mb-4 sm:mb-6">◉ Outcomes</div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
          What you walk away with.<br />
          <em className="italic text-primary not-italic">(A passport that does work.)</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {outcomes.map((o) => (
          <div key={o.n} className="bg-background p-6 sm:p-10 group hover:bg-secondary/40 transition-colors">
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="font-display text-5xl sm:text-6xl text-primary leading-none">{o.n}</span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl mb-2 sm:mb-3">{o.t}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{o.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Outcomes;
