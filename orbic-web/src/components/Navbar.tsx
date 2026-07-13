"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "E-commerce", href: "/nfc" },
    { label: "Planes", href: "/planes" },
    { label: "Proceso", href: "/proceso" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2.5" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/orbic-logo.png"
            alt="Orbic Logo"
            width={32}
            height={32}
            className="drop-shadow-[0_0_20px_rgba(255,107,53,0.5)]"
          />
          <span className="tracking-[0.25em] text-sm font-medium">ORBIC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#8E95A9]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors ${
                pathname === link.href ? "text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://demo.orbicopsgroup.com"
            className="px-4 py-2 rounded-lg border border-[rgba(139,92,255,0.5)] text-[13px] text-[#B388FF] hover:bg-[rgba(139,92,255,0.08)] transition-all duration-300"
          >
            Probar Demo ✦
          </a>
          <Link
            href="/contacto"
            className="px-4 py-2 rounded-lg border border-[rgba(255,107,53,0.5)] text-[13px] hover:bg-[rgba(255,107,53,0.08)] transition-all duration-300"
          >
            Solicitar propuesta →
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-5 h-[2px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 pt-2 bg-black/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${pathname === link.href ? "text-white" : "text-[#8E95A9]"} hover:text-white transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://demo.orbicopsgroup.com"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-[#B388FF] border border-[rgba(139,92,255,0.4)] mt-2"
            >
              Probar Demo ✦
            </a>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B35] to-[#8B5CFF] mt-2"
            >
              Solicitar propuesta →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
