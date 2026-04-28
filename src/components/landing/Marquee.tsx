const items = [
  "CUHK Business School", "Imperial College London", "DIFC Dubai",
  "ITC", "Razorpay", "Pine Labs", "Dixon", "Honda", "NIVEA",
  "Sonalika", "Mercedes-Benz", "Blue Tokai", "Mamaearth", "Boat",
  "Nykaa", "Lenskart", "Delhivery", "Flipkart", "Ola", "Swiggy", "Zomato",
  "HSBC", "HKEX", "LVMH",
];

const Marquee = () => (
  <section className="border-y border-border bg-secondary/30 py-6 overflow-hidden">
    <div className="flex items-center gap-12 marquee-mask">
      <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground pl-4">
        University & Industry Partners →
      </span>
      <div className="flex gap-12 ticker shrink-0">
        {[...items, ...items].map((b, i) => (
          <span key={i} className="font-display text-2xl text-foreground/80 whitespace-nowrap">
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
