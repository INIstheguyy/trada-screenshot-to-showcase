import { Eye, Lightbulb, ShieldCheck } from "lucide-react";
import stockImg from "@/assets/stock-owner.jpg";
import { useMobileScrollStory } from "@/hooks/use-mobile-scroll-story";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    body: "See sales, spending and stock together, without searching through separate records.",
  },
  {
    icon: ShieldCheck,
    title: "Control",
    body: "Keep stock and records accurate while reducing the small mistakes that cost money.",
  },
  {
    icon: Lightbulb,
    title: "Growth",
    body: "Know what to restock, what to promote and where your business can save.",
  },
];

function ValueCard({ index, reducedMotion }: { index: number; reducedMotion: boolean }) {
  const value = values[index];
  const Icon = value.icon;

  return (
    <div className={reducedMotion ? "value-active-card challenge-no-motion" : "value-active-card"}>
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-teal-bright">
          <Icon className="size-6" strokeWidth={1.6} aria-hidden />
        </span>
        <span className="text-xs font-semibold tracking-[0.14em] text-on-navy-muted">
          {String(index + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{value.title}</h3>
      <p className="mt-3 leading-relaxed text-on-navy-muted">{value.body}</p>
    </div>
  );
}

export function Value() {
  const { scrollRef, activeItem } = useMobileScrollStory(values.length);
  const reducedMotion = useReducedMotion();

  return (
    <section aria-label="Why Trada" className="bg-navy-glow text-on-navy">
      <div ref={scrollRef} className="value-mobile-scroll sm:hidden">
        <div className="value-mobile-sticky">
          <img
            src={stockImg}
            alt="A building materials trader checking pipe fittings on his shelves"
            width={1440}
            height={1024}
            loading="lazy"
            className="value-mobile-image"
          />
          <p className="eyebrow mt-5 text-teal-bright">Why Trada</p>
          <h2 className="mt-2 text-[2rem] font-semibold leading-[1.04] tracking-tight">
            Clarity, control and growth.
          </h2>
          <div className="mt-5" aria-live="polite">
            <ValueCard index={activeItem} reducedMotion={reducedMotion} />
            <div className="mt-5 flex gap-2" aria-hidden>
              {values.map((value, index) => (
                <span
                  key={value.title}
                  className={`value-progress ${index === activeItem ? "is-active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-page band hidden sm:block">
        <SectionHeading
          tone="light"
          eyebrow="Why Trada"
          title={<span id="value-title">Trada gives you clarity, control and growth.</span>}
        />
        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img
              src={stockImg}
              alt="A building materials trader checking pipe fittings on his shelves with his phone in hand"
              width={1440}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <ol className="space-y-12">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 110} className="flex gap-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-teal-bright/40 text-teal-bright">
                  <value.icon className="size-6" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="text-3xl font-semibold">{value.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-on-navy-muted">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
