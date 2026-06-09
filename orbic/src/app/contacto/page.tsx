import type { Metadata } from "next";
import { Heading } from "@/components/ui/Heading";
import { FAQ } from "@/components/sections/FAQ";
import { SITE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Agenda tu diagnóstico gratuito. Respondemos por WhatsApp en menos de 24 horas.",
};

const wa = whatsappUrl(
  "Hola equipo ORBIC, vi su página y me interesa un diagnóstico gratuito para mi empresa."
);

export default function ContactoPage() {
  const metodos = [
    { titulo: "WhatsApp", desc: "Escríbenos directo. Respondemos en menos de 24 horas.", action: "Abrir WhatsApp", href: wa },
    { titulo: "Email", desc: "Para propuestas formales o documentación.", action: "Enviar correo", href: `mailto:${SITE.email}` },
    { titulo: "LinkedIn", desc: "Síguenos para novedades y contenido.", action: "Ver perfil", href: SITE.linkedin },
  ];
  return (
    <>
      <section className="px-6 pt-40 pb-16 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Hablemos de <span className="text-coral">tu operación</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          El diagnóstico es gratis y sin compromiso. Solo necesitamos entender tu operación para mostrarte lo
          que es posible.
        </p>
      </section>

      <section className="relative z-10 pb-12">
        <div className="mx-auto grid max-w-4xl gap-5 px-6 md:grid-cols-3">
          {metodos.map((m) => (
            <a
              key={m.titulo}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="glass-premium card-lift block rounded-[16px] p-7"
            >
              <h3 className="text-lg font-semibold">{m.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              <p className="mt-4 text-sm font-medium text-coral">{m.action}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center md:flex-row md:gap-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Email</p>
            <p className="text-sm">{SITE.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Ubicación</p>
            <p className="text-sm">{SITE.city}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Horario</p>
            <p className="text-sm">{SITE.hours}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-28">
        <div className="mx-auto max-w-2xl px-6">
          <Heading title={<>Preguntas <span className="text-coral">frecuentes</span>.</>} />
          <div className="mt-10"><FAQ /></div>
        </div>
      </section>
    </>
  );
}
