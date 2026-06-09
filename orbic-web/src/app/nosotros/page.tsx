"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const frases = [
  {
    texto: "Lo que construyes con cuidado, el tiempo no puede destruirlo.",
    autor: "Filosofía Orbic",
    color: "#8B5CFF",
  },
  {
    texto: "Un sistema bien diseñado trabaja cuando tú duermes.",
    autor: "Filosofía Orbic",
    color: "#FF6B35",
  },
  {
    texto: "El secreto para avanzar es comenzar.",
    autor: "Marco Aurelio",
    color: "#B388FF",
  },
];

function FraseCarrusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % frases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const frase = frases[current];

  return (
    <div
      className="rounded-2xl p-10 relative overflow-hidden text-center"
      style={{
        background: "rgba(23,28,49,0.3)",
        border: `1px solid ${frase.color}20`,
        transition: "border-color 0.6s ease",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, ${frase.color}60, transparent)`,
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-2xl font-semibold mb-4 leading-snug">
            <span style={{ color: frase.color }}>&quot;</span>
            {frase.texto}
            <span style={{ color: frase.color }}>&quot;</span>
          </p>
          <p className="text-[#8E95A9] text-sm">— {frase.autor}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-8">
        {frases.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                i === current ? frase.color : "rgba(255,255,255,0.15)",
              boxShadow: i === current ? `0 0 8px ${frase.color}80` : "none",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const team = [
  {
    name: "Santiago Barrera",
    role: "CEO, Founder & Product Director",
    description:
      "Estrategia, ventas, branding y visión de producto. Conecta al equipo con los clientes y define hacia dónde va Orbic.",
    color: "#3B82F6",
    image: "/assets/santiago.jpg",
    imageStyle: { objectPosition: "30% 20%" },
  },
  {
    name: "Juan Camilo Hernández Díaz",
    role: "Co-Funder & Investor",
    description:
      "Lidera la operación y el crecimiento estratégico de Orbic, impulsando la expansión y el desarrollo de la empresa.",
    color: "#22C55E",
    image: "/assets/juan camilo.jpg",
    imageStyle: {
      objectPosition: "50% 20%",
      transform: "scale(1.1)",
      transformOrigin: "center center",
    },
  },
  {
    name: "Juan Pablo Luna",
    role: "CTO, Co-founder & Infrastructure Lead",
    description:
      "Infraestructura, automatizaciones y arquitectura técnica. Construye todo lo que hace funcionar a Orbic.",
    color: "#F97316",
    image: "/assets/juan pablo.jpg",
    imageStyle: {
      objectPosition: "50% 50%",
      transform: "scale(1.18) translateY(%)",
      transformOrigin: "center center",
    },
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

const valueIcons = [
  (color: string) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="1.5" />
      <path
        d="M21 21l-4.35-4.35"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 11h6M11 8v6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  (color: string) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  (color: string) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20V10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 13c0-3.87 3.13-7 7-7 0 3.87-3.13 7-7 7z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 10c0 3.87-3.13 7-7 7 0-3.87 3.13-7 7-7z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
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
              Somos un equipo especializado en automatización empresarial.
              Transformamos procesos operativos en sistemas inteligentes que
              reducen tareas repetitivas, optimizan el tiempo y aumentan la
              eficiencia de las empresas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story — carrusel de frases */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <FraseCarrusel />
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
                className="rounded-2xl p-8 relative overflow-hidden text-center cursor-default"
                style={{
                  background: "rgba(23,28,49,0.3)",
                  border: `1px solid ${member.color}25`,
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 8px 40px ${member.color}30, 0 0 0 1px ${member.color}40`;
                  el.style.border = `1px solid ${member.color}50`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.border = `1px solid ${member.color}25`;
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.color}60, transparent)`,
                  }}
                />
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
                      style={member.imageStyle}
                      quality={100}
                      unoptimized
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-3xl"
                      style={{ background: `${member.color}15` }}
                    ></div>
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
                className="rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(23,28,49,0.3)",
                  border: `1px solid ${value.color}20`,
                  boxShadow: "0 0 0 transparent",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 8px 40px ${value.color}30, 0 0 0 1px ${value.color}40`;
                  (e.currentTarget as HTMLElement).style.border =
                    `1px solid ${value.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 transparent";
                  (e.currentTarget as HTMLElement).style.border =
                    `1px solid ${value.color}20`;
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
                    border: `1px solid ${value.color}30`,
                    filter: `drop-shadow(0 0 6px ${value.color}25)`,
                  }}
                >
                  {valueIcons[index](value.color)}
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
