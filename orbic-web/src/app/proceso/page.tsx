"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos tu operación real. Entendemos tu flujo, tus dolores y tus herramientas antes de proponer cualquier solución.",
    detail: "Gratis · 1-2 sesiones · Virtual o presencial",
    color: "#FF6B35",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Diseñamos la arquitectura de tu sistema: flujos de datos, automatizaciones, integraciones y prioridades.",
    detail: "1 semana · Documento de arquitectura entregado",
    color: "#8B5CFF",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Construimos, integramos y probamos todo. Tu sistema queda funcionando en producción con datos reales.",
    detail: "2-4 semanas · Entregas incrementales",
    color: "#B388FF",
  },
  {
    number: "04",
    title: "Adopción",
    description:
      "Capacitamos a tu equipo para que use el sistema con confianza. Acompañamos la transición sin fricciones.",
    detail: "1 semana · Videos + sesiones en vivo",
    color: "#FF6B35",
  },
  {
    number: "05",
    title: "Mejora",
    description:
      "No desaparecemos. Monitoreamos, optimizamos y evolucionamos tu sistema según las necesidades del negocio.",
    detail: "Continuo · Soporte incluido",
    color: "#8B5CFF",
  },
];

const differentiators = [
  {
    title: "Enfoque operativo",
    description:
      "Primero entendemos el proceso. Luego proponemos la herramienta. Nunca al revés.",
    color: "#FF6B35",
  },
  {
    title: "Personalización controlada",
    description:
      "Soluciones a medida, pero diseñadas para ser mantenibles y escalables en el tiempo.",
    color: "#8B5CFF",
  },
  {
    title: "Soporte continuo",
    description:
      "No entregamos y desaparecemos. Acompañamos la evolución de tu operación mes a mes.",
    color: "#B388FF",
  },
];

const differentiatorIcons = [
  (color: string) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  ),
  (color: string) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7l10 5 10-5-10-5z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2 17l10 5 10-5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2 12l10 5 10-5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (color: string) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M23 4v6h-6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 20v-6h6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

export default function ProcesoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
              Proceso
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              De diagnóstico a{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                operación real.
              </span>
            </h1>
            <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Simple, claro y adoptable. Así trabajamos con cada cliente que
              confía en Orbic.
            </p>

            <div className="flex items-center justify-center gap-12">
              <div>
                <p className="text-3xl font-bold text-[#FF6B35] stat-glow">5</p>
                <p className="text-[#8E95A9] text-sm">Pasos</p>
              </div>
              <div className="w-[1px] h-10 bg-[rgba(255,255,255,0.08)]" />
              <div>
                <p className="text-3xl font-bold text-[#8B5CFF] text-glow-violet">
                  4-6
                </p>
                <p className="text-[#8E95A9] text-sm">Semanas promedio</p>
              </div>
              <div className="w-[1px] h-10 bg-[rgba(255,255,255,0.08)]" />
              <div>
                <p className="text-3xl font-bold text-[#FF6B35] stat-glow">
                  100%
                </p>
                <p className="text-[#8E95A9] text-sm">Personalizado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline alternado */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6B35]/50 via-[#8B5CFF]/40 to-transparent" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 md:mb-16"
              >
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 z-10 w-[14px] h-[14px] rounded-full"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 10px ${step.color}80, 0 0 25px ${step.color}40`,
                  }}
                />
                <div
                  className={`hidden md:block absolute top-[21px] w-[30px] h-[1px] ${
                    isLeft ? "right-1/2 mr-[7px]" : "left-1/2 ml-[7px]"
                  }`}
                  style={{ background: `${step.color}40` }}
                />

                <div
                  className={`md:w-[calc(50%-50px)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div
                    className="rounded-2xl p-7 relative overflow-hidden cursor-default"
                    style={{
                      background: "rgba(23,28,49,0.7)",
                      border: `1px solid ${step.color}20`,
                      transition: "all 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-6px)";
                      el.style.boxShadow = `0 8px 40px ${step.color}30, 0 0 0 1px ${step.color}40`;
                      el.style.border = `1px solid ${step.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                      el.style.border = `1px solid ${step.color}20`;
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)`,
                      }}
                    />
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-3xl font-bold"
                        style={{
                          color: step.color,
                          textShadow: `0 0 20px ${step.color}40`,
                        }}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#8E95A9] text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: step.color,
                          boxShadow: `0 0 6px ${step.color}80`,
                        }}
                      />
                      <p
                        className="text-xs font-medium"
                        style={{ color: step.color }}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Diferencial */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
              Diferencial
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
              No vendemos herramientas{" "}
              <span className="text-[#8B5CFF] text-glow-violet">sueltas.</span>
            </h2>
            <p className="text-[#8E95A9] text-lg mt-4 max-w-xl mx-auto">
              Diseñamos operaciones conectadas que transforman tu empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl p-8 relative overflow-hidden text-center cursor-default"
                style={{
                  background: "rgba(23,28,49,0.7)",
                  border: `1px solid ${diff.color}20`,
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 8px 40px ${diff.color}30, 0 0 0 1px ${diff.color}40`;
                  el.style.border = `1px solid ${diff.color}50`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.border = `1px solid ${diff.color}20`;
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${diff.color}60, transparent)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${diff.color}12`,
                    border: `1px solid ${diff.color}30`,
                    filter: `drop-shadow(0 0 8px ${diff.color}30)`,
                  }}
                >
                  {differentiatorIcons[index](diff.color)}
                </div>
                <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                <p className="text-[#8E95A9] text-sm leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
            className="relative overflow-hidden rounded-[32px] p-16 text-center cursor-default"
            style={{
              background: "rgba(23,28,49,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 60px rgba(139,92,255,0.08)",
            }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(139,92,255,0.4),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.4),transparent_40%)]" />

            <div className="relative z-10">
              <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
                Siguiente paso
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                ¿Listo para transformar
                <br />
                tu operación?
              </h2>
              <p className="text-[#8E95A9] text-lg mb-10 max-w-xl mx-auto">
                El diagnóstico es gratis. Sin compromiso. Solo necesitamos
                entender tu operación para mostrarte lo que es posible.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl bg-[#FF6B35] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,107,53,0.5)] hover:shadow-[0_0_80px_rgba(255,107,53,0.7)]"
              >
                Solicitar diagnóstico gratis →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
