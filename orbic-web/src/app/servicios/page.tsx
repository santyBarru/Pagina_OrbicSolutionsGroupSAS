"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, BarChart3, Workflow, Code, Brain, Link2 } from "lucide-react";

const services = [
  {
    title: "Páginas web comerciales",
    description:
      "Landing pages, sitios corporativos y e-commerce. Diseño premium, responsive, optimizado para conversión B2B.",
    details: [
      "Diseño a medida",
      "SEO optimizado",
      "Carga ultra rápida",
      "Responsive mobile-first",
    ],
    color: "#8B5CFF",
    icon: Globe,
    stat: { value: "+65%", label: "Más conversiones vs plantillas genéricas" },
    desde: "$2.000.000 COP",
  },
  {
    title: "CRM personalizado",
    description:
      "Pipeline de ventas visual, seguimiento de clientes, alertas automáticas y reportes en tiempo real.",
    details: [
      "Pipeline visual",
      "Alertas automáticas",
      "Historial de clientes",
      "Reportes personalizados",
    ],
    color: "#B388FF",
    icon: BarChart3,
    stat: { value: "-30%", label: "Leads perdidos por falta de seguimiento" },
    desde: "$8.000.000 COP",
  },
  {
    title: "Automatización de procesos",
    description:
      "Flujos que trabajan solos. SARLAFT, KYC, WhatsApp bots, email automation, sincronización de datos.",
    details: [
      "n8n self-hosted",
      "Flujos 24/7",
      "Integraciones ilimitadas",
      "Monitoreo en vivo",
    ],
    color: "#FF6B35",
    icon: Workflow,
    stat: { value: "24/7", label: "Operación sin intervención humana" },
    desde: "$4.000.000 COP",
  },
  {
    title: "Software empresarial",
    description:
      "Dashboards internos, herramientas de gestión, portales de clientes y sistemas a medida.",
    details: [
      "Dashboards en tiempo real",
      "Roles y permisos",
      "Portales de cliente",
      "Escalable",
    ],
    color: "#FF8F5F",
    icon: Code,
    stat: { value: "×3", label: "Más visibilidad sobre la operación" },
    desde: "$8.000.000 COP",
  },
  {
    title: "IA aplicada",
    description:
      "Chatbots inteligentes, análisis de datos, asistentes virtuales y clasificación automática.",
    details: [
      "Chatbots con OpenAI",
      "Análisis predictivo",
      "Asistentes virtuales",
      "Clasificación automática",
    ],
    color: "#8B5CFF",
    icon: Brain,
    stat: { value: "-80%", label: "Tareas repetitivas eliminadas" },
    desde: "Desde $12.000.000 COP",
  },
  {
    title: "Integraciones digitales",
    description:
      "Conectamos tus sistemas existentes. APIs, webhooks, y sincronización entre plataformas sin fricción.",
    details: [
      "APIs personalizadas",
      "Webhooks en tiempo real",
      "Sincronización bidireccional",
      "Zero downtime",
    ],
    color: "#B388FF",
    icon: Link2,
    stat: { value: "0", label: "Silos de información en tu operación" },
    desde: "$4.000.000 COP",
  },
];

const PAIRS = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const bars = [75, 55, 90, 65];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl p-7 relative overflow-hidden flex flex-col cursor-default"
      style={{
        background: "rgba(23,28,49,0.7)",
        border: `1px solid ${service.color}20`,
        transition: "all 0.35s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = `0 12px 50px ${service.color}25, 0 0 0 1px ${service.color}40`;
        el.style.border = `1px solid ${service.color}50`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.border = `1px solid ${service.color}20`;
      }}
    >
      {/* Acento top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}70, transparent)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{
            background: `${service.color}12`,
            border: `1px solid ${service.color}30`,
          }}
        >
          <Icon
            size={20}
            style={{
              color: service.color,
              filter: `drop-shadow(0 0 6px ${service.color}60)`,
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {service.title}
          </h3>
          <p
            className="text-xs font-medium mt-0.5"
            style={{ color: service.color }}
          >
            {service.desde}
          </p>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-[#8E95A9] text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Mini gráfica de barras */}
      <div className="mb-5">
        <div className="flex items-end gap-1.5 h-12">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.08,
                ease: "easeOut",
              }}
              className="flex-1 rounded-sm"
              style={{
                background:
                  i === 2
                    ? `linear-gradient(to top, ${service.color}90, ${service.color}40)`
                    : `${service.color}20`,
                minHeight: "4px",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: service.color }}>
            {service.stat.value}
          </span>
          <span className="text-xs text-[#8E95A9] leading-tight">
            {service.stat.label}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.details.map((detail) => (
          <span
            key={detail}
            className="px-2.5 py-1 rounded-full text-xs"
            style={{
              color: service.color,
              background: `${service.color}10`,
              border: `1px solid ${service.color}20`,
            }}
          >
            {detail}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServiciosPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PAIRS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const pair = PAIRS[current];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
              Servicios
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              Diseñamos el sistema,{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                no piezas aisladas.
              </span>
            </h1>
            <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed">
              Seis capas para ordenar y escalar la operación de tu empresa. Cada
              servicio se adapta a tu realidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carrusel */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Dots de navegación */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {PAIRS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background:
                    i === current ? "#8B5CFF" : "rgba(255,255,255,0.15)",
                  boxShadow: i === current ? "0 0 10px #8B5CFF80" : "none",
                }}
              />
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {pair.map((serviceIndex, i) => (
                <ServiceCard
                  key={serviceIndex}
                  service={services[serviceIndex]}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navegación manual */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + PAIRS.length) % PAIRS.length)
              }
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-[#8E95A9] hover:text-white transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              ← Anterior
            </button>

            <p className="text-xs text-[#8E95A9]">
              {current + 1} / {PAIRS.length}
            </p>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % PAIRS.length)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-[#8E95A9] hover:text-white transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Siguiente →
            </button>
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
                ¿Cuál necesita tu empresa{" "}
                <span className="text-[#8B5CFF] text-glow-violet">
                  primero?
                </span>
              </h2>
              <p className="text-[#8E95A9] text-lg mb-10 max-w-xl mx-auto">
                En el diagnóstico gratuito identificamos cuál es el punto de
                mayor impacto para tu operación.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://demo.orbicopsgroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl bg-[#FF6B35] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,107,53,0.5)] hover:shadow-[0_0_80px_rgba(255,107,53,0.7)]"
                >
                  Prueba el CRM en vivo →
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid rgba(139,92,255,0.4)",
                    color: "#B388FF",
                  }}
                >
                  ¿Tienes alguna duda? →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
