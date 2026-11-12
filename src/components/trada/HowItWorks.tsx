import { ChartNoAxesColumn, PackagePlus, UserPlus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PendingTag } from "./Tags";

const steps = [
  {
    icon: UserPlus,
    title: "Create an account",
    body: "Sign up from your phone and tell Trada what kind of business you run.",
    note: "Proposed: phone number with a one-time code, then your business type and role.",
  },
  {
    icon: PackagePlus,
    title: "Add your business and items",
    body: "Set up your products the easy way — speak them, snap them, or type them in.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Record sales and see how you're doing",
    body: "Log each sale as it happens and check your business overview whenever you like.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="band bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title={<span id="how-title">Up and running in three steps.</span>}
        />
        <ol className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 120}
              className="flex flex-col rounded-[1.75rem] bg-surface p-8 shadow-soft sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl font-semibold text-accent-foreground/25">{i + 1}</span>
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="size-5" aria-hidden />
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-semibold sm:text-3xl">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              {s.note && (
                <div className="mt-6 space-y-2 border-t border-border pt-5">
                  <PendingTag>Sign-up flow pending</PendingTag>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
