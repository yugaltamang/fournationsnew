import cxoImg from "@/assets/cxo-masterclass.jpg";
import nationHk from "@/assets/nation-hongkong.jpg";
import immersionImg from "@/assets/immersion-factory.jpg";

const pillars = [
  {
    tag: "Global Exposure",
    image: cxoImg,
    title: "Four countries.",
    titleEm: "One cohort.",
    body: "Live and build across India, Hong Kong, London and Dubai — four of the world's most dynamic business ecosystems.",
    points: [
      "9 months across 4 countries spanning Asia, Europe & MENA",
      "On-ground company visits, factory floors & real boardrooms",
      "Imperial College London and CUHK Hong Kong certificates on completion",
    ],
  },
  {
    tag: "CXO Sessions",
    image: nationHk,
    title: "Learn from leaders",
    titleEm: "across every industry.",
    body: "The faculty isn't academic — it's the people actively running businesses. MDs, founders and senior executives lead sessions as live conversations.",
    points: [
      "Practising leaders from fintech, consumer, manufacturing & tech",
      "Live conversations — not lectures. Unfiltered and experience-first",
      "Access to the Masters' Union alumni network for life",
    ],
  },
  {
    tag: "Learning Module",
    image: immersionImg,
    title: "Build ventures,",
    titleEm: "not just business plans.",
    body: "Every term ends with a real, working business output. You leave every country with something tangible.",
    points: [
      "Launch a live D2C brand — Delhi, India (Term 1)",
      "Build a cross-border GBA venture — CUHK, Hong Kong (Term 2)",
      "Creator Challenge — Imperial College London (Term 3)",
    ],
  },
];

const CXO = () => (
  <section id="faculty" className="py-32 relative overflow-hidden">
    <div className="container">
      <div className="max-w-3xl mb-20">
        <div className="tag-pill mb-6">◉ Why This Programme</div>
        <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-balance">
          Hands-on learning for <em className="italic text-primary not-italic">real business impact.</em>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Direct execution over passive learning. Every term, every country, every session is engineered to build real skills and real outcomes — not slide decks.
        </p>
      </div>

      <div className="space-y-24">
        {pillars.map((p, i) => (
          <div key={i} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={p.image} alt={p.tag} loading="lazy" className="w-full aspect-[4/5] object-cover grayscale" />
                <div className="absolute -bottom-5 -left-5 bg-foreground text-background px-4 py-2 font-mono text-xs uppercase tracking-widest">
                  /{String(i + 1).padStart(2, '0')} · {p.tag}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{p.tag}</div>
              <h3 className="font-display text-4xl md:text-5xl leading-[1] mb-6 text-balance">
                {p.title} <em className="italic text-primary not-italic">{p.titleEm}</em>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl">{p.body}</p>

              <div className="border-t border-border">
                {p.points.map((pt, j) => (
                  <div key={j} className="grid grid-cols-12 gap-4 py-5 border-b border-border">
                    <div className="col-span-1 font-mono text-xs text-primary pt-1">/{String(j + 1).padStart(2, '0')}</div>
                    <div className="col-span-11 text-lg text-foreground/90">{pt}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CXO;
