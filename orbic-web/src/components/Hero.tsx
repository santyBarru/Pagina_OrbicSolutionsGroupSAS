"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-right"
        />
        {/* Overlay lateral */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #000000 30%, rgba(7,8,9,0.88) 55%, rgba(7,8,9,0.4) 100%)",
          }}
        />
        {/* Difuminado inferior largo y suave */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "350px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 60%, #000000 100%)",
          }}
        />
        {/* Difuminado lateral izquierdo extra para no cortar */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "200px",
            background:
              "linear-gradient(to right, #000000 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-36 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-8 bg-[#FF6B35]" />
          <span className="text-[#FF6B35] text-xs tracking-[0.3em] uppercase font-medium">
            Intelligence that moves business
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl lg:text-[5rem] font-light leading-[0.95] tracking-tight mb-8 max-w-2xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          Tu operación,
          <br />
          <span style={{ color: "rgba(255,255,255,0.18)", fontWeight: 200 }}>
            finalmente
          </span>
          <br />
          <span style={{ fontWeight: 600 }}>bajo control.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/35 text-base max-w-sm leading-relaxed mb-12 font-light"
        >
          Las PyMEs pierden hasta un 30% de sus ventas por procesos manuales.
          Orbic lo resuelve con automatización que trabaja sola.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-6 mb-24"
        >
          <Link
            href="/contacto"
            className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
          >
            Diagnóstico gratuito
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
          <Link
            href="/servicios"
            className="text-white/25 text-sm hover:text-white/60 transition-colors duration-300"
          >
            Ver servicios
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center gap-12 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { n: "−30%", label: "Leads perdidos" },
            { n: "2×", label: "Velocidad de cierre" },
            { n: "24/7", label: "Operación continua" },
            { n: "< 2 sem", label: "Tiempo de entrega" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}
            >
              <p className="text-xl font-semibold text-white mb-1 tracking-tight">
                {s.n}
              </p>
              <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-light">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
