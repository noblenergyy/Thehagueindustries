"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingPathsBg from "@/components/FloatingPaths";

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

const statusStyle: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Delivered: "bg-blue-100 text-blue-700",
  "In Progress": "bg-amber-100 text-amber-700",
  "Under Review": "bg-amber-100 text-amber-700",
  Ongoing: "bg-purple-100 text-purple-700",
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
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #0d1a30 0%, #1B2A4A 100%)",
        }}
      >
        <FloatingPathsBg />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="animate-fade-up text-gold text-xs uppercase tracking-widest font-medium mb-3">
            Track Record
          </p>
          <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="animate-fade-up delay-200 text-white/70 text-lg max-w-2xl mx-auto">
            A record of delivery across sectors and geographies.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === f
                    ? "bg-navy text-white border-navy"
                    : "bg-white dark:bg-dark-card text-body-text dark:text-white/70 border-gray-200 dark:border-white/10 hover:border-navy hover:text-navy dark:hover:border-gold dark:hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-body-text text-lg">
                No projects in this category yet.
              </p>
              <p className="text-body-text/60 text-sm mt-2">
                More engagements are being added as our portfolio grows.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.title}
                  className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                      {p.sector}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        statusStyle[p.status] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy dark:text-white text-base mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-body-text text-sm leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 dark:border-white/10">
                    <span className="text-xs text-body-text/60 font-medium">
                      {p.client}
                    </span>
                    <span className="text-xs text-body-text/60">{p.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy py-20 text-center overflow-hidden">
        <FloatingPathsBg />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind? Let Us Deliver It.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We bring the same commitment to every mandate, regardless of sector,
            scale, or geography.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded bg-gold text-navy font-bold text-sm tracking-wide hover:brightness-110 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
