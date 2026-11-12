import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Realistic phone proportions (about 9:19.5). Content scales with the frame width. */
export function PhoneFrame({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <figure
      aria-label={label}
      className={cn("relative m-0 w-full rounded-[2.6rem] bg-device p-2.5 shadow-device", className)}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-background">
        <div className="flex h-7 items-center justify-between px-6 pt-1 text-[0.6rem] font-semibold text-foreground">
          <span aria-hidden="true">9:41</span>
          <span aria-hidden="true" className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-device" />
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-3 rounded-sm bg-foreground/70" />
            <span className="h-2 w-4 rounded-sm bg-foreground/70" />
          </span>
        </div>
        <div className="absolute inset-x-0 top-7 bottom-0">{children}</div>
      </div>
    </figure>
  );
}
