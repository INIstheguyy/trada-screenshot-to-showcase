import { navLinks } from "./Header";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-on-navy-muted">
      <div className="container-page grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:py-24">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 leading-relaxed">
            Trada helps Nigerian business owners record sales, manage stock, track expenses and debtors, and know
            their profit — just speak, snap or type.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-lg font-semibold text-on-navy">Product</p>
          <ul className="mt-5 space-y-3">
            {navLinks.slice(1).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-1 transition-colors hover:text-on-navy">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-lg font-semibold text-on-navy">Company & legal</p>
          <p className="mt-5 leading-relaxed">
            Contact details, privacy policy, terms and data protection information will appear here once
            confirmed.
          </p>
        </div>
      </div>
      <div className="border-t border-on-navy/10">
        <p className="container-page py-6 text-sm">© {new Date().getFullYear()} Trada. All rights reserved.</p>
      </div>
    </footer>
  );
}
