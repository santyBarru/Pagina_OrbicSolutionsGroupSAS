import { COMPARATIVA } from "@/lib/planes";

export function FeatureMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="text-left text-muted">
            <th className="py-4 font-medium">Característica</th>
            <th className="py-4 font-medium">Esencial</th>
            <th className="py-4 font-medium text-coral">Crecimiento</th>
            <th className="py-4 font-medium">Corporativo</th>
          </tr>
        </thead>
        <tbody>
          {COMPARATIVA.map((row) => (
            <tr key={row.caracteristica} className="border-t border-white/[0.06]">
              <td className="py-4 text-ink/90">{row.caracteristica}</td>
              <td className="py-4 text-muted">{row.esencial}</td>
              <td className="py-4 text-ink">{row.crecimiento}</td>
              <td className="py-4 text-muted">{row.corporativo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
