"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Se muestra una vez por visita (sessionStorage). Para relanzar campañas, cambiar la clave.
const STORAGE_KEY = "orbic-nfc-promo-v2";

export default function NFCAnnouncement() {
  const [visible, setVisible] = useState(false);

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
          style={{
            background: "rgba(2,3,6,0.8)",
            backdropFilter: "blur(10px)",
          }}
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Nuevo: Orbic NFC"
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{
              background: "#07080d",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 30px 100px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* hairline superior */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(139,92,255,0.6) 40%, rgba(255,107,53,0.45) 60%, transparent)",
              }}
            />

            {/* curva de fondo, mismo lenguaje del sitio */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 460"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M -40 380 Q 260 240 480 300 T 860 180"
                stroke="url(#nfcm-g)"
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="nfcm-g" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CFF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8B5CFF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <button
              onClick={dismiss}
              aria-label="Cerrar"
              className="absolute top-5 right-5 z-10 text-white/30 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative grid md:grid-cols-[260px_1fr]">
              {/* Mini stand — monocromo, franja violeta como único acento */}
              <div
                className="hidden md:flex items-end justify-center pb-10 pt-12"
                style={{ perspective: 700 }}
              >
                <div
                  className="relative"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-16deg) rotateX(-2deg)",
                    width: 128,
                    height: 210,
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 rounded-lg flex flex-col items-center px-3 pt-4 pb-3"
                    style={{
                      height: 210,
                      background: "#0b0d13",
                      border: "1px solid rgba(255,255,255,0.14)",
                      transformOrigin: "bottom center",
                      transform: "rotateX(-13deg)",
                      boxShadow: "0 26px 44px -14px rgba(0,0,0,0.8)",
                    }}
                  >
                    <span className="text-[7px] text-white/50 tracking-wide">
                      Nos encantaría tu opinión
                    </span>
                    <div
                      className="w-9 h-9 rounded-full mt-2.5 mb-1.5"
                      style={{ border: "1px dashed rgba(139,92,255,0.5)" }}
                    />
                    <span className="text-[9px] text-white font-medium">
                      Tu Negocio
                    </span>
                    <span
                      className="text-[8px] tracking-[0.15em]"
                      style={{ color: "#E8B84B" }}
                    >
                      ★★★★★
                    </span>
                    <div className="w-12 h-12 mt-2 rounded-sm bg-white p-1">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg,#0b0d13 0 2px,transparent 2px 4px), repeating-linear-gradient(90deg,#0b0d13 0 2px,transparent 2px 4px)",
                          opacity: 0.85,
                        }}
                      />
                    </div>
                    <span className="text-[6.5px] text-white/40 mt-auto tracking-wide">
                      Acerca · o escanea
                    </span>
                    <div
                      className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #8B5CFF 40%, #FF6B35 60%, transparent)",
                      }}
                    />
                  </div>
                  <div
                    className="absolute rounded-sm"
                    style={{
                      width: 82,
                      height: 46,
                      left: 23,
                      bottom: -2,
                      background: "#0b0d13",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transformOrigin: "bottom center",
                      transform: "rotateX(84deg) translateZ(-22px)",
                      filter: "brightness(0.7)",
                    }}
                  />
                  <div
                    className="absolute rounded-[50%]"
                    style={{
                      width: 130,
                      height: 18,
                      left: -1,
                      bottom: -12,
                      background:
                        "radial-gradient(ellipse, rgba(0,0,0,0.6), transparent 70%)",
                    }}
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-9 md:p-11">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8" style={{ background: "#FF6B35" }} />
                  <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-light">
                    Nuevo · Orbic NFC
                  </span>
                </div>

                <h2
                  className="leading-[1.05] mb-6"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  <span className="block text-[1.7rem] md:text-[2rem] font-bold text-white">
                    Tus clientes te califican
                  </span>
                  <span className="block text-[1.7rem] md:text-[2rem] font-extralight text-white/35">
                    con solo acercar el celular.
                  </span>
                </h2>

                <p className="text-white/35 text-sm leading-relaxed mb-9 font-light max-w-sm">
                  Tarjetas y stands NFC con tu marca. Un toque y tu cliente deja
                  su reseña, responde tu encuesta o ve tu catálogo. Sin apps.
                  Sin fricción.
                </p>

                <div className="flex items-center gap-6">
                  <Link
                    href="/nfc"
                    onClick={dismiss}
                    className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:brightness-110"
                    style={{
                      background: "linear-gradient(120deg, #8B5CFF, #6d3fd6)",
                      boxShadow: "0 10px 36px rgba(139,92,255,0.25)",
                    }}
                  >
                    Ver el producto →
                  </Link>
                  <button
                    onClick={dismiss}
                    className="text-sm text-white/30 hover:text-white/60 transition-colors font-light"
                  >
                    Ahora no
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
