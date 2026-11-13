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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-page pt-3 sm:pt-5">
        <div
          className={cn(
            "pointer-events-auto flex h-16 items-center justify-between gap-4 rounded-full border border-border/75 bg-background/92 px-4 backdrop-blur-xl transition-shadow duration-300 sm:h-[4.5rem] sm:px-6 lg:px-7",
            scrolled ? "shadow-soft" : "shadow-[0_8px_30px_-22px_rgba(15,31,61,0.35)]",
          )}
        >
          <a href="#home" aria-label="Trada home" className="shrink-0 rounded-md">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-3.5 py-2 text-[0.9rem] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {siteConfig.demoUrl && (
              <Button asChild variant="quiet" size="lg">
                <a href={siteConfig.demoUrl}>Watch 2-Min Demo</a>
              </Button>
            )}
            <CtaButton size="lg" />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="quiet"
                size="touch"
                className="shrink-0 rounded-full border border-border bg-surface lg:hidden"
                aria-label="Open menu"
              >
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
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center rounded-xl px-4 font-display text-xl font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {link.label}
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
      </div>
    </header>
  );
}
