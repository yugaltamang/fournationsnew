import SectionEyebrow from "./SectionEyebrow";

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 md:py-32 border-t border-border">
    <div className="container">
      <div className="max-w-xl">
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
      </div>
    </div>
  </section>
);

export default Contact;
