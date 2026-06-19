"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  // Initialize visibility from localStorage to avoid setting state inside useEffect
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem("orbic-cookies-accepted");
    } catch (e) {
      // If access to localStorage fails (e.g., during SSR), default to false
      return false;
    }
  });

  const handleAccept = () => {
    localStorage.setItem("orbic-cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] px-4 pb-4"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="max-w-4xl mx-auto rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4"
        style={{
          background: "rgba(15,17,35,0.97)",
          border: "1px solid rgba(139,92,255,0.25)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 -4px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,255,0.1)",
          pointerEvents: "all",
        }}
      >
        {/* Línea acento */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,255,0.6), rgba(255,107,53,0.4), transparent)",
          }}
        />

        {/* Icono */}
        <div
          className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{
            background: "rgba(139,92,255,0.12)",
            border: "1px solid rgba(139,92,255,0.25)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              stroke="#8B5CFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="#8B5CFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Texto */}
        <div className="flex-1">
          <p className="text-white text-sm font-medium mb-1">
            Usamos cookies y tratamos tus datos personales
          </p>
          <p className="text-[#8E95A9] text-xs leading-relaxed">
            Al continuar navegando, aceptas nuestra{" "}
            <Link
              href="/privacidad"
              className="text-[#8B5CFF] hover:underline underline-offset-2"
            >
              Política de Privacidad y Tratamiento de Datos
            </Link>{" "}
            conforme a la Ley 1581 de 2012 (Habeas Data). Usamos cookies para
            mejorar tu experiencia y analizar el tráfico del sitio.
          </p>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/privacidad"
            className="text-xs text-[#8E95A9] hover:text-white transition-colors"
          >
            Más info
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8B5CFF, #6B3FE0)",
              boxShadow: "0 0 20px rgba(139,92,255,0.4)",
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
