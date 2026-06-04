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
          {/* Línea central */}
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
                {/* Dot */}
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 z-10 w-[14px] h-[14px] rounded-full"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 10px ${step.color}80, 0 0 25px ${step.color}40`,
                  }}
                />

                {/* Línea horizontal del dot a la card */}
                <div
                  className={`hidden md:block absolute top-[21px] w-[30px] h-[1px] ${
                    isLeft ? "right-1/2 mr-[7px]" : "left-1/2 ml-[7px]"
                  }`}
                  style={{ background: `${step.color}40` }}
                />

                {/* Card posicionada */}
                <div
                  className={`md:w-[calc(50%-50px)] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div
                    className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(23,28,49,0.7)",
                      border: `1px solid ${step.color}20`,
                    }}
                  >
                    {/* Línea de acento arriba */}
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
                className="rounded-2xl p-8 relative overflow-hidden text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(23,28,49,0.7)",
                  border: `1px solid ${diff.color}20`,
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
                    border: `1px solid ${diff.color}25`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: diff.color,
                      boxShadow: `0 0 10px ${diff.color}80, 0 0 25px ${diff.color}40`,
                      animation: "glow-pulse 3s ease-in-out infinite",
                    }}
                  />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] p-16 text-center"
            style={{
              background: "rgba(23,28,49,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
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
