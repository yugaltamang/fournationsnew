import india from "@/assets/nation-india.jpg";
import hk from "@/assets/nation-hongkong.jpg";
import london from "@/assets/nation-london.jpg";
import dubai from "@/assets/nation-dubai.jpg";

const nations = [
  {
    n: "01",
    country: "India",
    city: "Delhi NCR · Gurugram",
    partner: "Masters' Union Campus",
    img: india,
    title: "Build the foundation.",
    desc: "Your operating base. Read P&Ls, ship products, run GTM sprints and pitch to founders of Razorpay, Zomato, Nykaa & Lenskart. Walk the floors of ITC, Dixon, NIVEA and Sonalika. You leave India having already done the work — not having only studied it.",
    outcome: "Operate a venture end-to-end: finance, product, GTM, ops & leadership.",
    tags: ["Finance & FinTech", "Product & AI", "Sales & GTM", "Operations", "Leadership"],
  },
  {
    n: "02",
    country: "Hong Kong",
    city: "Central · Greater Bay Area",
    partner: "CUHK Business School",
    img: hk,
    title: "Read the East.",
    desc: "Asia's capital gateway. Sessions at CUHK Business School, trading floors at HKEX & HSBC, and a Greater Bay Area sprint into Shenzhen's hardware ecosystem. Decode how Asian capital, manufacturing and platforms actually move.",
    outcome: "Navigate Asian capital markets, supply chains and cross-border deals.",
    tags: ["Global Finance", "Asia Strategy", "Supply Chain", "FinTech"],
  },
  {
    n: "03",
    country: "United Kingdom",
    city: "London",
    partner: "Imperial College London",
    img: london,
    title: "Command global capital.",
    desc: "Imperial College London — innovation, deep tech and entrepreneurship at one of the world's top business schools. Decode PE/VC, M&A, luxury brand strategy and the creator-economy playbooks shaping the West.",
    outcome: "Pitch, raise and scale a venture at global capital standards.",
    tags: ["Capital Markets", "Tech & Innovation", "Luxury & Brand", "Strategy"],
  },
  {
    n: "04",
    country: "Dubai",
    city: "DIFC · UAE",
    partner: "Optional Immersion",
    img: dubai,
    title: "Operate at the crossroads.",
    desc: "Optional finale in the world's fastest-growing business hub. Inside DIFC, family offices, sovereign wealth and the founders building MENA's next wave. The bridge between Asian capital and Western markets.",
    outcome: "Position yourself for MENA opportunities, family offices & global mobility.",
    tags: ["MENA Markets", "Family Office", "Free Zones", "Global Mobility"],
  },
];

const Nations = () => (
  <section id="nations" className="py-32 relative">
    <div className="container">
      <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
        <div>
          <div className="tag-pill mb-6">◉ The Journey</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl text-balance">
            Four nations.<br />
            <em className="italic mu-hero-gradient-text not-italic">Four markets.</em><br />
            One global operator.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          The journey is sequential, not symbolic. Build in India. Read Asia from Hong Kong. Raise capital in London. Bridge the world from Dubai. Each stop adds a market, a culture and a professional muscle you cannot acquire from a textbook.
        </p>
      </div>

      {/* Journey strip */}
      <div className="hidden md:flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">India</span>
        <span>→</span>
        <span className="text-primary">Hong Kong · CUHK</span>
        <span>→</span>
        <span className="text-primary">London · Imperial</span>
        <span>→</span>
        <span>Dubai (optional)</span>
      </div>

      <div className="grid gap-6">
        {nations.map((n, i) => (
          <article key={n.n} className={`group grid md:grid-cols-12 gap-6 border border-border p-6 hover:border-primary transition-colors ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="md:col-span-5 relative overflow-hidden group/img">
              <img src={n.img} alt={n.country} loading="lazy" className={`w-full h-72 md:h-full object-cover grayscale ${n.n !== "04" ? "group-hover:grayscale-0" : ""} hover:scale-105 transition-all duration-700`} />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 font-mono text-xs uppercase tracking-widest">
                {n.n} / 04
              </div>
              {n.n === "04" && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  Optional
                </div>
              )}
            </div>
            <div className="md:col-span-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{n.city}</div>
                    <h3 className="font-display text-4xl md:text-5xl mt-1">{n.country}</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Partner</div>
                    <div className="font-display text-base text-primary mt-1">{n.partner}</div>
                  </div>
                </div>
                <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-snug mb-4">"{n.title}"</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{n.desc}</p>
                <div className="bg-primary text-primary-foreground p-5 -mx-1 shadow-[6px_6px_0_0_hsl(var(--foreground))]">
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-2">You walk away able to →</div>
                  <div className="font-display text-xl md:text-2xl leading-snug">{n.outcome}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {n.tags.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Nations;
