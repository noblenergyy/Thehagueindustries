import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  Globe,
  MapPin,
  ShieldCheck,
  HardHat,
  Briefcase,
  Users,
  Wrench,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "The Hague Industries Ltd | Multi-Sector Contracting & Advisory",
  description:
    "CAC-registered Nigerian contracting, consultancy, and advisory company. Serving government MDAs, oil & gas, mining, and corporate clients nationwide.",
};

const valuePillars = [
  {
    Icon: Landmark,
    title: "CAC Registered",
    desc: "Fully incorporated under CAMA 2020 | RC 8551874",
  },
  {
    Icon: Globe,
    title: "Multi-Sector",
    desc: "From oil & gas to government digitalization",
  },
  {
    Icon: MapPin,
    title: "Nationwide Reach",
    desc: "Operating across Nigerian states and beyond",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance-First",
    desc: "Secretary-governed, audit-ready, and compliance-first",
  },
];

const serviceCards = [
  {
    Icon: HardHat,
    title: "General Contracting",
    desc: "Civil & infrastructure works, supply, site remediation, and facility management.",
    anchor: "contracting",
  },
  {
    Icon: Briefcase,
    title: "Consultancy",
    desc: "Strategic advisory, compliance consulting, project management, and government affairs.",
    anchor: "consultancy",
  },
  {
    Icon: Users,
    title: "B2B Solutions",
    desc: "Supply agreements, joint venture structuring, and vendor partnerships.",
    anchor: "b2b",
  },
  {
    Icon: Wrench,
    title: "Remediation & Allied",
    desc: "Site remediation mandates and allied business execution.",
    anchor: "contracting",
  },
];

const featuredProjects = [
  {
    title: "Supply Agreement: Rainoil Limited",
    client: "Rainoil Ltd",
    sector: "Oil & Gas",
    outcome: "Completed",
    desc: "Executed a commercial supply agreement including issuance of a Bill of Collection for oil & gas product supply.",
  },
  {
    title: "Enugu Digital Economy Portal Proposal",
    client: "Enugu State Government",
    sector: "Government / Digitalization",
    outcome: "Delivered",
    desc: "Developed and submitted a white paper proposing a state-wide digitalization platform.",
  },
  {
    title: "Niger State Mining Compliance Advisory",
    client: "Niger State",
    sector: "Mining & Resources",
    outcome: "Delivered",
    desc: "Prepared a compliance advisory note for a Niger State mining transaction covering regulatory requirements.",
  },
];

const stats = [
  { label: "Year Established", value: "2025" },
  { label: "Active Mandates", value: "5+" },
  { label: "Sectors Served", value: "5" },
  { label: "States of Operation", value: "6+" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-center justify-center min-h-screen pt-18 overflow-hidden"
        style={{ backgroundImage: "var(--hero-bg)" }}
      >
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="animate-fade-up text-gold text-xs tracking-[0.3em] uppercase mb-6 font-medium">
            RC 8551874 &nbsp;|&nbsp; Abuja-FCT, Nigeria
          </p>
          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-navy dark:text-white leading-tight mb-6">
            Delivering Excellence
            <br />
            <span className="text-gold animate-gold-pulse">Across Every Contract.</span>
          </h1>
          <p className="animate-fade-up delay-200 text-navy/65 dark:text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The Hague Industries Ltd is a Nigerian-incorporated contracting and
            advisory company built to perform, pivot, and scale across sectors
            and across borders.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3.5 rounded bg-gold text-navy font-bold text-sm tracking-wide hover:brightness-110 transition-all"
            >
              Explore Our Services
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3.5 rounded border border-navy/40 dark:border-white/40 text-navy dark:text-white font-semibold text-sm tracking-wide hover:border-navy hover:bg-navy/10 dark:hover:border-white dark:hover:bg-white/10 transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION STRIP */}
      <section className="bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePillars.map((p, i) => (
              <div key={p.title} className={`flex items-start gap-4 animate-fade-up delay-${(i + 1) * 100}`}>
                <p.Icon size={22} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-gold font-bold text-sm uppercase tracking-wide">
                    {p.title}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              What We Do
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Our Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((s) => (
              <Link
                key={s.title}
                href={`/services#${s.anchor}`}
                className="group bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <s.Icon
                  size={28}
                  className="text-gold mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-bold text-navy dark:text-white text-base mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 rounded border-2 border-navy dark:border-gold text-navy dark:text-gold font-semibold text-sm hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="bg-white dark:bg-dark-page py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
                About Us
              </p>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">
                Built to Deliver at the Highest Standard
              </h2>
              <p className="text-body-text leading-relaxed mb-4">
                Incorporated in June 2025, The Hague Industries Ltd was founded
                with a single mandate: to deliver at the highest standard, every
                time. From general contracting and remediation to B2B
                partnerships and government advisory, we operate wherever our
                clients need us, with the compliance infrastructure to match.
              </p>what 
              <p className="text-gold font-semibold italic text-lg mb-6">
                &ldquo;Our vision is transnational. Our execution is local. Our
                standard is non-negotiable.&rdquo;
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 rounded bg-navy text-white font-semibold text-sm hover:brightness-110 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <StatCounter
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  delay={i * 120}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Our Work
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.title}
                className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                    {p.sector}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      p.outcome === "Completed"
                        ? "bg-green-100 text-green-700"
                        : p.outcome === "Delivered"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {p.outcome}
                  </span>
                </div>
                <h3 className="font-bold text-navy dark:text-white text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-body-text text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
                <p className="text-xs text-body-text/60 mt-4 font-medium">
                  {p.client}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 rounded border-2 border-navy dark:border-gold text-navy dark:text-gold font-semibold text-sm hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With a Partner Who Delivers?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Whether it is a government mandate, a corporate contract, or a B2B
            partnership. We are ready.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded bg-gold text-navy font-bold text-sm tracking-wide hover:brightness-110 transition-all"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}
