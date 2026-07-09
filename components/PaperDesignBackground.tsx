"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Dithering } from "@paper-design/shaders-react";

interface PaperDesignBackgroundProps {
  // Visual intensity 0..1
  intensity?: number;
  // Enable subtle parallax mouse move
  parallax?: boolean;
  // Optional className to adjust z-index or positioning
  className?: string;
}

export function PaperDesignBackground({
  intensity = 0.8,
  parallax = true,
  className = "",
}: PaperDesignBackgroundProps) {
  const [isDark, setIsDark] = useState(false);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Phones get a zoomed-out, finer pattern: the desktop scale crops the wave
  // on narrow portrait canvases (looks cut off / over-zoomed).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsSmall(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Follow the site's own theme (navbar toggle sets the `dark` class on <html>);
  // syncing to the OS here would fight that toggle.
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // Unmount the WebGL canvas whenever the hero is scrolled out of view —
  // otherwise it keeps rendering every frame for the whole page visit.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Skip the animated shader entirely for users who ask for reduced motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Derived colors and speeds for light/dark
  const config = useMemo(() => {
    const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
    const t = clamp(intensity);

    if (isDark) {
      return {
        back: "#00000000",
        front: mix("#614B00", "#A87C00", t * 0.35), // warm cyber-gold
        bg: "#0A1428", // brand navy, not black
        speed: 0.28 + t * 0.35,
        px: isSmall ? 2 : Math.round(2 + t * 2), // 2..4
        scale: isSmall ? 0.8 : 1.05 + t * 0.15,
        glow: "radial-gradient(60% 40% at 50% 40%, rgba(255,210,90,0.10), transparent 70%)",
      };
    } else {
      return {
        back: "#00000000",
        // Royal-blue wave, clearly visible on paper; the left-side scrim in the
        // hero keeps the navy headline text readable over it.
        front: mix("#3B5498", "#7C99D6", t * 0.35),
        bg: "#F7F4EC", // warm paper
        speed: 0.22 + t * 0.28,
        px: isSmall ? 2 : Math.round(2 + t * 2),
        scale: isSmall ? 0.8 : 1.03 + t * 0.12,
        // Blue + gold mash: warm gold pooling low-right, cool blue high-center
        glow:
          "radial-gradient(50% 45% at 72% 72%, rgba(184,150,46,0.26), transparent 70%), radial-gradient(60% 40% at 45% 35%, rgba(90,120,190,0.16), transparent 70%)",
      };
    }
  }, [isDark, intensity, isSmall]);

  // Optional mouse parallax — rAF-throttled so mousemove never floods style writes
  useEffect(() => {
    if (!parallax) return;
    const root = containerRef.current;
    if (!root) return;

    const strength = 8; // px at edges
    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const { innerWidth: w, innerHeight: h } = window;
        const x = (lastX / w) * 2 - 1;
        const y = (lastY / h) * 2 - 1;
        root.style.setProperty("--parallax-x", `${(-x * strength).toFixed(2)}px`);
        root.style.setProperty("--parallax-y", `${(-y * strength).toFixed(2)}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={[
        // Oversized by 12px on all sides: the mouse parallax translates this
        // layer up to 8px, which would otherwise expose a bare edge strip.
        "pointer-events-none absolute -inset-3 overflow-hidden",
        "z-0",
        "transition-colors duration-500",
        className,
      ].join(" ")}
      style={{
        backgroundColor: config.bg,
        transform: parallax
          ? "translate3d(var(--parallax-x,0), var(--parallax-y,0), 0)"
          : undefined,
        willChange: parallax ? "transform" : undefined,
      }}
    >
      {/* Core dithering shader — mounted only while the hero is on screen.
          The render resolution is capped: the effect is chunky dithering, so
          full retina resolution is wasted GPU work (this was the lag). */}
      {inView && !reducedMotion && (
        <Dithering
          colorBack={config.back}
          colorFront={config.front}
          speed={config.speed}
          shape="wave"
          type="4x4"
          pxSize={config.px}
          scale={config.scale}
          maxPixelCount={520000}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      )}

      {/* Soft glow layer (theme-aware) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: config.glow,
          mixBlendMode: isDark ? "screen" : "multiply",
          opacity: 1,
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Film grain for texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.25' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          opacity: 0.5,
          mixBlendMode: isDark ? "screen" : "multiply",
        }}
      />

      {/* Top shine sweep for a premium feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 35%)",
          opacity: isDark ? 0.25 : 0.4,
        }}
      />
    </div>
  );
}

/**
 * Utility: linear RGB mix between two hex colors (simple)
 */
function mix(a: string, b: string, t: number): string {
  const ah = a.replace("#", "");
  const bh = b.replace("#", "");
  const ai = parseInt(ah, 16);
  const bi = parseInt(bh, 16);
  const ar = (ai >> 16) & 0xff;
  const ag = (ai >> 8) & 0xff;
  const ab = ai & 0xff;
  const br = (bi >> 16) & 0xff;
  const bg = (bi >> 8) & 0xff;
  const bb = bi & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`;
}
