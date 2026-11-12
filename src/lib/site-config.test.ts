import { describe, expect, it } from "vitest";
import { annualSavings, formatNaira, pricing, siteConfig } from "./site-config";

describe("Trada pricing", () => {
  it("monthly plan is ₦12,000 per business", () => {
    expect(pricing.monthly).toBe(12000);
    expect(formatNaira(pricing.monthly)).toBe("₦12,000");
  });

  it("₦120,000/year against twelve monthly payments saves ₦24,000 (about 17%)", () => {
    const s = annualSavings(12000, 120000);
    expect(s.fullYear).toBe(144000);
    expect(s.saved).toBe(24000);
    expect(s.percent).toBe(17);
  });

  it("annual price stays flagged as unconfirmed until approved", () => {
    expect(pricing.annualConfirmed).toBe(false);
  });

  it("does not claim a free trial before the trial flow is confirmed", () => {
    expect(siteConfig.signupUrl).toBeNull();
    expect(siteConfig.primaryCtaLabel).not.toMatch(/trial/i);
  });
});
