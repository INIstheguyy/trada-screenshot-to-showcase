import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PendingTag } from "./Tags";

const faqs: { q: string; a: string; pending?: boolean }[] = [
  {
    q: "Is Trada easy to use?",
    a: "Trada is designed for busy owners, not accountants. You can speak, snap a photo or type, and Trada shows you what it understood so you can check it before anything is saved.",
  },
  {
    q: "Does Trada work on my phone?",
    a: "Yes. Trada is being built mobile-first, so recording sales, managing stock and checking your business overview are all designed for your phone.",
  },
  {
    q: "How is business data protected?",
    a: "We'll publish clear details about how Trada stores and protects your business information before launch.",
    pending: true,
  },
  {
    q: "Can I try Trada before paying?",
    a: "Trial details — including how long it lasts and how it starts — are still being finalised. We'll share them here as soon as they're confirmed.",
    pending: true,
  },
  {
    q: "What support is available?",
    a: "Support options are being finalised and will be listed here once confirmed.",
    pending: true,
  },
  {
    q: "What happens after a trial?",
    a: "What happens when a trial ends will be explained here once the trial terms are confirmed.",
    pending: true,
  },
];

export function Faqs() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="band bg-background">
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeading
          eyebrow="FAQs"
          title={<span id="faqs-title">Questions, answered.</span>}
          intro="The things business owners ask us most."
        />
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="min-h-20 gap-6 py-6 font-display text-xl font-medium text-foreground hover:no-underline sm:text-2xl [&>svg]:size-5 [&>svg]:text-secondary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-10 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {f.pending && <PendingTag className="mb-3">Awaiting confirmation</PendingTag>}
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
