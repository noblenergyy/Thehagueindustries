"use client";

import { useState } from "react";
import { Mail, MapPin, Building2, CheckCircle2 } from "lucide-react";

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

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-navy text-body-text dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-navy dark:focus:border-gold transition-colors";

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="pt-32 pb-20 px-4"
        style={{
          backgroundImage: "linear-gradient(135deg, #0d1a30 0%, #1B2A4A 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Whether it is a project, a partnership, or an enquiry. We would
            like to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <p className="text-gold text-xs uppercase tracking-widest font-medium mb-6">
                Direct Contact
              </p>
              <p className="text-body-text leading-relaxed mb-8">
                We welcome enquiries from government agencies, corporate
                organisations, and strategic partners. Use the form or reach us
                directly via email.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={22} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-navy dark:text-white font-semibold text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:thehagueindustries@gmail.com"
                      className="text-body-text text-sm hover:text-gold transition-colors"
                    >
                      thehagueindustries@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-navy dark:text-white font-semibold text-sm">
                      Registered Address
                    </p>
                    <p className="text-body-text text-sm">
                      101 Moronfolu Street,
                      <br />
                      Akoka, Lagos State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 size={22} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-navy dark:text-white font-semibold text-sm">
                      RC Number
                    </p>
                    <p className="text-body-text text-sm">
                      8551874 (for official correspondence)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-navy rounded-lg text-white">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                  Response Time
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  A member of The Hague Industries team will respond to all
                  enquiries within 1-2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-100 dark:border-white/10 p-8">
                {status === "sent" ? (
                  <div className="text-center py-12">
                    <CheckCircle2
                      size={52}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-body-text">
                      Thank you for your enquiry. A member of The Hague
                      Industries team will be in touch within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
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
                        <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
                          Organisation / Company{" "}
                          <span className="text-gold">*</span>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
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
                        <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
                          Phone Number
                        </label>
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
                      <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
                        Enquiry Type <span className="text-gold">*</span>
                      </label>
                      <select
                        name="enquiryType"
                        required
                        value={form.enquiryType}
                        onChange={handleChange}
                        className={inputClass}
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
                      <label className="block text-navy dark:text-white text-sm font-semibold mb-1.5">
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
                      className="w-full py-3.5 rounded-lg bg-navy text-white font-bold text-sm tracking-wide hover:brightness-110 transition-all disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending..." : "Submit Enquiry"}
                    </button>

                    <p className="text-xs text-body-text/60 text-center">
                      All fields marked * are required. We do not share your
                      information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
