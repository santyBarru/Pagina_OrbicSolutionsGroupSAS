import { type ReactNode } from "react";
type Props = { title: ReactNode; subtitle?: string; eyebrow?: string; align?: "center" | "left" };
export function Heading({ title, subtitle, eyebrow, align = "center" }: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="mb-4 text-xs uppercase tracking-[0.18em] text-coral">{eyebrow}</p>}
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
