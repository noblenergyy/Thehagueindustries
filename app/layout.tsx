import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehagueindustries.com"),
  title: {
    default: "The Hague Industries Ltd | Multi-Sector Contracting & Advisory",
    template: "%s | The Hague Industries Ltd",
  },
  description:
    "The Hague Industries Ltd (RC 8551874) is a CAC-registered Nigerian contracting, consultancy, and advisory company serving government MDAs, oil & gas, mining, and corporate clients nationwide.",
  keywords: [
    "The Hague Industries",
    "The Hague Industries Ltd",
    "contracting company Nigeria",
    "general contracting Lagos",
    "general contracting Abuja",
    "government advisory Nigeria",
    "B2B solutions Nigeria",
    "oil gas contractor Nigeria",
    "CAC registered company Nigeria",
    "RC 8551874",
    "consultancy Nigeria",
    "mining advisory Nigeria",
    "infrastructure contractor Nigeria",
  ],
  alternates: {
    canonical: "https://thehagueindustries.com",
  },
  openGraph: {
    title: "The Hague Industries Ltd | Multi-Sector Contracting & Advisory",
    description:
      "CAC-registered Nigerian contracting and advisory company. Oil & gas, government, mining, and B2B sectors. RC 8551874.",
    type: "website",
    locale: "en_NG",
    url: "https://thehagueindustries.com",
    siteName: "The Hague Industries Ltd",
  },
  twitter: {
    card: "summary",
    title: "The Hague Industries Ltd",
    description:
      "CAC-registered Nigerian contracting and advisory company. Oil & gas, government, mining, and B2B sectors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Hague Industries Ltd",
  alternateName: "The Hague Industries",
  url: "https://thehagueindustries.com",
  logo: "https://thehagueindustries.com/opengraph-image.png",
  description:
    "CAC-registered Nigerian contracting, consultancy, and advisory company. Serving government MDAs, oil & gas, mining, and corporate clients nationwide.",
  foundingDate: "2025",
  legalName: "The Hague Industries Ltd",
  vatID: "33277749-0001",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "101 Moronfolu Street, Akoka",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Plot 7, Bwari Close, Area 8, Garki",
      addressLocality: "Abuja",
      addressRegion: "FCT",
      addressCountry: "NG",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "thehagueindustries@gmail.com",
    contactType: "customer service",
    areaServed: "NG",
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollAnimator />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
