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
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % frases.length),
      4000,
    );
    return () => clearInterval(interval);
  }, []);
  const frase = frases[current];
  return (
    <div
      className="rounded-2xl p-10 relative overflow-hidden text-center"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${frase.color}15`,
        transition: "border-color 0.6s ease",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, ${frase.color}50, transparent)`,
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
          <p
            className="text-2xl font-light leading-snug mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span style={{ color: frase.color }}></span>
            {frase.texto}
            <span style={{ color: frase.color }}></span>
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase font-light">
            — {frase.autor}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-8">
        {frases.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background:
                i === current ? frase.color : "rgba(255,255,255,0.12)",
              transform: i === current ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const team = [
  {
    name: "Juan Camilo Hernández",
    role: "Co-Founder & Investor",
    description:
      "Lidera la operación y el crecimiento estratégico de Orbic, impulsando la expansión y el desarrollo de la empresa.",
    color: "#8B5CFF",
    image: "/assets/juan%20camilo.jpg",
    imageStyle: { objectPosition: "50% 20%" },
    center: false,
  },
  {
    name: "Santiago Barrera",
    role: "CEO & Founder",
    description:
      "Estrategia, ventas, branding y visión de producto. Conecta al equipo con los clientes y define hacia dónde va Orbic.",
    color: "#FF6B35",
    image: "/assets/santiago.jpg",
    imageStyle: { objectPosition: "30% 20%" },
    center: true,
  },
  {
    name: "Juan Pablo Luna",
    role: "CTO & Infrastructure Lead",
    description:
      "Infraestructura, automatizaciones y arquitectura técnica. Construye todo lo que hace funcionar a Orbic.",
    color: "#B388FF",
    image: "/assets/juan%20pablo.jpg",
    imageStyle: { objectPosition: "50% 50%" },
    center: false,
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
      {/* ── HERO con imagen ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/nosotros-hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.97) 30%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.35) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "550px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.92) 75%, #000000 100%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "180px",
              background: "linear-gradient(to bottom, #000000, transparent)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pt-40 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Nosotros
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                Creemos que la tecnología
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                debe trabajar para ti.
              </span>
            </h1>
            <p className="text-white/45 text-lg font-light leading-relaxed max-w-xl">
              Somos un equipo especializado en automatización empresarial.
              Transformamos procesos operativos en sistemas inteligentes que
              reducen tareas repetitivas y aumentan la eficiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CARRUSEL DE FRASES ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <FraseCarrusel />
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Curva SVG violeta */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: 0,
            width: "400px",
            height: "300px",
            opacity: 0.25,
          }}
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M 400 0 Q 200 180 0 280"
            stroke="url(#nsvt)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="nsvt" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-6xl mx-auto px-6 relative">
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
                El equipo
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                Tres perfiles.
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                Una misión.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-2xl p-8 relative overflow-hidden text-center cursor-default ${member.center ? "scale-[1.04] z-10" : ""}`}
                style={{
                  background: member.center
                    ? `rgba(139,92,255,0.04)`
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${member.color}${member.center ? "35" : "20"}`,
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${member.color}06`;
                  el.style.border = `1px solid ${member.color}45`;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 12px 50px ${member.color}20`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.border = `1px solid ${member.color}20`;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.color}60, transparent)`,
                  }}
                />

                {/* Foto grande */}
                <div
                  className={`${member.center ? "w-44 h-44" : "w-36 h-36"} rounded-full mx-auto mb-6 overflow-hidden relative flex-shrink-0`}
                  style={{
                    border: `2px solid ${member.color}${member.center ? "60" : "40"}`,
                    boxShadow: member.center
                      ? `0 0 40px ${member.color}35, 0 0 0 6px ${member.color}12`
                      : `0 0 24px ${member.color}25, 0 0 0 4px ${member.color}08`,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes={member.center ? "176px" : "144px"}
                    className="object-cover"
                    style={member.imageStyle}
                    quality={100}
                    unoptimized
                  />
                </div>

                <h3
                  className="text-xl font-semibold mb-1 tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-4 tracking-widest uppercase"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-white/45 text-sm font-light leading-relaxed">
                  {member.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: member.color,
                      boxShadow: `0 0 8px ${member.color}80`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28 relative z-10 overflow-hidden">
        {/* Halo naranja derecha */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.05), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        {/* Curva violeta */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "50%",
            height: "45%",
            opacity: 0.25,
          }}
          viewBox="0 0 500 280"
          fill="none"
        >
          <path
            d="M -20 260 Q 180 60 500 20"
            stroke="url(#nvv1)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="nvv1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="55%" stopColor="#8B5CFF" stopOpacity="1" />
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
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Cómo pensamos
              </span>
            </div>
            <h2
              className="leading-[0.95] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                Principios que
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                nos guían.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 relative overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = `${value.color}08`;
                  el.style.border = `1px solid ${value.color}22`;
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
                    background: `linear-gradient(90deg, transparent, ${value.color}40, transparent)`,
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full mb-6"
                  style={{ background: value.color, opacity: 0.7 }}
                />
                <h3
                  className="text-lg font-semibold mb-3 tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/45 text-sm font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
