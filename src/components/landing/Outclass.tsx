import { useState } from "react";
import { ShoppingCart, Rocket, Globe } from "lucide-react";
import indiaImg from "@/assets/nation-india.webp";
import londonImg from "@/assets/nation-london.webp";
import hkImg from "@/assets/nation-hongkong.webp";

type Module = {
  num: string;
  label: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  outcome: string;
};

const modules: Module[] = [
  {
    num: "1",
    label: "Term 1 · India",
    title: "D2C Brand Sprint",
    desc: "Build a real D2C brand from scratch - product selection, unit economics, Shopify store, marketplaces and performance marketing. You ship, sell and scale before leaving India.",
    icon: ShoppingCart,
    image: indiaImg,
    outcome: "Operate a venture end-to-end",
  },
  {
    num: "2",
    label: "Term 2 · London",
    title: "Startup Pitch",
    desc: "Identify a high-impact problem, design a differentiated solution, build an MVP and craft a pitch deck that wins investor confidence on a global stage.",
    icon: Rocket,
    image: londonImg,
    outcome: "Pitch and raise at global standards",
  },
  {
    num: "3",
    label: "Term 3 · Hong Kong",
    title: "GBA Venture",
    desc: "Map the Greater Bay Area opportunity, identify cross-border partners and design a market-entry strategy for a venture that bridges Hong Kong and mainland China.",
    icon: Globe,
    image: hkImg,
    outcome: "Navigate Asian capital & supply chains",
  },
];

const Outclass = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = modules[activeTab];
  const Icon = active.icon;

  return (
    <section
      id="outclass"
      className="py-16 sm:py-20 md:py-28 border-t border-border bg-background relative overflow-hidden"
    >
      {/* Ambient grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4 sm:mb-6">
            <span className="w-8 h-px bg-primary" />
            <span>Out Class</span>
            <span className="text-muted-foreground/50">/ 03 Challenges</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
            Learn it in class.{" "}
            <em className="italic mu-hero-gradient-text not-italic">Prove it</em> outside.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Every term ends with a real business output. Three challenges, three countries, three tangible ventures.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex border border-border overflow-x-auto scrollbar-hide">
          {modules.map((mod, idx) => {
            const TabIcon = mod.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.title}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 min-w-[140px] py-3 sm:py-4 px-2 sm:px-4 text-center transition-all duration-300 border-b-2 relative group ${
                  isActive
                    ? "bg-secondary/40 border-primary"
                    : "bg-transparent border-transparent hover:bg-secondary/20"
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <TabIcon
                    size={14}
                    className={`transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <span
                    className={`text-[10px] font-mono font-bold transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {mod.num}
                  </span>
                </div>
                <span
                  className={`block text-[10px] sm:text-xs font-semibold tracking-tight leading-tight transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {mod.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          className="border border-t-0 border-border bg-secondary/10 overflow-hidden relative"
          style={{ boxShadow: "inset 0 1px 0 hsl(var(--primary) / 0.15)" }}
        >
          <div className="flex flex-col md:flex-row md:min-h-[480px]">
            {/* Gallery */}
            <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
              <img
                key={active.image}
                src={active.image}
                alt={active.title}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute top-5 left-5 z-20">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white bg-black/60 px-3 py-1.5 backdrop-blur-sm border border-white/10">
                  {active.label}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Data */}
            <div className="relative md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={18} className="text-primary" />
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.25em]">
                  Challenge {active.num}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[0.95] mb-3">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
                {active.desc}
              </p>

              <div className="border-t border-border pt-5">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">
                  You walk away able to
                </span>
                <p className="font-display text-lg sm:text-xl leading-snug max-w-sm">
                  {active.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outclass;
