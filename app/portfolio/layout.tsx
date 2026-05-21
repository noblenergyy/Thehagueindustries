import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Track record of The Hague Industries Ltd across oil & gas, government, mining, B2B trade, and financial services. View completed and active mandates.",
  alternates: {
    canonical: "https://thehagueindustries.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
