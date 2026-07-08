"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { CornerBrackets, CurveFlourish } from "@/components/Ornaments";

const projects = [
  {
    title: "Enugu Digital Economy Portal: State Government Proposal",
    client: "Enugu State Government",
    sector: "Government",
    year: "2026",
    status: "Delivered",
    desc: "Developed and submitted a white paper proposing a state-wide digitalization platform to the Enugu State Government.",
  },
  {
    title: "Niger State Mining Compliance Advisory",
    client: "Niger State",
    sector: "Mining",
    year: "2025",
    status: "Delivered",
    desc: "Prepared a compliance advisory note for a Niger State mining transaction, covering regulatory requirements and risk considerations.",
  },
  {
    title: "Cross-Jurisdiction Trade Facilitation - Sole Distributor Agreement",
    client: "Confidential",
    sector: "B2B / Trade",
    year: "2026",
    status: "In Progress",
    desc: "Structuring a sole distributor agreement to facilitate cross-border product distribution on behalf of a principal. The mandate involves jurisdictional compliance, distribution rights formalization, and commercial terms negotiation - positioning The Hague Industries as a trade facilitation vehicle for international principals seeking a Nigerian market entry partner.",
  },
  {
    title: "Financial Services Entry - MFB Licence Acquisition",
    client: "The Hague Industries",
    sector: "Financial Services",
    year: "2026",
    status: "In Progress",
    desc: "Pursuing the strategic acquisition of a CBN-regulated Microfinance Bank licence as a vehicle for entry into Nigeria's financial inclusion and fintech sector. Transaction being structured through the company's consulting arm with full regulatory advisory.",
  },
];

const filters = ["All", "Oil & Gas", "Government", "Mining", "B2B", "Financial Services", "Healthcare", "Digitalization"];

const statusDot: Record<string, string> = {
  Completed: "bg-green-600",
  Delivered: "bg-gold",
  "In Progress": "bg-amber-500",
  "Under Review": "bg-amber-500",
  Ongoing: "bg-purple-500",
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.sector === active ||
            p.sector.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative pt-40 pb-20 overflow-hidden border-b border-navy/10 dark:border-white/10"
        style={{ backgroundImage: "var(--hero-bg)" }}
      >
        <CurveFlourish className="absolute -top-8 right-0 w-[340px] sm:w-[440px] text-gold" flip />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="animate-fade-up mb-7">Track Record</Eyebrow>
              <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl text-navy dark:text-white leading-[1.05]">
                Our <span className="italic text-gold">Work</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="animate-fade-up delay-200 text-body-text dark:text-white/65 text-lg leading-relaxed lg:border-l lg:border-gold/50 lg:pl-8">
                A record of delivery across sectors and geographies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + INDEX */}
      <section className="relative bg-paper dark:bg-dark-page py-20 lg:py-28 overflow-hidden">
        <CurveFlourish className="absolute -bottom-8 left-0 w-[320px] text-gold opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 pb-6 border-b border-navy/15 dark:border-white/10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] uppercase tracking-[0.22em] font-semibold pb-1 border-b-2 transition-colors ${
                  active === f
                    ? "text-navy dark:text-white border-gold"
                    : "text-body-text/70 dark:text-white/45 border-transparent hover:text-navy dark:hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project index */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-navy dark:text-white mb-3">
                No projects in this category yet.
              </p>
              <p className="text-body-text dark:text-white/50 text-sm">
                More engagements are being added as our portfolio grows.
              </p>
            </div>
          ) : (
            <div className="border-t border-navy/15 dark:border-white/10">
              {filtered.map((p, i) => (
                <article
                  key={`${active}-${p.title}`}
                  className="animate-fade-up grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-navy/10 dark:border-white/10"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Index + meta */}
                  <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-4">
                    <span className="font-serif italic text-gold text-3xl">
                      {String(projects.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                    <div className="flex lg:flex-col items-baseline lg:items-start gap-4 lg:gap-2 lg:mt-6">
                      <span className="text-[10px] font-semibold text-gold uppercase tracking-[0.28em]">
                        {p.sector}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-body-text/70 dark:text-white/40">
                        {p.year}
                      </span>
                    </div>
                  </div>

                  {/* Title + description */}
                  <div className="lg:col-span-6">
                    <h3 className="font-serif text-2xl lg:text-[1.7rem] text-navy dark:text-white leading-snug mb-4">
                      {p.title}
                    </h3>
                    <p className="text-body-text dark:text-white/55 text-sm leading-loose">
                      {p.desc}
                    </p>
                  </div>

                  {/* Client + status */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:text-right">
                    <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-body-text/80 dark:text-white/50">
                      {p.client}
                    </p>
                    <p className="flex items-center gap-2.5 lg:mt-4">
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          statusDot[p.status] ?? "bg-gray-400"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-[11px] uppercase tracking-[0.22em] text-navy dark:text-white font-semibold">
                        {p.status}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy dark:bg-dark-page py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative border border-white/15 px-6 py-16 sm:px-16 text-center section-reveal">
            <CornerBrackets />
            <Eyebrow center className="mb-7">
              Your Mandate
            </Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Have a Project in Mind?{" "}
              <span className="italic text-gold">Let Us Deliver It.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              We bring the same commitment to every mandate, regardless of
              sector, scale, or geography.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-11 py-4 bg-gold text-navy text-[11px] uppercase tracking-[0.22em] font-bold hover:brightness-110 transition-all"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
