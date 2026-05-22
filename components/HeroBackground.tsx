"use client";

import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // Steel-blue lines on dark bg, navy lines on light bg
  const lineColor = isDark
    ? "rgba(50, 110, 200, 0.15)"
    : "rgba(27,42,74,0.22)";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/*
        Oversized by 80px on all sides so the translate(80px,80px) never
        reveals a gap at the edges. background-size matches the translate
        distance for a seamless infinite loop.
      */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          right: "-80px",
          bottom: "-80px",
          backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 38px, ${lineColor} 38px, ${lineColor} 39px)`,
          backgroundSize: "80px 80px",
          animation: "lines-drift 5s linear infinite",
        }}
      />
      {/* Soft radial glow behind the headline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(20, 60, 160, 0.22) 0%, transparent 70%)"
            : "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(184,150,46,0.18) 0%, transparent 70%)",
        }}
      />
      {/* Light mode: white glow from the edges (vignette) */}
      {!isDark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 62% 58% at 50% 48%, transparent 0%, rgba(255,255,255,0.45) 70%, rgba(255,255,255,0.82) 100%)",
          }}
        />
      )}
    </div>
  );
}
