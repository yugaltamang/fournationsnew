import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import film from "@/assets/programme-film/programme-film.mp4.asset.json";
import poster from "@/assets/programme-film/programme-film-poster.webp.asset.json";

gsap.registerPlugin(ScrollTrigger);

const ProgrammeFilm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nearby, setNearby] = useState(false);
  const [failed, setFailed] = useState(false);
  const visibleRef = useRef(false);
  const userPausedRef = useRef(false);
  const automaticPauseRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const initialScale = window.innerWidth < 640 ? 0.94 : 0.86;
      gsap.fromTo(frame, { scale: initialScale }, {
        keyframes: [{ scale: 1, duration: 1 }, { scale: initialScale, duration: 1 }],
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    const preloadObserver = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setNearby(true);
        preloadObserver.disconnect();
      }
    }, { rootMargin: "400px" });
    preloadObserver.observe(section);

    const playbackObserver = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      visibleRef.current = entry?.isIntersecting ?? false;
      if (!video) return;
      if (visibleRef.current && !userPausedRef.current) {
        void video.play().catch(() => { /* Native play control remains available. */ });
      } else if (!visibleRef.current && !video.paused) {
        automaticPauseRef.current = true;
        video.pause();
      }
    }, { threshold: 0.15 });
    playbackObserver.observe(frame);
    return () => {
      media.revert();
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="programme-film" aria-label="PG Diploma - Four Nations film" className="relative w-full overflow-hidden bg-background py-8 sm:py-12">
      <div ref={frameRef} className="programme-film-frame relative mx-auto w-full max-w-[1600px] overflow-hidden bg-surface-deep">
        <video
          ref={videoRef}
          src={nearby ? film.url : undefined}
          poster={poster.url}
          className="absolute inset-0 block h-full w-full object-contain"
          aria-label="PG Diploma - Four Nations programme video"
          width={1920}
          height={1080}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          onCanPlay={() => {
            if (visibleRef.current && !userPausedRef.current) {
              void videoRef.current?.play().catch(() => {});
            }
          }}
          onPlay={() => { userPausedRef.current = false; }}
          onPause={() => {
            if (automaticPauseRef.current) automaticPauseRef.current = false;
            else if (visibleRef.current) userPausedRef.current = true;
          }}
          onError={() => { if (nearby) setFailed(true); }}
        />
        {failed && (
          <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/90 px-6 text-center">
            <p className="text-sm text-muted-foreground">The video couldn’t load. Please try again.</p>
            <Button variant="outline" onClick={() => {
              setFailed(false);
              userPausedRef.current = false;
              videoRef.current?.load();
            }}><RefreshCw /> Retry video</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgrammeFilm;