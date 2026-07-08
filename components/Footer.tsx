import Link from "next/link";
import Logo from "@/components/Logo";
import { CurveFlourish, Diamond } from "@/components/Ornaments";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy dark:bg-dark-page text-white border-t border-white/10 overflow-hidden">
      <CurveFlourish className="absolute top-4 right-0 w-[420px] text-gold opacity-50" flip />
      {/* Statement band */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/10">
        <div className="flex items-center gap-4 mb-8" aria-hidden="true">
          <Diamond />
          <span className="h-px w-24 bg-gold/40" />
        </div>
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug max-w-3xl">
          Our mandate is continental. Our execution is exact.{" "}
          <span className="italic text-gold">Our standard is non-negotiable.</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1 — Company info */}
          <div className="md:col-span-5">
            <Logo className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed">
              A multi-sector contracting, consultancy, and advisory enterprise
              with transnational reach.
            </p>
            <a
              href="mailto:thehagueindustries@gmail.com"
              className="mt-3 inline-block text-sm text-white/60 hover:text-gold transition-colors"
            >
              thehagueindustries@gmail.com
            </a>
          </div>

          {/* Col 2 — Quick links */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-gold mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Engage Us */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-gold mb-6">
              Engage Us
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Ready to work with a partner who delivers? Reach out for project
              enquiries, proposals, or B2B partnerships.
            </p>
            <Link
              href="/contact"
              className="inline-block px-7 py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 tracking-wide">
            © 2026 The Hague Industries Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40 tracking-[0.2em] uppercase">
            RC 8551874 · Incorporated under CAMA 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
