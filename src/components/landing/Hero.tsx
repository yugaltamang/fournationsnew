import { useEffect, useState } from "react";
import { ApplyWidget } from "./ApplyWidget";
import imperialLogo from "@/assets/university-logos/imperial.png.asset.json";
import cuhkLogo from "@/assets/university-logos/cuhk.png.asset.json";
import uniMastersUnion from "@/assets/hero/uni-masters-union.webp";
import uniImperial from "@/assets/hero/uni-imperial.webp";
import uniCuhk from "@/assets/hero/uni-cuhk.webp";
import addverbLogo from "@/assets/immersion-logos/addverb.png.asset.json";
import itcLogo from "@/assets/immersion-logos/itc.png.asset.json";
import sonalikaLogo from "@/assets/immersion-logos/sonalika.png.asset.json";
import hondaLogo from "@/assets/immersion-logos/honda.png.asset.json";
import bluetokaiLogo from "@/assets/immersion-logos/bluetokai.png.asset.json";
import shiprocketLogo from "@/assets/immersion-logos/shiprocket.png.asset.json";
import niviaLogo from "@/assets/immersion-logos/nivia.png.asset.json";
import lpuLogo from "@/assets/immersion-logos/lpu.png.asset.json";
import arctosLogo from "@/assets/immersion-logos/arctos.png.asset.json";
import iflytekLogo from "@/assets/immersion-logos/iflytek.png.asset.json";
import airportHkLogo from "@/assets/immersion-logos/airport-authority-hk.png.asset.json";

const UNIVERSITY_SLIDES = [
  { src: uniMastersUnion, name: "Masters' Union", location: "Gurugram, India" },
  { src: uniImperial, name: "Imperial College London", location: "London, United Kingdom" },
  { src: uniCuhk, name: "CUHK Business School", location: "Hong Kong SAR" },
];

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
  iFlytek: iflytekLogo.url,
  "Airport Authority Hong Kong": airportHkLogo.url,
};

const LOGO_SIZE_CLASSES: Record<string, string> = {
  Shiprocket: "max-h-5 sm:max-h-6 max-w-[80px] sm:max-w-[100px]",
  Arctos: "max-h-5 sm:max-h-6 max-w-[80px] sm:max-w-[100px]",
  "Blue Tokai": "max-h-9 sm:max-h-10 max-w-[130px] sm:max-w-[160px]",
};

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
  "iFlytek",
  "Airport Authority Hong Kong",
];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % UNIVERSITY_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div className="container relative grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7 animate-fade-up">

        <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="w-5 h-px bg-primary" />
          <span>Global Business Programme</span>
        </div>

        <h1 className="font-display text-[clamp(1.6rem,5.2vw,3.75rem)] leading-[0.98] font-medium text-balance break-words">
          Four Nations.
          <br />
          <em className="italic mu-hero-gradient-text not-italic font-normal">Three Campuses.</em>
          <br />
          One Career Without Borders.
        </h1>

        <p className="mt-8 sm:mt-10 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          Study across four global business hubs alongside three of the world's top-ranked institutions — Masters' Union, Imperial College London, and CUHK Business School — culminating in a Dubai finale. Earn three credentials and a lifelong global network.
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
            <button type="button" className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 whitespace-nowrap bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:shadow-bold transition-all">
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </ApplyWidget>
          <a href="#nations" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 whitespace-nowrap border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-x-3 sm:gap-6 max-w-3xl border-t border-border pt-6 sm:pt-8">
          {[
            { n: "9", l: "Months · Core Program" },
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
          ].map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-display text-2xl sm:text-4xl md:text-5xl font-medium leading-none">{s.n}</div>
              <div className="text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs sm:text-sm text-muted-foreground max-w-3xl">
          Limited to 65 participants only.
        </p>
      </div>

      <div className="hidden md:block md:col-span-5 md:-mt-6 lg:-mt-10">
        <div className="relative h-[480px] lg:h-[640px] overflow-hidden">
          {UNIVERSITY_SLIDES.map((s, i) => (
            <img
              key={s.name}
              src={s.src}
              alt={`${s.name} — ${s.location}`}
              width={900}
              height={1200}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40" />

          <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="font-display text-lg text-foreground leading-tight truncate">{UNIVERSITY_SLIDES[slide].name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 truncate">{UNIVERSITY_SLIDES[slide].location}</div>
            </div>
            <div className="flex gap-1.5 shrink-0">
              {UNIVERSITY_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show university ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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
                className={`object-contain ${LOGO_SIZE_CLASSES[co] ?? "max-h-7 sm:max-h-8 max-w-[110px] sm:max-w-[140px]"}`}
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
};

export default Hero;
