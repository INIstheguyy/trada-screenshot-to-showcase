import { useEffect, useState, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

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
      className="feature-story grid items-center gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal className={cn("order-2", reverse ? "lg:order-2" : "lg:order-1")}>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground sm:size-12 sm:rounded-2xl">
            {icon}
          </span>
          <span className="font-display text-base font-medium text-muted-foreground sm:text-lg">
            {number}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold sm:mt-5 sm:text-4xl lg:text-5xl">{title}</h3>
        <p className="mt-2 line-clamp-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
          {body}
        </p>

        <ol
          className="mt-4 grid max-w-lg grid-cols-3 gap-1.5 sm:mt-6 sm:grid-cols-1 sm:gap-2 lg:mt-8 lg:gap-3"
          aria-label={`${title} steps`}
        >
          {steps.map((s, i) => {
            const active = i === step;
            return (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={active}
                  className={cn(
                    "relative flex h-full w-full flex-col items-center gap-1.5 overflow-hidden rounded-xl border px-1.5 py-2.5 text-center transition-colors duration-300 sm:flex-row sm:items-start sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-left lg:gap-4 lg:px-5 lg:py-4",
                    active
                      ? "border-secondary/40 bg-surface shadow-soft"
                      : "border-transparent hover:bg-surface/70",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold transition-colors sm:mt-0.5 sm:size-7 sm:text-sm",
                      active || i < step
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold leading-tight text-foreground sm:text-base">
                      {s.label}
                    </span>
                    <span className="mt-1 hidden text-sm leading-relaxed text-muted-foreground lg:block lg:text-[0.95rem]">
                      {s.caption}
                    </span>
                  </span>
                  {active && auto && inView && i < last && (
                    <span
                      key={`bar-${step}`}
                      aria-hidden="true"
                      className="fill-bar absolute inset-x-0 bottom-0 h-0.5 bg-secondary"
                      style={{
                        animationDuration: `${STEP_MS[i] ?? 3200}ms`,
                        animationTimingFunction: "linear",
                      }}
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
          className="mt-4 hidden min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent lg:inline-flex"
        >
          <RotateCcw className="size-4" aria-hidden /> Play again
        </button>
      </Reveal>

      <Reveal
        delay={120}
        className={cn("order-1 flex flex-col items-center", reverse ? "lg:order-1" : "lg:order-2")}
      >
        <div className="feature-phone-stage">
          <div className="feature-phone-scale">
            <PhoneFrame label={phoneLabel}>
              <div key={step} className="screen-in h-full">
                {renderScreen(step)}
              </div>
            </PhoneFrame>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
