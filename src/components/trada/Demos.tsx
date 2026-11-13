import type { CSSProperties, ReactNode } from "react";
import { Camera, LayoutDashboard, Mic, Package } from "lucide-react";
import { CommandScreen, InventoryScreen, SnapScreen, TalkScreen } from "./DemoScreens";
import { DemoStory } from "./DemoStory";
import { SectionHeading } from "./SectionHeading";

const iconCls = "size-5";

const cards = [
  {
    number: "01",
    icon: <Mic className={iconCls} aria-hidden />,
    title: "Talk to Trada",
    body: "Record a sale or stock update in your own words. Trada structures it for you to confirm.",
    phoneLabel: "Voice entry product demo",
    steps: [
      { label: "You speak", caption: "Say what was sold, the quantity and the customer." },
      { label: "You check", caption: "Review the details Trada picked up." },
      { label: "It's saved", caption: "Your sale and stock are updated together." },
    ],
    renderScreen: (step: number) => <TalkScreen step={step} />,
  },
  {
    number: "02",
    icon: <Camera className={iconCls} aria-hidden />,
    title: "Snap your records",
    body: "Turn notebook pages and product labels into editable entries with one photo.",
    phoneLabel: "Photo entry product demo",
    steps: [
      { label: "Take a photo", caption: "Capture a notebook page or product label." },
      { label: "Review", caption: "Correct anything that needs your attention." },
      { label: "Save", caption: "Confirm the entries in one tap." },
    ],
    renderScreen: (step: number) => <SnapScreen step={step} />,
  },
  {
    number: "03",
    icon: <Package className={iconCls} aria-hidden />,
    title: "Manage inventory",
    body: "See stock quantities, costs and selling prices without counting from scratch.",
    phoneLabel: "Inventory product demo",
    steps: [
      { label: "See your stock", caption: "View each item and its current quantity." },
      { label: "Check details", caption: "See cost, price and total stock value." },
      { label: "Add new stock", caption: "Record deliveries as they arrive." },
    ],
    renderScreen: (step: number) => <InventoryScreen step={step} />,
  },
  {
    number: "04",
    icon: <LayoutDashboard className={iconCls} aria-hidden />,
    title: "Owner Command Centre",
    body: "See sales, spending, profit and unpaid balances in one clear place.",
    phoneLabel: "Business overview product demo",
    steps: [
      { label: "Sales", caption: "See today's sales and best-selling items." },
      { label: "Expenses", caption: "Know what went out and why." },
      { label: "Profit and debtors", caption: "Track earnings and unpaid balances." },
    ],
    renderScreen: (step: number) => <CommandScreen step={step} />,
  },
];

export function Demos() {
  return (
    <section
      id="features"
      aria-labelledby="demos-title"
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Features"
          title={<span id="demos-title">See Trada in action.</span>}
          intro="Four everyday workflows. Scroll through them or tap any step to explore the demo."
        />

        <div className="feature-stack mt-14 sm:mt-16">
          {cards.map((card, index) => (
            <FeaturePanel key={card.number} index={index}>
              <DemoStory
                number={card.number}
                icon={card.icon}
                title={card.title}
                body={card.body}
                phoneLabel={card.phoneLabel}
                steps={card.steps}
                renderScreen={card.renderScreen}
                reverse={index % 2 === 1}
              />
            </FeaturePanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturePanel({ index, children }: { index: number; children: ReactNode }) {
  return (
    <article
      className="feature-panel"
      style={
        {
          "--feature-top": `${7.5 + index * 0.8}rem`,
          "--feature-top-mobile": `${5.5 + index * 0.55}rem`,
          zIndex: index + 1,
        } as CSSProperties
      }
    >
      <div className="feature-panel-body">{children}</div>
    </article>
  );
}
