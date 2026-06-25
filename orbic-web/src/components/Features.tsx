"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function CurveViolet() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        top: 0,
        left: 0,
        width: "600px",
        height: "400px",
        opacity: 0.35,
      }}
      viewBox="0 0 600 400"
      fill="none"
    >
      <path
        d="M -50 350 Q 150 100 600 50"
        stroke="url(#gv)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M -50 370 Q 160 120 600 70"
        stroke="url(#gv2)"
        strokeWidth="0.5"
        fill="none"
      />
      <defs>
        <linearGradient id="gv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gv2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
          <stop offset="60%" stopColor="#B388FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CurveOrange() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        bottom: 0,
        right: 0,
        width: "550px",
        height: "350px",
        opacity: 0.3,
      }}
      viewBox="0 0 550 350"
      fill="none"
    >
      <path
        d="M 600 0 Q 400 200 0 320"
        stroke="url(#go)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 600 20 Q 420 210 10 340"
        stroke="url(#go2)"
        strokeWidth="0.5"
        fill="none"
      />
      <defs>
        <linearGradient id="go" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="go2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8F5F" stopOpacity="0" />
          <stop offset="55%" stopColor="#FF8F5F" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF8F5F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CurveSmallRight() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        top: "10%",
        right: 0,
        width: "400px",
        height: "300px",
        opacity: 0.25,
      }}
      viewBox="0 0 400 300"
      fill="none"
    >
      <path
        d="M 450 280 Q 250 100 50 20"
        stroke="url(#gsr)"
        strokeWidth="1"
        fill="none"
      />
      <defs>
        <linearGradient id="gsr" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
          <stop offset="60%" stopColor="#8B5CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Features() {
  return (
    <>
      {/* ── 1. EL PROBLEMA ── */}
      <section className="pt-32 pb-28 relative z-10 overflow-hidden">
        <CurveViolet />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-px w-8 bg-white/20" />
              <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-light">
                Cuando la tecnología deja de ser una ventaja
              </span>
            </div>
            <h2
              className="leading-[1.05] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-[3.5rem] font-bold text-white">
                Cada día las empresas
              </span>
              <span className="block text-4xl lg:text-[3.5rem] font-extralight text-white/40">
                invierten más en tecnología.
              </span>
            </h2>
            <p className="text-white/50 text-base font-light mb-8 leading-relaxed">
              Pero muchas siguen enfrentando los mismos problemas:
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-14">
              {[
                "Operaciones lentas.",
                "Equipos saturados.",
                "Información dispersa.",
                "Clientes esperando respuestas.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 py-4 px-5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] flex-shrink-0" />
                  <span className="text-white/60 text-sm font-light">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-white/30 text-xl font-extralight">
                La tecnología está ahí.
              </p>
              <p
                className="text-white/70 text-xl font-semibold mt-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                La eficiencia, no.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. LA FRUSTRACIÓN ── */}
      <section className="py-32 relative z-10 overflow-hidden">
        <CurveOrange />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="leading-[1.05] tracking-tight mb-12"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-[3.5rem] font-bold text-white">
                El verdadero problema
              </span>
              <span className="block text-4xl lg:text-[3.5rem] text-white/40 font-extralight">
                no es la falta de herramientas.
              </span>
            </h2>
            <div className="flex flex-col gap-5 mb-14">
              {[
                "Es tener sistemas que no hablan entre sí.",
                "Procesos manuales donde debería existir automatización.",
                "Equipos dedicando horas a tareas que podrían resolverse en segundos.",
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-white/55 text-lg font-light leading-relaxed pl-6"
                  style={{
                    borderLeft: "1px solid rgba(255,107,53,0.25)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <p className="text-white/30 text-base font-light">
                Mientras eso ocurre, el crecimiento se vuelve más lento.
              </p>
              <p className="text-white/60 text-base font-medium mt-1">
                Y cada oportunidad perdida cuesta dinero.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. EL CAMBIO ── */}
      <section className="py-32 relative z-10 overflow-hidden">
        <CurveSmallRight />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-px w-8 bg-[#8B5CFF]" />
              <span className="text-[#8B5CFF] text-[10px] tracking-[0.35em] uppercase font-light">
                El cambio
              </span>
            </div>
            <h2
              className="leading-[1.05] tracking-tight mb-10"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-[3.5rem] font-bold text-white">
                Las empresas que crecen más rápido
              </span>
              <span className="block text-4xl lg:text-[3.5rem] text-white/40 font-extralight">
                entendieron algo.
              </span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-3">
              No necesitan más plataformas.
            </p>
            <p
              className="text-white/70 text-lg font-semibold leading-relaxed mb-12"
              style={{ letterSpacing: "-0.01em" }}
            >
              Necesitan que todo funcione como un solo sistema.
            </p>
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-5 font-light">
              Cuando la información fluye correctamente:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Los equipos trabajan mejor.",
                "Los clientes reciben respuestas más rápidas.",
                "Las decisiones son más inteligentes.",
                "El negocio escala con menos esfuerzo.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 py-4 px-5 rounded-xl"
                  style={{
                    background: "rgba(139,92,255,0.05)",
                    border: "1px solid rgba(139,92,255,0.1)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CFF] flex-shrink-0" />
                  <span className="text-white/60 text-sm font-light">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. ORBIC ── */}
      <section className="py-32 relative z-10 overflow-hidden">
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: "5%",
            width: "500px",
            height: "300px",
            opacity: 0.2,
          }}
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M 500 280 Q 300 50 0 30"
            stroke="url(#gcenter)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 500 300 Q 310 65 5 50"
            stroke="url(#gcenter2)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="gcenter" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gcenter2" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF8F5F" stopOpacity="0" />
              <stop offset="60%" stopColor="#B388FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Ahí es donde entra Orbic
              </span>
            </div>
            <h2
              className="leading-[1.05] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-[3.5rem] font-bold text-white">
                No creemos que la transformación digital
              </span>
              <span className="block text-4xl lg:text-[3.5rem] text-white/40 font-extralight">
                se trate de instalar software.
              </span>
            </h2>
            <p className="text-white/50 text-xl font-light mb-2">
              Creemos que se trata de
            </p>
            <p
              className="text-white/85 text-xl font-bold mb-12"
              style={{ letterSpacing: "-0.02em" }}
            >
              eliminar fricción.
            </p>
            <p className="text-white/40 text-base font-light leading-relaxed max-w-lg">
              Porque la tecnología debería trabajar para las personas.
            </p>
            <p className="text-white/65 text-base font-medium mt-1">
              No al revés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CIERRE EMOCIONAL ── */}
      <section className="py-40 relative z-10 overflow-hidden">
        <svg
          className="absolute pointer-events-none inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 0 500 Q 400 200 1200 100"
            stroke="url(#gfinal1)"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
          />
          <path
            d="M 0 530 Q 420 230 1200 130"
            stroke="url(#gfinal2)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gfinal1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
              <stop offset="40%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gfinal2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF8F5F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-light mb-16">
              Tu empresa ya tiene potencial
            </p>
            <h2
              className="leading-[1.05] tracking-tight mb-10"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="block text-4xl lg:text-[3.5rem] font-light text-white/50">
                ¿Cuánto más podría lograr
              </span>
              <span className="block text-4xl lg:text-[3.5rem] font-bold text-white">
                si cada proceso funcionara
              </span>
              <span className="block text-4xl lg:text-[3.5rem] text-white/35 font-extralight">
                exactamente como debería?
              </span>
            </h2>
            <p className="text-white/30 text-sm font-light leading-relaxed mb-14 max-w-sm mx-auto">
              Descubre cómo Orbic puede transformar las operaciones de tu
              empresa.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
              style={{ letterSpacing: "-0.01em" }}
            >
              Agendar llamada
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
