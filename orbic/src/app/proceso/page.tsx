import type { Metadata } from "next";
import { ProcesoStack } from "@/components/sections/ProcesoStack";
import { DIFERENCIADORES } from "@/lib/proceso";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "De diagnóstico a operación real en 4-6 semanas. Un proceso claro, adoptable y con soporte continuo.",
};

export default function ProcesoPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-8 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          De diagnóstico a <span className="text-coral">operación real</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Simple, claro y adoptable. Así trabajamos con cada cliente.
        </p>
      </section>
      <ProcesoStack />
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Heading
            title={<>No vendemos herramientas <span className="text-coral">sueltas</span>.</>}
            subtitle="Diseñamos operaciones conectadas que transforman tu empresa."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DIFERENCIADORES.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.08}>
                <div className="glass-premium card-lift h-full rounded-[16px] p-7 text-center">
                  <h3 className="text-lg font-semibold">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
