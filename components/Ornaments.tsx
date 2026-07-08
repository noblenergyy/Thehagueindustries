/** Small gold diamond accent. */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block w-1.5 h-1.5 rotate-45 bg-gold shrink-0 ${className}`}
    />
  );
}

/** Gold corner brackets for bordered/framed blocks. Parent must be `relative`. */
export function CornerBrackets() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-gold"
      />
      <span
        aria-hidden="true"
        className="absolute -top-px -right-px w-3.5 h-3.5 border-t-2 border-r-2 border-gold"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-px -left-px w-3.5 h-3.5 border-b-2 border-l-2 border-gold"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-px -right-px w-3.5 h-3.5 border-b-2 border-r-2 border-gold"
      />
    </>
  );
}

/**
 * Static sweep of thin curved lines (no animation) — decorative flourish for
 * section corners. Color follows `currentColor`; size/position via className.
 */
export function CurveFlourish({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M0 300 C 120 258, 250 296, 420 176"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
      />
      <path
        d="M0 258 C 140 216, 268 252, 420 134"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.36"
      />
      <path
        d="M0 216 C 160 174, 286 208, 420 92"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.24"
      />
      <path
        d="M0 174 C 180 132, 304 164, 420 50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.14"
      />
      <path
        d="M0 132 C 200 92, 322 122, 420 10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.08"
      />
      {/* Small diamond riding the outer curve */}
      <rect
        x="206"
        y="225"
        width="6"
        height="6"
        transform="rotate(45 209 228)"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

/** Centered hairline divider with a diamond at its middle. */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <span className="h-px w-16 bg-gold/40" />
      <Diamond />
      <span className="h-px w-16 bg-gold/40" />
    </div>
  );
}
