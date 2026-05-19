import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Hague Industries Ltd | Multi-Sector Contracting & Advisory",
    template: "%s | The Hague Industries Ltd",
  },
  description:
    "The Hague Industries Ltd is a Nigerian-incorporated contracting, consultancy, and allied services company. Serving government MDAs, corporate clients, and B2B partners across sectors.",
  keywords: [
    "contracting Nigeria",
    "general contracting Lagos",
    "government advisory Nigeria",
    "B2B solutions Nigeria",
    "oil gas contractor Nigeria",
    "CAC registered company",
  ],
  openGraph: {
    title: "The Hague Industries Ltd",
    description:
      "Multi-sector contracting and advisory company. CAC registered, compliance-driven, nationwide reach.",
    type: "website",
    locale: "en_NG",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
