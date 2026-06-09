"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SITE } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative grid min-h-[92dvh] items-center pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="z-10">
          <motion.h1 {...rise(0.05)} className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Convertimos el caos operativo en <span className="text-coral">sistemas bajo control</span>.
          </motion.h1>
          <motion.p {...rise(0.18)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Más ventas, menos trabajo manual y procesos que escalan. ORBIC diseña la operación, no piezas sueltas.
          </motion.p>
          <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href={SITE.primaryCta.href} variant="primary">{SITE.primaryCta.label}</MagneticButton>
            <MagneticButton href={SITE.secondaryCta.href} variant="ghost">{SITE.secondaryCta.label}</MagneticButton>
          </motion.div>
        </div>
        <motion.div {...rise(0.2)} className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block" aria-hidden>
          <OrbitMotif reduce={!!reduce} />
        </motion.div>
      </div>
    </section>
  );
}

function OrbitMotif({ reduce }: { reduce: boolean }) {
  const rings = [
    { size: 100, dur: 40, color: "rgba(255,107,53,0.35)" },
    { size: 72, dur: 28, color: "rgba(139,92,255,0.4)" },
    { size: 46, dur: 18, color: "rgba(255,143,95,0.3)" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ width: `${r.size}%`, height: `${r.size}%`, borderColor: r.color }}
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: r.dur, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
            style={{ background: r.color.replace(/0\.\d+/, "1"), boxShadow: `0 0 12px ${r.color}` }} />
        </motion.div>
      ))}
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-coral to-violet opacity-90 blur-[2px]" />
    </div>
  );
}
