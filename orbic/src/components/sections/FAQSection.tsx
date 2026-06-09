"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/data";

export default function FAQSection() {
  return (
    <section className="pt-40 pb-28" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.2em] text-[#FF6B35] uppercase mb-4 text-glow-orange">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Preguntas frecuentes sobre la implementación.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-8 glass border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-[#8E95A9] leading-relaxed">{item.answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
