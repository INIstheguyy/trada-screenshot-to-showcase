import { AlertTriangle, Check, ChevronLeft, Mic, Plus, Search, ScanLine } from "lucide-react";
import notebookImg from "@/assets/notebook.jpg";
import { cn } from "@/lib/utils";

/* ---------- shared bits ---------- */

function ScreenHeader({ title, back = false }: { title: string; back?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-4 pt-2 pb-3">
      {back && <ChevronLeft className="size-4 text-muted-foreground" aria-hidden />}
      <p className="font-display text-[0.95rem] font-semibold">{title}</p>
    </div>
  );
}

function Field({
  label,
  value,
  note,
  flagged = false,
}: {
  label: string;
  value: string;
  note?: string;
  flagged?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-3 py-2",
        flagged ? "border-pending-foreground/40 bg-pending" : "border-border bg-surface",
      )}
    >
      <p className={cn("text-[0.62rem]", flagged ? "text-pending-foreground" : "text-muted-foreground")}>
        {label}
      </p>
      <div className="flex items-center justify-between gap-2">
        <p className={cn("text-[0.78rem] font-semibold", flagged && "text-pending-foreground")}>{value}</p>
        {flagged ? (
          <AlertTriangle className="size-3.5 shrink-0 text-pending-foreground" aria-hidden />
        ) : (
          <Check className="size-3.5 shrink-0 text-secondary" aria-hidden />
        )}
      </div>
      {note && (
        <p className={cn("mt-0.5 text-[0.6rem]", flagged ? "text-pending-foreground" : "text-muted-foreground")}>
          {note}
        </p>
      )}
    </div>
  );
}

function PrimaryBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full bg-secondary py-2.5 text-[0.75rem] font-semibold text-secondary-foreground">
      {children}
    </div>
  );
}

function Success({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center px-4 pt-4 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-secondary text-secondary-foreground">
        <Check className="size-7" aria-hidden />
      </span>
      <p className="mt-3 font-display text-lg font-semibold">{title}</p>
      <p className="mt-1 text-[0.7rem] text-muted-foreground">{sub}</p>
    </div>
  );
}

/* ---------- 1. Talk to Trada ---------- */

export function TalkScreen({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="flex h-full flex-col bg-primary px-5 pb-6 text-primary-foreground">
        <p className="pt-4 text-center text-[0.7rem] text-on-navy-muted">Listening…</p>
        <div className="mt-8 rounded-2xl rounded-bl-sm bg-on-navy/10 p-4">
          <p className="text-[0.85rem] leading-relaxed">
            “Sold three bags of rice, fifty kilo, to Mrs. Adeyemi.”
          </p>
        </div>
        <div className="mt-10 flex h-16 items-center justify-center gap-1.5" aria-hidden="true">
          {[0.5, 0.9, 0.6, 1, 0.7, 0.95, 0.55, 0.85, 0.6, 0.75, 0.5].map((h, i) => (
            <span
              key={i}
              className="wave-bar w-1.5 rounded-full bg-teal-bright"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
        <div className="mt-auto flex flex-col items-center gap-3">
          <span className="grid size-16 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-cta">
            <Mic className="size-7" aria-hidden />
          </span>
          <p className="text-[0.68rem] text-on-navy-muted">Speak in your own words</p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="flex h-full flex-col gap-2 pb-5">
        <ScreenHeader title="Check before saving" />
        <div className="flex flex-1 flex-col gap-2 px-4">
          <Field label="Item" value="Rice (50kg bag)" />
          <Field label="Quantity" value="3 bags" />
          <Field label="Customer" value="Mrs. Adeyemi" />
          <Field label="Price per bag" value="₦68,000" note="From your stock list" />
          <Field label="Payment" value="Not heard — please choose" flagged />
          <div className="flex gap-1.5">
            {["Cash", "Transfer", "Owes"].map((m, i) => (
              <span
                key={m}
                className={cn(
                  "flex-1 rounded-full border py-1.5 text-center text-[0.68rem] font-semibold",
                  i === 1 ? "border-secondary bg-accent text-accent-foreground" : "border-border",
                )}
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            <PrimaryBar>Save sale</PrimaryBar>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col pb-5">
      <Success title="Sale saved" sub="You checked it, Trada recorded it." />
      <div className="mx-4 mt-5 space-y-2 rounded-2xl border border-border bg-surface p-3.5 text-[0.75rem]">
        <Row k="3 × Rice (50kg)" v="₦204,000" bold />
        <Row k="Customer" v="Mrs. Adeyemi" />
        <Row k="Payment" v="Transfer" />
      </div>
      <div className="mx-4 mt-3 rounded-2xl bg-accent p-3.5">
        <p className="text-[0.65rem] font-semibold text-accent-foreground">Stock updated</p>
        <p className="mt-1 text-[0.8rem] font-semibold">
          Rice (50kg): 12 <span className="text-muted-foreground">→</span> 9 bags left
        </p>
      </div>
    </div>
  );
}

function Row({ k, v, bold = false }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className={cn(bold ? "font-semibold" : "text-muted-foreground")}>{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}

/* ---------- 2. Snap your records ---------- */

const snapRows = [
  { item: "Indomie", qty: "8", amount: "₦3,200" },
  { item: "Milo", qty: "1", amount: "₦1,200" },
  { item: "Peak Milk", qty: "2", amount: "₦3,000" },
  { item: "Coca-Cola", qty: "4", amount: "₦2,000" },
  { item: "Eva Water", qty: "8", amount: "₦1,600", flagged: true },
];

export function SnapScreen({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="relative h-full bg-device">
        <img
          src={notebookImg}
          alt="Handwritten notebook page of the day's sales"
          width={1024}
          height={1280}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[75%_50%] opacity-90"
        />
        <div className="absolute inset-5 rounded-2xl border-2 border-teal-bright/80" aria-hidden="true">
          <span className="scan-line absolute inset-x-2 h-0.5 rounded-full bg-teal-bright shadow-cta" />
        </div>
        <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-2">
          <span className="rounded-full bg-device/80 px-3 py-1 text-[0.65rem] text-on-navy">
            <ScanLine className="mr-1 inline size-3" aria-hidden />
            Reading your notebook…
          </span>
          <span className="grid size-14 place-items-center rounded-full border-4 border-on-navy/80 bg-on-navy/20" />
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="flex h-full flex-col pb-5">
        <ScreenHeader title="Review what Trada read" />
        <div className="mx-4 flex items-center gap-3 rounded-xl bg-muted p-2">
          <img src={notebookImg} alt="" width={1024} height={1280} loading="lazy" className="h-10 w-10 rounded-lg object-cover" />
          <p className="text-[0.65rem] leading-snug text-muted-foreground">
            Notebook page · 15/04
            <br />5 sales found
          </p>
        </div>
        <ul className="mx-4 mt-3 space-y-1.5">
          {snapRows.map((r) => (
            <li
              key={r.item}
              className={cn(
                "rounded-xl border px-3 py-2 text-[0.72rem]",
                r.flagged ? "border-pending-foreground/40 bg-pending" : "border-border bg-surface",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold">{r.item}</span>
                <span className="flex items-center gap-3">
                  <span className={cn(r.flagged && "font-semibold text-pending-foreground")}>× {r.qty}</span>
                  <span className="font-semibold">{r.amount}</span>
                </span>
              </div>
              {r.flagged && (
                <p className="mt-1 flex items-center gap-1 text-[0.62rem] font-medium text-pending-foreground">
                  <AlertTriangle className="size-3" aria-hidden /> Is this 8 or 6? Tap to fix
                </p>
              )}
            </li>
          ))}
        </ul>
        <div className="mx-4 mt-auto">
          <PrimaryBar>Confirm & save</PrimaryBar>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col pb-5">
      <Success title="5 sales saved" sub="From your notebook page · 15/04" />
      <ul className="mx-4 mt-5 divide-y divide-border rounded-2xl border border-border bg-surface px-3.5 text-[0.72rem]">
        {snapRows.map((r) => (
          <li key={r.item} className="flex items-center justify-between py-2">
            <span>
              {r.item} <span className="text-muted-foreground">× {r.qty}</span>
            </span>
            <span className="font-semibold">{r.amount}</span>
          </li>
        ))}
      </ul>
      <div className="mx-4 mt-3 flex items-center justify-between rounded-2xl bg-primary px-3.5 py-3 text-primary-foreground">
        <span className="text-[0.7rem] text-on-navy-muted">Total</span>
        <span className="font-display text-base font-semibold">₦11,000</span>
      </div>
    </div>
  );
}

/* ---------- 3. Manage inventory ---------- */

const stock = [
  { name: "Rice (50kg bag)", qty: "9 bags", price: "₦68,000" },
  { name: "Vegetable oil (5L)", qty: "14 kegs", price: "₦11,500" },
  { name: "Sugar (1kg)", qty: "32 packs", price: "₦1,800" },
  { name: "Tomato paste (carton)", qty: "3 cartons", price: "₦19,000" },
  { name: "Spaghetti (carton)", qty: "6 cartons", price: "₦16,500" },
];

export function InventoryScreen({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="flex h-full flex-col pb-5">
        <ScreenHeader title="Your stock" />
        <div className="mx-4 flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-[0.7rem] text-muted-foreground">
          <Search className="size-3.5" aria-hidden /> Search items
        </div>
        <div className="mx-4 mt-3 flex justify-between text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Item</span>
          <span>Selling price</span>
        </div>
        <ul className="mx-4 mt-1.5 space-y-1.5">
          {stock.map((s, i) => (
            <li
              key={s.name}
              className={cn(
                "flex items-center justify-between rounded-xl border px-3 py-2.5",
                i === 0 ? "border-secondary bg-accent" : "border-border bg-surface",
              )}
            >
              <span>
                <span className="block text-[0.74rem] font-semibold">{s.name}</span>
                <span className="block text-[0.64rem] text-muted-foreground">{s.qty} in stock</span>
              </span>
              <span className="text-[0.74rem] font-semibold">{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const added = step === 2;
  return (
    <div className="flex h-full flex-col pb-5">
      <ScreenHeader title="Rice (50kg bag)" back />
      <div className="mx-4 rounded-2xl bg-primary p-4 text-primary-foreground">
        <p className="text-[0.65rem] text-on-navy-muted">In stock</p>
        <p className="font-display text-3xl font-semibold">{added ? "29" : "9"} bags</p>
        {added && (
          <p className="mt-1 text-[0.65rem] font-semibold text-teal-bright">+20 bags received today</p>
        )}
      </div>
      <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
        <Field label="Cost price" value="₦61,000" />
        <Field label="Selling price" value="₦68,000" />
      </div>
      <div className="mx-4 mt-2 rounded-xl border border-border bg-surface px-3 py-2.5">
        <p className="text-[0.62rem] text-muted-foreground">Stock value (at cost)</p>
        <p className="text-[0.95rem] font-semibold">{added ? "₦1,769,000" : "₦549,000"}</p>
      </div>
      <div className="mx-4 mt-auto">
        {added ? (
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent py-2.5 text-[0.75rem] font-semibold text-accent-foreground">
            <Check className="size-4" aria-hidden /> Stock updated
          </div>
        ) : (
          <PrimaryBar>
            <Plus className="size-4" aria-hidden /> Add stock
          </PrimaryBar>
        )}
      </div>
    </div>
  );
}

/* ---------- 4. Owner Command Centre ---------- */

export function CommandScreen({ step }: { step: number }) {
  return (
    <div className="flex h-full flex-col gap-2 pb-5">
      <ScreenHeader title="Command Centre · Today" />
      <div className="mx-4 rounded-2xl bg-primary p-3.5 text-primary-foreground">
        <p className="text-[0.65rem] text-on-navy-muted">Sales</p>
        <p className="font-display text-2xl font-semibold">₦84,500</p>
        <div className="mt-2 space-y-1.5">
          {[
            { n: "Rice (50kg)", w: 82 },
            { n: "Vegetable oil", w: 48 },
            { n: "Sugar", w: 30 },
          ].map((b) => (
            <div key={b.n} className="flex items-center gap-2 text-[0.6rem]">
              <span className="w-20 shrink-0 text-on-navy-muted">{b.n}</span>
              <span className="h-1.5 flex-1 rounded-full bg-on-navy/10">
                <span className="fill-bar block h-full rounded-full bg-teal-bright" style={{ width: `${b.w}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {step >= 1 && (
        <div className="screen-in mx-4 rounded-2xl border border-border bg-surface p-3.5">
          <div className="flex items-baseline justify-between">
            <p className="text-[0.65rem] text-muted-foreground">Expenses</p>
            <p className="text-[0.95rem] font-semibold">₦12,300</p>
          </div>
          <div className="mt-1.5 space-y-1 text-[0.65rem] text-muted-foreground">
            <Row k="Transport" v="₦4,500" />
            <Row k="Electricity" v="₦7,800" />
          </div>
        </div>
      )}

      {step >= 2 && (
        <div className="screen-in mx-4 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-accent p-3">
            <p className="text-[0.62rem] text-accent-foreground">Profit</p>
            <p className="text-[0.95rem] font-semibold">₦21,400</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3">
            <p className="text-[0.62rem] text-muted-foreground">Customers owing</p>
            <p className="text-[0.95rem] font-semibold">₦38,000</p>
            <p className="text-[0.58rem] text-muted-foreground">3 customers</p>
          </div>
        </div>
      )}
    </div>
  );
}
