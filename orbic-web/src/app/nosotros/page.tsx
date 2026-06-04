"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Santiago Barrera",
    role: "CEO, Founder & Product Director",
    description:
      "Estrategia, ventas, branding y visión de producto. Conecta al equipo con los clientes y define hacia dónde va Orbic.",
    color: "#3B82F6",
    image: "/assets/santiago.jpg",
  },
  {
    name: "Juan Camilo Hernández",
    role: "COO, Co-founder & Legal Ops Lead",
    description:
      "Formalización legal, contratos, impuestos y desarrollo web. El puente entre la operación y la ley.",
    color: "#22C55E",
    emoji: "🟢",
  },
  {
    name: "Juan Pablo Luna",
    role: "CTO, Co-founder & Infrastructure Lead",
    description:
      "Infraestructura, automatizaciones y arquitectura técnica. Construye todo lo que hace funcionar a Orbic.",
    color: "#F97316",
    emoji: "🟠",
  },
];

const values = [
  {
    title: "Entendemos antes de proponer",
    description:
      "No vendemos soluciones genéricas. Primero mapeamos tu operación real para construir algo que de verdad funcione.",
    color: "#FF6B35",
  },
  {
    title: "Tecnología que trabaja sola",
    description:
      "Automatizamos lo repetitivo para que tu equipo se enfoque en lo que importa. 24/7, sin supervisión.",
    color: "#8B5CFF",
  },
  {
    title: "Crecemos contigo",
    description:
      "No entregamos y desaparecemos. Acompañamos la evolución de tu operación mes a mes, año a año.",
    color: "#B388FF",
  },
];

export default function NosotrosPage() {
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
              Nosotros
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              Creemos que la tecnología debe{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                trabajar para ti.
              </span>
            </h1>
            <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed">
              Somos un equipo colombiano que automatiza operaciones
              empresariales. Nacimos de una idea simple: las empresas pierden
              tiempo en tareas que una máquina puede hacer mejor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-10 relative overflow-hidden text-center"
            style={{
              background: "rgba(23,28,49,0.3)",
              border: "1px solid rgba(139,92,255,0.15)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,255,0.5), transparent)",
              }}
            />

            <p className="text-2xl font-semibold mb-4">
              <span className="text-[#FF6B35]">&quot;</span>
              No intentes mil cosas a ver si una te da.
              <br />
              Aférrate a una sola y haz que funcione.
              <span className="text-[#FF6B35]">&quot;</span>
            </p>
            <p className="text-[#8E95A9] text-sm">
              — Filosofía del equipo Orbic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              El equipo
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Tres perfiles.{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                Una misión.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl p-8 relative overflow-hidden text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(23,28,49,0.3)",
                  border: `1px solid ${member.color}25`,
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.color}60, transparent)`,
                  }}
                />

                {/* Avatar placeholder */}
                <div
                  className="w-50 h-50 rounded-full mx-auto mb-6 overflow-hidden relative"
                  style={{
                    border: `2px solid ${member.color}40`,
                    boxShadow: `0 0 20px ${member.color}25`,
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                      style={{ objectPosition: "60% 20%" }}
                      quality={100}
                      unoptimized
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-3xl"
                      style={{ background: `${member.color}15` }}
                    >
                      {member.emoji}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p
                  className="text-xs font-medium mb-4"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-[#8E95A9] text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Color dot */}
                <div className="mt-6 flex justify-center">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: member.color,
                      boxShadow: `0 0 8px ${member.color}80, 0 0 20px ${member.color}40`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Cómo pensamos
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Principios que{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                nos guían.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(23,28,49,0.3)",
                  border: `1px solid ${value.color}20`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${value.color}60, transparent)`,
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: `${value.color}12`,
                    border: `1px solid ${value.color}25`,
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: value.color,
                      boxShadow: `0 0 8px ${value.color}80, 0 0 20px ${value.color}40`,
                      animation: "glow-pulse 3s ease-in-out infinite",
                    }}
                  />
                </div>

                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-[#8E95A9] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <p className="text-4xl font-bold text-[#FF6B35] stat-glow">3</p>
              <p className="text-[#8E95A9] text-sm mt-1">Cofundadores</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#8B5CFF] text-glow-violet">
                4
              </p>
              <p className="text-[#8E95A9] text-sm mt-1">Productos activos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#FF6B35] stat-glow">
                24/7
              </p>
              <p className="text-[#8E95A9] text-sm mt-1">Operación continua</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#8B5CFF] text-glow-violet">
                2026
              </p>
              <p className="text-[#8E95A9] text-sm mt-1">Año de fundación</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
