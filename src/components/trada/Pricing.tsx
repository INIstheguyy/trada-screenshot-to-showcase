import { annualSavings, formatNaira, pricing } from "@/lib/site-config";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PendingTag } from "./Tags";

export function Pricing() {
  const savings = annualSavings(pricing.monthly, pricing.annual);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="band bg-surface">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={<span id="pricing-title">Simple, transparent pricing.</span>}
          intro="One price per business. No complicated tiers."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
          <Reveal className="flex flex-col rounded-[1.75rem] border-2 border-secondary bg-surface p-8 shadow-soft sm:p-10">
            <p className="eyebrow text-accent-foreground">Monthly</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold sm:text-6xl">{formatNaira(pricing.monthly)}</span>
            </p>
            <p className="mt-2 text-muted-foreground">per business, per month</p>
            <div className="mt-auto pt-10">
              <CtaButton className="w-full" />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col rounded-[1.75rem] border border-border bg-background p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow text-accent-foreground">Yearly</p>
              {!pricing.annualConfirmed && <PendingTag />}
            </div>
            <p className="mt-6 font-display text-5xl font-semibold sm:text-6xl">{formatNaira(pricing.annual)}</p>
            <p className="mt-2 text-muted-foreground">per business, per year</p>
            <p className="mt-6 rounded-xl bg-accent px-4 py-3 text-[0.95rem] text-accent-foreground">
              {formatNaira(savings.saved)} less than 12 monthly payments
              {pricing.annualConfirmed && <> — save {savings.percent}%</>}
            </p>
            <div className="mt-auto pt-10">
              <CtaButton variant="navy" className="w-full" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto mt-12 max-w-2xl text-center">
          <p className="leading-relaxed text-muted-foreground">
            Trial length, payment details and exactly what each plan includes are being finalised and will be
            shown here once confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
