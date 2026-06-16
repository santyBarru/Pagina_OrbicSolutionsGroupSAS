import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbic Operations | Automatización inteligente para empresas",
  description:
    "Impulsamos el crecimiento de empresas ambiciosas. Automatización, CRM, software e IA aplicada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/orbic-logo.png" type="image/png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HSCET96BZM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSCET96BZM');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="stars-1" />
        <div className="stars-2" />
        <div className="grid-overlay" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
