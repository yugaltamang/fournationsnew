import cxoImg from "@/assets/cxo-masterclass.jpg";

const sessions = [
  { q: "How do founders design financially resilient companies before they ever raise external capital?", from: "India · Founder CXO" },
  { q: "How do Asian capital markets price risk differently from the West?", from: "Hong Kong · HKEX / HSBC" },
  { q: "How does a deep-tech idea become a fundable global venture?", from: "London · Imperial Faculty" },
  { q: "How do family offices in MENA decide where capital flows next?", from: "Dubai · DIFC Investor" },
  { q: "How do great products get built — and what makes them scalable?", from: "India · Product CXO" },
  { q: "How do you negotiate across four cultures without losing the deal?", from: "Hong Kong · GBA Operator" },
  { q: "What separates global brands from regional ones?", from: "London · Luxury Brand CMO" },
  { q: "How do supply chains stay resilient through geopolitical shifts?", from: "Hong Kong · Shenzhen GBA" },
  { q: "What makes a leader credible across continents?", from: "India · Founder/CEO" },
  { q: "How do you scale yourself as your company crosses borders?", from: "London · Global Operator" },
];

const CXO = () => (
  <section id="faculty" className="py-32 relative overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="relative">
            <img src={cxoImg} alt="CXO masterclass" loading="lazy" className="w-full aspect-[4/5] object-cover grayscale" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-[260px]">
              <div className="font-mono text-xs uppercase tracking-widest mb-2">10+ Sessions · 4 Nations</div>
              <div className="font-display text-2xl leading-tight">The questions you'd actually ask — answered on the ground.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="tag-pill mb-6">◉ CXO Masterclasses</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-balance">
            Sit across the table from <em className="italic text-primary not-italic">operators in every market</em> you'll work in.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Closed-door, off-record, intimate. Founders and CXOs in India, capital allocators in Hong Kong, faculty and global operators at Imperial London, and family offices in Dubai. Same format everywhere — the questions that don't make it into the press release.
          </p>

          <div className="space-y-1 border-t border-border">
            {sessions.map((s, i) => (
              <div key={i} className="group grid grid-cols-12 gap-4 py-5 border-b border-border hover:bg-secondary/40 transition-colors px-2 -mx-2">
                <div className="col-span-1 font-mono text-xs text-primary pt-1">/{String(i + 1).padStart(2, '0')}</div>
                <div className="col-span-11 md:col-span-8 font-display text-lg italic text-foreground/90">"{s.q}"</div>
                <div className="hidden md:block col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground self-center text-right">{s.from}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CXO;
