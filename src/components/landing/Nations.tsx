import india from "@/assets/nation-india.jpg";
import london from "@/assets/nation-london.jpg";
import china from "@/assets/nation-china.jpg";
import hk from "@/assets/nation-hongkong.jpg";

const nations = [
  {
    n: "01",
    country: "India",
    city: "Delhi NCR · Jalandhar",
    img: india,
    title: "Build it from zero.",
    desc: "Walk the floors of ITC, Dixon, NIVEA & Sonalika. Validate ideas in Chandni Chowk. Pitch to Razorpay & Pine Labs.",
    tags: ["Finance & FinTech", "Product & AI", "GTM & Sales", "Operations", "Leadership"],
    hours: 108,
  },
  {
    n: "02",
    country: "United Kingdom",
    city: "London",
    img: london,
    title: "Command global capital.",
    desc: "Decode how PE/VC funds, M&A and luxury brands operate at the world's financial capital. Build your creator monetization playbook.",
    tags: ["Global Capital", "Strategy & Tech", "Luxury & Brand", "Experience Economy"],
    hours: 90,
  },
  {
    n: "03",
    country: "China",
    city: "Shanghai · Beijing",
    img: china,
    title: "Decode the world's factory.",
    desc: "How China leapfrogged the West in platforms, manufacturing and AI. Inside Alibaba, ByteDance, Tencent & SenseTime.",
    tags: ["Digital Platforms", "Supply Chain", "Data & AI", "Cross-Cultural"],
    hours: 60,
  },
  {
    n: "04",
    country: "Hong Kong SAR",
    city: "Central · GBA",
    img: hk,
    title: "Where East meets capital.",
    desc: "Trade desks at HKEX & HSBC. CUHK FinTech seminars. Greater Bay Area market-entry sprint.",
    tags: ["FinTech", "Market Entry", "GBA Strategy"],
    hours: 30,
  },
];

const Nations = () => (
  <section id="nations" className="py-32 relative">
    <div className="container">
      <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
        <div>
          <div className="tag-pill mb-6">◉ The Geography of Mastery</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl text-balance">
            Four nations.<br />
            <em className="italic text-primary not-italic">One operating system</em><br />
            for global builders.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Each country teaches a different muscle. India for execution. London for capital. China for scale. Hong Kong for arbitrage. You graduate fluent in all four.
        </p>
      </div>

      <div className="grid gap-6">
        {nations.map((n, i) => (
          <article key={n.n} className={`group grid md:grid-cols-12 gap-6 border border-border p-6 hover:border-primary transition-colors ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="md:col-span-5 relative overflow-hidden">
              <img src={n.img} alt={n.country} loading="lazy" className="w-full h-72 md:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 font-mono text-xs uppercase tracking-widest">
                {n.n} / 04
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{n.city}</div>
                    <h3 className="font-display text-4xl md:text-5xl mt-1">{n.country}</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-primary">{n.hours}h</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">contact</div>
                  </div>
                </div>
                <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-snug mb-4">"{n.title}"</p>
                <p className="text-muted-foreground leading-relaxed">{n.desc}</p>
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
