"use client";
import { Reveal } from "@/components/motion/Reveal";
import { PASOS } from "@/lib/proceso";

export function ProcesoStack() {
  return (
    <section className="relative z-10 py-20">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-coral/50 via-violet/40 to-transparent md:block" />
        {PASOS.map((p, i) => (
          <Reveal
            key={p.numero}
            delay={i * 0.05}
            className={`relative mb-10 md:w-[calc(50%-32px)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
          >
            <div className="glass-premium card-lift rounded-[16px] p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-semibold text-coral">{p.numero}</span>
                <h3 className="text-lg font-semibold">{p.titulo}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.descripcion}</p>
              <p className="mt-3 text-xs text-coral/80">{p.detalle}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
