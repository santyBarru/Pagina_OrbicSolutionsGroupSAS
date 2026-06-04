"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Shield, Server } from "lucide-react";

const features = [
  {
    title: "Plataforma unificada",
    text: "Todas tus herramientas y datos conectados en un solo lugar.",
    color: "#8B5CFF",
    icon: Layers,
  },
  {
    title: "Automatización 24/7",
    text: "Flujos inteligentes que trabajan mientras tu equipo descansa.",
    color: "#B388FF",
    icon: Zap,
  },
  {
    title: "Seguridad empresarial",
    text: "Construido con seguridad y cumplimiento desde el núcleo.",
    color: "#FF6B35",
    icon: Shield,
  },
  {
    title: "Infraestructura escalable",
    text: "Diseñado para crecer con tu negocio sin límites.",
    color: "#FF8F5F",
    icon: Server,
  },
];

const stats = [
  { number: "4", text: "Automatizaciones activas" },
  { number: "99.9%", text: "Uptime garantizado" },
  { number: "24/7", text: "Soporte y monitoreo" },
  { number: "+38%", text: "Velocidad de respuesta" },
];

export default function Features() {
  return (
    <>
      <section className="py-32 relative z-10" id="servicios">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-semibold tracking-tight">
              Potente por
              <span className="text-[#8B5CFF] text-glow-violet"> diseño</span>.
              Simple por
              <span className="text-[#FF6B35] text-glow-orange">
                {" "}
                experiencia
              </span>
              .
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="card-3d glass rounded-3xl p-8 relative overflow-hidden cursor-default"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `${feature.color}12`,
                      border: `1px solid ${feature.color}25`,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{
                        color: feature.color,
                        filter: `drop-shadow(0 0 8px ${feature.color}60)`,
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-[#8E95A9] leading-relaxed text-sm">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-4 gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="text-center"
              >
                <h3 className="text-5xl font-semibold text-[#FF6B35] mb-4 stat-glow">
                  {stat.number}
                </h3>
                <p className="text-[#8E95A9]">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
