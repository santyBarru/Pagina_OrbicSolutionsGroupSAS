import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { EQUIPO } from "@/lib/equipo";
import CTAFinal from "@/components/sections/CTAFinal";

const VALORES = [
  {
    titulo: "Entendemos antes de proponer",
    desc: "No vendemos soluciones genéricas. Primero mapeamos tu operación real para construir algo que de verdad funcione.",
  },
  {
    titulo: "Tecnología que trabaja sola",
    desc: "Automatizamos lo repetitivo para que tu equipo se enfoque en lo que importa. 24/7, sin supervisión.",
  },
  {
    titulo: "Crecemos contigo",
    desc: "No entregamos y desaparecemos. Acompañamos la evolución de tu operación mes a mes, año a año.",
  },
];

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Un equipo colombiano que convierte el caos operativo en sistemas bajo control.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-16 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          La tecnología debe <span className="text-coral">trabajar para ti</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Somos un equipo colombiano que automatiza operaciones empresariales. Las empresas pierden tiempo en
          tareas que una máquina hace mejor; nosotros se lo devolvemos.
        </p>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Heading title={<>Quiénes <span className="text-coral">somos</span>.</>} />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {EQUIPO.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 0.1}>
                <div className="glass-premium card-lift h-full rounded-[16px] p-8 text-center">
                  <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-2 ring-coral/30">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={m.nombre}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: "60% 20%" }}
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-coral/10 text-2xl font-semibold text-coral">
                        {m.nombre.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{m.nombre}</h3>
                  <p className="mt-1 text-xs font-medium text-coral">{m.rol}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.descripcion}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Heading title={<>Principios que <span className="text-coral">nos guían</span>.</>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALORES.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 0.08}>
                <div className="glass-premium card-lift h-full rounded-[16px] p-7">
                  <h3 className="text-lg font-semibold">{v.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <p className="text-4xl font-semibold text-coral"><AnimatedCounter to={2} /></p>
            <p className="mt-1 text-sm text-muted">Cofundadores</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-coral"><AnimatedCounter to={4} /></p>
            <p className="mt-1 text-sm text-muted">Soluciones activas</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-coral">24/7</p>
            <p className="mt-1 text-sm text-muted">Operación</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-coral">2026</p>
            <p className="mt-1 text-sm text-muted">Fundación</p>
          </div>
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
