import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { siteConfig } from "@/lib/site-config";

/**
 * Main call to action. Goes to the live sign-up page when one is configured;
 * until then it explains honestly that sign-up isn't open yet.
 */
export function CtaButton({ size = "xl", variant = "cta", className, label }: ButtonProps & { label?: string }) {
  const [open, setOpen] = useState(false);
  const text = label ?? siteConfig.primaryCtaLabel;

  if (siteConfig.signupUrl) {
    return (
      <Button asChild size={size} variant={variant} className={className}>
        <a href={siteConfig.signupUrl}>
          {text}
          <ArrowRight aria-hidden />
        </a>
      </Button>
    );
  }

  return (
    <>
      <Button size={size} variant={variant} className={className} onClick={() => setOpen(true)}>
        {text}
        <ArrowRight aria-hidden />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Sign-up is almost ready</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              We're finalising how you'll join Trada, including trial details. This button will take you
              straight to sign-up as soon as it's live.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="navy" size="lg" onClick={() => setOpen(false)}>
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
