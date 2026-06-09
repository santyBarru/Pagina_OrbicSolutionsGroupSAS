"use client";
import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { SERVICIOS } from "@/lib/servicios";

export function ServiciosResultado({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="servicios" className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {withHeading && (
          <Heading eyebrow="Lo que vendemos" title={<>No vendemos software. Vendemos <span className="text-coral">resultados</span>.</>} subtitle="Cada solución resuelve un problema de negocio concreto. La tecnología es solo cómo lo logramos." />
        )}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <article className="glass-premium card-lift flex h-full flex-col rounded-[16px] p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-coral/10 ring-1 ring-coral/25"><Icon size={22} className="text-coral" /></div>
                  <h3 className="text-lg font-semibold">{s.resultado}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><span className="text-ink/80">El problema:</span> {s.problema}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted"><span className="text-ink/80">Lo que ganas:</span> {s.beneficio}</p>
                  <p className="mt-4 border-t border-white/[0.06] pt-3 text-xs text-muted/70">{s.entrega}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
