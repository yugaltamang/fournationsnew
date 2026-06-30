const companies = [
  "Addverb",
  "ITC Limited",
  "Sonalika Tractors",
  "Honda",
  "Blue Tokai",
  "Shiprocket",
  "Nivia Sports",
  "LPU Jalandhar",
  "Arctos",
  "Blenheim Chalcot",
  "Ripple",
  "Octopus Energy",
  "Deloitte",
  "Candesic",
  "Burberry",
  "Johnson & Johnson",
  "Hong Kong Stock Exchange",
  "HSBC",
  "Alibaba Group",
  "ByteDance",
  "Kerry Logistics",
  "Li & Fung",
  "SenseTime",
  "Tencent",
];

const Marquee = () => (
  <section className="border-y border-border bg-secondary/30 py-14 sm:py-20">
    <div className="container">
      <div className="max-w-3xl mb-10 md:mb-14">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4 sm:mb-6">
          <span className="w-8 h-px bg-primary" />
          <span>University &amp; Industry Partners</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance">
          Inside the companies that shape <em className="italic mu-hero-gradient-text not-italic">global business.</em>
        </h2>
      </div>
    </div>

    {/* Ticker */}
    <div className="relative overflow-hidden marquee-mask py-4 sm:py-5">
      <div className="ticker flex whitespace-nowrap">
        {[...companies, ...companies].map((co, i) => (
          <span key={i} className="inline-flex items-center gap-6 sm:gap-8 px-3 sm:px-4">
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-foreground/90 uppercase tracking-tight">
              {co}
            </span>
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
