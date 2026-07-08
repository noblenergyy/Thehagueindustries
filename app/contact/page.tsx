"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { CornerBrackets, CurveFlourish } from "@/components/Ornaments";

const WEB3FORMS_KEY = "c528ab39-72d9-4a5f-87d2-7bea877d6edb";

const enquiryTypes = [
  "General Enquiry",
  "Service Request",
  "B2B Partnership",
  "Project Proposal",
  "Other",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: `${form.enquiryType} from ${form.organisation}`,
          message: `Organisation: ${form.organisation}\nPhone: ${form.phone}\nEnquiry Type: ${form.enquiryType}\n\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", organisation: "", email: "", phone: "", enquiryType: "", message: "" });
      } else {
        console.error("Web3Forms error", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms fetch failed", err);
      setStatus("error");
    }
  }

  const labelClass =
    "block text-[11px] uppercase tracking-[0.24em] font-semibold text-navy dark:text-white mb-2";
  const inputClass =
    "w-full px-0 py-2.5 bg-transparent border-0 border-b border-navy/25 dark:border-white/20 text-navy dark:text-white text-[15px] placeholder:text-body-text/40 dark:placeholder:text-white/25 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors rounded-none";

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
              <Eyebrow className="animate-fade-up mb-7">Reach Out</Eyebrow>
              <h1 className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl text-navy dark:text-white leading-[1.05]">
                Get In <span className="italic text-gold">Touch</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="animate-fade-up delay-200 text-body-text dark:text-white/65 text-lg leading-relaxed lg:border-l lg:border-gold/50 lg:pl-8">
                Whether it is a project, a partnership, or an enquiry. We would
                like to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="relative bg-paper dark:bg-dark-page py-24 lg:py-32 overflow-hidden">
        <CurveFlourish className="absolute -bottom-8 left-0 w-[320px] text-gold opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact details */}
            <div className="lg:col-span-5 section-reveal">
              <Eyebrow className="mb-8">Direct Contact</Eyebrow>
              <p className="text-body-text dark:text-white/60 leading-loose mb-12 max-w-md">
                We welcome enquiries from government agencies, corporate
                organisations, and strategic partners. Use the form or reach us
                directly via email.
              </p>

              <dl className="border-t border-navy/15 dark:border-white/10">
                <div className="py-6 border-b border-navy/10 dark:border-white/10">
                  <dt className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold mb-2">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:thehagueindustries@gmail.com"
                      className="font-serif text-lg text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors"
                    >
                      thehagueindustries@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="py-6 border-b border-navy/10 dark:border-white/10">
                  <dt className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold mb-2">
                    Registered Address
                  </dt>
                  <dd className="text-navy dark:text-white/80 text-[15px] leading-relaxed">
                    101 Moronfolu Street, Akoka, Lagos
                    <br />
                    Plot 7, Bwari Close, Area 8, Garki, Abuja-FCT
                  </dd>
                </div>
                <div className="py-6 border-b border-navy/10 dark:border-white/10">
                  <dt className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold mb-2">
                    RC Number
                  </dt>
                  <dd className="text-navy dark:text-white/80 text-[15px]">
                    8551874 (for official correspondence)
                  </dd>
                </div>
              </dl>

              <div className="relative mt-12 border border-navy/15 dark:border-white/15 px-7 py-6">
                <CornerBrackets />
                <p className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold mb-3">
                  Response Time
                </p>
                <p className="font-serif italic text-navy dark:text-white/85 text-lg leading-relaxed">
                  A member of The Hague Industries team will respond to all
                  enquiries within 1&ndash;2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 section-reveal reveal-delay-1">
              {status === "sent" ? (
                <div className="text-center py-24 border border-navy/15 dark:border-white/15 px-8">
                  <CheckCircle2
                    size={44}
                    className="text-gold mx-auto mb-6"
                  />
                  <h3 className="font-serif text-3xl text-navy dark:text-white mb-4">
                    Enquiry Received
                  </h3>
                  <p className="text-body-text dark:text-white/60 max-w-md mx-auto leading-relaxed">
                    Thank you for your enquiry. A member of The Hague
                    Industries team will be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-9">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
                    <div>
                      <label className={labelClass}>
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Organisation / Company <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        required
                        value={form.organisation}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your organisation"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
                    <div>
                      <label className={labelClass}>
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@organisation.com"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Enquiry Type <span className="text-gold">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      required
                      value={form.enquiryType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer dark:bg-dark-page`}
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Describe your project, requirement, or enquiry..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or email us
                      directly at thehagueindustries@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-navy text-white dark:bg-gold dark:text-navy text-[11px] uppercase tracking-[0.24em] font-bold hover:brightness-110 transition-all disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Submit Enquiry"}
                  </button>

                  <p className="text-xs text-body-text/60 dark:text-white/40 text-center tracking-wide">
                    All fields marked * are required. We do not share your
                    information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
