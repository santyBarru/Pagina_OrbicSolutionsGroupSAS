import { STACK } from "@/lib/tecnologia";
export function Tecnologia() {
  const items = [...STACK, ...STACK];
  return (
    <section className="relative z-10 overflow-hidden py-20">
      <p className="mb-8 text-center text-sm text-muted">El ecosistema con el que construimos</p>
      <div className="relative flex">
        <div className="marquee-track flex shrink-0 items-center gap-14 pr-14">
          {items.map((t, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={`https://cdn.simpleicons.org/${t.slug}/8e95a9`} alt={t.name} width={28} height={28} className="h-7 w-auto opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
}
