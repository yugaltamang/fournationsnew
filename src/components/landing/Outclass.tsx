import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Video, type LucideIcon } from "lucide-react";

import SectionEyebrow from "./SectionEyebrow";

import drop1 from "@/assets/outclass/drop1.webp";
import drop2 from "@/assets/outclass/drop2.webp";
import drop3 from "@/assets/outclass/drop3.webp";
import drop4 from "@/assets/outclass/drop4.webp";
import drop5 from "@/assets/outclass/drop5.webp";
import drop6 from "@/assets/outclass/drop6.webp";
import drop7 from "@/assets/outclass/drop7.webp";
import creator1 from "@/assets/outclass/creator1.webp";
import creator2 from "@/assets/outclass/creator2.webp";
import creator3 from "@/assets/outclass/creator3.webp";
import creator4 from "@/assets/outclass/creator4.webp";
import creator5 from "@/assets/outclass/creator5.webp";

gsap.registerPlugin(ScrollTrigger);

type Stat = { value: string; label: string };
type Module = {
  num: string;
  label: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  images: string[];
  stats?: Stat[];
  brandsLabel?: string;
  brands?: { name: string; rev?: string }[];
  moreCount?: string;
  pullquote?: string;
  competedAt?: string[];
  topicsLabel?: string;
  topics?: string[];
};

const modules: Module[] = [
  {
    num: "1",
    label: "E-COMMERCE",
    title: "Build a D2C brand",
    desc: "A 75-day sprint from product discovery to launching a live D2C brand on Shopify, Amazon, and Flipkart. Real CAC, real ROAS, real revenue.",
    icon: ShoppingCart,
    images: [drop6, drop7, drop1, drop2, drop3, drop4, drop5],
    stats: [
      { value: "₹2.1Cr", label: "Revenue" },
      { value: "55", label: "Teams" },
      { value: "79", label: "Stores" },
    ],
    brandsLabel: "Student-built brands",
    brands: [
      { name: "Ship Happens", rev: "₹37.8L" },
      { name: "OKAMI", rev: "₹33.8L" },
      { name: "TheReelStore", rev: "₹19.3L" },
      { name: "Jugnu", rev: "₹16.5L" },
    ],
    moreCount: "+11 more",
  },
  {
    num: "2",
    label: "PERSONAL BRAND",
    title: "Creators Challenge - London",
    desc: "Build a personal brand across Instagram and YouTube from London. Hooks, retention, and body of work. Graduate as a creator-preneur with real reach.",
    icon: Video,
    images: [creator1, creator2, creator3, creator4, creator5],
    pullquote: "From zero followers to creator-preneurs with real influence.",
    topicsLabel: "7 Key Modules",
    topics: [
      "How to Find Your Niche and Position Yourself as a Creator",
      "How to Build a Winning Content Strategy",
      "How to Create Engaging Content Ideas and Scripts",
      "How to Shoot Content with Confidence",
      "How to Edit and Package High-Quality Content",
      "How to Grow and Optimize Your Content",
      "How to Monetize and Scale Your Personal Brand",
    ],
  },
];

export default function Outclass() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [imgIdx, setImgIdx] = useState<number[]>(modules.map(() => 0));

  // Auto-cycle gallery for active tab
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => {
        const next = [...prev];
        next[activeTab] = (next[activeTab] + 1) % modules[activeTab].images.length;
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-outclass-header] > *", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none reverse" },
      });
      gsap.from("[data-outclass-panel]", {
        opacity: 0,
        y: 48,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-outclass-panel]", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const active = modules[activeTab];
  const currentImg = imgIdx[activeTab];

  return (
    <section
      ref={sectionRef}
      id="outclass"
      className="py-12 sm:py-20 border-t border-border bg-background relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-outclass-header className="max-w-4xl mb-10 sm:mb-14">
          <SectionEyebrow>OUT CLASS</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[0.95] font-medium text-balance">
            Learn it in class. <em className="italic font-normal">Prove it</em> outside.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl">
            Real-world challenges that push students to build, sell, create, and compete, turning theory into tangible outcomes before they graduate.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex border border-border overflow-x-auto scrollbar-hide">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.title}
                onClick={() => setActiveTab(idx)}
                className="flex-1 min-w-[110px] py-3 sm:py-4 px-2 sm:px-4 text-center transition-all duration-300 border-b-2 relative group"
                style={{
                  borderBottomColor: isActive ? "hsl(var(--primary))" : "transparent",
                  background: isActive ? "hsl(var(--card))" : "transparent",
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon
                    size={14}
                    className="transition-colors"
                    style={{ color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
                  />
                  <span
                    className="text-[10px] font-mono font-bold transition-colors"
                    style={{ color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
                  >
                    {mod.num}
                  </span>
                </div>
                <span
                  className="block text-[10px] sm:text-xs font-semibold tracking-tight leading-tight transition-colors"
                  style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                >
                  {mod.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          data-outclass-panel
          className="border border-t-0 border-border bg-card overflow-hidden relative"
          style={{ boxShadow: "inset 0 1px 0 hsl(var(--primary) / 0.15)" }}
        >
          <div className="flex flex-col md:flex-row md:min-h-[480px]">
            {/* Gallery */}
            <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
              {active.images.map((src, idx) => (
                <img
                  key={`${activeTab}-${idx}`}
                  src={src}
                  alt={`${active.title} ${idx + 1}`}
                  loading={idx === currentImg ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{ opacity: currentImg === idx ? 1 : 0 }}
                />
              ))}
              <div className="absolute top-5 left-5 z-20">
                <span className="tag-pill">
                  {active.label}
                </span>
              </div>
              <div className="hidden md:flex absolute bottom-4 left-1/2 z-20 -translate-x-1/2 gap-1.5">
                {active.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Show image ${idx + 1}`}
                    onClick={() =>
                      setImgIdx((prev) => {
                        const next = [...prev];
                        next[activeTab] = idx;
                        return next;
                      })
                    }
                    className="rounded-full transition-all duration-300"
                    style={{
                      background: currentImg === idx ? "hsl(var(--primary))" : "rgba(255,255,255,0.4)",
                      width: currentImg === idx ? "16px" : "6px",
                      height: "6px",
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Data */}
            <div className="relative md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold text-primary">{active.num}</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl leading-[0.95] mb-3">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
                {active.desc}
              </p>


              {active.stats && (
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-5">
                  {active.stats.map((s) => (
                    <div key={s.label}>
                      <span className="block font-display text-xl sm:text-2xl font-medium tabular-nums leading-none">
                        {s.value}
                      </span>
                      <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5 font-mono">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {active.brands && (
                <div className="pt-5 mt-5 border-t border-border">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">
                    {active.brandsLabel}
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {active.brands.map((b) => (
                      <span key={b.name} className="text-xs sm:text-sm text-foreground/80">
                        {b.name}
                        {b.rev && <span className="ml-1 text-[10px] font-mono text-primary/80">{b.rev}</span>}
                      </span>
                    ))}
                    {active.moreCount && (
                      <span className="text-xs text-muted-foreground/60 italic">{active.moreCount}</span>
                    )}
                  </div>
                </div>
              )}

              {active.pullquote && (
                <div className="border-t border-border pt-5">
                  <p className="font-display text-lg sm:text-xl leading-snug max-w-sm">
                    From zero followers to <span className="text-primary">creator-preneurs</span> with real influence.
                  </p>
                </div>
              )}

              {active.competedAt && (
                <div className="border-t border-border pt-5">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">
                    Competed & won at
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {active.competedAt.map((s) => (
                      <span key={s} className="text-xs sm:text-sm text-foreground/80">
                        {s}
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground/60 italic">+more</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
