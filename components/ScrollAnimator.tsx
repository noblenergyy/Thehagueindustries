"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const vh = window.innerHeight;
    const belowFold = (el: HTMLElement) =>
      el.getBoundingClientRect().top > vh * 0.88;

    // ── Cards ──
    const cardEls = Array.from(
      document.querySelectorAll(".rounded-lg, .rounded-xl")
    ) as HTMLElement[];
    const cards = cardEls.filter((el) => {
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
        el.style.transitionDelay = `${Math.min(560, i * 58)}ms`;
      }
    });

    // ── Section headings ──
    const headings = Array.from(
      document.querySelectorAll("section h2, section h3")
    ) as HTMLElement[];

    headings.forEach((el) => {
      if (
        belowFold(el) &&
        !el.classList.contains("section-reveal") &&
        !el.classList.contains("animate-fade-up")
      ) {
        el.classList.add("section-reveal");
      }
    });

    const targets = [
      ...cards,
      ...headings.filter((el) => el.classList.contains("section-reveal")),
    ];

    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
