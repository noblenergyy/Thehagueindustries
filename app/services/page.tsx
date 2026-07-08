import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { CornerBrackets, CurveFlourish } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General contracting, consultancy, B2B supply agreements, and site remediation. The Hague Industries Ltd delivers across government, oil & gas, mining, and digitalization sectors.",
  alternates: {
    canonical: "https://thehagueindustries.com/services",
  },
};

const differentiators = [
  "CAC-registered & compliance-driven",
  "Proven public sector track record",
  "Nationwide operational reach",
  "Multi-sector flexibility",
  "Secretary-governed & audit-ready",
  "Established B2B partnership network",
];

const sectors = [
  "Oil & Gas",
  "Government & Public Sector",
  "Healthcare",
  "Mining & Resources",
  "Technology & Digitalization",
];

const serviceLines = [
  {
    id: "contracting",
    index: "01",
    title: "General Contracting & Remediation",
    accent: "Remediation",
    lead: "General Contracting &",
    desc: "We take full responsibility for the performance of contracts across civil, infrastructure, supply, and remediation mandates. From initial scoping to final delivery, we manage execution with precision and accountability.",
    image: "/images/site-workers.jpg",
    alt: "Workers on an active construction site",
    cta: { label: "Enquire About This Service", href: "/contact?subject=Service Request" },
    capabilities: [
      {
        title: "Civil & Infrastructure Works",
        desc: "End-to-end project delivery for civil and infrastructure mandates.",
      },
      {
        title: "Supply & Procurement",
        desc: "Strategic sourcing and supply chain execution for complex requirements.",
      },
      {
        title: "Site Remediation",
        desc: "Environmental and site remediation in compliance with regulatory standards.",
      },
      {
        title: "Facility Management",
        desc: "Operational facility management for institutional and corporate clients.",
      },
    ],
  },
  {
    id: "consultancy",
    index: "02",
    title: "Consultancy",
    lead: "",
    accent: "Consultancy",
    desc: "Our advisory arm delivers strategic, regulatory, and operational guidance to organisations navigating complex environments, from government relations to project governance and compliance structuring.",
    image: "/images/boardroom.jpg",
    alt: "Advisors taking notes during a working session",
    cta: { label: "Enquire About This Service", href: "/contact?subject=Service Request" },
    capabilities: [
      {
        title: "Strategy & Business Advisory",
        desc: "Actionable strategic guidance for organisations navigating growth and change.",
      },
      {
        title: "Compliance & Regulatory Consulting",
        desc: "Regulatory mapping and compliance structuring across Nigerian and ECOWAS frameworks.",
      },
      {
        title: "Project Management",
        desc: "Professional oversight of complex multi-stakeholder projects from initiation to close.",
      },
      {
        title: "Government Affairs",
        desc: "Facilitating productive engagement between private interests and public institutions.",
      },
    ],
  },
  {
    id: "b2b",
    index: "03",
    title: "B2B Solutions",
    lead: "B2B",
    accent: "Solutions",
    desc: "We engage directly with corporate counterparts to structure supply agreements, joint ventures, and vendor partnerships. If your organisation needs a reliable, registered Nigerian counterpart for B2B transactions, The Hague Industries is the partner to call.",
    image: "/images/port.jpg",
    alt: "Container ships and cranes at a commercial port",
    cta: { label: "Submit a B2B Enquiry", href: "/contact?subject=B2B Partnership" },
    capabilities: [
      {
        title: "B2B Supply Agreements",
        desc: "Structuring and executing commercial supply agreements between corporate entities with full regulatory compliance.",
      },
      {
        title: "Joint Venture Structuring",
        desc: "Legal and strategic structuring of joint ventures for project-specific or long-term business objectives.",
      },
      {
        title: "Vendor / Sub-contractor Engagement",
        desc: "Identifying, vetting, and contracting qualified vendors and sub-contractors for project delivery.",
      },
      {
        title: "Cross-Border Trade Facilitation",
        desc: "Structuring distribution and supply arrangements across jurisdictions, including sole distributor agreements and market entry frameworks for international principals.",
      },
      {
        title: "Supply Facilitation",
        desc: "End-to-end management of supply mandates between corporate counterparts, from agreement structuring through to delivery and documentation.",
      },
    ],
  },
];

export default function ServicesPage() {
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
              <Eyebrow className="animate-fade-up mb-7">Our Capabilities</Eyebrow>
              <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl text-navy dark:text-white leading-[1.05]">
                What <span className="italic text-gold">We Do</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="animate-fade-up delay-200 text-body-text dark:text-white/65 text-lg leading-relaxed lg:border-l lg:border-gold/50 lg:pl-8">
                A focused but versatile set of service lines, structured to meet
                the demands of government procurement, private sector growth,
                and cross-border B2B transactions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-96 animate-fade-in delay-300">
          <Image
            src="/images/construction.jpg"
            alt="Project team overseeing a large construction site"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
        </div>
      </section>

      {/* SERVICE LINES */}
      {serviceLines.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 lg:py-32 scroll-mt-18 border-t border-navy/10 dark:border-white/10 ${
            idx % 2 === 0
              ? "bg-paper dark:bg-dark-page"
              : "bg-brand-bg dark:bg-dark-page"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
              {/* Copy */}
              <div
                className={`lg:col-span-5 section-reveal ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Eyebrow className="mb-6">Service Line {s.index}</Eyebrow>
                <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight mb-6">
                  {s.lead && <>{s.lead} </>}
                  <span className="italic text-gold">{s.accent}</span>
                </h2>
                <p className="text-body-text dark:text-white/60 leading-loose mb-9">
                  {s.desc}
                </p>
                <Link
                  href={s.cta.href}
                  className="inline-block px-8 py-3.5 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
                >
                  {s.cta.label}
                </Link>
              </div>

              {/* Image + capability index */}
              <div
                className={`lg:col-span-7 section-reveal reveal-delay-1 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className={`relative mb-14 ${idx % 2 === 1 ? "ml-5 mt-5" : "mr-5 mt-5"}`}>
                  <div
                    aria-hidden="true"
                    className={`absolute -top-5 border border-gold/50 ${
                      idx % 2 === 1
                        ? "-left-5 right-5 bottom-5"
                        : "left-5 -right-5 bottom-5"
                    }`}
                  />
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/15" aria-hidden="true" />
                  </div>
                </div>

                <ul className="border-t border-navy/15 dark:border-white/10">
                  {s.capabilities.map((c, i) => (
                    <li
                      key={c.title}
                      className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-6 border-b border-navy/10 dark:border-white/10"
                    >
                      <span className="font-serif italic text-gold/70 text-lg">
                        {s.index}.{i + 1}
                      </span>
                      <div>
                        <p className="font-serif text-lg text-navy dark:text-white mb-1.5">
                          {c.title}
                        </p>
                        <p className="text-body-text dark:text-white/55 text-sm leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SECTORS SERVED */}
      <section className="relative bg-navy dark:bg-dark-page py-20 border-t border-white/10 overflow-hidden">
        <CurveFlourish className="absolute -bottom-10 -left-8 w-[340px] text-gold opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow center className="mb-7">
            Industry Expertise
          </Eyebrow>
          <h2 className="font-serif text-4xl text-white mb-12">
            Sectors We <span className="italic text-gold">Serve</span>
          </h2>
          <ul className="flex flex-wrap justify-center items-baseline gap-x-4 gap-y-5">
            {sectors.map((s, i) => (
              <li key={s} className="flex items-baseline gap-4">
                <span className="font-serif text-xl sm:text-2xl text-white/90">
                  {s}
                </span>
                {i < sectors.length - 1 && (
                  <span className="text-gold text-xl" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY ENGAGE US */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10 overflow-hidden">
        <CurveFlourish className="absolute -bottom-8 left-0 w-[320px] text-gold opacity-45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 section-reveal">
              <Eyebrow className="mb-6">Our Advantage</Eyebrow>
              <h2 className="font-serif text-4xl text-navy dark:text-white leading-tight">
                Why <span className="italic text-gold">Engage Us</span>
              </h2>
            </div>
            <div className="lg:col-span-8 section-reveal reveal-delay-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-navy/15 dark:border-white/10">
                {differentiators.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-5 py-5 border-b border-navy/10 dark:border-white/10"
                  >
                    <span className="font-serif italic text-gold/70 text-lg w-7 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-navy dark:text-white/80 text-[15px] font-medium">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy dark:bg-dark-page py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative border border-white/15 px-6 py-16 sm:px-16 text-center section-reveal">
            <CornerBrackets />
            <Eyebrow center className="mb-7">
              Start a Conversation
            </Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Need a Specific Service?{" "}
              <span className="italic text-gold">Let&apos;s Talk.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Reach out with your requirements and we will respond within two
              business days with a tailored proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-11 py-4 bg-gold text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
            >
              Request a Proposal
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
