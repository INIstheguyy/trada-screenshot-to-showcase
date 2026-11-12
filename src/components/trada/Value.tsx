import { Eye, ShieldCheck, Lightbulb } from "lucide-react";
import stockImg from "@/assets/stock-owner.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    body: "See what's happening in your business day by day — sales, spending and stock in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Control",
    body: "Keep stock and records more accurate, and cut down on the small mistakes that cost money.",
  },
  {
    icon: Lightbulb,
    title: "Growth",
    body: "Use your own business information to decide what to restock, what to push and where to save.",
  },
];

export function Value() {
  return (
    <section aria-labelledby="value-title" className="band bg-navy-glow text-on-navy">
      <div className="container-page">
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
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 110} className="flex gap-6">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-teal-bright/40 text-teal-bright">
                  <v.icon className="size-6" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="text-3xl font-semibold">{v.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-on-navy-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
