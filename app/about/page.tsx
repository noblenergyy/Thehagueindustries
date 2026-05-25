import type { Metadata } from "next";
import Link from "next/link";
import { Fuel, Landmark, Activity, Pickaxe, Monitor } from "lucide-react";
import FloatingPathsBg from "@/components/FloatingPaths";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Hague Industries Ltd — incorporated June 2025. Learn about our leadership, vision, mission, and operations across oil & gas, government, mining, and digitalization sectors.",
  alternates: {
    canonical: "https://thehagueindustries.com/about",
  },
};

const directors = [
  {
    name: "Chisom K. Ikeri",
    title: "Chief Executive Officer",
    bio: "Chisom K. Ikeri is the founding Chief Executive of The Hague Industries Ltd, directing the company's strategy across general contracting, B2B trade facilitation, and multi-sector advisory. Since incorporation, he has led the company's engagements in oil and gas supply, cross-jurisdictional distribution structuring, and government digitalization- establishing The Hague Industries as a credible operator across Nigeria's public and private sectors within its first year.",
  },
  {
    name: "Ikeri Ikedi Adrain",
    title: "Chief Operating Officer",
    bio: "Ikeri Ikedi Adrain oversees operations, contract execution, and business development across the company's active mandates. His remit spans supply chain management, compliance advisory delivery, and B2B partnership structuring- ensuring every engagement meets The Hague Industries' standard from initiation to close. He has operational oversight across the company's oil and gas, government, and mining sector work.",
  },
];

const values = [
  { title: "Excellence", desc: "We set and hold the highest standard in every engagement we undertake." },
  { title: "Integrity", desc: "We conduct business with transparency, honesty, and accountability at every level." },
  { title: "Compliance", desc: "Regulatory adherence is not optional; it is foundational to how we operate." },
  { title: "Agility", desc: "We adapt swiftly to sector demands, client needs, and evolving regulatory landscapes." },
  { title: "Responsibility", desc: "We are accountable to our clients, our communities, and the jurisdictions we serve." },
];

const corporateInfo = [
  { label: "Company Name", value: "The Hague Industries Ltd" },
  { label: "RC Number", value: "8551874" },
  { label: "TIN", value: "33277749-0001" },
  { label: "Incorporation Date", value: "14 June 2025" },
  { label: "Registered Under", value: "CAMA 2020" },
  { label: "Registered Address", value: "101 Moronfolu Street, Akoka, Lagos State" },
  { label: "Office Address", value: "Plot 7, Bwari Close, Area 8, Garki, Abuja-FCT" },
  { label: "Company Secretary", value: "Maxine & Partners (RC: 3140041)" },
  { label: "Email", value: "thehagueindustries@gmail.com" },
];

const sectors = [
  { label: "Oil & Gas", Icon: Fuel },
  { label: "Government & Public Sector", Icon: Landmark },
  { label: "Healthcare", Icon: Activity },
  { label: "Mining & Resources", Icon: Pickaxe },
  { label: "Technology & Digitalization", Icon: Monitor },
];

export default function AboutPage() {
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
            Who We Are
          </p>
          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl font-bold text-white mb-4">
            About The Hague Industries
          </h1>
          <p className="animate-fade-up delay-200 text-white/70 text-lg max-w-2xl mx-auto">
            A Nigerian contracting and advisory enterprise built on compliance,
            capability, and a commitment to results.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white dark:bg-dark-page py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">
            Our Story
          </p>
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">
            Who We Are
          </h2>
          <p className="text-body-text leading-relaxed text-base mb-4">
            The Hague Industries Ltd is a general contracting, consultancy, and
            allied services company incorporated under the Companies and Allied
            Matters Act (CAMA) 2020, with RC Number 8551874. Registered in
            Lagos and operating nationwide, we were built on a philosophy of
            excellence, compliance, and strategic agility.
          </p>
          <p className="text-body-text leading-relaxed text-base mb-4">
            We serve federal and state government bodies, private corporations,
            and strategic B2B partners, bringing the same rigour and commitment
            to every engagement, regardless of size or sector.
          </p>
          <p className="text-gold font-semibold italic text-xl mt-6">
            &ldquo;Our mandate is transnational. Our execution is exact. Our
            standard is uncompromising.&rdquo;
          </p>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Our Foundation
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Vision, Mission &amp; Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-dark-card rounded-lg p-8 border border-gray-100 dark:border-white/10 shadow-sm">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">
                Vision
              </p>
              <p className="text-gray-700 dark:text-white/65 leading-relaxed">
                To be the most trusted and capable multi-sector contracting and
                advisory enterprise operating out of West Africa.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-lg p-8 border border-gray-100 dark:border-white/10 shadow-sm">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">
                Mission
              </p>
              <p className="text-gray-700 dark:text-white/65 leading-relaxed">
                To deliver contracts, advisory mandates, and B2B partnerships
                with precision, integrity, and accountability, building value
                for clients and communities across every jurisdiction we operate
                in.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-lg p-8 border border-gray-100 dark:border-white/10 shadow-sm">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">
                Core Values
              </p>
              <ul className="space-y-1">
                {values.map((v) => (
                  <li key={v.title} className="text-body-text text-sm">
                    <span className="text-gold font-bold">·</span> {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white dark:bg-dark-card rounded-lg p-5 border border-gray-100 dark:border-white/10 shadow-sm"
              >
                <p className="font-bold text-navy dark:text-white text-sm mb-1">
                  {v.title}
                </p>
                <p className="text-body-text text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE INFORMATION */}
      <section className="bg-white dark:bg-dark-page py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
            Compliance &amp; Transparency
          </p>
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-8">
            Corporate Information
          </h2>
          <div className="rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
            {corporateInfo.map((item, i) => (
              <div
                key={item.label}
                className={`grid grid-cols-2 px-6 py-4 ${
                  i % 2 === 0
                    ? "bg-brand-bg"
                    : "bg-white dark:bg-dark-card"
                }`}
              >
                <span className="font-semibold text-navy dark:text-white text-sm">
                  {item.label}
                </span>
                <span className="text-body-text text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Leadership
            </p>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Board of Directors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {directors.map((d) => (
              <div
                key={d.name}
                className="bg-white dark:bg-dark-card rounded-lg p-8 border border-gray-100 dark:border-white/10 shadow-sm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-navy/10 dark:bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-navy dark:text-white font-bold">
                    {d.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-navy dark:text-white text-lg">
                  {d.name}
                </h3>
                <p className="text-gold text-xs uppercase tracking-wide font-semibold mt-1 mb-3">
                  {d.title}
                </p>
                <p className="text-body-text text-sm leading-relaxed">{d.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS / REACH */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <FloatingPathsBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-2">
              Areas of Operation
            </p>
            <h2 className="text-3xl font-bold text-white">Our Reach</h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              Operating across Nigerian states, from Lagos to Enugu, Niger
              State, Abuja FCT, and beyond, with a mandate to scale pan-African.
            </p>
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

      {/* CTA */}
      <section className="bg-white dark:bg-dark-page py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-body-text text-lg mb-8">
            Whether it is a project mandate, a partnership, or a general
            enquiry. We would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded bg-navy text-white font-bold text-sm tracking-wide hover:brightness-110 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
