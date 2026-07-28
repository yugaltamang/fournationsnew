import SectionEyebrow from "./SectionEyebrow";
import imperialCert from "@/assets/certificates/imperial-certificate.webp.asset.json";
import cuhkCert from "@/assets/certificates/cuhk-certificate.webp.asset.json";

const certificates = [
  {
    src: imperialCert.url,
    inst: "Imperial College London",
    label: "Certificate of Completion",
    note: "Issued by Imperial College London, signed by the Vice Provost and Academic Registrar.",
  },
  {
    src: cuhkCert.url,
    inst: "CUHK Business School",
    label: "Certificate of Completion",
    note: "Issued by the Asia-Pacific Institute of Business, The Chinese University of Hong Kong.",
  },
];

const outcomes = [
  { n: "01", t: "Operate across four markets", d: "Read Indian distribution, European brand, Asian capital and MENA family-office economics and switch contexts without missing a beat." },
  { n: "02", t: "A network in four cultures", d: "Peers, faculty and CXOs from Imperial College London, CUHK, Indian unicorns and DIFC. Warm intros that compound for life." },
  { n: "03", t: "Cultural fluency as a moat", d: "Negotiate, hire, sell and lead across India, Europe, Asia and MENA. The skill nobody learns in a classroom and everybody hires for." },
  { n: "04", t: "Outclass: build it, don't just study it", d: "Launch a live D2C brand across Shopify, Amazon and Flipkart with real CAC, ROAS and revenue, then sharpen presence, storytelling and composure at the Leadership Lab in London." },
];

const Outcomes = () => (
  <section id="outcomes" className="py-16 sm:py-20 md:py-32">
    <div className="container">
      <div className="max-w-4xl mb-10 sm:mb-12 md:mb-16">
        <SectionEyebrow className="mb-4 sm:mb-6">Outcomes</SectionEyebrow>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1] text-balance">
          What you walk away with.<br />
          <em className="italic text-primary not-italic">(A passport to global opportunities.)</em>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-border">
        {outcomes.map((o) => (
          <div key={o.n} className="bg-background p-5 sm:p-8 md:p-10 group hover:bg-secondary/40 transition-colors">
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="font-display text-3xl sm:text-4xl md:text-5xl text-primary leading-none shrink-0">{o.n}</span>
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-balance">{o.t}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{o.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Credentials */}
      <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
        <div className="grid md:grid-cols-12 gap-5 md:gap-8 items-center">
          <div className="md:col-span-4">
            <SectionEyebrow className="mb-3">The Credentials</SectionEyebrow>
            <h3 className="font-display text-lg sm:text-xl md:text-2xl leading-tight text-balance mb-2">
              Real certificates. <em className="italic text-primary not-italic">Real institutions.</em>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Credentials issued directly by Imperial College London and CUHK Business School, alongside your Masters' Union certificate.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
            {certificates.map((c) => (
              <figure key={c.inst} className="bg-secondary/40 border border-border p-2 sm:p-3">
                <img
                  src={c.src}
                  alt={`${c.label} sample issued by ${c.inst}`}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
                <figcaption className="mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.inst}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Sample certificates shown for illustration.
        </p>
      </div>

    </div>

  </section>
);

export default Outcomes;
