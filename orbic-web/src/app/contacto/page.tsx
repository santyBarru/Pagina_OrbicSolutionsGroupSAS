"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EMAIL = "orbic@orbicopsgroup.com";

export default function ContactoPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Escríbenos directo. Respondemos en menos de 24 horas.",
      action: "Abrir WhatsApp →",
      href: "https://wa.me/573053308423?text=Hola%20equipo%20Orbic%2C%20vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20empresa.",
      color: "#22C55E",
      isEmail: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      title: "Email",
      description: "Para propuestas formales o documentación.",
      action: copied ? "¡Copiado al portapapeles ✓" : "Copiar correo →",
      href: "",
      color: "#8B5CFF",
      isEmail: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13L2 4" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      description: "Síguenos para actualizaciones y contenido.",
      action: "Ver perfil →",
      href: "https://www.linkedin.com/company/orbic-operations-group/",
      color: "#3B82F6",
      isEmail: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ── HERO con imagen ── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/proceso-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.97) 30%, rgba(0,0,0,0.78) 60%, rgba(0,0,0,0.4) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "400px",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 65%, #000000 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pt-40 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#FF6B35]" />
              <span className="text-[#FF6B35] text-[10px] tracking-[0.35em] uppercase font-light">
                Contacto
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                Hablemos de
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                tu operación.
              </span>
            </h1>
            <p className="text-white/45 text-lg font-light leading-relaxed max-w-lg">
              El diagnóstico es gratis. Sin compromiso. Solo necesitamos
              entender tu operación para mostrarte lo que es posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MÉTODOS DE CONTACTO ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => {
              const inner = (
                <>
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${method.color}50, transparent)`,
                    }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center"
                    style={{
                      background: `${method.color}10`,
                      border: `1px solid ${method.color}20`,
                      color: method.color,
                    }}
                  >
                    {method.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2 tracking-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {method.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-4">
                    {method.description}
                  </p>
                  <p
                    className="text-sm font-medium transition-colors duration-300"
                    style={{
                      color:
                        method.isEmail && copied ? "#22C55E" : method.color,
                    }}
                  >
                    {method.action}
                  </p>
                </>
              );

              const cardStyle = {
                background: "rgba(255,255,255,0.02)",
                border: `1px solid rgba(255,255,255,0.05)`,
                transition: "all 0.35s ease",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {method.isEmail ? (
                    <button
                      onClick={handleCopyEmail}
                      className="rounded-2xl p-7 relative overflow-hidden w-full text-left cursor-pointer"
                      style={cardStyle}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${method.color}06`;
                        el.style.border = `1px solid ${method.color}25`;
                        el.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.02)";
                        el.style.border = "1px solid rgba(255,255,255,0.05)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {inner}
                    </button>
                  ) : (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl p-7 relative overflow-hidden block cursor-pointer"
                      style={cardStyle}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${method.color}06`;
                        el.style.border = `1px solid ${method.color}25`;
                        el.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.02)";
                        el.style.border = "1px solid rgba(255,255,255,0.05)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA PRINCIPAL ── */}
      <section className="py-20 relative z-10 overflow-hidden">
        {/* Curva violeta */}
        <svg
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: 0,
            width: "500px",
            height: "300px",
            opacity: 0.22,
          }}
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M 500 0 Q 300 180 0 280"
            stroke="url(#cctav)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="cctav" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8B5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Curva naranja */}
        <svg
          className="absolute pointer-events-none"
          style={{
            bottom: 0,
            left: 0,
            width: "400px",
            height: "250px",
            opacity: 0.2,
          }}
          viewBox="0 0 400 250"
          fill="none"
        >
          <path
            d="M 0 250 Q 180 60 400 10"
            stroke="url(#cctao)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="cctao" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2
              className="leading-[0.95] tracking-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-4xl lg:text-5xl font-bold text-white">
                ¿Listo para
              </span>
              <span className="block text-4xl lg:text-5xl font-extralight text-white/35">
                empezar?
              </span>
            </h2>
            <p className="text-white/40 text-base font-light mb-10 leading-relaxed">
              Escríbenos por WhatsApp y agenda tu diagnóstico gratuito hoy.
            </p>
            <a
              href="https://wa.me/573053308423?text=Hola%20equipo%20Orbic%2C%20vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20empresa."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-5 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-300"
              style={{ letterSpacing: "-0.01em" }}
            >
              Abrir WhatsApp
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── INFO FOOTER ── */}
      <section className="pb-32 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          >
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-light mb-1">
                Email
              </p>
              <p className="text-white/55 text-sm font-light">{EMAIL}</p>
            </div>
            <div
              className="hidden md:block w-px h-8"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-light mb-1">
                Ubicación
              </p>
              <p className="text-white/55 text-sm font-light">
                Bogotá D.C., Colombia
              </p>
            </div>
            <div
              className="hidden md:block w-px h-8"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-light mb-1">
                Horario
              </p>
              <p className="text-white/55 text-sm font-light">
                Lun - Vie, 8AM - 6PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
