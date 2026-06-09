"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string };

export function MagneticButton({ href, children, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  }
  function reset() { x.set(0); y.set(0); }
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium transition-colors duration-200 active:scale-[0.97] whitespace-nowrap";
  const styles = variant === "primary" ? "bg-coral text-[#0a0b0f] hover:bg-coral-soft" : "border border-white/15 text-ink hover:bg-white/[0.06]";
  return (
    <motion.a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={`${base} ${styles} ${className}`}>
      {children}
    </motion.a>
  );
}
