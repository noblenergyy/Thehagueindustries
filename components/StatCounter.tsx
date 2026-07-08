"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border-l border-gold/50 pl-6 py-2 ${
        visible ? "animate-count-pop" : "opacity-0"
      }`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      <p className="font-serif text-5xl text-navy dark:text-white">{value}</p>
      <p className="text-body-text text-[11px] uppercase tracking-[0.22em] font-semibold mt-3">
        {label}
      </p>
    </div>
  );
}
