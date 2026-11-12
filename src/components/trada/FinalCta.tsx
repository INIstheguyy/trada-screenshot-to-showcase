import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="band bg-navy-glow text-on-navy">
      <Reveal className="container-page flex flex-col items-center text-center">
        <p className="eyebrow text-teal-bright">Manage, Sell, Grow.</p>
        <h2 id="cta-title" className="mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">
          Less stress. More control of your business.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-navy-muted sm:text-xl">
          Start keeping clear records today, and always know how your business is really doing.
        </p>
        <div className="mt-12">
          <CtaButton />
        </div>
      </Reveal>
    </section>
  );
}
