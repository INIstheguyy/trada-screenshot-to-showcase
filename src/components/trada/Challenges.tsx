import { Boxes, CircleHelp, HandCoins, Receipt } from "lucide-react";
import stressIllustration from "@/assets/business-stress-illustration-v2.webp";
import { useMobileScrollStory } from "@/hooks/use-mobile-scroll-story";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: Boxes,
    title: "Stock records are everywhere",
    body: "Records live in notebooks, chats and memory, so the shelf count is never certain.",
  },
  {
    icon: Receipt,
    title: "Expenses are unclear",
    body: "Small costs disappear through the week, making your month-end numbers unclear.",
  },
  {
    icon: HandCoins,
    title: "Customers owe you money",
    body: "Credit sales are easy to forget, so following up depends on memory.",
  },
  {
    icon: CircleHelp,
    title: "Are you making a profit?",
    body: "Money moves every day, but it is hard to know what the business actually made.",
  },
];

function ProblemCard({ index }: { index: number }) {
  const problem = problems[index];
  const Icon = problem.icon;

  return (
    <div className="challenge-active-card" key={problem.title}>
      <div className="flex items-center justify-between">
        <Icon className="size-7 text-secondary" strokeWidth={1.5} aria-hidden />
        <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(problems.length).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold leading-tight">{problem.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{problem.body}</p>
    </div>
  );
}

export function Challenges() {
  const { scrollRef, activeItem: activeProblem } = useMobileScrollStory(problems.length);
  const reducedMotion = useReducedMotion();

  return (
    <section aria-label="Common business frustrations" className="bg-surface">
      <div ref={scrollRef} className="challenge-mobile-scroll sm:hidden">
        <div className="challenge-mobile-sticky">
          <img
            src={stressIllustration}
            alt="A stressed shop owner surrounded by scattered business records"
            className="challenge-mobile-image"
          />
          <p className="eyebrow mt-4 text-secondary">Sound familiar?</p>
          <h2
            id="challenges-title"
            className="mt-2 text-[2rem] font-semibold leading-[1.04] tracking-tight"
          >
            Tired of business stress?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Running a business is hard enough. Keeping track of it should not add to the pressure.
          </p>

          <div className="mt-5" aria-live="polite">
            <div className={reducedMotion ? "challenge-no-motion" : undefined}>
              <ProblemCard index={activeProblem} />
            </div>
            <div className="mt-5 flex gap-2" aria-hidden>
              {problems.map((problem, index) => (
                <span
                  key={problem.title}
                  className={`challenge-progress ${index === activeProblem ? "is-active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-page band hidden gap-16 sm:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <img
            src={stressIllustration}
            alt="A stressed shop owner surrounded by scattered business records"
            className="mb-10 aspect-square w-full max-w-sm rounded-[2rem] object-cover shadow-soft"
          />
          <SectionHeading
            eyebrow="Sound familiar?"
            title={<span id="challenges-title-desktop">Tired of business stress?</span>}
            intro="Running a business is hard enough. Keeping track of it shouldn't add to the pressure."
          />
        </div>
        <ul className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal
              as="li"
              key={problem.title}
              delay={index * 90}
              className="border-t border-border pt-8"
            >
              <problem.icon className="size-8 text-secondary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold">{problem.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{problem.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
