import SectionEyebrow from "./SectionEyebrow";
import { Mail, Phone, Clock } from "lucide-react";

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
    value: "Mon - Sat 9:00 am - 9:00 pm IST",
  },
];

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: heading */}
        <div className="max-w-xl">
          <SectionEyebrow className="mb-4 sm:mb-6">Admissions Office</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] text-balance mb-6">
            Get in{" "}
            <em className="italic text-primary not-italic">Touch</em>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            Questions about the programme, eligibility or admissions? Our team is here to help.
          </p>
        </div>

        {/* Right: contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {contactCards.map((card) => {
            const content = (
              <div className="group flex items-start gap-4 p-4 sm:p-5 border border-border bg-secondary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 shrink-0 border border-border bg-background">
                  <card.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {card.label}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-foreground leading-snug break-words">
                    {card.value}
                  </div>
                </div>
              </div>
            );
            return card.href ? (
              <a key={card.label} href={card.href} className="block">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
