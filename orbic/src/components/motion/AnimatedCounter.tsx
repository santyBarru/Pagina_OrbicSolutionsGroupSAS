"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { easeOutCubic } from "@/lib/ease";

type Props = { to: number; suffix?: string; prefix?: string; durationMs?: number; decimals?: number };

export function AnimatedCounter({ to, suffix = "", prefix = "", durationMs = 1400, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setValue(to); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      setValue(to * easeOutCubic(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, durationMs, reduce]);
  return <span ref={ref} className="tabular-nums">{prefix}{value.toFixed(decimals)}{suffix}</span>;
}
