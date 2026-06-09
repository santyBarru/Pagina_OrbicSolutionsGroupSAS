import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbic Operations | Automatización inteligente para empresas",
  description:
    "Impulsamos el crecimiento de empresas ambiciosas. Automatización, CRM, software e IA aplicada.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Background layers - fixed, behind everything */}
        <div className="stars-1" />
        <div className="stars-2" />
        <div className="grid-overlay" />

        {/* Content */}
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
