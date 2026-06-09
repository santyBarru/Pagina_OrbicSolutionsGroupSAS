import type { Metadata } from "next";
import { PlanCard } from "@/components/pricing/PlanCard";
import { FeatureMatrix } from "@/components/pricing/FeatureMatrix";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { PLANES, PORTAFOLIO } from "@/lib/planes";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes corporativos claros: Esencial, Crecimiento y Corporativo. Precios desde, alcance cotizado tras el diagnóstico.",
};

export default function PlanesPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-8 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Inversión clara, <span className="text-coral">resultado medible</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Elige el plan según la etapa de tu empresa. El alcance exacto se define tras el diagnóstico gratuito.
        </p>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3">
          {PLANES.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 0.08}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Heading title={<>Compara los <span className="text-coral">planes</span>.</>} />
          <div className="mt-10">
            <FeatureMatrix />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Heading
            title={<>O contrata por <span className="text-coral">servicio</span>.</>}
            subtitle="Precios base por servicio. El alcance final se cotiza según tu operación."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[16px] border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
            {PORTAFOLIO.map((s) => (
              <div key={s.servicio} className="flex items-center justify-between bg-void p-5">
                <span className="text-sm">{s.servicio}</span>
                <span className="text-sm text-coral">{s.desde}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
