"use client";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SITE } from "@/lib/site";
export default function CTAFinal() {
  return (
    <section id="contacto-cta" className="relative z-10 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] p-12 text-center md:p-16">
          <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "radial-gradient(circle at top left, rgba(139,92,255,0.35), transparent 40%), radial-gradient(circle at bottom right, rgba(255,107,53,0.35), transparent 40%)" }} />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">¿Listo para transformar tu operación?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">El diagnóstico es gratis y sin compromiso. Solo necesitamos entender tu operación para mostrarte lo que es posible.</p>
          <div className="mt-9 flex justify-center"><MagneticButton href={SITE.primaryCta.href}>{SITE.primaryCta.label}</MagneticButton></div>
        </div>
      </div>
    </section>
  );
}
