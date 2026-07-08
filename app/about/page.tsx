import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import { CurveFlourish } from "@/components/Ornaments";

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
  { index: "01", title: "Excellence", desc: "We set and hold the highest standard in every engagement we undertake." },
  { index: "02", title: "Integrity", desc: "We conduct business with transparency, honesty, and accountability at every level." },
  { index: "03", title: "Compliance", desc: "Regulatory adherence is not optional; it is foundational to how we operate." },
  { index: "04", title: "Agility", desc: "We adapt swiftly to sector demands, client needs, and evolving regulatory landscapes." },
  { index: "05", title: "Responsibility", desc: "We are accountable to our clients, our communities, and the jurisdictions we serve." },
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
  "Oil & Gas",
  "Government & Public Sector",
  "Healthcare",
  "Mining & Resources",
  "Technology & Digitalization",
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-16 overflow-hidden"
        style={{ backgroundImage: "var(--hero-bg)" }}
      >
        <CurveFlourish className="absolute -top-8 right-0 w-[340px] sm:w-[440px] text-gold" flip />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14">
            <div className="lg:col-span-7">
              <Eyebrow className="animate-fade-up mb-7">Who We Are</Eyebrow>
              <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl text-navy dark:text-white leading-[1.05]">
                About The Hague{" "}
                <span className="italic text-gold">Industries</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="animate-fade-up delay-200 text-body-text dark:text-white/65 text-lg leading-relaxed lg:border-l lg:border-gold/50 lg:pl-8">
                A Nigerian contracting and advisory enterprise built on
                compliance, capability, and a commitment to results.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-96 animate-fade-in delay-300">
          <Image
            src="/images/facade.jpg"
            alt="Sculpted architectural facade against the sky"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 overflow-hidden">
        <CurveFlourish className="absolute -bottom-8 left-0 w-[320px] text-gold opacity-45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 section-reveal">
              <Eyebrow className="mb-6">Our Story</Eyebrow>
              <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight">
                Who <span className="italic text-gold">We Are</span>
              </h2>
            </div>
            <div className="lg:col-span-8 section-reveal reveal-delay-1">
              <p className="dropcap text-body-text dark:text-white/65 leading-loose text-base mb-6">
                The Hague Industries Ltd is a general contracting, consultancy,
                and allied services company incorporated under the Companies
                and Allied Matters Act (CAMA) 2020, with RC Number 8551874.
                Registered in Lagos and operating nationwide, we were built on
                a philosophy of excellence, compliance, and strategic agility.
              </p>
              <p className="text-body-text dark:text-white/65 leading-loose text-base mb-10">
                We serve federal and state government bodies, private
                corporations, and strategic B2B partners, bringing the same
                rigour and commitment to every engagement, regardless of size
                or sector.
              </p>
              <blockquote className="border-l-2 border-gold pl-6">
                <p className="font-serif italic text-navy dark:text-white text-2xl leading-relaxed">
                  &ldquo;Our mandate is transnational. Our execution is exact.
                  Our standard is uncompromising.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="bg-brand-bg dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-reveal mb-16">
            <Eyebrow className="mb-6">Our Foundation</Eyebrow>
            <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight">
              Vision, Mission &amp;{" "}
              <span className="italic text-gold">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-navy/15 dark:md:divide-white/10 border-y border-navy/15 dark:border-white/10 mb-20">
            <div className="py-12 md:pr-14 section-reveal">
              <p className="font-serif italic text-gold text-2xl mb-4">I.</p>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-navy dark:text-white mb-5">
                Vision
              </p>
              <p className="font-serif text-xl text-navy/85 dark:text-white/80 leading-relaxed">
                To be the most trusted and capable multi-sector contracting and
                advisory enterprise operating out of West Africa.
              </p>
            </div>
            <div className="py-12 md:pl-14 border-t md:border-t-0 border-navy/15 dark:border-white/10 section-reveal reveal-delay-1">
              <p className="font-serif italic text-gold text-2xl mb-4">II.</p>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-navy dark:text-white mb-5">
                Mission
              </p>
              <p className="font-serif text-xl text-navy/85 dark:text-white/80 leading-relaxed">
                To deliver contracts, advisory mandates, and B2B partnerships
                with precision, integrity, and accountability, building value
                for clients and communities across every jurisdiction we
                operate in.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-12">
            {values.map((v) => (
              <div key={v.title} className="card-animate">
                <p className="font-serif italic text-gold/70 text-lg mb-3">
                  {v.index}
                </p>
                <p className="font-serif text-lg text-navy dark:text-white mb-2 pt-3 border-t border-navy/15 dark:border-white/10">
                  {v.title}
                </p>
                <p className="text-body-text dark:text-white/55 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE INFORMATION */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10 overflow-hidden">
        <CurveFlourish className="absolute top-4 right-0 w-[320px] text-gold opacity-40" flip />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-reveal mb-14">
            <Eyebrow className="mb-6">Compliance &amp; Transparency</Eyebrow>
            <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight">
              Corporate <span className="italic text-gold">Information</span>
            </h2>
          </div>
          <dl className="border-t border-navy/15 dark:border-white/10 section-reveal reveal-delay-1">
            {corporateInfo.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-1 sm:gap-8 py-5 border-b border-navy/10 dark:border-white/10"
              >
                <dt className="text-[11px] uppercase tracking-[0.24em] font-semibold text-body-text/80 dark:text-white/45 pt-1">
                  {item.label}
                </dt>
                <dd className="text-navy dark:text-white text-[15px]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-brand-bg dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-reveal mb-16">
            <Eyebrow className="mb-6">Leadership</Eyebrow>
            <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight">
              Board of <span className="italic text-gold">Directors</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
            {directors.map((d) => (
              <div key={d.name} className="card-animate">
                <div className="w-16 h-16 border border-gold/60 flex items-center justify-center mb-7">
                  <span className="font-serif italic text-2xl text-navy dark:text-white">
                    {d.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-navy dark:text-white mb-2">
                  {d.name}
                </h3>
                <p className="text-gold text-[11px] uppercase tracking-[0.28em] font-semibold mb-5">
                  {d.title}
                </p>
                <p className="text-body-text dark:text-white/55 text-sm leading-loose">
                  {d.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS / REACH */}
      <section className="bg-navy dark:bg-dark-page py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 section-reveal">
              <Eyebrow className="mb-6">Areas of Operation</Eyebrow>
              <h2 className="font-serif text-4xl text-white leading-tight mb-6">
                Our <span className="italic text-gold">Reach</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                Operating across Nigerian states, from Lagos to Enugu, Niger
                State, Abuja FCT, and beyond, with a mandate to scale
                pan-African.
              </p>
            </div>
            <div className="lg:col-span-7 section-reveal reveal-delay-1">
              <ul className="border-t border-white/15">
                {sectors.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-6 py-5 border-b border-white/15"
                  >
                    <span className="font-serif italic text-gold/70 text-lg w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl text-white">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper dark:bg-dark-page py-24 lg:py-28 text-center border-t border-navy/10 dark:border-white/10">
        <div className="max-w-2xl mx-auto px-4 section-reveal">
          <Eyebrow center className="mb-7">
            Next Step
          </Eyebrow>
          <h2 className="font-serif text-4xl text-navy dark:text-white mb-5">
            Ready to Work <span className="italic text-gold">With Us?</span>
          </h2>
          <p className="text-body-text dark:text-white/60 text-lg mb-10">
            Whether it is a project mandate, a partnership, or a general
            enquiry. We would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-11 py-4 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
