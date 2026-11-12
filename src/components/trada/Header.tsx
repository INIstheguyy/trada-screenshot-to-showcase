import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#businesses", label: "Businesses" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#home" aria-label="Trada home" className="rounded-md">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {siteConfig.demoUrl && (
            <Button asChild variant="quiet" size="lg">
              <a href={siteConfig.demoUrl}>Watch 2-Min Demo</a>
            </Button>
          )}
          <CtaButton size="lg" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="quiet" size="touch" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" aria-hidden />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full max-w-sm flex-col bg-background p-0">
            <div className="flex h-20 items-center border-b border-border px-6">
              <SheetTitle asChild>
                <span>
                  <Logo />
                </span>
              </SheetTitle>
            </div>
            <nav aria-label="Mobile" className="flex-1 px-3 py-6">
              <ul className="space-y-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center rounded-xl px-4 font-display text-xl font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-border p-6">
              <CtaButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function PreviewNotice() {
  return (
    <div className="bg-navy-deep text-on-navy-muted">
      <p className="container-page py-2.5 text-center text-xs leading-relaxed sm:text-sm">
        <span className="font-semibold text-on-navy">Review build.</span> Product screens use illustrative
        sample data. Items marked “Pending” are awaiting confirmation.
      </p>
    </div>
  );
}
