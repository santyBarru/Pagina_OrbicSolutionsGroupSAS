import type { Metadata } from "next";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import DemoLab from "@/components/demos/DemoLab";
import { PRODUCTOS } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Productos ORBIC listos para usar: Suite Compliance (SARLAFT/KYC), WhatsApp Commerce Bot y Real Estate Lead Bot. Pruébalos en vivo antes de comprar.",
};

export default function SolucionesPage() {
  return (
    <>
      {/* Hero sub-landing */}
      <section className="px-6 pt-40 pb-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-coral">Soluciones especializadas del ecosistema ORBIC</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Software que ya <span className="text-coral">genera resultados</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          No te lo contamos: pruébalo. Productos listos para producir valor desde el primer día, con demos
          interactivas que puedes usar ahora mismo.
        </p>
      </section>

      {/* Demos interactivas (protagonista) */}
      <DemoLab />

      {/* Productos como oportunidad de negocio + precios SaaS */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Heading
            title={<>Productos <span className="text-coral">listos para usar</span>.</>}
            subtitle="Suscripción mensual, sin proyecto largo. Cada producto resuelve una necesidad concreta de negocio."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PRODUCTOS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-[16px] p-8 ${
                    p.destacado ? "ring-2 ring-coral/50" : "border border-white/[0.06]"
                  }`}
                >
                  {p.destacado && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral ring-1 ring-coral/30">
                      Más popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{p.nombre}</h3>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-coral">{p.precio}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.descripcion}</p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-muted">
                    {p.incluye.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 font-semibold text-coral">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contacto" variant={p.destacado ? "primary" : "ghost"} className="mt-6">
                    Quiero este producto
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
