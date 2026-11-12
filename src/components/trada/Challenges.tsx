import { Boxes, HandCoins, Receipt, CircleHelp } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: Boxes,
    title: "Stock records are everywhere",
    body: "Some in a notebook, some on your phone, some in your head. It's hard to know what's really on the shelf.",
  },
  {
    icon: Receipt,
    title: "Expenses are unclear",
    body: "Small costs add up through the week, and by month end it's hard to say where the money went.",
  },
  {
    icon: HandCoins,
    title: "Customers owe you money",
    body: "Credit sales are easy to give and easy to forget. Following up depends on remembering who owes what.",
  },
  {
    icon: CircleHelp,
    title: "Are you making a profit?",
    body: "Money comes in and goes out every day, but there's no simple way to see if the business is growing.",
  },
];

export function Challenges() {
  return (
    <section aria-labelledby="challenges-title" className="band bg-surface">
      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Sound familiar?"
            title={<span id="challenges-title">Tired of business stress?</span>}
            intro="Running a business is hard enough. Keeping track of it shouldn't add to the pressure."
          />
        </div>
        <ul className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="border-t border-border pt-8">
              <p.icon className="size-8 text-secondary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
