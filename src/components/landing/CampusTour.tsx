import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionEyebrow from "./SectionEyebrow";

const tours = [
  { id: "cds", label: "CDS Tower", url: "https://my.matterport.com/show/?m=H94FKdNQbTi&play=1&brand=1" },
  { id: "cds-second", label: "CDS Tower - 2nd Floor", url: "https://my.matterport.com/show/?m=zjAw7AksqvZ" },
  { id: "tower-a", label: "Tower A", url: "https://my.matterport.com/show/?m=fvbzUtwNH1B" },
  { id: "tower-c", label: "Tower C", url: "https://my.matterport.com/show/?m=jQcZmR1BxFc&play=1&brand=1" },
  { id: "auditorium", label: "Auditorium", url: "https://s3.mastersunion.link/assets/mu-vr/index.html" },
  { id: "food-court", label: "Food Court", url: "https://s3.mastersunion.link/assets/food-court/index.html" },
];

export default function CampusTour() {
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visited, setVisited] = useState<number[]>([0]);
  const [loaded, setLoaded] = useState<number[]>([]);
  const [failed, setFailed] = useState<number[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const selectTour = (index: number) => {
    setActive(index);
    setVisited((current) => current.includes(index) ? current : [...current, index]);
  };

  return (
    <section ref={sectionRef} id="campus-tour" className="py-16 sm:py-20 md:py-32 border-t border-border scroll-mt-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-3xl">
            <SectionEyebrow className="mb-4 sm:mb-6">Campus</SectionEyebrow>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] text-balance">
              World-class Campus{" "}
              <em className="italic text-primary not-italic">in the Heart of Gurugram.</em>
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start sm:self-auto rounded-full px-6 shrink-0">
            <a href="https://mastersunion.org/book-a-campus-tour" target="_blank" rel="noopener noreferrer">
              Book a Visit <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div role="tablist" aria-label="Campus locations" className="flex overflow-x-auto border border-border bg-secondary/40 rounded-lg mb-5 p-1 gap-1">
          {tours.map((tour, index) => (
            <Button
              key={tour.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`campus-tab-${tour.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`campus-panel-${tour.id}`}
              tabIndex={active === index ? 0 : -1}
              variant="ghost"
              onClick={() => selectTour(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % tours.length;
                else if (event.key === "ArrowLeft") next = (index - 1 + tours.length) % tours.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = tours.length - 1;
                else return;
                event.preventDefault();
                selectTour(next);
                tabRefs.current[next]?.focus();
              }}
              className={cn("flex-1 shrink-0 h-11 px-4 text-xs hover:bg-muted hover:text-foreground", active === index ? "text-primary" : "text-muted-foreground")}
            >
              {tour.label}
            </Button>
          ))}
        </div>

        {tours.map((tour, index) => (
          <div
            key={tour.id}
            id={`campus-panel-${tour.id}`}
            role="tabpanel"
            aria-labelledby={`campus-tab-${tour.id}`}
            hidden={active !== index}
            className="relative h-[400px] w-full overflow-hidden rounded-lg border border-border bg-card text-foreground"
          >
            {!loaded.includes(index) && !failed.includes(index) && (
              <div role="status" className="absolute inset-0 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Loader2 className="size-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
                Loading 360° tour…
              </div>
            )}
            {visible && visited.includes(index) && (
              <iframe
                title={`${tour.label} 360° tour`}
                src={tour.url}
                className="relative w-full h-[400px] border-0"
                allowFullScreen
                allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer; magnetometer; vr"
                onLoad={() => setLoaded((current) => current.includes(index) ? current : [...current, index])}
                onError={() => setFailed((current) => current.includes(index) ? current : [...current, index])}
              />
            )}
            {failed.includes(index) && (
              <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card p-6 text-center">
                <p className="text-sm text-muted-foreground">The campus tour could not load.</p>
                <Button asChild variant="outline">
                  <a href={tour.url} target="_blank" rel="noopener noreferrer">Open tour <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}