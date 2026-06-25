"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Responsable del tratamiento",
    content: `Orbic Operations Group S.A.S.\nCorreo: orbic@orbicopsgroup.com\nDomicilio: Bogotá D.C., Colombia`,
  },
  {
    title: "1. Datos que recopilamos",
    content: `Cuando usted interactúa con nosotros, especialmente a través de nuestro canal de WhatsApp, podemos recopilar:\n\n• Número de teléfono.\n• Nombre o nombre de perfil de WhatsApp.\n• El contenido de los mensajes que nos envía.\n• El servicio o información de su interés.\n• Datos que usted proporcione voluntariamente al agendar una reunión (por ejemplo, correo electrónico).`,
  },
  {
    title: "2. Finalidad del tratamiento",
    content: `Usamos sus datos para:\n\n• Atender sus consultas y responder sus mensajes.\n• Brindarle información sobre nuestros servicios.\n• Coordinar y agendar reuniones.\n• Gestionar y dar seguimiento a su solicitud como cliente potencial.\n• Mejorar nuestros productos y la calidad de la atención.`,
  },
  {
    title: "3. Canales y proveedores",
    content: `Para prestar nuestros servicios utilizamos plataformas de terceros que pueden tratar sus datos como encargados:\n\n• WhatsApp / Meta Platforms, Inc. — para la mensajería a través de la Plataforma de WhatsApp Business. El uso de WhatsApp se rige también por la Política de Privacidad de WhatsApp.\n• Calendly — para el agendamiento de reuniones.\n• Herramientas de automatización y almacenamiento seguro empleadas internamente para gestionar la información.`,
  },
  {
    title: "4. Autorización",
    content: `Al enviarnos un mensaje o proporcionarnos sus datos por cualquiera de nuestros canales, usted autoriza de manera previa, expresa e informada el tratamiento de su información personal conforme a las finalidades descritas en esta política.`,
  },
  {
    title: "5. Derechos del titular",
    content: `Como titular de sus datos, usted tiene derecho a:\n\n• Conocer, actualizar y rectificar sus datos personales.\n• Solicitar prueba de la autorización otorgada.\n• Ser informado sobre el uso que se da a sus datos.\n• Revocar la autorización y/o solicitar la supresión de sus datos cuando proceda.\n• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).\n\nPara ejercer estos derechos, escríbanos a orbic@orbicopsgroup.com. Atenderemos su solicitud en los plazos establecidos por la ley.`,
  },
  {
    title: "6. Conservación de los datos",
    content: `Conservamos sus datos únicamente durante el tiempo necesario para cumplir las finalidades descritas, o el que exija la ley. Cuando dejen de ser necesarios, serán suprimidos de forma segura.`,
  },
  {
    title: "7. Seguridad",
    content: `Adoptamos medidas técnicas, humanas y administrativas razonables para proteger sus datos contra acceso no autorizado, pérdida, alteración o divulgación.`,
  },
  {
    title: "8. Transferencias y transmisiones",
    content: `Algunos de nuestros proveedores se encuentran fuera de Colombia. En esos casos, las transferencias o transmisiones internacionales se realizan conforme a la normativa colombiana aplicable y bajo medidas que procuran un nivel adecuado de protección.`,
  },
  {
    title: "9. Cambios a esta política",
    content: `Podemos actualizar esta política en cualquier momento. La versión vigente será siempre la publicada en esta página, con su fecha de actualización.`,
  },
  {
    title: "10. Contacto",
    content: `Para cualquier consulta sobre esta política o sobre el tratamiento de sus datos, contáctenos en orbic@orbicopsgroup.com.`,
  },
];

export default function PrivacidadPage() {
  return (
    <>
      {/* ── HERO con imagen ── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/futuro.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.97) 25%, rgba(0,0,0,0.78) 60%, rgba(0,0,0,0.45) 100%)",
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
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "150px",
              background: "linear-gradient(to bottom, #000000, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#8B5CFF]" />
              <span className="text-[#8B5CFF] text-[10px] tracking-[0.35em] uppercase font-light">
                Legal
              </span>
            </div>
            <h1
              className="leading-[0.95] tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block text-5xl lg:text-7xl font-bold text-white">
                Política de
              </span>
              <span className="block text-5xl lg:text-7xl font-extralight text-white/35">
                Privacidad y Datos.
              </span>
            </h1>
            <p className="text-white/40 text-base font-light leading-relaxed max-w-lg mb-3">
              Orbic Operations Group S.A.S. · Última actualización: junio de
              2026
            </p>
            <p className="text-white/25 text-sm font-light">
              En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y
              demás normas aplicables en Colombia sobre protección de datos
              personales (Habeas Data).
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="pb-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 mb-6 relative overflow-hidden"
            style={{
              background: "rgba(139,92,255,0.05)",
              border: "1px solid rgba(139,92,255,0.15)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,255,0.5), transparent)",
              }}
            />
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Orbic Operations Group S.A.S. [Orbic, nosotros] es responsable del
              tratamiento de los datos personales que usted nos proporciona.
              Esta política describe cómo recopilamos, usamos, almacenamos y
              protegemos su información.
            </p>
          </motion.div>

          {/* Secciones */}
          <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(139,92,255,0.25), transparent)",
                  }}
                />
                <h2
                  className="text-sm font-semibold mb-3 text-white tracking-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {section.title}
                </h2>
                <p className="text-white/40 text-sm font-light leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Nota legal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 rounded-2xl p-6 text-center"
            style={{
              background: "rgba(255,107,53,0.04)",
              border: "1px solid rgba(255,107,53,0.1)",
            }}
          >
            <p className="text-white/25 text-xs font-light">
              Este documento es una plantilla base. Para mayor seguridad
              jurídica, se recomienda revisión por un abogado antes de su
              publicación definitiva.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
