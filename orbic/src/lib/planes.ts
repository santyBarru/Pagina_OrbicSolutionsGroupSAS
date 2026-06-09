export type Plan = { nombre: string; para: string; precio: string; soporte: string; destacado?: boolean; incluye: string[]; demo: string };
export const PLANES: Plan[] = [
  { nombre: "Esencial", para: "Presencia digital seria + captación", precio: "desde $2.000.000 COP", soporte: "Soporte Básico $800.000/mes (opcional)", incluye: ["Landing / sitio corporativo premium", "Diseño a medida", "SEO optimizado", "Responsive", "WhatsApp / formulario"], demo: "WhatsApp Commerce Bot" },
  { nombre: "Crecimiento", para: "Ordenar y escalar la operación", destacado: true, precio: "desde $8.000.000 COP", soporte: "Soporte Empresarial $1.500.000/mes", incluye: ["Sitio empresarial", "Automatización (n8n)", "CRM corporativo", "Integraciones", "Dashboards", "Monitoreo"], demo: "SARLAFT + KYC + WhatsApp" },
  { nombre: "Corporativo", para: "Operaciones complejas / alto volumen", precio: "desde $12.000.000 COP / cotización", soporte: "Soporte Corporativo desde $3.000.000/mes", incluye: ["Plataforma a medida", "IA aplicada", "Integraciones ilimitadas", "Roles y permisos", "Soporte dedicado", "SLA"], demo: "Las 4 demos" },
];
export type Portafolio = { servicio: string; desde: string };
export const PORTAFOLIO: Portafolio[] = [
  { servicio: "Landing corporativa", desde: "$2.000.000" },
  { servicio: "Sitio web empresarial", desde: "$5.000.000" },
  { servicio: "Plataforma web a medida", desde: "$8.000.000" },
  { servicio: "Automatización empresarial", desde: "$4.000.000" },
  { servicio: "CRM corporativo", desde: "$8.000.000" },
  { servicio: "CRM + Automatización + IA", desde: "$12.000.000" },
  { servicio: "Soluciones a medida", desde: "Cotización" },
];
export type FilaComparativa = { caracteristica: string; esencial: string; crecimiento: string; corporativo: string };
export const COMPARATIVA: FilaComparativa[] = [
  { caracteristica: "Sitio web premium", esencial: "Sí", crecimiento: "Sí", corporativo: "Sí" },
  { caracteristica: "Automatización de procesos", esencial: "-", crecimiento: "Sí", corporativo: "Sí" },
  { caracteristica: "CRM", esencial: "-", crecimiento: "Sí", corporativo: "Sí" },
  { caracteristica: "IA aplicada", esencial: "-", crecimiento: "Básica", corporativo: "Avanzada" },
  { caracteristica: "Integraciones", esencial: "-", crecimiento: "Sí", corporativo: "Ilimitadas" },
  { caracteristica: "Dashboards", esencial: "-", crecimiento: "Sí", corporativo: "Sí" },
  { caracteristica: "Soporte", esencial: "Básico", crecimiento: "Empresarial", corporativo: "Dedicado + SLA" },
];
