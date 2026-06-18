"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Escríbenos directo. Respondemos en menos de 24 horas.",
    action: "Abrir WhatsApp →",
    href: "https://wa.me/573053308423?text=Hola%20equipo%20Orbic%2C%20vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20empresa.",
    color: "#22C55E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "Para propuestas formales o documentación.",
    action: "Enviar correo →",
    href: "mailto:orbicoperationgroupsas@gmail.com",
    color: "#8B5CFF",
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
    href: "https://linkedin.com/",
    color: "#3B82F6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactoPage() {
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
              Contacto
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              Hablemos de{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                tu operación.
              </span>
            </h1>
            <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed">
              El diagnóstico es gratis. Sin compromiso. Solo necesitamos
              entender tu operación para mostrarte lo que es posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 block"
                style={{
                  background: "rgba(23,28,49,0.3)",
                  border: `1px solid ${method.color}20`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${method.color}60, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
                  style={{
                    background: `${method.color}12`,
                    border: `1px solid ${method.color}25`,
                    color: method.color,
                  }}
                >
                  {method.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-[#8E95A9] text-sm leading-relaxed mb-4">
                  {method.description}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: method.color }}
                >
                  {method.action}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-10 relative overflow-hidden text-center"
            style={{
              background: "rgba(23,28,49,0.3)",
              border: "1px solid rgba(255,107,53,0.15)",
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(139,92,255,0.3),transparent_40%)]" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.3),transparent_40%)]" />

            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,107,53,0.5), transparent)",
              }}
            />

            <div className="relative z-10">
              <p className="text-4xl font-semibold mb-4">
                ¿Listo para{" "}
                <span className="text-[#FF6B35] text-glow-orange">empezar</span>
                ?
              </p>
              <p className="text-[#8E95A9] mb-8">
                Escríbenos por WhatsApp y agenda tu diagnóstico gratuito hoy.
              </p>
              <a
                href="https://wa.me/573053308423?text=Hola%20equipo%20Orbic%2C%20vi%20su%20p%C3%A1gina%20web%20y%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20empresa."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl bg-[#FF6B35] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,107,53,0.5)] hover:shadow-[0_0_80px_rgba(255,107,53,0.7)]"
              >
                Abrir WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="pb-32">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          >
            <div>
              <p className="text-[#8E95A9] text-xs uppercase tracking-wider mb-1">
                Email
              </p>
              <p className="text-sm">orbicoperationgroupsas@gmail.com</p>
            </div>
            <div className="hidden md:block w-[1px] h-8 bg-[rgba(255,255,255,0.08)]" />
            <div>
              <p className="text-[#8E95A9] text-xs uppercase tracking-wider mb-1">
                Ubicación
              </p>
              <p className="text-sm">Bogotá D.C., Colombia</p>
            </div>
            <div className="hidden md:block w-[1px] h-8 bg-[rgba(255,255,255,0.08)]" />
            <div>
              <p className="text-[#8E95A9] text-xs uppercase tracking-wider mb-1">
                Horario
              </p>
              <p className="text-sm">24/7</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
