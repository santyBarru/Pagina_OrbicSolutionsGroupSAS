"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  BarChart3,
  Workflow,
  Code,
  Brain,
  Link2,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* SERVICIOS — las 6 capas del sistema Orbic.                          */
/* Sin precios aquí: los precios viven SOLO en /planes para no         */
/* contradecir el mensaje "no vendemos piezas sueltas".                */
/* ------------------------------------------------------------------ */

const servicios = [
  {
    title: "Páginas web comerciales",
    para: "Tu vitrina digital pensada para convertir visitantes en clientes, no solo para verse bien.",
    incluye: [
      "Diseño a medida",
      "SEO optimizado",
      "Carga ultra rápida",
      "Responsive mobile-first",
    ],
    stat: {
      value: "+65%",
      label: "más conversiones que una plantilla genérica",
    },
    color: "#8B5CFF",
    icon: Globe,
  },
  {
    title: "CRM personalizado",
    para: "Todos tus clientes y oportunidades en un solo lugar, con seguimiento que no se te escapa.",
    incluye: [
      "Pipeline visual",
      "Alertas automáticas",
      "Historial de clientes",
      "Reportes en tiempo real",
    ],
    stat: {
      value: "-30%",
      label: "menos negocios perdidos por falta de seguimiento",
    },
    color: "#B388FF",
    icon: BarChart3,
  },
  {
    title: "Automatización de procesos",
    para: "Las tareas repetitivas las hace el sistema; tu equipo se dedica a lo que de verdad importa.",
    incluye: [
      "Flujos 24/7 (n8n)",
      "SARLAFT / KYC",
      "Bots de WhatsApp",
      "Sincronización de datos",
    ],
    stat: {
      value: "24/7",
      label: "operación corriendo sin intervención manual",
    },
    color: "#FF6B35",
    icon: Workflow,
  },
  {
    title: "Software empresarial",
    para: "Herramientas internas hechas a tu medida para cuando lo genérico ya se te quedó corto.",
    incluye: [
      "Dashboards en tiempo real",
      "Roles y permisos",
      "Portales de cliente",
      "Escalable",
    ],
    stat: {
      value: "×3",
      label: "más visibilidad y control sobre tu operación",
    },
    color: "#FF8F5F",
    icon: Code,
  },
  {
    title: "IA aplicada",
    para: "Inteligencia artificial puesta a trabajar en tu negocio: como herramienta real, no como moda.",
    incluye: [
      "Chatbots inteligentes",
      "Análisis de datos",
      "Asistentes virtuales",
      "Clasificación automática",
    ],
    stat: { value: "-80%", label: "menos tiempo en tareas repetitivas" },
    color: "#8B5CFF",
    icon: Brain,
  },
  {
    title: "Integraciones digitales",
    para: "Conectamos las herramientas que ya usas para que hablen entre sí, sin copiar y pegar.",
    incluye: [
      "APIs personalizadas",
      "Webhooks en tiempo real",
      "Sincronización bidireccional",
      "Sin downtime",
    ],
    stat: { value: "0", label: "silos de información entre tus sistemas" },
    color: "#B388FF",
    icon: Link2,
  },
];

/* Cómo se conectan las capas — el argumento "no son piezas sueltas". */
const flujo = [
  { label: "Web", desc: "Captas al cliente" },
  { label: "CRM", desc: "Lo organizas y le haces seguimiento" },
  { label: "Automatización", desc: "El sistema responde y avanza solo" },
  { label: "IA", desc: "Aprende y mejora la operación" },
];

/* Casos de uso — EJEMPLOS EDITABLES. Cambia los nombres/sectores por
   casos reales de Orbic cuando los tengan. */
const casos = [
  {
    sector: "Inmobiliaria / agencia",
    problema:
      "Los leads llegan por varios canales y se enfrían antes de que alguien los contacte.",
    solucion:
      "CRM + bot de WhatsApp que responde al instante, califica y agenda automáticamente.",
    usa: ["CRM", "Automatización"],
    color: "#8B5CFF",
  },
  {
    sector: "Empresa con cumplimiento (SARLAFT / KYC)",
    problema:
      "Validar cada cliente nuevo toma horas y depende de una sola persona.",
    solucion:
      "Automatización del proceso de validación con alertas y trazabilidad completa.",
    usa: ["Automatización", "Software"],
    color: "#FF6B35",
  },
  {
    sector: "Comercio / PyME en crecimiento",
    problema:
      "Cada área tiene su propio Excel y nadie ve el panorama completo del negocio.",
    solucion:
      "Plataforma con dashboards que centraliza la operación y conecta lo que ya usan.",
    usa: ["Software", "Integraciones"],
    color: "#B388FF",
  },
];

/* Hover por color — mismo comportamiento que el resto del sitio. */
function hoverEnter(e: React.MouseEvent<HTMLElement>, color: string) {
  const el = e.currentTarget;
  el.style.transform = "translateY(-6px)";
  el.style.boxShadow = `0 12px 50px ${color}25, 0 0 0 1px ${color}40`;
  el.style.border = `1px solid ${color}50`;
}
function hoverLeave(e: React.MouseEvent<HTMLElement>, color: string) {
  const el = e.currentTarget;
  el.style.transform = "translateY(0)";
  el.style.boxShadow = "none";
  el.style.border = `1px solid ${color}20`;
}

function ServicioCard({
  servicio,
  index,
}: {
  servicio: (typeof servicios)[number];
  index: number;
}) {
  const Icon = servicio.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onMouseEnter={(e) => hoverEnter(e, servicio.color)}
      onMouseLeave={(e) => hoverLeave(e, servicio.color)}
      className="relative flex flex-col overflow-hidden rounded-3xl p-7"
      style={{
        background: "rgba(23,28,49,0.5)",
        border: `1px solid ${servicio.color}20`,
        transition:
          "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Acento superior */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${servicio.color}70, transparent)`,
        }}
      />

      {/* Icono */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          background: `${servicio.color}12`,
          border: `1px solid ${servicio.color}25`,
        }}
      >
        <Icon
          size={22}
          style={{
            color: servicio.color,
            filter: `drop-shadow(0 0 6px ${servicio.color}60)`,
          }}
        />
      </div>

      {/* Título + para qué sirve */}
      <h3 className="mb-2 text-lg font-semibold leading-tight">
        {servicio.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-[#8E95A9]">
        {servicio.para}
      </p>

      {/* Bloque de métrica — número grande con glow + línea de acento animada.
          Reemplaza a las gráficas de barras falsas: visual, pero sin datos inventados. */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl font-bold leading-none"
            style={{
              color: servicio.color,
              textShadow: `0 0 24px ${servicio.color}40, 0 0 48px ${servicio.color}18`,
            }}
          >
            {servicio.stat.value}
          </span>
          <span className="text-xs leading-snug text-[#8E95A9]">
            {servicio.stat.label}
          </span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="mt-3 h-[3px] w-full rounded-full"
          style={{
            transformOrigin: "left",
            background: `linear-gradient(90deg, ${servicio.color}, ${servicio.color}10)`,
          }}
        />
      </div>

      {/* Qué incluye */}
      <div className="mt-auto flex flex-wrap gap-2">
        {servicio.incluye.map((item) => (
          <span
            key={item}
            className="rounded-full px-2.5 py-1 text-xs"
            style={{
              color: servicio.color,
              background: `${servicio.color}10`,
              border: `1px solid ${servicio.color}20`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------- */}
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#FF6B35] text-glow-orange">
              Servicios
            </p>
            <h1 className="mb-6 text-5xl font-semibold leading-[1.05] tracking-tight lg:text-6xl">
              Diseñamos el sistema,{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                no piezas aisladas.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8E95A9]">
              Estas son las seis capas con las que ordenamos y escalamos la
              operación de tu empresa. Empiezas por donde más te duele y todo
              queda conectado bajo un mismo sistema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* GRID DE SERVICIOS — todos visibles, sin precios */}
      {/* ---------------------------------------------------------- */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio, i) => (
              <ServicioCard
                key={servicio.title}
                servicio={servicio}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* NO SON PIEZAS SUELTAS — cómo conectan las capas */}
      {/* ---------------------------------------------------------- */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(23,28,49,0.5)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#FF6B35] text-glow-orange">
                Cómo encaja todo
              </p>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                No son servicios sueltos.{" "}
                <span className="text-[#8B5CFF] text-glow-violet">
                  Son un sistema.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {flujo.map((paso, i) => (
                <motion.div
                  key={paso.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative"
                >
                  <div
                    className="flex h-full flex-col rounded-2xl p-5 transition-colors duration-300 hover:border-[#8B5CFF]/40"
                    style={{
                      background: "rgba(7,9,15,0.6)",
                      border: "1px solid rgba(139,92,255,0.15)",
                    }}
                  >
                    <span className="mb-2 text-sm font-semibold text-[#B388FF]">
                      {paso.label}
                    </span>
                    <span className="text-sm leading-relaxed text-[#8E95A9]">
                      {paso.desc}
                    </span>
                  </div>
                  {i < flujo.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#8B5CFF]/40 lg:block"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CASOS DE USO — ejemplos editables */}
      {/* ---------------------------------------------------------- */}
      <section id="casos" className="pb-24 scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#FF6B35] text-glow-orange">
              Casos de uso
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Si te suena familiar,{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                te podemos ayudar.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#8E95A9]">
              No necesitas saber qué tecnología pedir. Cuéntanos tu problema y
              nosotros armamos la solución.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {casos.map((caso, i) => (
              <motion.div
                key={caso.sector}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={(e) => hoverEnter(e, caso.color)}
                onMouseLeave={(e) => hoverLeave(e, caso.color)}
                className="relative flex flex-col overflow-hidden rounded-3xl p-7"
                style={{
                  background: "rgba(23,28,49,0.5)",
                  border: `1px solid ${caso.color}20`,
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                }}
              >
                <div
                  className="absolute left-0 right-0 top-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${caso.color}60, transparent)`,
                  }}
                />
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: caso.color }}
                >
                  {caso.sector}
                </p>

                <p className="mb-2 text-xs uppercase tracking-wider text-[#8E95A9]/70">
                  El problema
                </p>
                <p className="mb-5 text-sm leading-relaxed text-white/80">
                  {caso.problema}
                </p>

                <p className="mb-2 text-xs uppercase tracking-wider text-[#8E95A9]/70">
                  Lo que hacemos
                </p>
                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  {caso.solucion}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {caso.usa.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-2.5 py-1 text-xs"
                      style={{
                        color: caso.color,
                        background: `${caso.color}10`,
                        border: `1px solid ${caso.color}20`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CTA — separa claramente "qué hacemos" de "cuánto cuesta" */}
      {/* ---------------------------------------------------------- */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
            className="relative overflow-hidden rounded-[32px] p-16 text-center"
            style={{
              background: "rgba(23,28,49,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 60px rgba(139,92,255,0.08)",
            }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(139,92,255,0.4),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.4),transparent_40%)]" />
            <div className="relative z-10">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#FF6B35] text-glow-orange">
                Siguiente paso
              </p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight lg:text-5xl">
                ¿Listo para ordenar{" "}
                <span className="text-[#8B5CFF] text-glow-violet">
                  tu operación?
                </span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-[#8E95A9]">
                El diagnóstico es gratis. Mira los planes y precios o escríbenos
                y armamos juntos lo que tu empresa necesita.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#FF6B35] px-8 py-5 font-semibold text-black shadow-[0_0_50px_rgba(255,107,53,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(255,107,53,0.7)]"
                >
                  Solicitar diagnóstico gratis →
                </Link>
                <Link
                  href="/planes"
                  className="inline-flex items-center gap-2 rounded-2xl px-8 py-5 font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid rgba(139,92,255,0.4)",
                    color: "#B388FF",
                  }}
                >
                  Ver planes y precios →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
