import cxoImg from "@/assets/cxo-masterclass.jpg";

const sessions = [
  { q: "How do founders design financially resilient companies before they ever raise external capital?", from: "Accel / Blume Ventures" },
  { q: "How do investors evaluate businesses beyond financial statements?", from: "Sequoia / Lightspeed" },
  { q: "How do great products get built — and what makes them scalable?", from: "Zoho / Freshworks" },
  { q: "How are technology and product decisions shaping the next decade?", from: "Fractal / Yellow.ai" },
  { q: "What makes some brands win customer trust while others struggle?", from: "Mamaearth / Boat" },
  { q: "How do brands scale while maintaining authenticity?", from: "Nykaa / Lenskart" },
  { q: "Why do some organizations execute flawlessly at scale?", from: "Delhivery / Shiprocket" },
  { q: "How do companies build resilient supply chains?", from: "Reliance Retail / Flipkart" },
  { q: "What separates leaders who build lasting organizations?", from: "Zomato / Swiggy" },
  { q: "How do founders scale themselves as their companies scale?", from: "Ola / Urban Company" },
];

const CXO = () => (
  <section id="faculty" className="py-32 relative overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="relative">
            <img src={cxoImg} alt="CXO masterclass" loading="lazy" className="w-full aspect-[4/5] object-cover grayscale" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-[260px]">
              <div className="font-mono text-xs uppercase tracking-widest mb-2">10+ Sessions</div>
              <div className="font-display text-2xl leading-tight">No theatre. Just the questions you'd actually ask.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="tag-pill mb-6">◉ CXO Masterclasses</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-balance">
            Sit across the table from <em className="italic text-primary not-italic">the people who built the companies</em> you read about.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Closed-door, off-record, intimate. CXOs from Razorpay, Nykaa, Lenskart, Zomato, Mamaearth, Flipkart and more — answering the questions that don't make it into the press release.
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
