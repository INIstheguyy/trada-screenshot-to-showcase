import { Camera, LayoutDashboard, Mic, Package } from "lucide-react";
import { CommandScreen, InventoryScreen, SnapScreen, TalkScreen } from "./DemoScreens";
import { DemoStory } from "./DemoStory";
import { SectionHeading } from "./SectionHeading";

const iconCls = "size-5";

export function Demos() {
  return (
    <section id="features" aria-labelledby="demos-title" className="band bg-background">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Features"
          title={<span id="demos-title">See Trada in action.</span>}
          intro="Four everyday moments. Watch each one play through, or tap a step to see it for yourself."
        />
        <div className="mt-24 space-y-32 lg:mt-32 lg:space-y-44">
          <DemoStory
            number="01"
            icon={<Mic className={iconCls} aria-hidden />}
            title="Talk to Trada"
            body="Say what happened in your own words. Trada turns it into a proper sale or stock entry — and asks you to check anything it isn't sure about."
            phoneLabel="Voice entry demo with illustrative sample data"
            steps={[
              { label: "You speak", caption: "“Sold three bags of rice, fifty kilo, to Mrs. Adeyemi.”" },
              {
                label: "You check",
                caption: "Trada fills in the item, quantity and customer, and flags what it didn't hear.",
              },
              { label: "It's saved", caption: "The sale is recorded and your stock count goes down." },
            ]}
            renderScreen={(s) => <TalkScreen step={s} />}
          />
          <DemoStory
            reverse
            number="02"
            icon={<Camera className={iconCls} aria-hidden />}
            title="Snap your records"
            body="Already keep a notebook? Take a photo of the page. Trada reads it into editable entries so you don't have to type everything again."
            phoneLabel="Photo entry demo with illustrative sample data"
            steps={[
              { label: "Take a photo", caption: "Point your camera at a notebook page or product label." },
              {
                label: "Review and correct",
                caption: "Check each line. Anything hard to read is highlighted for you to fix.",
              },
              { label: "Save in one tap", caption: "Every confirmed line becomes a sale in your records." },
            ]}
            renderScreen={(s) => <SnapScreen step={s} />}
          />
          <DemoStory
            number="03"
            icon={<Package className={iconCls} aria-hidden />}
            title="Manage inventory"
            body="Know exactly what's on your shelves, what each item cost you and what it sells for — without counting from scratch."
            phoneLabel="Inventory demo with illustrative sample data"
            steps={[
              { label: "See your stock", caption: "Every item with its quantity and selling price." },
              { label: "Open an item", caption: "Cost price, selling price and what your stock is worth." },
              { label: "Add new stock", caption: "Record goods received and the numbers update right away." },
            ]}
            renderScreen={(s) => <InventoryScreen step={s} />}
          />
          <DemoStory
            reverse
            number="04"
            icon={<LayoutDashboard className={iconCls} aria-hidden />}
            title="Owner Command Centre"
            body="One clear view of the day: what you sold, what you spent, what you made and who still owes you."
            phoneLabel="Business overview demo with illustrative sample data"
            steps={[
              { label: "Sales", caption: "Today's sales and your best-selling items." },
              { label: "Expenses", caption: "What went out, and on what." },
              { label: "Profit and debtors", caption: "Your profit for the day and customers who still owe." },
            ]}
            renderScreen={(s) => <CommandScreen step={s} />}
          />
        </div>
      </div>
    </section>
  );
}
