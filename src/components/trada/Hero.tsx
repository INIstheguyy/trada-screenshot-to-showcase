import { useEffect, useState } from "react";
import { Check, Camera, Keyboard, Mic, PackageCheck } from "lucide-react";
import gadgetsImg from "@/assets/hero-gadgets.jpg";
import groceriesImg from "@/assets/hero-groceries.jpg";
import restaurantImg from "@/assets/hero-restaurant.jpg";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

const markets = [
  {
    id: "inventory",
    tab: "Inventory-based",
    business: "Ada's Gadget Hub",
    location: "Computer Village, Lagos",
    image: gadgetsImg,
    imageAlt: "A gadget shop owner standing beside displays of phones and electronics",
    phoneSide: "left" as const,
    mobilePosition: "object-[76%_center]",
    greeting: "Good afternoon, Ada",
    sales: "₦2,485,000",
    expenses: "₦1,940,000",
    itemsSold: "6",
    entry: "3 phones · 2 earpieces · 1 MacBook laptop",
  },
  {
    id: "service",
    tab: "Service-based",
    business: "Amaka's Kitchen",
    location: "Wuse 2, Abuja",
    image: restaurantImg,
    imageAlt: "A restaurant owner standing beside her food counter",
    phoneSide: "left" as const,
    mobilePosition: "object-[78%_center]",
    greeting: "Good afternoon, Amaka",
    sales: "₦326,800",
    expenses: "₦98,400",
    itemsSold: "71",
    entry: "18 rice bowls · 9 soups · 12 takeaway packs",
  },
  {
    id: "hybrid",
    tab: "Hybrid business",
    business: "Kunle's Provision Store",
    location: "Bodija, Ibadan",
    image: groceriesImg,
    imageAlt: "A provisions store owner standing among shelves of groceries",
    phoneSide: "right" as const,
    mobilePosition: "object-[20%_center]",
    greeting: "Good afternoon, Mr Kunle",
    sales: "₦184,500",
    expenses: "₦62,300",
    itemsSold: "34",
    entry: "4 bags of rice · 6 cooking oils · 24 drinks",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const market = markets[active];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % markets.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" aria-labelledby="hero-title" className="bg-hero-wash overflow-hidden">
      <div className="container-page pt-28 pb-20 text-center sm:pt-32 lg:pt-36 lg:pb-24">
        <Reveal className="mx-auto max-w-4xl">
          <h1 id="hero-title" className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Run Your Business Smarter with <span className="text-secondary">Trada.</span>
          </h1>
        </Reveal>

        <Reveal delay={100} className="mt-8 sm:mt-10">
          <div className="relative mx-auto w-full max-w-6xl">
            <div
              className={cn(
                "hero-showcase",
                market.phoneSide === "left" ? "hero-phone-left" : "hero-phone-right",
              )}
              aria-live="polite"
            >
              <div className="hero-photo">
                {markets.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={index === active ? item.imageAlt : ""}
                    width={1536}
                    height={1024}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-out sm:object-center",
                      item.mobilePosition,
                      index === active
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[1.025] opacity-0",
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-navy-deep/10" />
                <div className="hero-business-label">
                  <p className="text-xs font-semibold sm:text-base">{market.business}</p>
                  <p className="text-[0.6rem] text-white/70 sm:text-xs">{market.location}</p>
                </div>
              </div>

              <div className="hero-phone">
                <PhoneFrame label={`${market.tab} business overview`}>
                  <HeroScreen market={market} />
                </PhoneFrame>
              </div>
            </div>

            <div className="relative z-30 mx-auto -mt-4 grid w-full max-w-2xl grid-cols-3 gap-1 rounded-full border border-border bg-surface p-1.5 shadow-soft sm:-mt-6">
              {markets.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={cn(
                    "min-h-10 rounded-full px-2 text-[0.68rem] font-semibold leading-tight transition-colors sm:px-5 sm:text-sm",
                    active === index
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} className="mx-auto mt-10 max-w-3xl">
          <p className="eyebrow text-accent-foreground">For Nigerian business owners</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Record sales, manage stock and see your profit—just by speaking, snapping or typing.
          </p>
          <ul className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[0.95rem] text-muted-foreground">
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
    </section>
  );
}

type Market = (typeof markets)[number];

function HeroScreen({ market }: { market: Market }) {
  return (
    <div
      key={market.id}
      className="screen-in flex h-full flex-col gap-2 bg-background p-2.5 text-left text-foreground sm:gap-3 sm:p-4"
    >
      <div>
        <p className="truncate text-[0.52rem] text-muted-foreground sm:text-[0.7rem]">
          {market.greeting}
        </p>
        <p className="font-display text-xs font-semibold sm:text-base">Today</p>
      </div>
      <div className="rounded-xl bg-primary p-2 text-primary-foreground sm:rounded-2xl sm:p-3.5">
        <p className="text-[0.5rem] text-on-navy-muted sm:text-[0.7rem]">Sales today</p>
        <p className="font-display text-base font-semibold sm:text-2xl">{market.sales}</p>
        <div className="mt-1.5 grid grid-cols-2 gap-1 text-[0.45rem] sm:mt-2 sm:gap-2 sm:text-[0.65rem]">
          <div className="rounded-lg bg-on-navy/10 px-1.5 py-1 sm:px-2 sm:py-1.5">
            <p className="text-on-navy-muted">Expenses</p>
            <p className="truncate font-semibold">{market.expenses}</p>
          </div>
          <div className="rounded-lg bg-on-navy/10 px-1.5 py-1 sm:px-2 sm:py-1.5">
            <p className="text-on-navy-muted">Items sold</p>
            <p className="font-semibold">{market.itemsSold}</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-surface p-2 sm:rounded-2xl sm:p-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground sm:size-6">
            <Check className="size-3 sm:size-3.5" aria-hidden />
          </span>
          <p className="text-[0.52rem] font-semibold sm:text-[0.72rem]">Sale recorded</p>
        </div>
        <p className="mt-1 line-clamp-2 text-[0.46rem] leading-snug text-muted-foreground sm:mt-1.5 sm:text-[0.68rem]">
          {market.entry}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center gap-1 rounded-full bg-secondary py-1.5 text-[0.48rem] font-semibold text-secondary-foreground sm:gap-2 sm:py-2.5 sm:text-[0.72rem]">
        <PackageCheck className="size-3 sm:size-3.5" aria-hidden /> Updated instantly
      </div>
    </div>
  );
}
