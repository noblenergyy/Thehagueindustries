"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Track every reveal element ever seen; re-scan whenever the DOM changes
    // (route navigation, filtered lists, dev hot-reload) so freshly created
    // nodes are always observed — a one-shot scan leaves them invisible.
    const seen = new WeakSet<Element>();
    const scan = () => {
      document
        .querySelectorAll(".card-animate, .section-reveal")
        .forEach((el) => {
          if (!seen.has(el)) {
            seen.add(el);
            io.observe(el);
          }
        });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
