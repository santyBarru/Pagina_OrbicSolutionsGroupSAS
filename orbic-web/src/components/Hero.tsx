"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.2em] text-[#FF6B35] mb-8 uppercase text-glow-orange"
          >
            Inteligencia que mueve negocios
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-8"
          >
            Impulsamos el
            <span className="text-[#FF6B35] text-glow-orange">
              {" "}
              crecimiento{" "}
            </span>
            de empresas ambiciosas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#8E95A9] text-lg max-w-xl leading-relaxed mb-10"
          >
            Orbic conecta equipos, automatiza procesos y escala operaciones con
            tecnología construida para el futuro de tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-5"
          >
            <Link
              href="#contacto"
              className="px-7 py-4 rounded-2xl bg-[#FF6B35] text-black font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:shadow-[0_0_60px_rgba(255,107,53,0.6)]"
            >
              Explorar plataforma →
            </Link>

            <Link
              href="#proceso"
              className="text-[#8E95A9] hover:text-white transition-all duration-300"
            >
              Cómo funciona
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="hero-glow" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/orbic-logo.png"
              alt="Orbic Operations"
              width={500}
              height={500}
              className="relative z-10 drop-shadow-[0_0_80px_rgba(139,92,255,0.35)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
