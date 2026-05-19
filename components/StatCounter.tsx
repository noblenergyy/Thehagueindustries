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
      className={`bg-brand-bg dark:bg-dark-card rounded-lg p-6 text-center border border-gray-100 dark:border-white/10 ${
        visible ? "animate-count-pop" : "opacity-0"
      }`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      <p className="text-4xl font-bold text-navy dark:text-white">{value}</p>
      <p className="text-body-text text-sm mt-1">{label}</p>
    </div>
  );
}
