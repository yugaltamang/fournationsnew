const items = [
  "CUHK Business School", "Imperial College London", "DIFC Dubai",
  "ITC", "Razorpay", "Pine Labs", "Dixon", "Honda", "NIVEA",
  "Sonalika", "Mercedes-Benz", "Blue Tokai", "Mamaearth", "Boat",
  "Nykaa", "Lenskart", "Delhivery", "Flipkart", "Ola", "Swiggy", "Zomato",
  "HSBC", "HKEX", "LVMH",
];

const Row = () => (
  <div className="flex shrink-0 items-center gap-12 pr-12">
    {items.map((b, i) => (
      <span key={i} className="flex items-center gap-12 font-display text-lg sm:text-2xl text-foreground/80 whitespace-nowrap">
        {b}
        <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <section className="border-y border-border bg-secondary/30 py-6 overflow-hidden">
    <div className="container flex items-center gap-4 sm:gap-8">
      <span className="hidden sm:block shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground border-r border-border pr-6">
        University & Industry Partners →
      </span>
      <div className="relative flex-1 overflow-hidden marquee-mask">
        <div className="flex w-max ticker">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  </section>
);

export default Marquee;
