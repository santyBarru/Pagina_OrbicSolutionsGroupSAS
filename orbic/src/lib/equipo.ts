export type Miembro = { nombre: string; rol: string; descripcion: string; image?: string };
export const EQUIPO: Miembro[] = [
  { nombre: "Santiago Barrera", rol: "CEO, Founder & Product Director", descripcion: "Estrategia, ventas, branding y visión de producto. Conecta al equipo con los clientes y define hacia dónde va ORBIC.", image: "/assets/santiago.jpg" },
  { nombre: "Juan Pablo Luna", rol: "CTO, Co-founder & Infrastructure Lead", descripcion: "Infraestructura, automatizaciones y arquitectura técnica. Construye todo lo que hace funcionar a ORBIC." },
  { nombre: "Juan Camilo Hernández Díaz", rol: "Inversionista", descripcion: "Respalda el crecimiento de ORBIC como inversionista del proyecto." },
];
