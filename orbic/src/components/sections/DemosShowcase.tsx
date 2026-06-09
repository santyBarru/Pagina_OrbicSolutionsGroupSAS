"use client";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function DemosShowcase() {
  return (
    <section id="soluciones-teaser" className="relative z-10 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="relative overflow-hidden rounded-[24px] border border-white/[0.06] p-10 md:p-16">
          <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,107,53,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(139,92,255,0.18), transparent 45%)" }} />
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-coral">Soluciones ORBIC</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">No te lo contamos. <span className="text-coral">Pruébalo.</span></h2>
            <p className="mt-4 text-muted">Experimenta nuestras soluciones con datos reales simulados: un CRM con pipeline de ventas y un dashboard con reportes automáticos. Si esto es la demo, imagina el producto completo.</p>
            <div className="mt-8"><Button href={SITE.secondaryCta.href}>Explorar soluciones en vivo</Button></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
