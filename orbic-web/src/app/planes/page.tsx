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

const portafolio = [
  { servicio: "Landing corporativa", desde: "$2.000.000 COP" },
  { servicio: "Sitio web empresarial", desde: "$5.000.000 COP" },
  { servicio: "Plataforma web a medida", desde: "$8.000.000 COP" },
  { servicio: "Automatización empresarial", desde: "$4.000.000 COP" },
  { servicio: "CRM corporativo", desde: "$8.000.000 COP" },
  { servicio: "CRM + Automatización + IA", desde: "$12.000.000 COP" },
  { servicio: "Soluciones a medida", desde: "Cotización" },
];

export default function PlanesPage() {
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
              Planes & Precios
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              Inversión clara,{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                resultado medible.
              </span>
            </h1>
            <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed">
              Elige el plan según la etapa de tu empresa. El alcance exacto se
              define tras el diagnóstico gratuito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards de planes */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {planes.map((plan, index) => (
              <motion.div
                key={plan.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(23,28,49,0.7)",
                  border: plan.destacado
                    ? `2px solid ${plan.color}60`
                    : `1px solid ${plan.color}20`,
                  boxShadow: plan.destacado
                    ? `0 0 40px ${plan.color}20`
                    : "none",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 12px 50px ${plan.color}30, 0 0 0 1px ${plan.color}40`;
                  (e.currentTarget as HTMLElement).style.border =
                    `${plan.destacado ? "2px" : "1px"} solid ${plan.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    plan.destacado ? `0 0 40px ${plan.color}20` : "none";
                  (e.currentTarget as HTMLElement).style.border = plan.destacado
                    ? `2px solid ${plan.color}60`
                    : `1px solid ${plan.color}20`;
                }}
              >
                {/* Línea de acento arriba */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${plan.color}80, transparent)`,
                  }}
                />

                {plan.destacado && (
                  <span
                    className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium mb-4"
                    style={{
                      background: `${plan.color}15`,
                      color: plan.color,
                      border: `1px solid ${plan.color}30`,
                    }}
                  >
                    Más elegido
                  </span>
                )}

                <p className="text-xs uppercase tracking-widest text-[#8E95A9] mb-1">
                  {plan.nombre}
                </p>
                <p className="text-xs text-[#8E95A9] mb-4">{plan.para}</p>

                <p
                  className="text-2xl font-semibold tracking-tight mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.precio}
                </p>
                <p className="text-xs text-[#8E95A9] mb-6">{plan.soporte}</p>

                <ul className="flex flex-1 flex-col gap-3 text-sm text-[#8E95A9] mb-8">
                  {plan.incluye.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className="mt-0.5 shrink-0 font-bold text-sm"
                        style={{ color: plan.color }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={
                    plan.destacado
                      ? {
                          background: plan.color,
                          color: "#fff",
                          boxShadow: `0 0 30px ${plan.color}50`,
                        }
                      : {
                          border: `1px solid ${plan.color}40`,
                          color: plan.color,
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

      {/* Tabla comparativa */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-4 uppercase text-glow-orange">
              Comparativa
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Compara los{" "}
              <span className="text-[#8B5CFF] text-glow-violet">planes.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[580px] text-sm">
                <thead>
                  <tr style={{ background: "rgba(23,28,49,0.9)" }}>
                    <th className="py-4 px-6 text-left font-medium text-[#8E95A9]">
                      Característica
                    </th>
                    <th className="py-4 px-4 text-left font-medium text-[#FF6B35]">
                      Esencial
                    </th>
                    <th className="py-4 px-4 text-left font-medium text-[#8B5CFF]">
                      Crecimiento ✦
                    </th>
                    <th className="py-4 px-4 text-left font-medium text-[#B388FF]">
                      Corporativo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row, i) => (
                    <tr
                      key={row.caracteristica}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        background:
                          i % 2 === 0
                            ? "rgba(23,28,49,0.5)"
                            : "rgba(23,28,49,0.3)",
                      }}
                    >
                      <td className="py-4 px-6 text-white/80">
                        {row.caracteristica}
                      </td>
                      <td className="py-4 px-4 text-[#8E95A9]">
                        {row.esencial}
                      </td>
                      <td className="py-4 px-4 text-white font-medium">
                        {row.crecimiento}
                      </td>
                      <td className="py-4 px-4 text-[#8E95A9]">
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

      {/* Portafolio por servicio */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-4 uppercase text-glow-orange">
              À la carte
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              O contrata por{" "}
              <span className="text-[#8B5CFF] text-glow-violet">servicio.</span>
            </h2>
            <p className="text-[#8E95A9] text-base mt-4 max-w-xl mx-auto">
              Precios base por servicio. El alcance final se cotiza según tu
              operación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden grid sm:grid-cols-2 gap-[1px]"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            {portafolio.map((s, i) => (
              <div
                key={s.servicio}
                className="flex items-center justify-between px-6 py-5 transition-colors duration-200 hover:bg-[rgba(139,92,255,0.06)]"
                style={{ background: "rgba(7,9,15,0.9)" }}
              >
                <span className="text-sm text-white/80">{s.servicio}</span>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: i % 2 === 0 ? "#FF6B35" : "#8B5CFF",
                  }}
                >
                  {s.desde}
                </span>
              </div>
            ))}
          </motion.div>
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
            className="relative overflow-hidden rounded-[32px] p-16 text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(23,28,49,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 12px 60px rgba(139,92,255,0.25), 0 0 0 1px rgba(139,92,255,0.3)";
              (e.currentTarget as HTMLElement).style.border =
                "1px solid rgba(139,92,255,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.border =
                "1px solid rgba(255,255,255,0.1)";
            }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(139,92,255,0.4),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.4),transparent_40%)]" />

            <div className="relative z-10">
              <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
                Siguiente paso
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                El diagnóstico es gratis.
                <br />
                <span className="text-[#8B5CFF] text-glow-violet">
                  Sin compromiso.
                </span>
              </h2>
              <p className="text-[#8E95A9] text-lg mb-10 max-w-xl mx-auto">
                Solo necesitamos entender tu operación para mostrarte lo que es
                posible con Orbic.
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
