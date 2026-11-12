import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-5", tone === "dark" ? "text-accent-foreground" : "text-teal-bright")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl font-semibold sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-foreground" : "text-on-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed sm:text-xl",
            tone === "dark" ? "text-muted-foreground" : "text-on-navy-muted",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
