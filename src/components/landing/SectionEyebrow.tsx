import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Show the trailing gradient line (default true) */
  line?: boolean;
};

/**
 * Editorial section eyebrow: pulsing amber dot + glass pill + gradient line.
 * Replaces plain mono uppercase labels across landing sections.
 */
export default function SectionEyebrow({ children, className, line = true }: Props) {
  return (
    <div className={cn("inline-flex items-center gap-3 mb-5", className)}>
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
      </span>
      <span
        className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/[0.06] backdrop-blur-sm
                   font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-primary
                   shadow-[0_0_24px_-8px_hsl(var(--primary)/0.5)]"
      >
        {children}
      </span>
      {line && (
        <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" />
      )}
    </div>
  );
}
