"use client";

import { motion } from "framer-motion";
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
  },
];

export default function ServiciosPage() {
  return (
    <>
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

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(23,28,49,0.3)",
                    border: `1px solid ${service.color}20`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
                    }}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: `${service.color}12`,
                        border: `1px solid ${service.color}25`,
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
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-[#8E95A9] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-3 py-1 rounded-full text-xs text-[#8E95A9] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
