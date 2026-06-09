"use client";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { PASOS } from "@/lib/proceso";

export default function ProcesoTeaser() {
  return (
    <section id="proceso" className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Heading title={<>De diagnóstico a <span className="text-coral">operación real</span>.</>} subtitle="Un proceso claro y adoptable. Así trabajamos con cada cliente." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-white/[0.06] bg-white/[0.04] md:grid-cols-5">
          {PASOS.map((p, i) => (
            <Reveal key={p.numero} delay={i * 0.05} className="bg-void p-6">
              <span className="font-mono text-sm text-coral">{p.numero}</span>
              <h3 className="mt-2 font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{p.descripcion}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/proceso" className="text-sm text-coral hover:text-coral-soft">Ver el proceso completo</Link></div>
      </div>
    </section>
  );
}
