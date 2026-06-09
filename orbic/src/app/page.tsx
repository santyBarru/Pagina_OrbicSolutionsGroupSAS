import Hero from "@/components/sections/Hero";
import { DemosShowcase } from "@/components/sections/DemosShowcase";
import { ServiciosResultado } from "@/components/sections/ServiciosResultado";
import { BeneficiosCounters } from "@/components/sections/BeneficiosCounters";
import ProcesoTeaser from "@/components/sections/ProcesoTeaser";
import { PlanesTeaser } from "@/components/sections/PlanesTeaser";
import { Tecnologia } from "@/components/sections/Tecnologia";
import { Testimonios } from "@/components/sections/Testimonios";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <DemosShowcase />
      <ServiciosResultado />
      <BeneficiosCounters />
      <ProcesoTeaser />
      <PlanesTeaser />
      <Tecnologia />
      <Testimonios />
      <CTAFinal />
    </>
  );
}
