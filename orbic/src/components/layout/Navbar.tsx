"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { SITE } from "@/lib/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const HOME_SECTIONS = ["servicios", "soluciones-teaser", "proceso", "planes", "contacto-cta"];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));
  const activeSection = useScrollSpy(pathname === "/" ? HOME_SECTIONS : []);

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50" data-active-section={activeSection}>
      <motion.div
        animate={{ paddingTop: scrolled ? 10 : 18, paddingBottom: scrolled ? 10 : 18 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-colors duration-300 ${scrolled ? "glass-premium border-b border-white/[0.06]" : ""}`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/assets/orbic-logo.png" alt={SITE.brand} width={28} height={28} />
          <span className="text-sm font-semibold tracking-[0.22em]">{SITE.brand}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {SITE.nav.map((l) => (
            <Link key={l.href} href={l.href} className={`transition-colors hover:text-ink ${isActive(l.href) ? "text-ink" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={SITE.secondaryCta.href} className="text-sm text-muted transition-colors hover:text-ink">{SITE.secondaryCta.label}</Link>
          <Link href={SITE.primaryCta.href} className="rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-[#0a0b0f] transition-colors hover:bg-coral-soft active:scale-[0.97]">{SITE.primaryCta.label}</Link>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="p-2 md:hidden" aria-label="Menú" aria-expanded={open}>
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </motion.div>

      {open && (
        <div className="glass-premium border-t border-white/[0.06] px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4">
            {SITE.nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`text-sm ${isActive(l.href) ? "text-ink" : "text-muted"} hover:text-ink`}>{l.label}</Link>
            ))}
            <Link href={SITE.primaryCta.href} onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-coral px-5 py-3 text-sm font-medium text-[#0a0b0f]">{SITE.primaryCta.label}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
