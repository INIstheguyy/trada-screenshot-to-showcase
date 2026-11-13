import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <picture
      className={cn(
        "inline-flex shrink-0 items-center",
        tone === "light" && "rounded-xl bg-white px-3 py-2",
        className,
      )}
    >
      <source srcSet="/brand/trada-logo.webp" type="image/webp" />
      <img
        src="/brand/trada-logo.png"
        alt="Trada — Manage, Sell, Grow."
        width={1018}
        height={265}
        className="h-8 w-auto object-contain sm:h-9"
      />
    </picture>
  );
}
