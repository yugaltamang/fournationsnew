import { ApplyWidget } from "./ApplyWidget";
import { Sparkles, ArrowRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { useEffect, useState } from "react";

type Region = "IN" | "INTL";

function fallbackRegion(): Region {
  if (typeof window === "undefined") return "INTL";
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = navigator.language || "";
    if (tz.includes("Kolkata") || tz.includes("Calcutta") || lang.toLowerCase().includes("in")) return "IN";
  } catch {}
  return "INTL";
}

const FEES: Record<Region, { label: string; items: { l: string; v: string; s: string; primary?: boolean }[] }> = {
  IN: {
    label: "India (in INR)",
    items: [
      { l: "Application Fee", v: "₹5,000", s: "One-time, non-refundable" },
      { l: "Admission Fee", v: "₹100,000", s: "Payable on offer acceptance" },
      { l: "Total Fee", v: "₹6,399,999", s: "*All inclusive", primary: true },
    ],
  },
  INTL: {
    label: "International (in USD)",
    items: [
      { l: "Application Fee", v: "$50", s: "One-time, non-refundable" },
      { l: "Admission Fee", v: "$1,000", s: "Payable on offer acceptance" },
      { l: "Total Fee", v: "$70,000", s: "*All inclusive", primary: true },
    ],
  },
};

const Admissions = () => {
  const [region, setRegion] = useState<Region>(fallbackRegion());

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://ipwho.is/?fields=country_code,success");
        const data = await res.json();
        if (cancelled || !data?.success || !data.country_code) return;
        setRegion(String(data.country_code).toUpperCase() === "IN" ? "IN" : "INTL");
      } catch {}
    })();
    return () => { cancelled = true; };
  }, []);

  const fees = FEES[region];

  return (
  <section id="admissions" className="relative py-12 sm:py-16 border-t border-border bg-card/30 overflow-hidden">
    <div className="absolute inset-0 editorial-grid opacity-[0.05] pointer-events-none" />

    <div className="container relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <SectionEyebrow className="mb-4">Admissions &amp; Fees</SectionEyebrow>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl">
            Limited cohort seats. Apply now.
          </p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/40 px-3 py-1.5 self-start md:self-auto">
          Cohort 1
        </div>
      </div>

      {/* Single-line admissions strip */}
      <div className="border border-border bg-background mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          <div className="p-5 sm:p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Deadline
            </div>
            <div className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
              20 Nov 2026
            </div>
          </div>
          <div className="p-5 sm:p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Interviews
            </div>
            <div className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
              Dec '26 – Feb '27
            </div>
          </div>
          <div className="p-5 sm:p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Fee
            </div>
            <div className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
              INR 5,000
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">Application fee only</div>
          </div>
        </div>
      </div>

      {/* Region toggle */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Programme fees
        </div>
        <div className="inline-flex rounded-md border border-border bg-background overflow-hidden">
          {(["IN", "INTL"] as Region[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${region === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {r === "IN" ? "India · INR" : "International · USD"}
            </button>
          ))}
        </div>
      </div>

      {/* Fees, prominent card with fine print */}
      <div className="border border-border bg-background mb-6">
        <div className="p-4 sm:p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-4">{fees.label}</div>
          <div className="grid grid-cols-3 gap-px bg-border">
            {fees.items.map((f) => (
              <div key={f.l} className="bg-background p-3 sm:p-4 text-center relative">
                {f.primary && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50" />}
                <div className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-1.5 ${f.primary ? "text-primary" : "text-muted-foreground"}`}>{f.l}</div>
                <div className={`font-display text-xl sm:text-2xl ${f.primary ? "text-primary" : "text-foreground"}`}>{f.v}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{f.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Scholarship + CTA */}
      <div className="grid md:grid-cols-3 gap-px bg-border border border-primary/40">
        <div className="md:col-span-2 bg-primary/5 p-6 sm:p-8 flex gap-4 items-start">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Scholarships</div>
            <p className="text-sm sm:text-base">
              Merit-based and need-based scholarships available. Indicate interest when applying, assessed during the admissions interview.
            </p>
          </div>
        </div>
        <ApplyWidget>
          <button
            type="button"
            className="bg-primary text-primary-foreground p-6 sm:p-8 flex items-center justify-between gap-4 group hover:opacity-90 transition-opacity text-left w-full"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2 opacity-80">Next step</div>
              <div className="font-display text-xl sm:text-2xl leading-tight">Start your application</div>
            </div>
            <ArrowRight className="w-6 h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </ApplyWidget>
      </div>
    </div>
  </section>
  );
};

export default Admissions;
