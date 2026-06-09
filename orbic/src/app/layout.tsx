import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: { default: "ORBIC — Más ventas, menos trabajo manual", template: "%s · ORBIC" },
  description: "ORBIC convierte el caos operativo en sistemas bajo control: automatización, CRM, IA aplicada y software a medida para empresas que quieren crecer sin romperse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased" style={{ background: "#0a0b0f", color: "#f5f7fa" }}>
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
