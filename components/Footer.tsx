import Link from "next/link";
import Logo from "@/components/Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Company info */}
          <div>
            <Logo className="mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              101 Moronfolu Street, Akoka, Lagos State
              <br />
              Plot 7, Bwari Close, Area 8, Garki, Abuja-FCT
            </p>
            <a
              href="mailto:thehagueindustries@gmail.com"
              className="mt-2 block text-sm text-white/70 hover:text-gold transition-colors"
            >
              thehagueindustries@gmail.com
            </a>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Engage Us */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              Engage Us
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Ready to work with a partner who delivers? Reach out for project
              enquiries, proposals, or B2B partnerships.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 rounded bg-gold text-navy text-sm font-bold tracking-wide hover:brightness-110 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © 2026 The Hague Industries Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
