import { cn } from "@/lib/utils";

/**
 * Temporary text wordmark. Replace with the approved Trada logo artwork once supplied —
 * the real symbol must not be redrawn or approximated.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-2xl font-bold tracking-tight",
          tone === "dark" ? "text-primary" : "text-on-navy",
        )}
      >
        Trada
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6875rem] font-medium tracking-wide",
          tone === "dark" ? "text-accent-foreground" : "text-teal-bright",
        )}
      >
        Manage, Sell, Grow.
      </span>
    </span>
  );
}
