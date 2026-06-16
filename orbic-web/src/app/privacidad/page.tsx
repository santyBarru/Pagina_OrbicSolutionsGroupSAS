"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Identificación del Responsable del Tratamiento",
    content: `ORBIC OPERATIONS GROUP SAS, sociedad constituida bajo las leyes de la República de Colombia, con domicilio principal en Bogotá D.C., correo electrónico: orbicoperationgroupsas@gmail.com, es el Responsable del Tratamiento de los datos personales recolectados a través del sitio web orbicopsgroup.com y sus canales digitales asociados.`,
  },
  {
    title: "2. Marco Legal",
    content: `La presente Política de Tratamiento de Datos Personales se rige por la Ley 1581 de 2012 (Ley de Protección de Datos Personales o Habeas Data), el Decreto 1377 de 2013, y demás normas concordantes vigentes en Colombia. ORBIC OPERATIONS GROUP SAS garantiza el cumplimiento estricto de la normativa aplicable en materia de protección de datos personales.`,
  },
  {
    title: "3. Datos Personales Recolectados",
    content: `ORBIC OPERATIONS GROUP SAS podrá recolectar los siguientes datos personales:

• Datos de identificación: nombre completo, número de documento de identidad.
• Datos de contacto: correo electrónico, número de teléfono, WhatsApp.
• Datos de la empresa: nombre de la empresa, cargo, sector económico.
• Datos de uso: información sobre la interacción con nuestro sitio web y formularios de contacto.

No recolectamos datos sensibles en el sentido del artículo 5 de la Ley 1581 de 2012.`,
  },
  {
    title: "4. Finalidad del Tratamiento",
    content: `Los datos personales recolectados serán utilizados exclusivamente para las siguientes finalidades:

• Atender solicitudes de diagnóstico, cotización o información sobre nuestros servicios.
• Gestionar la relación comercial con clientes y prospectos.
• Enviar comunicaciones comerciales y de marketing relacionadas con los servicios de ORBIC (con previo consentimiento).
• Cumplir obligaciones legales, contractuales y regulatorias.
• Mejorar la experiencia del usuario en nuestro sitio web.`,
  },
  {
    title: "5. Derechos del Titular",
    content: `De conformidad con la Ley 1581 de 2012, el titular de los datos personales tiene los siguientes derechos:

• Conocer, actualizar y rectificar sus datos personales.
• Solicitar prueba de la autorización otorgada para el tratamiento.
• Ser informado sobre el uso que se ha dado a sus datos personales.
• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).
• Revocar la autorización y/o solicitar la supresión de sus datos.
• Acceder de forma gratuita a sus datos personales.

Para ejercer sus derechos, puede contactarnos a: orbicoperationgroupsas@gmail.com`,
  },
  {
    title: "6. Autorización del Titular",
    content: `El tratamiento de datos personales por parte de ORBIC OPERATIONS GROUP SAS se realizará únicamente con la autorización previa, expresa e informada del titular, salvo en los casos en que la ley no exija dicha autorización. Al diligenciar cualquier formulario de contacto en nuestro sitio web, el titular otorga su consentimiento para el tratamiento de sus datos conforme a la presente política.`,
  },
  {
    title: "7. Seguridad de la Información",
    content: `ORBIC OPERATIONS GROUP SAS adoptará las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los datos personales, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. Los datos son almacenados en infraestructura cloud con altos estándares de seguridad y acceso restringido al personal autorizado.`,
  },
  {
    title: "8. Transferencia y Transmisión de Datos",
    content: `ORBIC OPERATIONS GROUP SAS no venderá, cederá ni transferirá datos personales a terceros sin autorización del titular, salvo en los siguientes casos:

• Cuando sea necesario para la prestación del servicio contratado.
• Por obligación legal o requerimiento de autoridad competente.
• A proveedores de servicios tecnológicos que actúen como encargados del tratamiento, bajo estrictas obligaciones de confidencialidad.`,
  },
  {
    title: "9. Vigencia de la Política y de las Bases de Datos",
    content: `La presente Política de Tratamiento de Datos Personales rige a partir del 1 de junio de 2026 y permanecerá vigente mientras ORBIC OPERATIONS GROUP SAS desarrolle sus actividades comerciales. Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas y las obligaciones legales aplicables.`,
  },
  {
    title: "10. Contacto y Peticiones, Quejas y Reclamos (PQR)",
    content: `Para cualquier consulta, petición, queja o reclamo relacionada con el tratamiento de sus datos personales, puede contactarnos a través de:

• Correo electrónico: orbicoperationgroupsas@gmail.com
• WhatsApp: +57 305 330 8423
• Sitio web: orbicopsgroup.com/contacto

ORBIC OPERATIONS GROUP SAS dará respuesta a las solicitudes en los términos establecidos por la Ley 1581 de 2012 (máximo 15 días hábiles).`,
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
            <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight mb-6">
              Política de{" "}
              <span className="text-[#8B5CFF] text-glow-violet">
                Tratamiento de Datos
              </span>
            </h1>
            <p className="text-[#8E95A9] text-base max-w-xl mx-auto leading-relaxed">
              Conforme a la Ley 1581 de 2012 — Habeas Data Colombia
            </p>
            <p className="text-[#8E95A9]/60 text-sm mt-3">
              Vigente desde el 1 de junio de 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "rgba(23,28,49,0.4)",
                  border: "1px solid rgba(139,92,255,0.12)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(139,92,255,0.4), transparent)",
                  }}
                />
                <h2 className="text-lg font-semibold mb-4 text-white">
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
            <p className="text-[#8E95A9] text-sm">
              <span className="text-white font-medium">
                ORBIC OPERATIONS GROUP SAS
              </span>{" "}
              — Bogotá D.C., Colombia.{" "}
              <a
                href="mailto:orbicoperationgroupsas@gmail.com"
                className="text-[#FF6B35] hover:underline"
              >
                orbicoperationgroupsas@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
