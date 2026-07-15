import { ApplyWidget } from "./ApplyWidget";
// Hero showcases iconic monuments for the 4 cohort cities
import imperialLogo from "@/assets/university-logos/imperial.png.asset.json";
import cuhkLogo from "@/assets/university-logos/cuhk.png.asset.json";
import fourCountriesImage from "@/assets/hero/four-countries.png";
import addverbLogo from "@/assets/immersion-logos/addverb.png.asset.json";
import itcLogo from "@/assets/immersion-logos/itc.png.asset.json";
import sonalikaLogo from "@/assets/immersion-logos/sonalika.png.asset.json";
import hondaLogo from "@/assets/immersion-logos/honda.png.asset.json";
import bluetokaiLogo from "@/assets/immersion-logos/bluetokai.png.asset.json";
import shiprocketLogo from "@/assets/immersion-logos/shiprocket.png.asset.json";
import niviaLogo from "@/assets/immersion-logos/nivia.png.asset.json";
import lpuLogo from "@/assets/immersion-logos/lpu.png.asset.json";
import arctosLogo from "@/assets/immersion-logos/arctos.png.asset.json";

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
};

const SMALL_LOGOS = new Set(["Shiprocket", "Nivia Sports", "Arctos", "Addverb"]);

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

        <h1 className="font-display text-[clamp(2rem,7vw,5rem)] leading-[0.95] font-medium text-balance break-words">
          Four Countries.
          <br />
          <em className="italic mu-hero-gradient-text not-italic font-normal">Three Credentials.</em>
          <br />
          One Global Career.
        </h1>

        <p className="mt-8 sm:mt-10 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          Study across four global business hubs with Masters' Union, Imperial College London, and CUHK Business School, culminating in a Dubai finale. Earn three credentials and a lifelong global network.
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
            <button type="button" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:shadow-bold transition-all">
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </ApplyWidget>
          <a href="#nations" className="inline-flex items-center justify-center gap-3 border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors">
            See the Journey
          </a>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 sm:gap-6 max-w-3xl border-t border-border pt-6 sm:pt-8">
          {[
            { n: "9", l: "Months · Core Program" },
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "2", l: "Global University Partners" },
          ].map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-none">{s.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden border border-border shadow-bold">
            <img
              src={threeUniversitiesImage}
              alt="Imperial College London, CUHK Hong Kong, and India Gate New Delhi — three university cities"
              width={912}
              height={1200}
              className="w-full h-[620px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/85">
              <div className="flex items-center gap-2"><span className="w-4 h-px bg-primary" />London · Imperial College</div>
              <div className="flex items-center gap-2"><span className="w-4 h-px bg-primary" />Hong Kong · CUHK</div>
              <div className="flex items-center gap-2"><span className="w-4 h-px bg-primary" />New Delhi · Masters' Union</div>
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
