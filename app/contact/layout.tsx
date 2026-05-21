import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Hague Industries Ltd. Submit a project enquiry, request a proposal, or reach out for B2B partnerships. We respond within two business days.",
  alternates: {
    canonical: "https://thehagueindustries.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
