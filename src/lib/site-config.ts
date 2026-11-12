/**
 * Single source of truth for commercial details and destinations.
 * Anything not yet confirmed by Trada stays null / unconfirmed here, and the
 * page renders it as "pending" instead of guessing.
 */
export const siteConfig = {
  /** Live sign-up destination. null = not confirmed yet. */
  signupUrl: null as string | null,
  /** Label for the main action. Only switch to "Start Free Trial" once the trial flow is confirmed. */
  primaryCtaLabel: "Get Started",
  /** Real demo video/link. null hides the "Watch demo" action. */
  demoUrl: null as string | null,
};

export const pricing = {
  /** From the PRD: per business, per month. */
  monthly: 12000,
  /** Proposed annual price — pending commercial confirmation. */
  annual: 120000,
  annualConfirmed: false,
};

export function annualSavings(monthly: number, annual: number) {
  const fullYear = monthly * 12;
  const saved = fullYear - annual;
  return {
    fullYear,
    saved,
    percent: Math.round((saved / fullYear) * 100),
  };
}

export function formatNaira(amount: number) {
  return `₦${new Intl.NumberFormat("en-NG").format(amount)}`;
}
