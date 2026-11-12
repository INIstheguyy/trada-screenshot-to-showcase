import { Check, Mic, Camera, Keyboard } from "lucide-react";
import heroImg from "@/assets/hero-owner.jpg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "./CtaButton";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { SampleTag } from "./Tags";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-hero-wash overflow-hidden">
      <div className="container-page grid items-center gap-16 pt-14 pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-24 lg:pb-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6 text-accent-foreground">For Nigerian business owners</p>
            <h1 id="hero-title" className="text-5xl font-semibold sm:text-6xl xl:text-7xl">
              Run Your Business Smarter with <span className="text-secondary">Trada.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground">
              Record sales, manage stock and know your profit effortlessly. Just speak, snap or type.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton />
              {siteConfig.demoUrl && (
                <Button asChild variant="quiet" size="xl">
                  <a href={siteConfig.demoUrl}>Watch 2-Min Demo</a>
                </Button>
              )}
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[0.95rem] text-muted-foreground">
              {[
                { icon: Mic, label: "Speak" },
                { icon: Camera, label: "Snap" },
                { icon: Keyboard, label: "Type" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative ml-auto w-[88%] overflow-hidden rounded-[2rem] shadow-soft sm:w-[82%]">
            <img
              src={heroImg}
              alt="A shop owner smiling at her phone behind the counter of her provisions store"
              width={1440}
              height={1600}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-0 w-[58%] max-w-[17.5rem] sm:-bottom-12 sm:w-[48%]">
            <PhoneFrame label="Trada today overview, sample data">
              <HeroScreen />
            </PhoneFrame>
          </div>
          <SampleTag className="absolute top-4 right-4 bg-surface/95 shadow-soft sm:right-6" />
        </Reveal>
      </div>
    </section>
  );
}

function HeroScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-background p-4 text-foreground">
      <div>
        <p className="text-[0.7rem] text-muted-foreground">Good afternoon, Mama Tolu</p>
        <p className="font-display text-base font-semibold">Today</p>
      </div>
      <div className="rounded-2xl bg-primary p-3.5 text-primary-foreground">
        <p className="text-[0.7rem] text-on-navy-muted">Sales today</p>
        <p className="font-display text-2xl font-semibold">₦84,500</p>
        <div className="mt-2 grid grid-cols-2 gap-2 text-[0.65rem]">
          <div className="rounded-lg bg-on-navy/10 px-2 py-1.5">
            <p className="text-on-navy-muted">Expenses</p>
            <p className="font-semibold">₦12,300</p>
          </div>
          <div className="rounded-lg bg-on-navy/10 px-2 py-1.5">
            <p className="text-on-navy-muted">Items sold</p>
            <p className="font-semibold">46</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-surface p-3">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-full bg-secondary text-secondary-foreground">
            <Check className="size-3.5" aria-hidden />
          </span>
          <p className="text-[0.72rem] font-semibold">Sale recorded</p>
        </div>
        <p className="mt-1.5 text-[0.7rem] leading-snug text-muted-foreground">
          3 × Rice (50kg) to Mrs. Adeyemi
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center gap-2 rounded-full bg-secondary py-2.5 text-[0.72rem] font-semibold text-secondary-foreground">
        <Mic className="size-3.5" aria-hidden /> Tap to talk
      </div>
    </div>
  );
}
