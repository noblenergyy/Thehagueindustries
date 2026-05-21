import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | The Hague Industries Ltd",
  description:
    "A record of delivery across sectors and geographies. View completed and active mandates by The Hague Industries Ltd.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
