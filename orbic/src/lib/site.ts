export const SITE = {
  legalName: "Orbic Operations Group SAS",
  brand: "ORBIC",
  email: "orbicoperationgroupsas@gmail.com",
  whatsappNumber: "573000000000", // PLACEHOLDER: número real pendiente
  linkedin: "https://linkedin.com/", // PLACEHOLDER
  city: "Bogotá D.C., Colombia",
  hours: "Lun - Vie, 8AM - 6PM",
  foundedYear: 2026,
  nav: [
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: "/proceso" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Planes", href: "/planes" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
  primaryCta: { label: "Solicitar diagnóstico", href: "/contacto" },
  secondaryCta: { label: "Ver demos", href: "/soluciones" },
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function mailtoUrl(subject: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
