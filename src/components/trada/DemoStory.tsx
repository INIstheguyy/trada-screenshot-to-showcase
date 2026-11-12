import { useEffect, useState, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { SampleTag } from "./Tags";

export type DemoStep = { label: string; caption: string };

const STEP_MS = [2800, 3600, 3600];

export function DemoStory({
  number,
  icon,
  title,
  body,
  steps,
  renderScreen,
  phoneLabel,
  reverse = false,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  body: string;
  steps: DemoStep[];
  renderScreen: (step: number) => ReactNode;
  phoneLabel: string;
  reverse?: boolean;
}) {
  const last = steps.length - 1;
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  // Reduced motion: no autoplay, show the finished result (every step stays selectable).
  useEffect(() => {
    if (reduced) {
      setAuto(false);
      setStep(last);
    }
  }, [reduced, last]);

  useEffect(() => {
    if (!inView || !auto || step >= last) return;
    const t = setTimeout(() => setStep((s) => Math.min(s + 1, last)), STEP_MS[step] ?? 3200);
    return () => clearTimeout(t);
  }, [inView, auto, step, last]);

  const choose = (i: number) => {
    setAuto(false);
    setStep(i);
  };

  const replay = () => {
    setStep(0);
    setAuto(!reduced);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "grid items-center gap-14 lg:grid-cols-2 lg:gap-24",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
            {icon}
          </span>
          <span className="font-display text-lg font-medium text-muted-foreground">{number}</span>
        </div>
        <h3 className="mt-7 text-4xl font-semibold sm:text-5xl">{title}</h3>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{body}</p>

        <ol className="mt-10 max-w-lg space-y-3" aria-label={`${title} steps`}>
          {steps.map((s, i) => {
            const active = i === step;
            return (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={active}
                  className={cn(
                    "relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors duration-300",
                    active
                      ? "border-secondary/40 bg-surface shadow-soft"
                      : "border-transparent hover:bg-surface/70",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors",
                      active || i < step
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{s.label}</span>
                    <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted-foreground">
                      {s.caption}
                    </span>
                  </span>
                  {active && auto && inView && i < last && (
                    <span
                      key={`bar-${step}`}
                      aria-hidden="true"
                      className="fill-bar absolute inset-x-0 bottom-0 h-0.5 bg-secondary"
                      style={{ animationDuration: `${STEP_MS[i] ?? 3200}ms`, animationTimingFunction: "linear" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
        <button
          type="button"
          onClick={replay}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent"
        >
          <RotateCcw className="size-4" aria-hidden /> Play again
        </button>
      </Reveal>

      <Reveal delay={120} className="flex flex-col items-center gap-5">
        <div className="w-[17.5rem] sm:w-[19.5rem]">
          <PhoneFrame label={phoneLabel}>
            <div key={step} className="screen-in h-full">
              {renderScreen(step)}
            </div>
          </PhoneFrame>
        </div>
        <SampleTag />
      </Reveal>
    </div>
  );
}
