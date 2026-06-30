import { useEffect, useState } from "react";

const groups = [
  {
    label: "India",
    companies: [
      { name: "Addverb", domain: "addverb.com" },
      { name: "ITC Limited", domain: "itcportal.com" },
      { name: "Sonalika Tractors", domain: "sonalika.com" },
      { name: "Honda", domain: "honda.com" },
      { name: "Blue Tokai", domain: "bluetokaicoffee.com" },
      { name: "Shiprocket", domain: "shiprocket.in" },
      { name: "Nivia Sports", domain: "niviasports.com" },
      { name: "LPU Jalandhar", domain: "lpu.in" },
    ],
  },
  {
    label: "London",
    companies: [
      { name: "Arctos", domain: "arctos.com" },
      { name: "Blenheim Chalcot", domain: "blenheimchalcot.com" },
      { name: "Ripple", domain: "ripple.com" },
      { name: "Octopus Energy", domain: "octopus.energy" },
      { name: "Deloitte", domain: "deloitte.com" },
      { name: "Candesic", domain: "candesic.com" },
      { name: "Burberry", domain: "burberry.com" },
      { name: "Johnson & Johnson", domain: "jnj.com" },
    ],
  },
  {
    label: "Hong Kong",
    companies: [
      { name: "Hong Kong Stock Exchange", domain: "hkex.com.hk" },
      { name: "HSBC", domain: "hsbc.com" },
      { name: "Alibaba Group", domain: "alibabagroup.com" },
      { name: "ByteDance", domain: "bytedance.com" },
      { name: "Kerry Logistics", domain: "kerrylogistics.com" },
      { name: "Li & Fung", domain: "lifung.com" },
      { name: "SenseTime", domain: "sensetime.com" },
      { name: "Tencent", domain: "tencent.com" },
    ],
  },
];

const Logo = ({ name, domain }: { name: string; domain: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-display text-sm sm:text-base text-center leading-tight text-foreground/90">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      loading="lazy"
      decoding="async"
      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      onError={() => setError(true)}
    />
  );
};

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

      <div className="space-y-10 md:space-y-14">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {g.label}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border">
              {g.companies.map((co) => (
                <div
                  key={co.name}
                  className="bg-background flex items-center justify-center p-6 sm:p-8 md:p-10 aspect-[16/10] hover:bg-secondary/40 transition-colors"
                  title={co.name}
                >
                  <Logo name={co.name} domain={co.domain} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Marquee;
