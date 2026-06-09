import type { Icon } from "@phosphor-icons/react";
import { TrendUp, Clock, UsersThree, Lightning, ChartLineUp, HeartHalf } from "@phosphor-icons/react";

export type Servicio = {
  slug: string; resultado: string; problema: string; beneficio: string; entrega: string; icon: Icon;
};

export const SERVICIOS: Servicio[] = [
  { slug: "ventas", resultado: "Más ventas, sin perder leads", problema: "Los leads se enfrían porque nadie les da seguimiento a tiempo.", beneficio: "Cierras más con el mismo tráfico: cada oportunidad se atiende.", entrega: "CRM + lead scoring + WhatsApp commerce", icon: TrendUp },
  { slug: "manual", resultado: "Menos trabajo manual", problema: "Tu equipo pierde horas en tareas repetitivas y copiar-pegar.", beneficio: "Recuperas horas cada semana para lo que sí genera ingresos.", entrega: "Automatización de procesos (n8n), SARLAFT/KYC", icon: Clock },
  { slug: "seguimiento", resultado: "Clientes que no se caen", problema: "Las oportunidades se pierden por falta de trazabilidad.", beneficio: "Seguimiento consistente: nada se olvida, todo queda registrado.", entrega: "CRM + pipeline de ventas visual", icon: UsersThree },
  { slug: "productividad", resultado: "Más productividad", problema: "El equipo vive apagando incendios en vez de avanzar.", beneficio: "Foco en lo estratégico mientras el sistema opera 24/7.", entrega: "Dashboards + automatización continua", icon: Lightning },
  { slug: "escala", resultado: "Crece sin romper la operación", problema: "Cada vez que creces, los procesos manuales se saturan.", beneficio: "Procesos que escalan con el volumen, sin contratar el doble.", entrega: "Plataformas a medida + integraciones", icon: ChartLineUp },
  { slug: "experiencia", resultado: "Mejor experiencia del cliente", problema: "Respuestas lentas y atención despareja entre canales.", beneficio: "Clientes atendidos al instante, en todos tus canales.", entrega: "IA aplicada + bots + web premium", icon: HeartHalf },
];
