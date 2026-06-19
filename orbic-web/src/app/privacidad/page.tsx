"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Responsable del tratamiento",
    content: `Orbic Operations Group S.A.S.\nCorreo: orbicoperationgroupsas@gmail.com\nDomicilio: Bogotá D.C., Colombia`,
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
    content: `Como titular de sus datos, usted tiene derecho a:\n\n• Conocer, actualizar y rectificar sus datos personales.\n• Solicitar prueba de la autorización otorgada.\n• Ser informado sobre el uso que se da a sus datos.\n• Revocar la autorización y/o solicitar la supresión de sus datos cuando proceda.\n• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).\n\nPara ejercer estos derechos, escríbanos a orbicoperationgroupsas@gmail.com. Atenderemos su solicitud en los plazos establecidos por la ley.`,
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
    content: `Para cualquier consulta sobre esta política o sobre el tratamiento de sus datos, contáctenos en orbicoperationgroupsas@gmail.com.`,
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight mb-4">
              Política de{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                Privacidad y Datos
              </span>
            </h1>
            <p className="text-[#8E95A9] text-base max-w-xl mx-auto leading-relaxed">
              Orbic Operations Group S.A.S. · Última actualización: junio de
              2026
            </p>
            <p className="text-[#8E95A9]/60 text-sm mt-3">
              En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y
              demás normas aplicables en Colombia sobre protección de datos
              personales (Habeas Data).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 mb-6"
            style={{
              background: "rgba(139,92,255,0.08)",
              border: "1px solid rgba(139,92,255,0.2)",
            }}
          >
            <p className="text-[#8E95A9] text-sm leading-relaxed">
              Orbic Operations Group S.A.S. (&quot;Orbic&quot;, &quot;nosotros&quot;) es responsable
              del tratamiento de los datos personales que usted nos proporciona.
              Esta política describe cómo recopilamos, usamos, almacenamos y
              protegemos su información.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "rgba(23,28,49,0.4)",
                  border: "1px solid rgba(139,92,255,0.10)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(139,92,255,0.35), transparent)",
                  }}
                />
                <h2 className="text-base font-semibold mb-3 text-white">
                  {section.title}
                </h2>
                <p className="text-[#8E95A9] text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-2xl p-6 text-center"
            style={{
              background: "rgba(23,28,49,0.3)",
              border: "1px solid rgba(255,107,53,0.15)",
            }}
          >
            <p className="text-[#8E95A9] text-xs">
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
