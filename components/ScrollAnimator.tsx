"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const selector = ".rounded-lg, .rounded-xl";
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[];

    // Heuristic: treat elements with padding/border/shadow as cards
    const cards = els.filter((el) => {
      const cls = el.classList;
      return (
        cls.contains("shadow-sm") ||
        cls.contains("border") ||
        [...cls].some((c) => c.startsWith("p-"))
      );
    });

    cards.forEach((el, i) => {
      if (!el.classList.contains("card-animate")) {
        el.classList.add("card-animate");
        // stagger small delays for pleasing cascade
        el.style.transitionDelay = `${Math.min(600, i * 60)}ms`;
      }
    });

    if (!cards.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((c) => obs.observe(c));

    return () => obs.disconnect();
  }, []);

  return null;
}
