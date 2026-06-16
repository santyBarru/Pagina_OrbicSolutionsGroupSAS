import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/assets/orbic-logo.png"
                alt="Orbic Logo"
                width={28}
                height={28}
              />
              <span className="text-white font-bold text-sm tracking-wide">
                ORBIC OPERATIONS GROUP SAS
              </span>
            </Link>
            <p className="text-gray text-sm leading-relaxed max-w-[280px]">
              Web, CRM, automatización, software e IA aplicada para empresas que
              necesitan orden, velocidad y control.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm mb-1">Navegación</p>
            <Link
              href="/servicios"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/proceso"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="/nosotros"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm mb-1">Contacto</p>
            <a
              href="mailto:orbicoperationgroupsas@gmail.com"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              orbicoperationgroupsas@gmail.com
            </a>
            <a
              href="https://wa.me/573053308423"
              target="_blank"
              rel="noreferrer"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray text-sm hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/[0.04] text-center">
          <p className="text-gray/50 text-xs">
            © {new Date().getFullYear()} Orbic Operations Group SAS. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
