"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { drawDesign } from "@/components/StandNFC3D";

const StandNFC3D = dynamic(() => import("@/components/StandNFC3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white/25 text-sm font-light">
      Cargando vista 3D…
    </div>
  ),
});

// ═══ CONFIG ═══
const WHATSAPP = "573053336210"; // WhatsApp directo de ventas
const MEDIDAS = "10 × 17 cm · base trasera 3–4 cm";
const PRODUCTOS = [
  { id: "tarjeta", nombre: "Tarjeta NFC", precio: 79000, desc: "PVC con chip configurado y tu marca" },
  { id: "stand", nombre: "Stand de mesa", precio: 149000, desc: "Acrílico impresión UV + chip integrado" },
  { id: "premium", nombre: "Stand Premium", precio: 249000, desc: "Acrílico grueso, doble cara, base sólida" },
  { id: "kit", nombre: "Kit x3 puntos", precio: 399000, desc: "Caja, mesas y entrada" },
];
const FUENTES = [
  { id: "roboto", nombre: "Roboto · Google", family: "Roboto" },
  { id: "inter", nombre: "Inter", family: "Inter" },
  { id: "poppins", nombre: "Poppins", family: "Poppins" },
  { id: "montserrat", nombre: "Montserrat", family: "Montserrat" },
  { id: "playfair", nombre: "Playfair", family: "Playfair Display" },
  { id: "merriweather", nombre: "Merriweather", family: "Merriweather" },
  { id: "bebas", nombre: "Bebas Neue", family: "Bebas Neue" },
  { id: "oswald", nombre: "Oswald", family: "Oswald" },
  { id: "space", nombre: "Space Grotesk", family: "Space Grotesk" },
  { id: "pacifico", nombre: "Pacifico", family: "Pacifico" },
  { id: "dancing", nombre: "Dancing", family: "Dancing Script" },
];
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;0,900;1,700&family=Poppins:ital,wght@0,500;0,700;0,800;1,700&family=Montserrat:ital,wght@0,500;0,700;0,800;1,700&family=Playfair+Display:ital,wght@0,600;0,800;1,700&family=Merriweather:ital,wght@0,700;0,900;1,700&family=Bebas+Neue&family=Oswald:wght@500;700&family=Space+Grotesk:wght@500;700&family=Pacifico&family=Dancing+Script:wght@600;700&display=swap";
const CALIBRES = [
  { id: "4mm", nombre: "4 mm · estándar" },
  { id: "6mm", nombre: "6 mm · reforzado" },
];
const COLORES = [
  { id: "negro", nombre: "Negro", plate: "#0b0d13", texto: "#ffffff", sub: "rgba(255,255,255,0.55)" },
  { id: "blanco", nombre: "Blanco", plate: "#f2f3f6", texto: "#0b0d13", sub: "rgba(11,13,19,0.6)" },
];
const fmt = (n: number) => "$" + n.toLocaleString("es-CO");

const PASOS = [
  { n: "01", t: "Diséñalo", d: "Sube tu logo y míralo en el producto en tiempo real, antes de pagar un peso." },
  { n: "02", t: "Lo configuramos", d: "Grabamos el chip vinculado a tu perfil, encuesta o catálogo. Bloqueado y seguro." },
  { n: "03", t: "Empieza a sonar", d: "Cada cliente que acerca su celular es una calificación más para tu negocio." },
];

// Curvas de fondo — mismo lenguaje visual del resto del sitio
function CurvesBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.5 }}
    >
      <path d="M -50 750 Q 400 550 780 620 T 1500 380" stroke="url(#nfc-g1)" strokeWidth="1" />
      <path d="M -50 850 Q 500 700 900 740 T 1520 560" stroke="url(#nfc-g2)" strokeWidth="1" />
      <path d="M 1500 120 Q 1000 260 620 180 T -60 320" stroke="url(#nfc-g1)" strokeWidth="1" />
      <defs>
        <linearGradient id="nfc-g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nfc-g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function NFCPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const [qr, setQr] = useState<string | null>(null);
  const [texto, setTexto] = useState("¡Califícanos!");
  const [color, setColor] = useState(COLORES[0]);
  const [fuente, setFuente] = useState(FUENTES[0]);
  const [negrita, setNegrita] = useState(true);
  const [cursiva, setCursiva] = useState(false);
  const [sizeTitulo, setSizeTitulo] = useState(40);
  const franja: string[] = []; // diseño neutro — sin colores de marca
  const [producto, setProducto] = useState(PRODUCTOS[1]);
  const [calibre, setCalibre] = useState(CALIBRES[0]);
  const [cantidad, setCantidad] = useState(1);
  const fileRef = useRef<HTMLInputElement>(null);
  const qrRef = useRef<HTMLInputElement>(null);

  // Quita el fondo del logo automáticamente (flood fill desde los bordes):
  // elimina solo el fondo conectado a los bordes, respetando colores internos del logo
  const adaptarLogo = (dataURL: string): Promise<string> =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        // limitar tamaño para rendimiento (suficiente para impresión del stand)
        const MAX = 1600;
        const esc = Math.min(1, MAX / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * esc));
        const h = Math.max(1, Math.round(img.height * esc));
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        const x = c.getContext("2d");
        if (!x) return resolve(dataURL);
        x.drawImage(img, 0, 0, w, h);
        try {
          const d = x.getImageData(0, 0, w, h);
          const px = d.data;

          // color de fondo = promedio de las 4 esquinas
          const idx = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + w - 1) * 4];
          let r = 0, g = 0, b = 0, a = 0;
          idx.forEach((i) => { r += px[i]; g += px[i + 1]; b += px[i + 2]; a += px[i + 3]; });
          r /= 4; g /= 4; b /= 4; a /= 4;

          // si ya es transparente (PNG con alpha) o las esquinas no coinciden entre sí, no tocar
          const esquinasUniformes = a > 200 && idx.every(
            (i) => Math.abs(px[i] - r) + Math.abs(px[i + 1] - g) + Math.abs(px[i + 2] - b) < 60
          );
          if (!esquinasUniformes) return resolve(dataURL);

          const TOL = 100;
          const difFondo = (i: number) =>
            Math.abs(px[i] - r) + Math.abs(px[i + 1] - g) + Math.abs(px[i + 2] - b);

          // flood fill desde todos los píxeles del borde
          const visitado = new Uint8Array(w * h);
          const pila: number[] = [];
          for (let cx2 = 0; cx2 < w; cx2++) { pila.push(cx2); pila.push(cx2 + (h - 1) * w); }
          for (let cy2 = 0; cy2 < h; cy2++) { pila.push(cy2 * w); pila.push(cy2 * w + (w - 1)); }

          while (pila.length) {
            const pos = pila.pop() as number;
            if (visitado[pos]) continue;
            visitado[pos] = 1;
            const i = pos * 4;
            const diff = difFondo(i);
            if (diff >= TOL) continue; // llegamos al logo: frenar
            // borrar con borde suavizado
            px[i + 3] = Math.min(px[i + 3], Math.round((diff / TOL) * 110));
            const cx2 = pos % w, cy2 = (pos / w) | 0;
            if (cx2 > 0) pila.push(pos - 1);
            if (cx2 < w - 1) pila.push(pos + 1);
            if (cy2 > 0) pila.push(pos - w);
            if (cy2 < h - 1) pila.push(pos + w);
          }

          x.putImageData(d, 0, 0);
          resolve(c.toDataURL("image/png"));
        } catch {
          resolve(dataURL);
        }
      };
      img.onerror = () => resolve(dataURL);
      img.src = dataURL;
    });

  const onQr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setQr(r.result as string);
    r.readAsDataURL(f);
  };

  const onLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = async () => setLogo(await adaptarLogo(r.result as string));
    r.readAsDataURL(f);
  };


  const total = producto.precio * cantidad;
  const mensaje = encodeURIComponent(
    `Hola Orbic 👋 Quiero cotizar:\n\n▪️ Producto: ${producto.nombre}\n▪️ Medidas: ${MEDIDAS}\n▪️ Calibre: ${calibre.nombre}\n▪️ Color: ${color.nombre}\n▪️ Tipografía título: ${fuente.nombre}${negrita ? " (negrita)" : ""}${cursiva ? " (cursiva)" : ""} ${sizeTitulo}px\n▪️ Cantidad: ${cantidad}\n▪️ Texto: "${texto}"\n▪️ QR: ${qr ? "propio (adjunto la imagen)" : "por definir — Orbic lo genera"}\n▪️ Total estimado: ${fmt(total)}\n\nTe adjunto la imagen de mi diseño (se descargó al cotizar) 📎`
  );

  const descargarDiseno = async () => {
    const W = 720, DH = 1224, H = DH + 230;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    try {
      await document.fonts.load(`40px "${fuente.family}"`);
      await document.fonts.load(`800 40px "${fuente.family}"`);
      await document.fonts.load(`italic 800 40px "${fuente.family}"`);
      await document.fonts.load(`700 40px "Roboto"`);
    } catch {}

    ctx.fillStyle = "#08090d";
    ctx.fillRect(0, 0, W, H);

    const opts = { negocio: "", texto, colorId: color.id as "negro" | "blanco", fontFamily: fuente.family, fontBottom: "Roboto", negrita, cursiva, sizeTitulo, franja };
    const cargar = (src: string | null) =>
      new Promise<HTMLImageElement | null>((res) => {
        if (!src) return res(null);
        const im = new Image();
        im.onload = () => res(im);
        im.onerror = () => res(null);
        im.src = src;
      });
    const [li, qi] = await Promise.all([cargar(logo), cargar(qr)]);
    ctx.save();
    ctx.translate(0, 70);
    drawDesign(ctx, W, DH, opts, li, qi);
    ctx.restore();

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "300 24px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ORBIC · NFC — diseño solicitado", W / 2, 46);

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "21px Inter, sans-serif";
    ctx.textAlign = "left";
    [
      `Producto: ${producto.nombre}  ·  Cantidad: ${cantidad}  ·  Total estimado: ${fmt(total)}`,
      `Medidas: ${MEDIDAS}  ·  Calibre: ${calibre.nombre}`,
      `Color: ${color.nombre}  ·  Título: ${fuente.nombre}${negrita ? " negrita" : ""}${cursiva ? " cursiva" : ""} ${sizeTitulo}px`,
    ].forEach((t, i) => ctx.fillText(t, 48, DH + 118 + i * 36));

    const a = document.createElement("a");
    a.download = "diseno-orbic-nfc.png";
    a.href = cv.toDataURL("image/png");
    a.click();
  };

  // Genera el diseño como VECTOR (SVG) con tamaño físico real 100x170mm — para el proveedor
  const descargarVector = async () => {
    const W = 512, H = 870;
    const dark = color.id === "negro";
    const plate = dark ? "#141519" : "#f4f4f2";
    const tx = dark ? "#ffffff" : "#111114";
    const subC = dark ? "#9a9aa2" : "#5a5a60";
    const cx = W / 2;
    const esc = (n: number) => Math.round(n * 100) / 100;

    const cargar = (src: string | null): Promise<HTMLImageElement | null> =>
      new Promise((res) => {
        if (!src) return res(null);
        const im = new Image();
        im.onload = () => res(im);
        im.onerror = () => res(null);
        im.src = src;
      });
    const [li, qi] = await Promise.all([cargar(logo), cargar(qr)]);

    let e = "";

    // Placa
    e += `<rect x="0" y="0" width="${W}" height="${H}" rx="16" fill="${plate}"/>`;

    // Título
    const peso = negrita ? 800 : 500;
    const estilo = cursiva ? "italic" : "normal";
    const tSize = Math.max(24, Math.min(52, sizeTitulo));
    e += `<text x="${cx}" y="88" text-anchor="middle" font-family="${fuente.family}, sans-serif" font-weight="${peso}" font-style="${estilo}" font-size="${tSize}" fill="${tx}">${(texto || "¡Califícanos!").replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>`;

    // Logo (imagen incrustada, centrada y contenida)
    if (li) {
      const maxW = 345, maxH = 225, cyL = 242;
      const k = Math.min(maxW / li.width, maxH / li.height);
      const lw = esc(li.width * k), lh = esc(li.height * k);
      e += `<image x="${esc(cx - lw / 2)}" y="${esc(cyL - lh / 2)}" width="${lw}" height="${lh}" href="${logo}"/>`;
    }

    // Estrellas vectoriales
    const star = (sx: number, sy: number, rOut: number, rIn: number) => {
      let d = "";
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? rOut : rIn;
        const a = (Math.PI / 5) * i - Math.PI / 2;
        d += `${i === 0 ? "M" : "L"}${esc(sx + Math.cos(a) * r)},${esc(sy + Math.sin(a) * r)}`;
      }
      return d + "Z";
    };
    for (let i = 0; i < 5; i++) {
      e += `<path d="${star(cx + (i - 2) * 60, 396, 22, 10.1)}" fill="#F5B72E" stroke="#F5B72E" stroke-width="5" stroke-linejoin="round"/>`;
    }

    // QR
    const qs = 188, qx = cx - qs / 2, qy = 462, cell = qs / 11;
    if (qi) {
      const pad = 11;
      e += `<rect x="${qx - pad}" y="${qy - pad}" width="${qs + pad * 2}" height="${qs + pad * 2}" rx="14" fill="#ffffff"/>`;
      const k = Math.min(qs / qi.width, qs / qi.height);
      const qw = esc(qi.width * k), qh = esc(qi.height * k);
      e += `<image x="${esc(qx + (qs - qw) / 2)}" y="${esc(qy + (qs - qh) / 2)}" width="${qw}" height="${qh}" href="${qr}"/>`;
    } else {
      let seed = 7;
      for (let i = 0; i < 121; i++) {
        seed = (seed * 137 + 41) % 211;
        const gx = i % 11, gy = Math.floor(i / 11);
        const inFinder = (gx < 4 && gy < 4) || (gx > 6 && gy < 4) || (gx < 4 && gy > 6);
        if (!inFinder && seed % 3 !== 0) {
          e += `<rect x="${esc(qx + gx * cell + 1)}" y="${esc(qy + gy * cell + 1)}" width="${esc(cell - 2.5)}" height="${esc(cell - 2.5)}" rx="3" fill="${tx}"/>`;
        }
      }
      ([[0, 0], [qs - cell * 3.2, 0], [0, qs - cell * 3.2]] as const).forEach(([fx, fy]) => {
        e += `<rect x="${esc(qx + fx + 2)}" y="${esc(qy + fy + 2)}" width="${esc(cell * 3 - 4)}" height="${esc(cell * 3 - 4)}" rx="7" fill="none" stroke="${tx}" stroke-width="6"/>`;
        e += `<rect x="${esc(qx + fx + cell * 0.95)}" y="${esc(qy + fy + cell * 0.95)}" width="${esc(cell * 1.1)}" height="${esc(cell * 1.1)}" rx="3" fill="${tx}"/>`;
      });
    }
    // esquinas
    const m = 16, R = 20;
    const corner = (x: number, y: number, sx: number, sy: number) =>
      `<path d="M${x + sx * R},${y} Q${x},${y} ${x},${y + sy * R}" fill="none" stroke="${tx}" stroke-width="4" stroke-linecap="round"/>`;
    e += corner(qx - m, qy - m, 1, 1) + corner(qx + qs + m, qy - m, -1, 1) + corner(qx - m, qy + qs + m, 1, -1) + corner(qx + qs + m, qy + qs + m, -1, -1);

    // Fila inferior (Roboto, posiciones fijas)
    const py2 = H - 96;
    const arco = (ax: number, ay: number, r: number) => {
      const a0 = -Math.PI / 2.7, a1 = Math.PI / 2.7;
      return `<path d="M${esc(ax + Math.cos(a0) * r)},${esc(ay + Math.sin(a0) * r)} A${r},${r} 0 0 1 ${esc(ax + Math.cos(a1) * r)},${esc(ay + Math.sin(a1) * r)}" fill="none" stroke="${tx}" stroke-width="4.5" stroke-linecap="round"/>`;
    };
    const x0 = 64;
    e += `<text x="${x0}" y="${py2 + 9}" font-family="Roboto, sans-serif" font-weight="700" font-size="26" fill="${tx}">Acerca</text>`;
    e += arco(x0 + 106, py2, 7) + arco(x0 + 106, py2, 15.5) + arco(x0 + 106, py2, 24);
    e += `<g transform="rotate(8 ${x0 + 164} ${py2})"><rect x="${x0 + 152}" y="${py2 - 20}" width="24" height="40" rx="6" fill="none" stroke="${tx}" stroke-width="4.5"/></g>`;
    e += `<text x="${x0 + 200}" y="${py2 + 8}" font-family="Roboto, sans-serif" font-weight="600" font-size="22" fill="${subC}">o</text>`;
    e += `<text x="${x0 + 226}" y="${py2 + 9}" font-family="Roboto, sans-serif" font-weight="700" font-size="26" fill="${tx}">Escanea</text>`;
    const ex = x0 + 344;
    e += `<rect x="${ex}" y="${py2 - 22}" width="30" height="44" rx="7" fill="none" stroke="${tx}" stroke-width="4.5"/>`;
    const f0x = ex + 7, f0y = py2 - 12, fw = 16, fh = 20, cc = 5;
    e += `<path d="M${f0x},${f0y + cc} L${f0x},${f0y} L${f0x + cc},${f0y}" fill="none" stroke="${tx}" stroke-width="3" stroke-linecap="round"/>`;
    e += `<path d="M${f0x + fw - cc},${f0y} L${f0x + fw},${f0y} L${f0x + fw},${f0y + cc}" fill="none" stroke="${tx}" stroke-width="3" stroke-linecap="round"/>`;
    e += `<path d="M${f0x},${f0y + fh - cc} L${f0x},${f0y + fh} L${f0x + cc},${f0y + fh}" fill="none" stroke="${tx}" stroke-width="3" stroke-linecap="round"/>`;
    e += `<path d="M${f0x + fw - cc},${f0y + fh} L${f0x + fw},${f0y + fh} L${f0x + fw},${f0y + fh - cc}" fill="none" stroke="${tx}" stroke-width="3" stroke-linecap="round"/>`;
    e += `<line x1="${f0x + 1.5}" y1="${py2 - 2}" x2="${f0x + fw - 1.5}" y2="${py2 - 2}" stroke="${tx}" stroke-width="3" stroke-linecap="round"/>`;

    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- ORBIC NFC · Placa ${MEDIDAS} · Calibre ${calibre.nombre} · Tipografía título: ${fuente.nombre} -->\n<svg xmlns="http://www.w3.org/2000/svg" width="100mm" height="170mm" viewBox="0 0 ${W} ${H}">${e}</svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const a = document.createElement("a");
    a.download = "diseno-orbic-nfc-VECTOR.svg";
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const cotizar = async () => {
    await descargarDiseno();
    window.open(`https://wa.me/${WHATSAPP}?text=${mensaje}`, "_blank", "noopener,noreferrer");
  };

  const inputStyle = {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.02)",
  };
  const chip = (active: boolean) => ({
    background: active ? "rgba(255,255,255,0.06)" : "transparent",
    border: `1px solid ${active ? "rgba(139,92,255,0.55)" : "rgba(255,255,255,0.1)"}`,
  });

  return (
    <main className="relative min-h-screen pt-36 pb-28 overflow-hidden">
      {/* Tipografías disponibles para el diseño */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={FONTS_URL} />
      {/* ══ FONDO DEL HEADER ══ */}
      <div className="absolute top-0 left-0 right-0 h-[640px] pointer-events-none" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/nfc-hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, #000 100%)" }}
        />
      </div>

      {/* ══ HERO ══ */}
      <section className="relative max-w-7xl mx-auto px-6 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px w-8" style={{ background: "#FF6B35" }} />
          <span className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-light">
            Nuevo · Orbic NFC
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="leading-[1.0] tracking-tight mb-10 max-w-3xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          <span className="block text-5xl lg:text-[4.5rem] font-bold text-white">
            Un toque.
          </span>
          <span className="block text-5xl lg:text-[4.5rem] font-extralight text-white/30">
            Una reseña.
          </span>
          <span className="block text-5xl lg:text-[4.5rem] font-bold text-white">
            Más clientes.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/35 text-base max-w-md leading-relaxed font-light"
        >
          Tarjetas y stands con chip NFC y tu marca. Tu cliente acerca el
          celular y deja su calificación, responde tu encuesta o ve tu
          catálogo. Sin apps. Sin fricción.
        </motion.p>
      </section>

      {/* ══ CÓMO FUNCIONA ══ */}
      <section className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3">
          {PASOS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="px-8 py-10 border-t border-white/10 md:border-t-0 md:border-l first:border-l-0 first:pl-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-[11px] tracking-[0.3em] font-light mb-5" style={{ color: "rgba(255,107,53,0.55)" }}>
                {p.n}
              </div>
              <h3 className="text-white text-lg font-medium mb-3">{p.t}</h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ COTIZADOR ══ */}
      <section id="cotizador" className="relative">
        <CurvesBg />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-light">
              Diséñalo en tiempo real
            </span>
          </div>
          <h2
            className="mb-16 max-w-xl leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="block text-3xl lg:text-[2.6rem] font-bold text-white">
              Míralo con tu marca
            </span>
            <span className="block text-3xl lg:text-[2.6rem] font-extralight text-white/30">
              antes de pedirlo.
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* ── Preview 3D real (Three.js) ── */}
            <div>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "radial-gradient(ellipse at 50% 15%, rgba(139,92,255,0.07), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(255,107,53,0.05), transparent 50%), rgba(255,255,255,0.015)",
                  height: 520,
                }}
              >
                <StandNFC3D
                  logo={logo}
                  qr={qr}
                  negocio=""
                  texto={texto}
                  colorId={color.id as "negro" | "blanco"}
                  fontFamily={fuente.family}
                  fontBottom="Roboto"
                  negrita={negrita}
                  cursiva={cursiva}
                  sizeTitulo={sizeTitulo}
                  franja={franja}
                />
              </div>
              <p className="text-[11px] mt-3 text-center text-white/25 font-light">
                Gíralo · acércalo con la rueda o pellizcando · {MEDIDAS} · Mockup referencial
              </p>
            </div>

            {/* ── Configurador ── */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
                  01 · Personalización
                </div>
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="rounded-lg px-4 py-3 text-sm font-light text-white/70 hover:text-white transition-colors"
                    style={{ border: "1px dashed rgba(139,92,255,0.45)" }}
                  >
                    {logo ? "✓ Logo cargado — cambiar" : "Subir el logo de tu negocio"}
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" onChange={onLogo} className="hidden" aria-label="Subir logo" />
                  <button
                    onClick={() => qrRef.current?.click()}
                    className="rounded-lg px-4 py-3 text-sm font-light text-white/70 hover:text-white transition-colors"
                    style={{ border: "1px dashed rgba(255,255,255,0.25)" }}
                  >
                    {qr ? "✓ QR cargado — cambiar" : "Sube tu QR (Nequi, Google, el que quieras)"}
                  </button>
                  <input ref={qrRef} type="file" accept="image/*" onChange={onQr} className="hidden" aria-label="Subir QR" />
                  <input
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Texto superior"
                    maxLength={36}
                    className="rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 font-light"
                    style={inputStyle}
                  />
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/30 font-light mb-2">
                      Tipografía del título
                    </span>
                    <div className="grid grid-cols-5 gap-1.5" role="radiogroup" aria-label="Tipografía del título">
                      {FUENTES.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFuente(f)}
                          aria-pressed={fuente.id === f.id}
                          className="rounded-lg py-2 px-1 transition-colors"
                          style={chip(fuente.id === f.id)}
                          title={f.nombre}
                        >
                          <span className="block text-[15px] leading-none text-white" style={{ fontFamily: `"${f.family}", sans-serif` }}>
                            Aa
                          </span>
                          <span className="block text-[8px] mt-1 text-white/35 font-light truncate px-0.5">
                            {f.nombre}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2.5">
                      <button
                        onClick={() => setNegrita(!negrita)}
                        aria-pressed={negrita}
                        title="Negrilla"
                        className="w-9 h-9 rounded-lg font-bold text-[15px] text-white transition-colors"
                        style={chip(negrita)}
                      >
                        N
                      </button>
                      <button
                        onClick={() => setCursiva(!cursiva)}
                        aria-pressed={cursiva}
                        title="Cursiva"
                        className="w-9 h-9 rounded-lg italic font-serif text-[15px] text-white transition-colors"
                        style={chip(cursiva)}
                      >
                        C
                      </button>
                      <div
                        className="flex items-center rounded-lg overflow-hidden ml-1"
                        style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                      >
                        <button
                          onClick={() => setSizeTitulo(Math.max(24, sizeTitulo - 2))}
                          aria-label="Reducir tamaño del título"
                          className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm"
                        >
                          A−
                        </button>
                        <span className="px-2.5 text-white/70 text-[13px] font-light">{sizeTitulo}px</span>
                        <button
                          onClick={() => setSizeTitulo(Math.min(52, sizeTitulo + 2))}
                          aria-label="Aumentar tamaño del título"
                          className="px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm"
                        >
                          A+
                        </button>
                      </div>
                      <span className="text-[10px] text-white/25 font-light ml-1">tamaño del título</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex gap-2" role="radiogroup" aria-label="Color">
                      {COLORES.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setColor(c)}
                          aria-pressed={color.id === c.id}
                          className="flex-1 rounded-lg py-2.5 text-[13px] font-light text-white transition-colors"
                          style={chip(color.id === c.id)}
                        >
                          {c.nombre}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2" role="radiogroup" aria-label="Calibre">
                      {CALIBRES.map((k) => (
                        <button
                          key={k.id}
                          onClick={() => setCalibre(k)}
                          aria-pressed={calibre.id === k.id}
                          className="flex-1 rounded-lg py-2.5 text-[13px] font-light text-white transition-colors"
                          style={chip(calibre.id === k.id)}
                        >
                          {k.nombre.split(" ·")[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
                  02 · Producto
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCTOS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setProducto(p)}
                      className="text-left rounded-lg px-4 py-3.5 transition-colors"
                      style={chip(producto.id === p.id)}
                    >
                      <div className="text-sm font-medium text-white">{p.nombre}</div>
                      <div className="text-[11px] leading-snug text-white/30 mt-1 font-light">{p.desc}</div>
                      <div className="text-sm text-white/70 mt-2">{fmt(p.precio)}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-light mb-4">
                  03 · Cantidad
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center rounded-lg overflow-hidden"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <button
                      onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                      aria-label="Menos"
                      className="px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-5 text-white font-light">{cantidad}</span>
                    <button
                      onClick={() => setCantidad(cantidad + 1)}
                      aria-label="Más"
                      className="px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-light">
                      Total estimado
                    </div>
                    <div className="text-2xl font-semibold text-white mt-0.5">{fmt(total)}</div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={cotizar}
                  className="w-full rounded-lg py-4 text-center text-[15px] font-medium text-white transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(120deg, #8B5CFF, #6d3fd6)",
                    boxShadow: "0 10px 40px rgba(139,92,255,0.25)",
                  }}
                >
                  Cotizar por WhatsApp
                </button>
                <button
              onClick={descargarVector}
              className="w-full rounded-lg py-3 text-center text-[13px] font-light text-white/50 hover:text-white transition-colors mt-2"
              style={{ border: "1px dashed rgba(255,255,255,0.18)" }}
            >
              ⬇ Descargar vector (SVG) para producción — 100×170 mm
            </button>
            <p className="text-[11px] text-center mt-3 text-white/25 font-light leading-relaxed">
                  Al cotizar se descarga la imagen de tu diseño — adjúntala en
                  el chat que se abre. El precio final se confirma en la
                  cotización e incluye la configuración del chip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}