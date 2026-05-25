import type { Metadata } from "next";
import Link from "next/link";
import FloatingPathsBg from "@/components/FloatingPaths";
import {
  CheckCircle2,
  Landmark,
  MapPin,
  RefreshCw,
  ClipboardList,
  Users,
  Fuel,
  Activity,
  Pickaxe,
  Monitor,
  HardHat,
  Package,
  Leaf,
  Building2,
  BarChart2,
  FileText,
  Link2,
  UserCheck,
  Globe,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General contracting, consultancy, B2B supply agreements, and site remediation. The Hague Industries Ltd delivers across government, oil & gas, mining, and digitalization sectors.",
  alternates: {
    canonical: "https://thehagueindustries.com/services",
  },
};

const differentiators = [
  { Icon: CheckCircle2, text: "CAC-registered & compliance-driven" },
  { Icon: Landmark, text: "Proven public sector track record" },
  { Icon: MapPin, text: "Nationwide operational reach" },
  { Icon: RefreshCw, text: "Multi-sector flexibility" },
  { Icon: ClipboardList, text: "Secretary-governed & audit-ready" },
  { Icon: Users, text: "Established B2B partnership network" },
];

const sectors = [
  { label: "Oil & Gas", Icon: Fuel },
  { label: "Government & Public Sector", Icon: Landmark },
  { label: "Healthcare", Icon: Activity },
  { label: "Mining & Resources", Icon: Pickaxe },
  { label: "Technology & Digitalization", Icon: Monitor },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #0d1a30 0%, #1B2A4A 100%)",
        }}
      >
        <FloatingPathsBg />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="animate-fade-up text-gold text-xs uppercase tracking-widest font-medium mb-3">
            Our Capabilities
          </p>
          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl font-bold text-white mb-4">
            What We Do
          </h1>
          <p className="animate-fade-up delay-200 text-white/70 text-lg max-w-2xl mx-auto">
            We operate across a focused but versatile set of service lines,
            structured to meet the demands of government procurement, private
            sector growth, and cross-border B2B transactions.
          </p>
        </div>
      </section>

      {/* GENERAL CONTRACTING */}
      <section id="contracting" className="bg-white dark:bg-dark-page py-20 scroll-mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
                Service Line 01
              </p>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
                General Contracting &amp; Remediation
              </h2>
              <p className="text-body-text leading-relaxed mb-6">
                We take full responsibility for the performance of contracts
                across civil, infrastructure, supply, and remediation mandates.
                From initial scoping to final delivery, we manage execution with
                precision and accountability.
              </p>
              <Link
                href="/contact?subject=Service Request"
                className="inline-block px-7 py-3 rounded bg-navy text-white text-sm font-semibold hover:brightness-110 transition-all"
              >
                Enquire About This Service
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: HardHat,
                  title: "Civil & Infrastructure Works",
                  desc: "End-to-end project delivery for civil and infrastructure mandates.",
                },
                {
                  Icon: Package,
                  title: "Supply & Procurement",
                  desc: "Strategic sourcing and supply chain execution for complex requirements.",
                },
                {
                  Icon: Leaf,
                  title: "Site Remediation",
                  desc: "Environmental and site remediation in compliance with regulatory standards.",
                },
                {
                  Icon: Building2,
                  title: "Facility Management",
                  desc: "Operational facility management for institutional and corporate clients.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-brand-bg dark:bg-dark-card rounded-lg p-5 border border-gray-100 dark:border-white/10"
                >
                  <item.Icon size={22} className="text-gold mb-2" />
                  <h3 className="font-bold text-navy dark:text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-text text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTANCY */}
      <section id="consultancy" className="bg-brand-bg py-20 scroll-mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
                Service Line 02
              </p>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
                Consultancy
              </h2>
              <p className="text-body-text leading-relaxed mb-6">
                Our advisory arm delivers strategic, regulatory, and operational
                guidance to organisations navigating complex environments, from
                government relations to project governance and compliance
                structuring.
              </p>
              <Link
                href="/contact?subject=Service Request"
                className="inline-block px-7 py-3 rounded bg-navy text-white text-sm font-semibold hover:brightness-110 transition-all"
              >
                Enquire About This Service
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: BarChart2,
                  title: "Strategy & Business Advisory",
                  desc: "Actionable strategic guidance for organisations navigating growth and change.",
                },
                {
                  Icon: FileText,
                  title: "Compliance & Regulatory Consulting",
                  desc: "Regulatory mapping and compliance structuring across Nigerian and ECOWAS frameworks.",
                },
                {
                  Icon: ClipboardList,
                  title: "Project Management",
                  desc: "Professional oversight of complex multi-stakeholder projects from initiation to close.",
                },
                {
                  Icon: Landmark,
                  title: "Government Affairs",
                  desc: "Facilitating productive engagement between private interests and public institutions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-dark-card rounded-lg p-5 border border-gray-100 dark:border-white/10 shadow-sm"
                >
                  <item.Icon size={22} className="text-gold mb-2" />
                  <h3 className="font-bold text-navy dark:text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-text text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B SOLUTIONS */}
      <section id="b2b" className="bg-white dark:bg-dark-page py-20 scroll-mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
                Service Line 03
              </p>
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
                B2B Solutions
              </h2>
              <p className="text-body-text leading-relaxed mb-4">
                We engage directly with corporate counterparts to structure
                supply agreements, joint ventures, and vendor partnerships. If
                your organisation needs a reliable, registered Nigerian
                counterpart for B2B transactions, The Hague Industries is the
                partner to call.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?subject=B2B Partnership"
                  className="inline-block px-7 py-3 rounded bg-gold text-navy text-sm font-bold hover:brightness-110 transition-all"
                >
                  Submit a B2B Enquiry
                </Link>
                <Link
                  href="/contact?subject=Service Request"
                  className="inline-block px-7 py-3 rounded border-2 border-navy dark:border-gold text-navy dark:text-gold text-sm font-semibold hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all"
                >
                  General Enquiry
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: FileText,
                  title: "B2B Supply Agreements",
                  desc: "Structuring and executing commercial supply agreements between corporate entities with full regulatory compliance.",
                },
                {
                  Icon: Link2,
                  title: "Joint Venture Structuring",
                  desc: "Legal and strategic structuring of joint ventures for project-specific or long-term business objectives.",
                },
                {
                  Icon: UserCheck,
                  title: "Vendor / Sub-contractor Engagement",
                  desc: "Identifying, vetting, and contracting qualified vendors and sub-contractors for project delivery.",
                },
                {
                  Icon: Globe,
                  title: "Cross-Border Trade Facilitation",
                  desc: "Structuring distribution and supply arrangements across jurisdictions, including sole distributor agreements and market entry frameworks for international principals.",
                },
                {
                  Icon: Truck,
                  title: "Supply Facilitation",
                  desc: "End-to-end management of supply mandates between corporate counterparts, from agreement structuring through to delivery and documentation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-brand-bg dark:bg-dark-card rounded-lg p-5 border border-gray-100 dark:border-white/10"
                >
                  <item.Icon
                    size={22}
                    className="text-gold mt-0.5 shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-navy dark:text-white text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-body-text text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS SERVED */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Industry Expertise
            </p>
            <h2 className="text-3xl font-bold text-white">Sectors We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3"
              >
                <s.Icon size={18} className="text-gold shrink-0" />
                <span className="text-white text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ENGAGE US */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Our Advantage
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Why Engage Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {differentiators.map((d) => (
              <div
                key={d.text}
                className="flex items-center gap-3 bg-white dark:bg-dark-card rounded-lg px-5 py-4 border border-gray-100 dark:border-white/10 shadow-sm"
              >
                <d.Icon size={20} className="text-gold shrink-0" />
                <span className="text-body-text text-sm font-medium">
                  {d.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Specific Service? Let&apos;s Talk.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Reach out with your requirements and we will respond within two
            business days with a tailored proposal.
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
