import { Check, X } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

const included = [
  "Certificate from all 3 institutions: Masters' Union, Imperial College London, and CUHK",
  "Academic sessions and curriculum delivery across all locations",
  "Access to global partner institutions - Imperial College London and CUHK",
  "Business immersions and CXO interactions",
  "Outclass projects and capstone mentorship",
  "Learning resources, course materials and program infrastructure",
];

const notIncluded = [
  "International and domestic flights",
  "Visa fees and travel insurance",
  "Accommodation and living expenses",
  "Local transport and logistics between venues",
  "Personal expenses and meals not organised by the programme",
];

const WhatsIncluded = () => (
  <section id="whats-included" className="py-16 sm:py-20 md:py-32 border-y border-border bg-secondary/20">
    <div className="container">
      <div className="max-w-4xl mb-10 sm:mb-12 md:mb-16">
        <SectionEyebrow className="mb-4 sm:mb-6">What's Included</SectionEyebrow>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-balance">
          What the fee covers. <br className="hidden sm:block" />
          <em className="italic text-muted-foreground not-italic">And what it does not.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {/* Included */}
        <div className="bg-background p-6 sm:p-8 md:p-10">
          <div className="tag-pill mb-6 sm:mb-8">
            <Check className="w-3.5 h-3.5" />
            Included in the programme fee
          </div>
          <ul className="space-y-4">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div className="bg-background p-6 sm:p-8 md:p-10">
          <div className="tag-pill mb-6 sm:mb-8">
            <X className="w-3.5 h-3.5" />
            Not included
          </div>
          <ul className="space-y-4">
            {notIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
            Flights, accommodation and logistics are the participant's responsibility. The admissions team can share guidance on travel planning and recommended areas to stay.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatsIncluded;
