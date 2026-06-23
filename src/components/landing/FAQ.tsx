import { useState } from "react";

type FaqItem = { q: string; a: React.ReactNode };
type FaqGroup = { category: string; items: FaqItem[] };

const groups: FaqGroup[] = [
  {
    category: "General",
    items: [
      {
        q: "Is the PGP – 4 Nations comparable to an Executive MBA in India?",
        a: "The PGP – 4 Nations is not a traditional Executive MBA. It is a 9-month, full-time global program focused on hands-on learning across India, London, and Hong Kong, with an optional Dubai immersion. The program emphasizes learning by doing through live ventures, CXO interactions, and global exposure, rather than classroom-only instruction.",
      },
      {
        q: "What is the expected cohort size?",
        a: "The program maintains a highly selective cohort with limited seats, ensuring strong peer learning, meaningful collaboration, and access to faculty and industry leaders.",
      },
      {
        q: "What are the advantages of the 9-month format?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Faster career acceleration</li>
            <li>Lower opportunity cost compared to longer programs</li>
            <li>High-intensity, outcome-driven learning</li>
            <li>Immediate application of skills in real-world settings</li>
          </ul>
        ),
      },
      {
        q: "What does the program fee include?",
        a: (
          <>
            <p className="mb-2">The fee typically covers:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Academic sessions and curriculum delivery</li>
              <li>Access to global partner institutions (Imperial & CUHK)</li>
              <li>CXO masterclasses and industry interactions</li>
              <li>Learning resources and program infrastructure</li>
            </ul>
            <p className="mt-2 text-xs italic">(Travel and accommodation may be separate, depending on the structure.)</p>
          </>
        ),
      },
    ],
  },
  {
    category: "Eligibility",
    items: [
      {
        q: "What level of work experience is required?",
        a: "The program is designed for professionals with 3–8 years of work experience, although exceptional candidates outside this range may also be considered.",
      },
      {
        q: "Who is this program designed for?",
        a: (
          <>
            <p className="mb-2">This program is ideal for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Early to mid-career professionals</li>
              <li>Individuals aiming for global roles</li>
              <li>Entrepreneurs and operators</li>
              <li>Those seeking international business exposure</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    category: "Application Queries",
    items: [
      {
        q: "Can I get my profile evaluated before applying?",
        a: "Yes. You can reach out to the admissions team for a preliminary profile evaluation and guidance.",
      },
      {
        q: "Are all applicants interviewed?",
        a: "No. Only shortlisted candidates are invited for an online interview with the admissions panel.",
      },
      {
        q: "Can I reapply if my application is not selected?",
        a: "Yes. Applicants can reapply in future rounds or cohorts after strengthening their profile.",
      },
      {
        q: "How strict are application deadlines?",
        a: "Admissions are conducted on a rolling basis with limited seats, so applying early is recommended.",
      },
      {
        q: "Are some admission rounds more competitive than others?",
        a: "All rounds are competitive. However, applying earlier can improve seat availability and access to scholarships.",
      },
    ],
  },
  {
    category: "Entrance and Essays",
    items: [
      {
        q: "Are entrance exams like GMAT, GRE, or CAT required?",
        a: "No. Standardized test scores are not required. Admissions are based on your overall profile, application, and interview performance.",
      },
      {
        q: "How should I approach the application essay or video?",
        a: (
          <>
            <p className="mb-2">Focus on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Clear career goals</li>
              <li>Demonstrated initiative and impact</li>
              <li>Your motivation for building a global career</li>
            </ul>
            <p className="mt-2">Clarity and authenticity are key.</p>
          </>
        ),
      },
    ],
  },
  {
    category: "Admission Policies",
    items: [
      {
        q: "Can I continue working while pursuing the program?",
        a: "No. This is a full-time program, and participants are not expected to continue working alongside it. The course involves weekday classes in India and international travel to London and Hong Kong, making full-time commitment essential.",
      },
      {
        q: "How is performance evaluated during the program?",
        a: (
          <>
            <p className="mb-2">Evaluation is based on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Live projects and venture work</li>
              <li>Participation and collaboration</li>
              <li>Presentations and practical outputs</li>
            </ul>
            <p className="mt-2">The focus is on applied performance rather than exams.</p>
          </>
        ),
      },
      {
        q: "Can I customize my learning experience?",
        a: (
          <>
            <p className="mb-2">Yes. The program allows flexibility through:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diverse projects and ventures</li>
              <li>Exposure to multiple industries and markets</li>
              <li>Optional Dubai immersion</li>
            </ul>
          </>
        ),
      },
      {
        q: "Is the fee refundable if I withdraw from the program?",
        a: "No. The fee paid is non-refundable.",
      },
      {
        q: "Can I defer my admission to the next year?",
        a: "Currently, deferrals are not offered. Applicants who cannot join in a given year are encouraged to apply again in the next cycle.",
      },
    ],
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="tag-pill mb-4 sm:mb-6">◉ FAQ</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95]">Questions, answered.</h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">PGP – 4 Nations</p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {groups.map((group, gi) => {
            const isGroupOpen = openGroup === gi;
            return (
              <div key={gi} className="border border-border rounded-lg overflow-hidden bg-background/40">
                <button
                  onClick={() => {
                    setOpenGroup(isGroupOpen ? null : gi);
                    setOpen(null);
                  }}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 sm:py-6 text-left"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] sm:text-xs text-primary tracking-[0.25em]">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span
                    className={`font-display text-2xl sm:text-3xl text-primary transition-transform shrink-0 ${
                      isGroupOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isGroupOpen && (
                  <div className="px-5 sm:px-6 pb-2 border-t border-border animate-fade-up">
                    {group.items.map((f, i) => {
                      const key = `${gi}-${i}`;
                      const isOpen = open === key;
                      return (
                        <div key={key} className="border-b border-border last:border-b-0">
                          <button
                            onClick={() => setOpen(isOpen ? null : key)}
                            className="w-full flex items-start justify-between gap-4 sm:gap-6 py-4 sm:py-5 text-left"
                          >
                            <span className="font-display text-base sm:text-lg md:text-xl leading-snug">
                              {f.q}
                            </span>
                            <span
                              className={`font-display text-2xl sm:text-3xl text-primary transition-transform shrink-0 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                          {isOpen && (
                            <div className="pb-5 pr-4 sm:pr-10 text-sm sm:text-base text-muted-foreground leading-relaxed animate-fade-up">
                              {f.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
