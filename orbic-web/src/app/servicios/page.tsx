"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, BarChart3, Workflow, Code, Brain, Link2 } from "lucide-react";

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

const flujo = [
  { label: "Web", desc: "Captas al cliente", color: "#8B5CFF" },
  {
    label: "CRM",
    desc: "Lo organizas y le haces seguimiento",
    color: "#B388FF",
  },
  {
    label: "Automatización",
    desc: "El sistema responde y avanza solo",
    color: "#FF6B35",
  },
  { label: "IA", desc: "Aprende y mejora la operación", color: "#FF8F5F" },
];

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
    sector: "Empresa con cumplimiento",
    problema:
      "Validar cada cliente nuevo toma horas y depende de una sola persona.",
    solucion:
      "Automatización del proceso de validación con alertas y trazabilidad completa.",
    usa: ["Automatización", "Software"],
    color: "#FF6B35",
  },
  {
    sector: "PyME en crecimiento",
    problema:
      "Cada área tiene su propio Excel y nadie ve el panorama completo del negocio.",
    solucion:
      "Plataforma con dashboards que centraliza la operación y conecta lo que ya usan.",
    usa: ["Software", "Integraciones"],
    color: "#B388FF",
  },
];

function CurveVioletTop() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        top: 0,
        right: 0,
        width: "500px",
        height: "350px",
        opacity: 0.3,
      }}
      viewBox="0 0 500 350"
      fill="none"
    >
      <path
        d="M 500 0 Q 300 150 0 300"
        stroke="url(#svt)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 500 20 Q 310 160 5 315"
        stroke="url(#svt2)"
        strokeWidth="0.5"
        fill="none"
      />
      <defs>
        <linearGradient id="svt" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="svt2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
          <stop offset="55%" stopColor="#B388FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CurveOrangeBottom() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        bottom: 0,
        left: 0,
        width: "500px",
        height: "300px",
        opacity: 0.25,
      }}
      viewBox="0 0 500 300"
      fill="none"
    >
      <path
        d="M 0 300 Q 200 100 500 50"
        stroke="url(#sob)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="sob" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-20 z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/servicios-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.97) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.4) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "280px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 50%, #000000 100%)",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Servicios
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                Diseñamos el sistema,
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                no piezas aisladas.
              </span>
            </h1>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl">
              Estas son las seis capas con las que ordenamos y escalamos la
              operación de tu empresa. Empiezas por donde más te duele y todo
              queda conectado bajo un mismo sistema.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── GRID DE SERVICIOS ── */}
      <section className="pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="relative flex flex-col overflow-hidden rounded-2xl p-7 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid rgba(255,255,255,0.05)`,
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${s.color}06`;
                    el.style.border = `1px solid ${s.color}22`;
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
                      background: `linear-gradient(90deg, transparent, ${s.color}40, transparent)`,
                    }}
                  />

                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: `${s.color}10`,
                      border: `1px solid ${s.color}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>

                  <h3
                    className="text-lg font-semibold mb-2 tracking-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-sm font-light leading-relaxed mb-6">
                    {s.para}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: s.color }}
                      >
                        {s.stat.value}
                      </span>
                      <span className="text-xs text-white/30 font-light leading-snug">
                        {s.stat.label}
                      </span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      className="h-px w-full"
                      style={{
                        transformOrigin: "left",
                        background: `linear-gradient(90deg, ${s.color}60, transparent)`,
                      }}
                    />
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {s.incluye.map((item) => (
                      <span
                        key={item}
                        className="rounded-full px-2.5 py-1 text-xs font-light"
                        style={{
                          color: s.color,
                          background: `${s.color}08`,
                          border: `1px solid ${s.color}15`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CÓMO ENCAJA TODO ── */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Halo violeta izquierda */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "0%",
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
            bottom: "0%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.05), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        {/* Curva violeta arriba izquierda */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "55%",
            height: "50%",
            opacity: 0.28,
          }}
          viewBox="0 0 550 300"
          fill="none"
        >
          <path
            d="M -20 280 Q 180 60 550 30"
            stroke="url(#scv1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -20 300 Q 190 75 550 48"
            stroke="url(#scv1b)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="scv1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="scv1b" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
              <stop offset="60%" stopColor="#B388FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Curva naranja abajo derecha */}
        <svg
          className="absolute pointer-events-none"
          style={{
            bottom: 0,
            right: 0,
            width: "50%",
            height: "45%",
            opacity: 0.25,
          }}
          viewBox="0 0 500 280"
          fill="none"
        >
          <path
            d="M 520 280 Q 300 100 0 40"
            stroke="url(#sco1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 520 260 Q 310 88 5 28"
            stroke="url(#sco1b)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="sco1" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sco1b" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF8F5F" stopOpacity="0" />
              <stop offset="55%" stopColor="#FF8F5F" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF8F5F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#8B5CFF]" />
                <span className="text-[#8B5CFF] text-[10px] tracking-[0.35em] uppercase font-light">
                  Cómo encaja todo
                </span>
              </div>
              <h2
                className="leading-[0.95] tracking-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                <span className="block text-4xl lg:text-5xl font-bold text-white">
                  No son servicios sueltos.
                </span>
                <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                  Son un sistema.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {flujo.map((paso, i) => (
                <motion.div
                  key={paso.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative p-6 rounded-2xl cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${paso.color}06`;
                    el.style.border = `1px solid ${paso.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.border = "1px solid rgba(255,255,255,0.05)";
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${paso.color}35, transparent)`,
                    }}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-medium tracking-widest"
                      style={{ color: paso.color }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {paso.label}
                    </span>
                  </div>
                  <p className="text-white/40 text-xs font-light leading-relaxed">
                    {paso.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CASOS DE USO ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Casos de uso
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                Si te suena familiar,
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                te podemos ayudar.
              </span>
            </h2>
            <p className="text-white/40 text-base font-light mt-6 max-w-xl leading-relaxed">
              No necesitas saber qué tecnología pedir. Cuéntanos tu problema y
              nosotros armamos la solución.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {casos.map((c, i) => (
              <motion.div
                key={c.sector}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col overflow-hidden rounded-2xl p-7 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.05)`,
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${c.color}06`;
                  el.style.border = `1px solid ${c.color}22`;
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
                    background: `linear-gradient(90deg, transparent, ${c.color}40, transparent)`,
                  }}
                />

                <p
                  className="text-xs font-medium uppercase tracking-widest mb-6"
                  style={{ color: c.color }}
                >
                  {c.sector}
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-light mb-2">
                  El problema
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {c.problema}
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-light mb-2">
                  Lo que hacemos
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {c.solucion}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {c.usa.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-2.5 py-1 text-xs font-light"
                      style={{
                        color: c.color,
                        background: `${c.color}08`,
                        border: `1px solid ${c.color}15`,
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

      {/* ── CTA ── */}
      <section className="pb-32 relative z-10 overflow-hidden">
        <svg
          className="absolute pointer-events-none inset-0 w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 0 350 Q 400 100 1200 80"
            stroke="url(#sctag1)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="sctag1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="40%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
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
                ¿Listo para ordenar
              </span>
              <span className="block text-4xl lg:text-6xl font-extralight text-white/35">
                tu operación?
              </span>
            </h2>
            <p className="text-white/35 text-base font-light leading-relaxed mb-12 max-w-md mx-auto">
              El diagnóstico es gratis. Mira los planes o escríbenos y armamos
              juntos lo que tu empresa necesita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link
                href="/planes"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl text-sm font-light transition-all duration-300 hover:text-white/80"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Ver planes y precios →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
