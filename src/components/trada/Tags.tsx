import { Clock, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function PendingTag({ children = "Pending confirmation", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-pending px-2.5 py-1 text-xs font-semibold text-pending-foreground",
        className,
      )}
    >
      <Clock className="size-3.5" aria-hidden />
      {children}
    </span>
  );
}

export function SampleTag({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "light" ? "bg-muted text-muted-foreground" : "bg-on-navy/10 text-on-navy-muted",
        className,
      )}
    >
      <Info className="size-3.5" aria-hidden />
      Illustrative sample data
    </span>
  );
}
