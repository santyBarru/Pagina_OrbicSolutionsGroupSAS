import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <p className="text-sm tracking-[0.2em] text-[#FF6B35] uppercase mb-4 text-glow-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-[#8E95A9] text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
