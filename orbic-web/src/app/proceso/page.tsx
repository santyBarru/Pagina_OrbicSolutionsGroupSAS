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
    title: "Mejora continua",
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
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Personalización controlada",
    description:
      "Soluciones a medida, pero diseñadas para ser mantenibles y escalables en el tiempo.",
    color: "#8B5CFF",
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Soporte continuo",
    description:
      "No entregamos y desaparecemos. Acompañamos la evolución de tu operación mes a mes.",
    color: "#B388FF",
    icon: (color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M23 4v6h-6M1 20v-6h6"
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
  },
];

export default function ProcesoPage() {
  return (
    <>
      {/* ── HERO con imagen de fondo ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/proceso-hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "500px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.95) 80%, #000000 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pt-40 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Proceso
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                De diagnóstico a
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                operación real.
              </span>
            </h1>
            <p className="text-white/45 text-lg font-light leading-relaxed max-w-lg mb-12">
              Simple, claro y adoptable. Así trabajamos con cada cliente que
              confía en Orbic.
            </p>

            <div
              className="flex items-center gap-12 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {[
                { n: "5", label: "Pasos", color: "#FF6B35" },
                { n: "4-6", label: "Semanas promedio", color: "#8B5CFF" },
                { n: "100%", label: "Personalizado", color: "#FF6B35" },
              ].map((s, i) => (
                <div key={i}>
                  <p
                    className="text-2xl font-bold mb-1 tracking-tight"
                    style={{ color: s.color, letterSpacing: "-0.02em" }}
                  >
                    {s.n}
                  </p>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest font-light">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-32 relative z-10 overflow-hidden">
        {/* Halo violeta izquierda */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(139,92,255,0.06), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        {/* Halo naranja derecha */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.05), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        {/* Curva SVG violeta — entra por arriba izquierda */}
        <svg
          className="absolute pointer-events-none"
          style={{ top: 0, left: 0, width: "50%", height: "40%", opacity: 0.3 }}
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M -20 280 Q 150 80 500 40"
            stroke="url(#tl1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -20 300 Q 160 95 500 55"
            stroke="url(#tl1b)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="tl1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="tl1b" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
              <stop offset="60%" stopColor="#B388FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Curva SVG naranja — entra por abajo derecha en el medio */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: "35%",
            right: 0,
            width: "45%",
            height: "35%",
            opacity: 0.28,
          }}
          viewBox="0 0 450 280"
          fill="none"
        >
          <path
            d="M 480 0 Q 280 150 0 250"
            stroke="url(#tl2)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 480 18 Q 290 162 5 262"
            stroke="url(#tl2b)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="tl2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tl2b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF8F5F" stopOpacity="0" />
              <stop offset="55%" stopColor="#FF8F5F" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF8F5F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Curva SVG violeta — al final abajo izquierda */}
        <svg
          className="absolute pointer-events-none"
          style={{
            bottom: "5%",
            left: 0,
            width: "40%",
            height: "30%",
            opacity: 0.22,
          }}
          viewBox="0 0 400 250"
          fill="none"
        >
          <path
            d="M 0 250 Q 180 60 400 20"
            stroke="url(#tl3)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="tl3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Línea central */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,107,53,0.3), rgba(139,92,255,0.2), transparent)",
            }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 md:mb-14"
              >
                {/* Dot central */}
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-7 z-10 w-3 h-3 rounded-full"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 8px ${step.color}60`,
                  }}
                />

                {/* Línea al card */}
                <div
                  className={`hidden md:block absolute top-[30px] w-8 h-px ${isLeft ? "right-1/2 mr-[6px]" : "left-1/2 ml-[6px]"}`}
                  style={{ background: `${step.color}30` }}
                />

                <div
                  className={`md:w-[calc(50%-60px)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div
                    className="rounded-2xl p-7 relative overflow-hidden cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid rgba(255,255,255,0.05)`,
                      transition: "all 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${step.color}06`;
                      el.style.border = `1px solid ${step.color}22`;
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.02)";
                      el.style.border = "1px solid rgba(255,255,255,0.05)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${step.color}35, transparent)`,
                      }}
                    />

                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-3xl font-bold tracking-tight"
                        style={{ color: step.color, letterSpacing: "-0.03em" }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="text-xl font-semibold tracking-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/45 text-sm font-light leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ background: step.color }}
                      />
                      <p
                        className="text-xs font-light"
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

      {/* ── DIFERENCIAL ── */}
      <section className="py-32 relative z-10 overflow-hidden">
        {/* Halo violeta */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "-5%",
            width: "450px",
            height: "450px",
            background:
              "radial-gradient(circle, rgba(139,92,255,0.06), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        {/* Curva naranja izquierda */}
        <svg
          className="absolute pointer-events-none"
          style={{
            bottom: 0,
            left: 0,
            width: "45%",
            height: "40%",
            opacity: 0.25,
          }}
          viewBox="0 0 450 280"
          fill="none"
        >
          <path
            d="M 0 280 Q 200 80 450 20"
            stroke="url(#pdo1)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="pdo1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Curva violeta derecha arriba */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: 0,
            width: "40%",
            height: "35%",
            opacity: 0.22,
          }}
          viewBox="0 0 400 250"
          fill="none"
        >
          <path
            d="M 420 250 Q 200 60 0 20"
            stroke="url(#pdv1)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="pdv1" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="55%" stopColor="#8B5CFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#8B5CFF]" />
              <span className="text-[#8B5CFF] text-[10px] tracking-[0.35em] uppercase font-light">
                Diferencial
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                No vendemos herramientas
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                sueltas.
              </span>
            </h2>
            <p className="text-white/40 text-base font-light mt-5 max-w-md leading-relaxed">
              Diseñamos operaciones conectadas que transforman tu empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {differentiators.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 relative overflow-hidden text-center cursor-default"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: `1px solid rgba(255,255,255,0.06)`,
                  backdropFilter: "blur(10px)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${diff.color}08`;
                  el.style.border = `1px solid ${diff.color}22`;
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.border = "1px solid rgba(255,255,255,0.05)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${diff.color}40, transparent)`,
                  }}
                />
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${diff.color}12`,
                    border: `1px solid ${diff.color}25`,
                  }}
                >
                  {diff.icon(diff.color)}
                </div>
                <h3
                  className="text-lg font-semibold mb-3 tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {diff.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pt-40 pb-32 relative z-10 overflow-hidden">
        <svg
          className="absolute pointer-events-none inset-0 w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 0 350 Q 400 120 1200 80"
            stroke="url(#proctag)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="proctag" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
              <stop offset="40%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="70%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px w-8 bg-white/15" />
              <span className="text-white/20 text-[10px] tracking-[0.35em] uppercase font-light">
                Siguiente paso
              </span>
              <div className="h-px w-8 bg-white/15" />
            </div>
            <h2
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="block text-4xl lg:text-6xl font-bold text-white">
                ¿Listo para transformar
              </span>
              <span className="block text-4xl lg:text-6xl font-extralight text-white/35">
                tu operación?
              </span>
            </h2>
            <p className="text-white/30 text-base font-light leading-relaxed mb-12 max-w-md mx-auto">
              El diagnóstico es gratis. Sin compromiso. Solo necesitamos
              entender tu operación para mostrarte lo que es posible.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-5 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
              style={{ letterSpacing: "-0.01em" }}
            >
              Solicitar diagnóstico gratis
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
