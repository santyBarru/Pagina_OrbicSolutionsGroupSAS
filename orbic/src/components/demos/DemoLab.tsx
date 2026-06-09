"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { demoProducts } from "@/lib/data";
import { submitDemo } from "./useDemoSubmit";

export default function DemoLab() {
  const [selected, setSelected] = useState(demoProducts[0]?.id ?? "");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await submitDemo(selected);
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-[#FF6B35] mb-6 uppercase text-glow-orange">
            Demos interactivos
          </p>
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight">
            Prueba flujos n8n y formularios desde el servidor.
          </h1>
          <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed mt-4">
            Cada demo usa una ruta API server-side para simular la conexión con n8n.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8 glass border border-white/10">
            <label className="block text-sm font-semibold mb-3">Selecciona un demo</label>
            <div className="space-y-4">
              {demoProducts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 border ${
                    selected === item.id ? "border-[#FF6B35] bg-[#FF6B35]/10" : "border-white/10 bg-white/5"
                  }`}
                  onClick={() => setSelected(item.id)}
                >
                  <p className="font-semibold mb-1">{item.name}</p>
                  <p className="text-sm text-[#8E95A9]">{item.description}</p>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-8 w-full rounded-2xl bg-[#FF6B35] px-6 py-4 text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Cargando demo..." : "Ejecutar demo"}
            </button>
          </div>

          <div className="rounded-3xl p-8 glass border border-white/10">
            <p className="text-sm font-semibold mb-4">Resultado del demo</p>
            <div className="min-h-[320px] rounded-3xl bg-[#07090F] p-5 overflow-auto text-sm text-[#D1D5DB]">
              {error ? (
                <pre className="whitespace-pre-wrap">{error}</pre>
              ) : result ? (
                <pre className="whitespace-pre-wrap">{result}</pre>
              ) : (
                <p className="text-[#8E95A9]">Haz clic en "Ejecutar demo" para ver la respuesta.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
