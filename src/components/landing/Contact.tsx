import { Mail, Phone, Clock } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "executive.admissions@mastersunion.org",
    href: "mailto:executive.admissions@mastersunion.org",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 9899-741-741",
    href: "tel:+919899741741",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat\n9:00 am - 9:00 pm IST",
  },
];

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: heading */}
        <div>
          <SectionEyebrow className="mb-4 sm:mb-6">Admissions Office</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] text-balance mb-6">
            Get in{" "}
            <em className="italic text-primary not-italic">Touch</em>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            Questions about the programme, eligibility or admissions? Our team is here to help.
          </p>
        </div>

        {/* Right: bento cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            const isWide = i === 0;
            const body = (
              <>
                <div className="flex items-center justify-between mb-6">
                  <Icon size={22} className="text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {card.label}
                  </span>
                </div>
                <div className="font-display text-base sm:text-lg md:text-xl text-foreground whitespace-pre-line">
                  {card.value}
                </div>
              </>
            );
            const className = `border border-border bg-background/40 p-5 sm:p-6 transition-colors hover:border-primary/40 ${isWide ? "sm:col-span-2" : ""}`;
            return card.href ? (
              <a key={card.label} href={card.href} className={className}>
                {body}
              </a>
            ) : (
              <div key={card.label} className={className}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
