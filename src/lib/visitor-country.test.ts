import { describe, it, expect, beforeEach } from "vitest";
import { isIndia, getCachedCountry } from "./visitor-country";

const KEY = "fn_country_v1";

describe("isIndia", () => {
  it("treats India (any case) as India", () => {
    expect(isIndia("IN")).toBe(true);
    expect(isIndia("in")).toBe(true);
    expect(isIndia(" IN ")).toBe(true);
  });

  it("treats every other country and unknown as not India", () => {
    expect(isIndia("US")).toBe(false);
    expect(isIndia("AE")).toBe(false);
    expect(isIndia("")).toBe(false);
    expect(isIndia(null)).toBe(false);
    expect(isIndia(undefined)).toBe(false);
  });
});

describe("getCachedCountry", () => {
  beforeEach(() => window.localStorage.clear());

  it("reads a fresh cached country and normalises its case", () => {
    window.localStorage.setItem(KEY, JSON.stringify({ iso: "in", at: Date.now() }));
    expect(getCachedCountry()).toBe("IN");
    expect(isIndia(getCachedCountry())).toBe(true);
  });

  it("ignores a stale or malformed cache so detection can run again", () => {
    window.localStorage.setItem(KEY, JSON.stringify({ iso: "IN", at: Date.now() - 8 * 24 * 60 * 60 * 1000 }));
    expect(getCachedCountry()).toBe(null);
    window.localStorage.setItem(KEY, "not-json");
    expect(getCachedCountry()).toBe(null);
    window.localStorage.setItem(KEY, JSON.stringify({ iso: "INDIA", at: Date.now() }));
    expect(getCachedCountry()).toBe(null);
  });
});
