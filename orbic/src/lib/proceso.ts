export type Paso = { numero: string; titulo: string; descripcion: string; detalle: string };
export const PASOS: Paso[] = [
  { numero: "01", titulo: "Diagnóstico", descripcion: "Mapeamos tu operación real: flujo, dolores y herramientas antes de proponer nada.", detalle: "Gratis · 1-2 sesiones · Virtual o presencial" },
  { numero: "02", titulo: "Diseño", descripcion: "Diseñamos la arquitectura: flujos de datos, automatizaciones, integraciones y prioridades.", detalle: "1 semana · Documento de arquitectura" },
  { numero: "03", titulo: "Implementación", descripcion: "Construimos, integramos y probamos. Tu sistema queda en producción con datos reales.", detalle: "2-4 semanas · Entregas incrementales" },
  { numero: "04", titulo: "Adopción", descripcion: "Capacitamos a tu equipo para que use el sistema con confianza, sin fricción.", detalle: "1 semana · Videos + sesiones en vivo" },
  { numero: "05", titulo: "Mejora", descripcion: "Monitoreamos, optimizamos y evolucionamos tu sistema según el negocio.", detalle: "Continuo · Soporte incluido" },
];
export type Diferenciador = { titulo: string; descripcion: string };
export const DIFERENCIADORES: Diferenciador[] = [
  { titulo: "Enfoque operativo", descripcion: "Primero entendemos el proceso. Luego proponemos la herramienta. Nunca al revés." },
  { titulo: "Personalización controlada", descripcion: "Soluciones a medida, pero mantenibles y escalables en el tiempo." },
  { titulo: "Soporte continuo", descripcion: "No entregamos y desaparecemos. Acompañamos tu operación mes a mes." },
];
