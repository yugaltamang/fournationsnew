import { ApplyWidget } from "./ApplyWidget";
// Hero showcases iconic monuments for the 4 cohort cities
import imperialLogo from "@/assets/university-logos/imperial.png.asset.json";
import cuhkLogo from "@/assets/university-logos/cuhk.png.asset.json";
import addverbLogo from "@/assets/immersion-logos/addverb.png.asset.json";
import itcLogo from "@/assets/immersion-logos/itc.png.asset.json";
import sonalikaLogo from "@/assets/immersion-logos/sonalika.png.asset.json";
import hondaLogo from "@/assets/immersion-logos/honda.png.asset.json";
import bluetokaiLogo from "@/assets/immersion-logos/bluetokai.png.asset.json";
import shiprocketLogo from "@/assets/immersion-logos/shiprocket.png.asset.json";
import niviaLogo from "@/assets/immersion-logos/nivia.png.asset.json";
import lpuLogo from "@/assets/immersion-logos/lpu.png.asset.json";
import arctosLogo from "@/assets/immersion-logos/arctos.png.asset.json";
import blenheimLogo from "@/assets/immersion-logos/blenheim.png.asset.json";
import rippleLogo from "@/assets/immersion-logos/ripple.png.asset.json";
import octopusLogo from "@/assets/immersion-logos/octopus.png.asset.json";
import deloitteLogo from "@/assets/immersion-logos/deloitte.png.asset.json";
import candesicLogo from "@/assets/immersion-logos/candesic.png.asset.json";
import burberryLogo from "@/assets/immersion-logos/burberry.png.asset.json";
import jnjLogo from "@/assets/immersion-logos/jnj.png.asset.json";
import hkexLogo from "@/assets/immersion-logos/hkex.png.asset.json";
import hsbcLogo from "@/assets/immersion-logos/hsbc.png.asset.json";
import alibabaLogo from "@/assets/immersion-logos/alibaba.png.asset.json";
import bytedanceLogo from "@/assets/immersion-logos/bytedance.png.asset.json";
import kerryLogo from "@/assets/immersion-logos/kerry.png.asset.json";
import lifungLogo from "@/assets/immersion-logos/lifung.png.asset.json";
import sensetimeLogo from "@/assets/immersion-logos/sensetime.png.asset.json";
import tencentLogo from "@/assets/immersion-logos/tencent.png.asset.json";

const LOGO_MAP: Record<string, string> = {
  Addverb: addverbLogo.url,
  "ITC Limited": itcLogo.url,
  "Sonalika Tractors": sonalikaLogo.url,
  Honda: hondaLogo.url,
  "Blue Tokai": bluetokaiLogo.url,
  Shiprocket: shiprocketLogo.url,
  "Nivia Sports": niviaLogo.url,
  "LPU Jalandhar": lpuLogo.url,
  Arctos: arctosLogo.url,
  "Blenheim Chalcot": blenheimLogo.url,
  Ripple: rippleLogo.url,
  "Octopus Energy": octopusLogo.url,
  Deloitte: deloitteLogo.url,
  Candesic: candesicLogo.url,
  Burberry: burberryLogo.url,
  "Johnson & Johnson": jnjLogo.url,
  "Hong Kong Stock Exchange": hkexLogo.url,
  HSBC: hsbcLogo.url,
  "Alibaba Group": alibabaLogo.url,
  ByteDance: bytedanceLogo.url,
  "Kerry Logistics": kerryLogo.url,
  "Li & Fung": lifungLogo.url,
  SenseTime: sensetimeLogo.url,
  Tencent: tencentLogo.url,
};

const SMALL_LOGOS = new Set(["Shiprocket", "Nivia Sports"]);

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
];

const Hero = () => (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7 animate-fade-up">

        <h1 className="font-display text-[clamp(2.25rem,9vw,6rem)] leading-[0.95] font-medium text-balance break-words">
          Four <em className="italic mu-hero-gradient-text not-italic font-normal">Countries.</em>
          <br />
          One Transformative Journey.
        </h1>

        <p className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Study across three world-class institutions: Masters' Union, Imperial College London, and CUHK, with an optional Dubai finale to conclude your journey.
        </p>

        <div className="mt-6 sm:mt-8">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="w-6 h-px bg-muted-foreground" />
            <span>In Partnership With</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              { name: "Imperial College London", url: imperialLogo.url },
              { name: "The Chinese University of Hong Kong", url: cuhkLogo.url },
            ].map((u) => (
              <div key={u.name} className="inline-flex items-center gap-3">
                <img
                  src={u.url}
                  alt={u.name}
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <span className="font-display text-xs sm:text-sm text-foreground/85 leading-tight max-w-[9rem]">
                  {u.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <ApplyWidget>
            <button type="button" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-sm hover:shadow-bold transition-all">
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </ApplyWidget>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5 sm:gap-6 max-w-3xl border-t border-border pt-6 sm:pt-8">
          {[
            { n: "9", l: "Months · Core Program" },
            { n: "1", l: "Week · Optional Dubai" },
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
            { n: "15+", l: "Business Immersions" },
          ].map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-none">{s.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5" />
    </div>

    <div className="container mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-border relative z-10">
      <div className="flex items-center gap-3 mb-5 sm:mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="w-6 h-px bg-muted-foreground" />
        <span>University &amp; Industry Partners</span>
      </div>
      <div className="relative overflow-hidden marquee-mask py-3 sm:py-4">
        <div className="ticker flex whitespace-nowrap">
          {[...companies, ...companies].map((co, i) => (
            <span key={i} className="inline-flex items-center gap-6 sm:gap-8 px-3 sm:px-4">
            <span
              title={co}
              className="inline-flex h-12 sm:h-14 items-center justify-center border border-border bg-background px-4 sm:px-5"
            >
              <img
                src={LOGO_MAP[co]}
                alt={co}
                loading="lazy"
                decoding="async"
                className={`object-contain ${
                  SMALL_LOGOS.has(co)
                    ? "max-h-5 sm:max-h-6 max-w-[80px] sm:max-w-[100px]"
                    : "max-h-8 sm:max-h-10 max-w-[120px] sm:max-w-[152px]"
                }`}
              />
            </span>
            <span className="text-primary/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
