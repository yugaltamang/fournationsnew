import { useState } from "react";

const faqs = [
  { q: "Who is this program for?", a: "Ambitious early-career professionals and working professionals (3–8 years exp) who want a global career — not a local one. Future founders, P&L owners, family-office operators and cross-border leaders." },
  { q: "What's the journey across the 4 nations?", a: "You begin in India (Masters' Union, Delhi NCR), travel to Hong Kong for modules at CUHK Business School, then to London for modules at Imperial College London, and finish with an optional immersion in Dubai (DIFC)." },
  { q: "Is Dubai mandatory?", a: "No. Dubai is an optional fourth-nation finale designed for learners who want exposure to MENA markets, family offices and the Asia–Europe capital corridor." },
  { q: "What are the academic partnerships?", a: "Modules in Hong Kong are delivered in partnership with CUHK Business School, and modules in London are delivered in partnership with Imperial College London — two of the world's top-ranked institutions." },
  { q: "Do I need to quit my job?", a: "No. International immersions are scheduled in concentrated windows so professionals can plan around work. The program is built for cohort-based, on-ground learning." },
  { q: "What certification do I receive?", a: "A Post Graduate Certification from Masters' Union, alongside co-branded certificates from international partner institutions for each nation immersion you complete." },
  { q: "Is there a scholarship or financial aid?", a: "Yes. Merit-based scholarships and EMI options are available. Speak to admissions for a personalized financial plan." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="tag-pill mb-4 sm:mb-6">◉ FAQ</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95]">Questions, answered.</h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left">
                  <span className="font-display text-lg sm:text-xl md:text-2xl">{f.q}</span>
                  <span className={`font-display text-2xl sm:text-3xl text-primary transition-transform shrink-0 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-4 sm:pr-10 text-sm sm:text-base text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
