import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Download, Volume2, VolumeX } from "lucide-react";
import { ApplyWidget } from "./ApplyWidget";
import { LeadMatrixDialog } from "./LeadMatrixDialog";
import { useVisitorCountry } from "@/hooks/use-visitor-country";
import { isIndia } from "@/lib/visitor-country";
import imperialLogo from "@/assets/university-logos/imperial-lifelong-learning-white.png.asset.json";
import cuhkLogo from "@/assets/university-logos/cuhk.png.asset.json";
import tetrLogo from "@/assets/university-logos/tetr-college-logo-white.png.asset.json";
import story1080 from "@/assets/hero/four-nations-story-1080.mp4.asset.json";
import story540 from "@/assets/hero/four-nations-story-540.mp4.asset.json";
import storyPoster from "@/assets/hero/four-nations-story-poster.webp.asset.json";
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

const BROCHURE_WIDGET_ID = "c0fe7323-8c79-42a6-9e43-2006380caa54";

const Hero = () => {
  const [muted, setMuted] = useState(true);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const visitorCountry = useVisitorCountry();
  const showBrochureCta = isIndia(visitorCountry);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const [videoOffset, setVideoOffset] = useState(0);

  // Keep the film's top edge level with the "Study across…" paragraph.
  useEffect(() => {
    const sync = () => {
      const grid = gridRef.current;
      const copy = copyRef.current;
      if (!grid || !copy) return;
      const offset = copy.getBoundingClientRect().top - grid.getBoundingClientRect().top;
      setVideoOffset(Math.max(0, Math.round(offset)));
    };
    sync();
    const observer = new ResizeObserver(sync);
    if (gridRef.current) observer.observe(gridRef.current);
    window.addEventListener("resize", sync);
    document.fonts?.ready.then(sync).catch(() => {});
    // The display face can arrive seconds after first paint and reflow the
    // headline; keep tracking the paragraph until font loading settles.
    let ticks = 0;
    const poll = window.setInterval(() => {
      sync();
      ticks += 1;
      if ((document.fonts?.status === "loaded" && ticks > 4) || ticks > 40) {
        window.clearInterval(poll);
      }
    }, 100);
    return () => {
      observer.disconnect();
      window.clearInterval(poll);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
    if (muted) void v.play();
  };
  return (
  <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
    <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

    <div
      ref={gridRef}
      className="container relative grid md:grid-cols-12 gap-10 items-start"
      style={{ "--video-offset": `${videoOffset}px` } as CSSProperties}
    >
        <div className="md:col-span-7 animate-fade-up">

        <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 font-mono text-[clamp(6.4px,2vw,9px)] md:text-[clamp(7.5px,1.1vw,8.5px)] lg:text-[clamp(9px,0.95vw,11px)] tracking-[0.12em] text-muted-foreground whitespace-nowrap">
          <span className="w-4 sm:w-5 h-px bg-primary shrink-0" />
          <span>Post Graduate Diploma (Four Nations Global Business)<span className="text-primary">*</span></span>
        </div>

        <h1 className="font-display text-[clamp(1.6rem,5.2vw,3.75rem)] leading-[0.98] font-medium text-balance break-words">
          Four Nations.
          <br />
          <em className="italic mu-hero-gradient-text not-italic font-normal">Four Campuses.</em>
          <br />
          One Career Without Borders.
        </h1>

        <p ref={copyRef} className="mt-8 sm:mt-10 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          Study across four global business hubs alongside three of the world's top-ranked institutions — Masters' Union, Imperial College London, and CUHK Business School — culminating in a Dubai finale at TETR College of Business. Earn four credentials and a lifelong global network.
        </p>

        <div className="mt-6 sm:mt-8">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="w-6 h-px bg-muted-foreground" />
            <span>In Partnership With</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              { name: "Imperial College London", url: imperialLogo.url, imgClass: "h-8", alt: "Imperial College London Lifelong Learning", showLabel: false },
              { name: "The Chinese University of Hong Kong", url: cuhkLogo.url, imgClass: "h-10 sm:h-12", alt: "The Chinese University of Hong Kong", showLabel: true },
              { name: "TETR College of Business", url: tetrLogo.url, imgClass: "h-10 sm:h-12", alt: "TETR College of Business", showLabel: true },
            ].map((u) => (
              <div key={u.name} className="inline-flex items-center gap-3">
                <img
                  src={u.url}
                  alt={u.alt ?? u.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-auto object-contain ${u.imgClass}`}
                />
                {u.showLabel && (
                  <span className="font-display text-xs sm:text-sm text-foreground/85 leading-tight max-w-[9rem]">
                    {u.name}
                  </span>
                )}
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
          {showBrochureCta ? (
            <button
              type="button"
              onClick={() => setBrochureOpen(true)}
              className="inline-flex w-full sm:w-auto sm:min-w-[17rem] items-center justify-center gap-3 whitespace-nowrap border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
              Download the Brochure
            </button>
          ) : (
            <a href="#nations" className="inline-flex w-full sm:w-auto sm:min-w-[17rem] items-center justify-center gap-3 whitespace-nowrap border border-border px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-primary hover:text-primary transition-colors">
              See the Journey
            </a>
          )}
        </div>

        <p className="mt-4 text-xs sm:text-sm text-muted-foreground max-w-3xl">
          Limited to 65 participants only.
        </p>

        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-x-3 sm:gap-6 max-w-3xl border-t border-border pt-6 sm:pt-8">
          {[
            { n: "12", l: "Months · Core Program" },
            { n: "4", l: "Nations · Cultures · Markets" },
            { n: "3", l: "Global University Partners" },
          ].map((s) => (
            <div key={s.l} className="min-w-0">
              <div className="font-display text-2xl sm:text-4xl md:text-5xl font-medium leading-none">{s.n}</div>
              <div className="text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-2 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-5 md:mt-[var(--video-offset)] animate-fade-up">
        <div className="relative aspect-video w-full overflow-hidden border border-border bg-card">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={storyPoster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="The Four Nations Global Business Programme story"
          >
            <source media="(max-width: 767px)" src={story540.url} type="video/mp4" />
            <source src={story1080.url} type="video/mp4" />
          </video>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center border border-border/60 bg-background/70 text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em] md:hidden lg:flex">
          <span className="min-w-0 truncate">India · London · Hong Kong · Dubai</span>
          <span className="shrink-0">0:48</span>
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
                className={`ticker-logo object-contain ${LOGO_SIZE_CLASSES[co] ?? "max-h-7 sm:max-h-8 max-w-[110px] sm:max-w-[140px]"}`}
              />
            </span>
            <span className="text-primary/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>

    <LeadMatrixDialog
      widgetId={brochureOpen ? BROCHURE_WIDGET_ID : null}
      title="Four Nations Global Business Programme"
      eyebrow="Download the Brochure"
      onClose={() => setBrochureOpen(false)}
    />
  </section>
  );
};

export default Hero;
