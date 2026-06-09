import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2.5">
            <Image src="/assets/orbic-logo.png" alt={SITE.brand} width={28} height={28} />
            <span className="text-sm font-semibold tracking-wide">{SITE.legalName.toUpperCase()}</span>
          </Link>
          <p className="max-w-[280px] text-sm leading-relaxed text-muted">Convertimos el caos operativo en sistemas bajo control: más ventas, menos trabajo manual y procesos que escalan.</p>
        </div>
        <nav className="flex flex-col gap-3">
          <p className="mb-1 text-sm font-semibold">Navegación</p>
          {SITE.nav.map((l) => (<Link key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">{l.label}</Link>))}
        </nav>
        <div className="flex flex-col gap-3">
          <p className="mb-1 text-sm font-semibold">Contacto</p>
          <a href={`mailto:${SITE.email}`} className="text-sm text-muted hover:text-ink">{SITE.email}</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-ink">LinkedIn</a>
          <span className="text-sm text-muted">{SITE.city}</span>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/[0.06] px-6 pt-6 text-center">
        <p className="text-xs text-muted/60">© {SITE.foundedYear} {SITE.legalName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
