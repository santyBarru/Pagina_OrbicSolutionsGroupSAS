"use client";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { PLANES } from "@/lib/planes";

export function PlanesTeaser() {
  return (
    <section id="planes" className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Heading title={<>Planes claros, <span className="text-coral">sin sorpresas</span>.</>} subtitle="Desde tu presencia digital hasta una plataforma corporativa a medida." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLANES.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-[16px] p-7 ${p.destacado ? "ring-1 ring-coral/40" : "border border-white/[0.06]"}`}>
                {p.destacado && <span className="mb-4 inline-flex w-fit rounded-full bg-coral/10 px-3 py-1 text-xs text-coral ring-1 ring-coral/30">Más elegido</span>}
                <h3 className="text-sm uppercase tracking-wide text-muted">{p.nombre}</h3>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{p.precio}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-muted">{p.incluye.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
                <Link href="/planes" className="mt-6 text-sm text-coral hover:text-coral-soft">Ver detalle</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
