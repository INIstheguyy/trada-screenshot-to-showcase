import {
  Car,
  CupSoda,
  Egg,
  Scissors,
  ShoppingBasket,
  Smartphone,
  Snowflake,
  Store,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { icon: ShoppingBasket, label: "Groceries & supermarkets" },
  { icon: Smartphone, label: "Electronics & gadgets" },
  { icon: Wrench, label: "Building & plumbing materials" },
  { icon: UtensilsCrossed, label: "Restaurants & food" },
  { icon: Car, label: "Auto trade & spare parts" },
  { icon: Egg, label: "Poultry & farming" },
  { icon: CupSoda, label: "Drink distribution" },
  { icon: Snowflake, label: "Frozen food" },
  { icon: Store, label: "Retail shops" },
  { icon: Scissors, label: "Services — salons, laundry" },
];

export function Categories() {
  return (
    <section id="businesses" aria-labelledby="businesses-title" className="band bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Businesses"
          title={<span id="businesses-title">Built for your type of business.</span>}
          intro="Whether you sell by the bag, the carton, the plate or the appointment, Trada fits the way you already work."
        />
        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-16">
          {categories.map((c, i) => (
            <Reveal as="li" key={c.label} delay={(i % 5) * 70} className="border-t border-border pt-7">
              <c.icon className="size-9 text-secondary" strokeWidth={1.4} aria-hidden />
              <p className="mt-5 text-lg font-medium leading-snug text-foreground">{c.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
