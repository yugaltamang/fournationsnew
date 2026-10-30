import { useEffect, useState } from "react";
import { detectVisitorCountry, getCachedCountry } from "@/lib/visitor-country";

/**
 * Visitor's two-letter country code (e.g. "IN"), detected from the network once
 * per visit and cached. Returns null while loading or when undetectable.
 */
export function useVisitorCountry() {
  const [iso, setIso] = useState<string | null>(() => getCachedCountry());

  useEffect(() => {
    if (iso) return;
    let cancelled = false;
    detectVisitorCountry().then((code) => {
      if (!cancelled && code) setIso(code);
    });
    return () => {
      cancelled = true;
    };
  }, [iso]);

  return iso;
}
