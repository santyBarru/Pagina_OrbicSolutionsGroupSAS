import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbic Operations | Automatización inteligente para empresas",
  description:
    "Centralizamos, automatizamos y optimizamos la operación comercial de las PyMEs. Web, CRM, automatización e IA aplicada para empresas que necesitan orden, velocidad y control.",
  metadataBase: new URL("https://orbicopsgroup.com"),
  openGraph: {
    title: "Orbic Operations | Automatización inteligente para empresas",
    description:
      "Centralizamos, automatizamos y optimizamos la operación comercial de las PyMEs. Web, CRM, automatización e IA aplicada.",
    url: "https://orbicopsgroup.com",
    siteName: "Orbic Operations Group SAS",
    images: [
      {
        url: "/assets/orbic-logo.png",
        width: 1200,
        height: 630,
        alt: "Orbic Operations Group SAS",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbic Operations | Automatización inteligente para empresas",
    description:
      "Centralizamos, automatizamos y optimizamos la operación comercial de las PyMEs.",
    images: ["/assets/orbic-logo.png"],
  },
  other: {
    "facebook-domain-verification": "iaqda7ei1yk2oe7fnkcdacbp2vsrvj",
  },
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
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T4XYCTK1R8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T4XYCTK1R8');
          `}
        </Script>
        <div className="stars-1" />
        <div className="stars-2" />
        <div className="grid-overlay" />
        <Navbar />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
