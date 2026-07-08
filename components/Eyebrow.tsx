import { Diamond } from "@/components/Ornaments";

interface EyebrowProps {
  children: React.ReactNode;
  /** Center the eyebrow (ornaments on both sides) */
  center?: boolean;
  className?: string;
}

export default function Eyebrow({ children, center = false, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] font-semibold text-gold ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <span className="h-px w-9 bg-gold/60 shrink-0" aria-hidden="true" />
      <Diamond className="w-1 h-1" />
      <span>{children}</span>
      {center && (
        <>
          <Diamond className="w-1 h-1" />
          <span className="h-px w-9 bg-gold/60 shrink-0" aria-hidden="true" />
        </>
      )}
    </p>
  );
}
