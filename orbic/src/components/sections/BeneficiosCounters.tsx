"use client";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

// Cifras ilustrativas hasta confirmar datos reales.
const STATS = [
  { to: 24, suffix: "/7", label: "Operación y monitoreo" },
  { to: 4, suffix: "", label: "Soluciones en producción" },
  { to: 38, prefix: "+", suffix: "%", label: "Velocidad de respuesta" },
  { to: 6, suffix: "", label: "Semanas a producción" },
];

export function BeneficiosCounters() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="text-5xl font-semibold text-coral"><AnimatedCounter to={s.to} prefix={s.prefix} suffix={s.suffix} /></p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
