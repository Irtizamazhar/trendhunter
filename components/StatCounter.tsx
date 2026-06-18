"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  label: string;
  className?: string;
};

// Animates a count-up when the numeric part is parseable; otherwise renders as-is.
export function StatCounter({ value, label, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const numeric = Number(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9,]/g, "");
    if (!numeric || Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = Math.floor(eased * numeric);
        setDisplay(current.toLocaleString() + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          run();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {display}
      </div>
      <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400">
        {label}
      </div>
    </div>
  );
}
