import type { Metadata } from "next";
import { ServiciosResultado } from "@/components/sections/ServiciosResultado";
import CTAFinal from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Resultados de negocio, no features: más ventas, menos trabajo manual, mejor seguimiento, productividad y procesos que escalan.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-4 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Diseñamos el sistema, <span className="text-coral">no piezas sueltas</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Cada servicio resuelve un problema de negocio concreto. Elige por el resultado que necesitas.
        </p>
      </section>
      <ServiciosResultado withHeading={false} />
      <CTAFinal />
    </>
  );
}
