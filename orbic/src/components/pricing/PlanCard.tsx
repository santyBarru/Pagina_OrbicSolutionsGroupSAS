import { Button } from "@/components/ui/Button";
import type { Plan } from "@/lib/planes";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-[16px] p-8 ${
        plan.destacado ? "ring-2 ring-coral/50" : "border border-white/[0.06]"
      }`}
    >
      {plan.destacado && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-coral/10 px-3 py-1 text-xs font-medium text-coral ring-1 ring-coral/30">
          Más elegido
        </span>
      )}
      <h3 className="text-sm uppercase tracking-wide text-muted">{plan.nombre}</h3>
      <p className="mt-1 text-xs text-muted">{plan.para}</p>
      <p className="mt-4 text-2xl font-semibold tracking-tight">{plan.precio}</p>
      <p className="mt-1 text-xs text-muted">{plan.soporte}</p>
      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-muted">
        {plan.incluye.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 font-semibold text-coral">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-muted/70">Demo: {plan.demo}</p>
      <Button href="/contacto" variant={plan.destacado ? "primary" : "ghost"} className="mt-6">
        Solicitar diagnóstico
      </Button>
    </div>
  );
}
