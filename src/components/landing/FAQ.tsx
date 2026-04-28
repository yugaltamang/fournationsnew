import { useState } from "react";

const faqs = [
  { q: "Who is this program for?", a: "Working professionals (3–8 years exp) looking for global exposure and a CXO network, plus ambitious early-career professionals who want to build or scale ventures across India, UK, China and Hong Kong." },
  { q: "What is the duration of the program?", a: "12 months total — broken into in-person modules across the 4 nations with industry immersions, CXO masterclasses and applied projects." },
  { q: "Do I need to quit my job?", a: "No. The format is designed to be cohort-based and modular. International immersions are scheduled in concentrated windows so you can plan around your work commitments." },
  { q: "What's the admissions process?", a: "Application → Profile review → Interview with the admissions committee → Offer. Decisions typically within 14 days of interview." },
  { q: "Is there a scholarship or financial aid?", a: "Yes. Merit-based scholarships and EMI options are available. Speak to admissions for a personalized financial plan." },
  { q: "Will I get a degree or certificate?", a: "You will receive a Post Graduate Certification from Masters' Union along with co-branded certificates from international partner institutions for each country immersion." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 bg-secondary/20 border-y border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="tag-pill mb-6">◉ FAQ</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">Questions, answered.</h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-xl md:text-2xl">{f.q}</span>
                  <span className={`font-display text-3xl text-primary transition-transform shrink-0 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>
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
