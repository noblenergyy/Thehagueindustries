import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CyclingWord from "@/components/CyclingWord";
import StatCounter from "@/components/StatCounter";
import Eyebrow from "@/components/Eyebrow";
import { CornerBrackets, CurveFlourish } from "@/components/Ornaments";
import { PaperDesignBackground } from "@/components/PaperDesignBackground";

export const metadata: Metadata = {
  title: "The Hague Industries Ltd | Multi-Sector Contracting & Advisory",
  description:
    "The Hague Industries Ltd — multi-sector contracting, consultancy, and advisory. Delivering across government, oil & gas, mining, and B2B sectors.",
};

const credentials = [
  {
    index: "01",
    title: "CAC Registered",
    desc: "Duly incorporated under CAMA 2020 | RC 8551874",
  },
  {
    index: "02",
    title: "Multi-Sector",
    desc: "From oil & gas to government digitalization",
  },
  {
    index: "03",
    title: "Transnational Reach",
    desc: "Operating across jurisdictions, wherever the mandate leads",
  },
  {
    index: "04",
    title: "Compliance-First",
    desc: "Secretary-governed, audit-ready, and compliance-first",
  },
];

const serviceLines = [
  {
    index: "01",
    title: "General Contracting",
    desc: "Civil & infrastructure works, supply, site remediation, and facility management.",
    anchor: "contracting",
  },
  {
    index: "02",
    title: "Consultancy",
    desc: "Strategic advisory, compliance consulting, project management, and government affairs.",
    anchor: "consultancy",
  },
  {
    index: "03",
    title: "B2B Solutions",
    desc: "Supply agreements, joint venture structuring, and vendor partnerships.",
    anchor: "b2b",
  },
  {
    index: "04",
    title: "Remediation & Allied",
    desc: "Site remediation mandates and allied business execution.",
    anchor: "contracting",
  },
];

const featuredProjects = [
  {
    title: "Enugu Digital Economy Portal Proposal",
    client: "Enugu State Government",
    sector: "Government / Digitalization",
    year: "2026",
    outcome: "Delivered",
    desc: "Developed and submitted a white paper proposing a state-wide digitalization platform.",
    image: "/images/dashboard.jpg",
    alt: "Analytics dashboard on a laptop representing a state digital platform",
  },
  {
    title: "Niger State Mining Compliance Advisory",
    client: "Niger State",
    sector: "Mining & Resources",
    year: "2025",
    outcome: "Delivered",
    desc: "Prepared a compliance advisory note for a Niger State mining transaction covering regulatory requirements.",
    image: "/images/documents.jpg",
    alt: "Advisory documentation being reviewed and signed",
  },
];

const stats = [
  { label: "Year Established", value: "2025" },
  { label: "Active Mandates", value: "5+" },
  { label: "Sectors Served", value: "5" },
  { label: "Jurisdictions of Operation", value: "6+" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-center min-h-screen pt-20 overflow-hidden"
        style={{ backgroundImage: "var(--hero-bg)" }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <PaperDesignBackground intensity={0.85} />
        </div>
        {/* Static legibility scrim behind the copy column */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC]/95 via-[#F7F4EC]/60 to-transparent dark:from-[#0A1428]/90 dark:via-[#0A1428]/40 dark:to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 py-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 min-w-0">
              <Eyebrow className="animate-fade-up mb-7">
                Est. 2025 · Transnational · Multi-Sector
              </Eyebrow>
              <h1 className="animate-fade-up delay-100 font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-navy dark:text-white leading-[1.06] mb-8">
                Built for the
                <br />
                Mandates That
                <span className="relative flex overflow-hidden italic text-gold">
                  <span aria-hidden="true">&nbsp;</span>
                  <CyclingWord justify="start" />
                </span>
              </h1>
              <p className="animate-fade-up delay-200 text-body-text dark:text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
                The Hague Industries Ltd operates at the convergence of
                government, commerce, and international trade. Contracting.
                Trade facilitation. Institutional advisory. Wherever the
                mandate leads.
              </p>
              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row sm:items-center gap-6">
                <Link
                  href="/services"
                  className="px-9 py-4 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all text-center"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-3 text-navy dark:text-white text-[11px] uppercase tracking-[0.22em] font-bold"
                >
                  <span className="border-b border-gold pb-1">See Our Work</span>
                  <ArrowRight
                    size={15}
                    className="text-gold transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>

            {/* Registry plate — key facts, framed; lets the shader show through */}
            <div className="hidden lg:block lg:col-span-4 lg:col-start-9 animate-fade-in delay-300">
              <div className="relative border border-navy/25 dark:border-white/20 bg-paper/75 dark:bg-[#0A1428]/70 px-10 py-11">
                <CornerBrackets />
                <p className="text-[10px] uppercase tracking-[0.32em] font-semibold text-gold mb-8">
                  Company Registry
                </p>
                <dl>
                  {[
                    { label: "Established", value: "2025" },
                    { label: "Registration", value: "RC 8551874" },
                    { label: "Active Mandates", value: "5+" },
                    { label: "Sectors Served", value: "5" },
                    { label: "Standard", value: "Non-negotiable" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-6 py-4 border-t border-navy/15 dark:border-white/10"
                    >
                      <dt className="text-[10px] uppercase tracking-[0.24em] font-semibold text-body-text dark:text-white/50">
                        {row.label}
                      </dt>
                      <dd className="font-serif text-lg text-navy dark:text-white">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ledger line */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-navy/15 dark:border-white/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-navy/60 dark:text-white/60">
              International Reach
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.28em] font-semibold text-navy/60 dark:text-white/60">
              Contracting · Advisory · Trade Facilitation
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-gold">
              RC 8551874
            </span>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="relative bg-navy dark:bg-dark-page border-y border-white/10 overflow-hidden">
        <CurveFlourish className="absolute -bottom-10 -left-10 w-[360px] text-gold opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -ml-px -mt-px">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="py-10 px-6 lg:px-8 border-l border-t border-white/10"
              >
                <p className="font-serif italic text-gold/70 text-lg mb-3">
                  {c.index}
                </p>
                <p className="text-white font-serif text-lg mb-2">{c.title}</p>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INDEX */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 overflow-hidden">
        <CurveFlourish className="absolute -bottom-8 left-0 w-[320px] text-gold opacity-45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 section-reveal">
                <Eyebrow className="mb-6">What We Do</Eyebrow>
                <h2 className="font-serif text-4xl lg:text-[2.75rem] text-navy dark:text-white leading-tight mb-6">
                  Our Core <span className="italic text-gold">Services</span>
                </h2>
                <p className="text-body-text dark:text-white/60 leading-relaxed mb-8">
                  A focused but versatile set of service lines, structured to
                  meet the demands of government procurement, private sector
                  growth, and cross-border transactions.
                </p>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 text-navy dark:text-white text-[11px] uppercase tracking-[0.22em] font-bold"
                >
                  <span className="border-b border-gold pb-1">All Services</span>
                  <ArrowRight
                    size={15}
                    className="text-gold transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              {serviceLines.map((s) => (
                <Link
                  key={s.index}
                  href={`/services#${s.anchor}`}
                  className="card-animate group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[4.5rem_1fr_auto] items-baseline gap-4 sm:gap-6 py-8 border-t border-navy/15 dark:border-white/10 last:border-b hover:bg-brand-bg/60 dark:hover:bg-dark-card transition-colors px-2 sm:px-4"
                >
                  <span className="font-serif italic text-gold text-xl">
                    {s.index}
                  </span>
                  <span>
                    <span className="block font-serif text-2xl text-navy dark:text-white mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </span>
                    <span className="block text-body-text dark:text-white/55 text-sm leading-relaxed max-w-lg">
                      {s.desc}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-gold self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="bg-brand-bg dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-5 section-reveal">
              <div className="relative ml-5 mt-5">
                <div
                  aria-hidden="true"
                  className="absolute -top-5 -left-5 right-5 bottom-5 border border-gold/50"
                />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/handshake.jpg"
                    alt="A partnership sealed with a handshake"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 section-reveal reveal-delay-1">
              <Eyebrow className="mb-6">About Us</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-[2.75rem] text-navy dark:text-white leading-tight mb-7">
                Built to Deliver at the{" "}
                <span className="italic text-gold">Highest Standard</span>
              </h2>
              <p className="text-body-text dark:text-white/60 leading-relaxed mb-8 max-w-2xl">
                Incorporated in June 2025, The Hague Industries Ltd was founded
                with a single mandate: to deliver at the highest standard, every
                time. From general contracting and remediation to B2B
                partnerships and government advisory, we operate wherever our
                clients need us, with the compliance infrastructure to match.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 mb-9">
                <p className="font-serif italic text-navy dark:text-white text-xl leading-relaxed">
                  &ldquo;Our mandate is continental. Our execution is exact. Our
                  standard is non-negotiable.&rdquo;
                </p>
              </blockquote>
              <Link
                href="/about"
                className="inline-block px-9 py-4 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Stats ledger */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-24 pt-14 border-t border-navy/15 dark:border-white/10">
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
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 border-t border-navy/10 dark:border-white/10 overflow-hidden">
        <CurveFlourish className="absolute top-6 right-0 w-[340px] text-gold opacity-40" flip />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 section-reveal">
            <div>
              <Eyebrow className="mb-6">Our Work</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-[2.75rem] text-navy dark:text-white leading-tight">
                Featured <span className="italic text-gold">Projects</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-navy dark:text-white text-[11px] uppercase tracking-[0.22em] font-bold shrink-0"
            >
              <span className="border-b border-gold pb-1">Full Portfolio</span>
              <ArrowRight
                size={15}
                className="text-gold transition-transform group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {featuredProjects.map((p) => (
              <article key={p.title} className="card-animate group">
                <div className="relative aspect-[16/10] overflow-hidden mb-7">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-navy/15" aria-hidden="true" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold text-gold uppercase tracking-[0.28em]">
                    {p.sector}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-body-text dark:text-white/50">
                    {p.year} · {p.outcome}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-navy dark:text-white leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-body-text dark:text-white/55 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-body-text/70 dark:text-white/40 font-semibold pt-4 border-t border-navy/10 dark:border-white/10">
                  {p.client}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative bg-navy dark:bg-dark-page py-24 border-t border-white/10 overflow-hidden">
        <CurveFlourish className="absolute top-0 right-0 w-[380px] text-gold opacity-70" flip />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative border border-white/15 px-6 py-16 sm:px-16 text-center section-reveal">
            <CornerBrackets />
            <Eyebrow center className="mb-7">
              Engage Us
            </Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight mb-6">
              Ready to Work With a Partner{" "}
              <span className="italic text-gold">Who Delivers?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Whether it is a government mandate, a corporate contract, or a
              B2B partnership. We are ready.
            </p>
            <Link
              href="/contact"
              className="inline-block px-11 py-4 bg-gold text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
