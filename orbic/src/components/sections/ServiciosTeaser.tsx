"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ServiciosTeaser() {
  return (
    <section className="py-28" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.2em] text-[#FF6B35] uppercase mb-4 text-glow-orange">
            Servicios
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Servicios diseñados para optimizar tu operación.
          </h2>
          <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto mt-4">
            Conecta tu negocio con software, automatización y gestión inteligente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-8 glass border border-white/10"
            >
              <p className="text-sm font-semibold mb-4" style={{ color: service.color }}>
                {service.title}
              </p>
              <p className="text-[#8E95A9] leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
