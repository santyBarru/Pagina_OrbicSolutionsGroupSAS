"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const planes = [
  {
    nombre: "Esencial",
    para: "Presencia digital seria + captación",
    precio: "desde $2.000.000 COP",
    soporte: "Soporte Básico $800.000/mes (opcional)",
    color: "#FF6B35",
    destacado: false,
    incluye: [
      "Landing / sitio corporativo premium",
      "Diseño a medida",
      "SEO optimizado",
      "Responsive",
      "WhatsApp / formulario de contacto",
    ],
  },
  {
    nombre: "Crecimiento",
    para: "Ordenar y escalar la operación",
    precio: "desde $8.000.000 COP",
    soporte: "Soporte Empresarial $1.500.000/mes",
    color: "#8B5CFF",
    destacado: true,
    incluye: [
      "Sitio empresarial completo",
      "Automatización de flujos (n8n)",
      "CRM corporativo integrado",
      "Integraciones con herramientas externas",
      "Dashboards y reportes",
      "Monitoreo continuo",
    ],
  },
  {
    nombre: "Corporativo",
    para: "Operaciones complejas / alto volumen",
    precio: "desde $12.000.000 COP",
    soporte: "Soporte Corporativo desde $3.000.000/mes",
    color: "#B388FF",
    destacado: false,
    incluye: [
      "Plataforma web a medida",
      "IA aplicada al negocio",
      "Integraciones ilimitadas",
      "Roles, permisos y seguridad avanzada",
      "Soporte dedicado con SLA",
      "Las 4 demos del ecosistema Orbic",
    ],
  },
];

const comparativa = [
  {
    caracteristica: "Sitio web premium",
    esencial: "✓",
    crecimiento: "✓",
    corporativo: "✓",
  },
  {
    caracteristica: "Automatización de procesos",
    esencial: "—",
    crecimiento: "✓",
    corporativo: "✓",
  },
  {
    caracteristica: "CRM corporativo",
    esencial: "—",
    crecimiento: "✓",
    corporativo: "✓",
  },
  {
    caracteristica: "IA aplicada",
    esencial: "—",
    crecimiento: "Básica",
    corporativo: "Avanzada",
  },
  {
    caracteristica: "Integraciones",
    esencial: "—",
    crecimiento: "✓",
    corporativo: "Ilimitadas",
  },
  {
    caracteristica: "Dashboards",
    esencial: "—",
    crecimiento: "✓",
    corporativo: "✓",
  },
  {
    caracteristica: "Soporte",
    esencial: "Básico",
    crecimiento: "Empresarial",
    corporativo: "Dedicado + SLA",
  },
];

const marketing = [
  {
    nombre: "Start",
    precio: "$360.000",
    color: "#FF6B35",
    destacado: false,
    filas: [
      { label: "Publicaciones / mes", valor: "4" },
      { label: "Reels / mes", valor: "3" },
      { label: "Manejo de redes", valor: "Sí" },
      { label: "Diseño y copies", valor: "Sí" },
      { label: "Reporte mensual", valor: "Básico" },
    ],
  },
  {
    nombre: "Growth",
    precio: "$540.000",
    color: "#8B5CFF",
    destacado: true,
    filas: [
      { label: "Publicaciones / mes", valor: "6" },
      { label: "Reels / mes", valor: "5" },
      { label: "Manejo de redes", valor: "Sí" },
      { label: "Diseño y copies", valor: "Sí" },
      { label: "Reporte mensual", valor: "Completo" },
    ],
  },
  {
    nombre: "Pro",
    precio: "$740.000",
    color: "#B388FF",
    destacado: false,
    filas: [
      { label: "Publicaciones / mes", valor: "8" },
      { label: "Reels / mes", valor: "7" },
      { label: "Manejo de redes", valor: "Sí" },
      { label: "Diseño y copies", valor: "Sí" },
      { label: "Reporte mensual", valor: "Completo + estrategia" },
    ],
  },
];

const portafolio = [
  {
    servicio: "Landing corporativa",
    desde: "$2.000.000 COP",
    color: "#FF6B35",
  },
  {
    servicio: "Sitio web empresarial",
    desde: "$5.000.000 COP",
    color: "#8B5CFF",
  },
  {
    servicio: "Plataforma web a medida",
    desde: "$8.000.000 COP",
    color: "#FF6B35",
  },
  {
    servicio: "Automatización empresarial",
    desde: "$4.000.000 COP",
    color: "#8B5CFF",
  },
  { servicio: "CRM corporativo", desde: "$8.000.000 COP", color: "#FF6B35" },
  {
    servicio: "CRM + Automatización + IA",
    desde: "$12.000.000 COP",
    color: "#8B5CFF",
  },
  { servicio: "Soluciones a medida", desde: "Cotización", color: "#B388FF" },
];

function CurveTopRight() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        top: 0,
        right: 0,
        width: "500px",
        height: "350px",
        opacity: 0.28,
      }}
      viewBox="0 0 500 350"
      fill="none"
    >
      <path
        d="M 500 0 Q 300 180 0 320"
        stroke="url(#pctr)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 500 25 Q 315 195 5 335"
        stroke="url(#pctr2)"
        strokeWidth="0.5"
        fill="none"
      />
      <defs>
        <linearGradient id="pctr" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pctr2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
          <stop offset="55%" stopColor="#B388FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CurveBottomLeft() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        bottom: 0,
        left: 0,
        width: "450px",
        height: "280px",
        opacity: 0.22,
      }}
      viewBox="0 0 450 280"
      fill="none"
    >
      <path
        d="M 0 280 Q 180 80 450 20"
        stroke="url(#pcbl)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="pcbl" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function PlanesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-40 pb-20 relative z-10 overflow-hidden">
        <CurveTopRight />
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Planes & Precios
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                Inversión clara,
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                resultado medible.
              </span>
            </h1>
            <p className="text-white/45 text-lg font-light leading-relaxed max-w-xl">
              Elige el plan según la etapa de tu empresa. Los valores son
              aproximados y el precio final se define en la cotización.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PLANES ── */}
      <section className="pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {planes.map((plan, i) => (
              <motion.div
                key={plan.nombre}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl p-8 cursor-default"
                style={{
                  background: plan.destacado
                    ? `${plan.color}08`
                    : "rgba(255,255,255,0.02)",
                  border: plan.destacado
                    ? `1px solid ${plan.color}30`
                    : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${plan.color}08`;
                  el.style.border = `1px solid ${plan.color}30`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = plan.destacado
                    ? `${plan.color}08`
                    : "rgba(255,255,255,0.02)";
                  el.style.border = plan.destacado
                    ? `1px solid ${plan.color}30`
                    : "1px solid rgba(255,255,255,0.05)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${plan.color}${plan.destacado ? "60" : "30"}, transparent)`,
                  }}
                />

                {plan.destacado && (
                  <span
                    className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium mb-5"
                    style={{
                      background: `${plan.color}12`,
                      color: plan.color,
                      border: `1px solid ${plan.color}25`,
                    }}
                  >
                    Más elegido
                  </span>
                )}

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-light mb-1">
                  {plan.nombre}
                </p>
                <p className="text-xs text-white/35 font-light mb-5">
                  {plan.para}
                </p>

                <p
                  className="text-2xl font-bold tracking-tight mb-1"
                  style={{ color: plan.color, letterSpacing: "-0.02em" }}
                >
                  {plan.precio}
                </p>
                <p className="text-xs text-white/25 font-light mb-7">
                  {plan.soporte}
                </p>

                <ul className="flex flex-1 flex-col gap-3 mb-8">
                  {plan.incluye.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 shrink-0 text-xs"
                        style={{ color: plan.color }}
                      >
                        ✓
                      </span>
                      <span className="text-white/55 font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
                  style={
                    plan.destacado
                      ? {
                          background: plan.color,
                          color: "#000",
                          fontWeight: 600,
                        }
                      : {
                          border: `1px solid rgba(255,255,255,0.1)`,
                          color: "rgba(255,255,255,0.5)",
                        }
                  }
                >
                  Solicitar diagnóstico →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿NO SABES CUÁL? ── */}
      <section className="pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl px-8 py-7"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(139,92,255,0.12)",
            }}
          >
            <div>
              <p className="text-base font-semibold text-white mb-1">
                ¿No sabes cuál plan necesitas?
              </p>
              <p className="text-sm text-white/35 font-light">
                Mira casos de uso reales y descubre cuál se parece a tu empresa.
              </p>
            </div>
            <Link
              href="/servicios#casos"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-light transition-all duration-300 hover:text-white/70"
              style={{
                border: "1px solid rgba(139,92,255,0.2)",
                color: "rgba(139,92,255,0.7)",
              }}
            >
              Ver casos de uso →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARATIVA ── */}
      <section className="pb-24 relative z-10 overflow-hidden">
        <CurveBottomLeft />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#8B5CFF]" />
              <span className="text-[#8B5CFF] text-[10px] tracking-[0.35em] uppercase font-light">
                Comparativa
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                Compara los
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                planes.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[580px] text-sm">
                <thead>
                  <tr
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <th className="py-4 px-6 text-left text-xs font-light text-white/25 tracking-widest uppercase">
                      Característica
                    </th>
                    <th
                      className="py-4 px-4 text-left text-xs font-medium"
                      style={{ color: "#FF6B35" }}
                    >
                      Esencial
                    </th>
                    <th
                      className="py-4 px-4 text-left text-xs font-medium"
                      style={{ color: "#8B5CFF" }}
                    >
                      Crecimiento ✦
                    </th>
                    <th
                      className="py-4 px-4 text-left text-xs font-medium"
                      style={{ color: "#B388FF" }}
                    >
                      Corporativo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row, i) => (
                    <tr
                      key={row.caracteristica}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.03)",
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.015)"
                            : "transparent",
                      }}
                    >
                      <td className="py-4 px-6 text-white/50 font-light">
                        {row.caracteristica}
                      </td>
                      <td className="py-4 px-4 text-white/35 font-light">
                        {row.esencial}
                      </td>
                      <td className="py-4 px-4 text-white/70 font-medium">
                        {row.crecimiento}
                      </td>
                      <td className="py-4 px-4 text-white/35 font-light">
                        {row.corporativo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARKETING Y REDES (FASE 1) ── */}
      <section className="pb-24 relative z-10 overflow-hidden">
        {/* Halo ambiental violeta */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "5%",
            left: "-8%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(139,92,255,0.06), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Marketing y Redes
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                Construimos tu marca,
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                luego potenciamos resultados.
              </span>
            </h2>
            <p className="text-white/45 max-w-2xl leading-relaxed font-light">
              La publicidad funciona mejor cuando existe una marca sólida
              detrás. Primero fortalecemos tu presencia digital con contenido y
              branding. Tú solo grabas el material siguiendo nuestras
              recomendaciones; nosotros nos encargamos de la edición, diseño,
              organización y publicación.
            </p>
          </motion.div>

          {/* Grid 3 planes de marketing */}
          <div className="grid md:grid-cols-3 gap-4">
            {marketing.map((plan, i) => (
              <motion.div
                key={plan.nombre}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl p-8 cursor-default"
                style={{
                  background: plan.destacado
                    ? `${plan.color}08`
                    : "rgba(255,255,255,0.02)",
                  border: plan.destacado
                    ? `1px solid ${plan.color}30`
                    : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${plan.color}08`;
                  el.style.border = `1px solid ${plan.color}30`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = plan.destacado
                    ? `${plan.color}08`
                    : "rgba(255,255,255,0.02)";
                  el.style.border = plan.destacado
                    ? `1px solid ${plan.color}30`
                    : "1px solid rgba(255,255,255,0.05)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${plan.color}${plan.destacado ? "60" : "30"}, transparent)`,
                  }}
                />

                {plan.destacado && (
                  <span
                    className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium mb-5"
                    style={{
                      background: `${plan.color}12`,
                      color: plan.color,
                      border: `1px solid ${plan.color}25`,
                    }}
                  >
                    Recomendado
                  </span>
                )}

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-light mb-1">
                  Orbic
                </p>
                <p className="text-lg font-bold text-white mb-5">
                  {plan.nombre}
                </p>

                <p
                  className="text-3xl font-bold tracking-tight mb-1"
                  style={{ color: plan.color, letterSpacing: "-0.02em" }}
                >
                  {plan.precio}
                </p>
                <p className="text-xs text-white/25 font-light mb-7">
                  COP / mes
                </p>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.filas.map((fila) => (
                    <li
                      key={fila.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/50 font-light">
                        {fila.label}
                      </span>
                      <span className="text-white font-semibold text-right">
                        {fila.valor}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Nota compromiso mínimo */}
          <p className="text-white/25 text-xs font-light mt-8 text-center max-w-2xl mx-auto">
            Precios mensuales. Los resultados en redes se consolidan a partir
            del tercer mes, por lo que recomendamos un compromiso mínimo de 3
            meses.
          </p>

          {/* Mención breve Fase 2 · Meta Ads */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10 mt-12 relative overflow-hidden"
            style={{
              background: "#FF6B3506",
              border: "1px solid #FF6B3518",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #FF6B3535, transparent)",
              }}
            />
            <div className="md:flex md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                  Fase 2 · Opcional
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-3">
                  Publicidad digital con Meta Ads
                </h3>
                <p className="text-white/45 font-light leading-relaxed">
                  Cuando tu marca ya tiene contenido de calidad e imagen
                  profesional, aceleramos el crecimiento con campañas en
                  Facebook e Instagram. Configuramos y administramos todo el
                  ecosistema publicitario de Meta: estrategia, segmentación,
                  remarketing y optimización constante.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:text-right shrink-0">
                <span className="text-white/25 text-xs font-light block">
                  Gestión de campañas desde
                </span>
                <span className="text-3xl font-bold text-white">$300.000</span>
                <span className="text-white/25 text-sm font-light"> / mes</span>
                <span className="text-white/25 text-[11px] font-light block mt-2 max-w-[220px] md:ml-auto">
                  No incluye el presupuesto publicitario, que se paga
                  directamente a Meta.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PORTAFOLIO À LA CARTE ── */}
      <section className="pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                À la carte
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                O contrata por
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                servicio.
              </span>
            </h2>
            <p className="text-white/35 text-base font-light mt-5 max-w-md leading-relaxed">
              Precios base por servicio. El alcance final se cotiza según tu
              operación.
            </p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {portafolio.map((s, i) => (
              <motion.div
                key={s.servicio}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-between py-6 cursor-default group"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs text-white/15 font-light tracking-widest w-6">
                    0{i + 1}
                  </span>
                  <span className="text-base text-white/55 font-light group-hover:text-white/80 transition-colors duration-300">
                    {s.servicio}
                  </span>
                </div>
                <span
                  className="text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-300"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.desde}
                </span>
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
            d="M 0 380 Q 400 150 1200 100"
            stroke="url(#pctag)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="pctag" x1="0" y1="0" x2="1" y2="0">
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
                El diagnóstico es gratis.
              </span>
              <span className="block text-4xl lg:text-6xl font-extralight text-white/35">
                Sin compromiso.
              </span>
            </h2>
            <p className="text-white/30 text-base font-light leading-relaxed mb-12 max-w-md mx-auto">
              Solo necesitamos entender tu operación para mostrarte lo que es
              posible con Orbic.
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
