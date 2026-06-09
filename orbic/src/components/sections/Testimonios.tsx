import { Heading } from "@/components/ui/Heading";
export function Testimonios() {
  return (
    <section className="relative z-10 py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Heading title={<>Casos de éxito <span className="text-coral">en camino</span>.</>} subtitle="Estamos documentando los primeros resultados con nuestros clientes. Este espacio mostrará sus historias reales muy pronto." />
      </div>
    </section>
  );
}
