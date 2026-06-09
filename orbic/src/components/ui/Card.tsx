import { type ReactNode } from "react";
export function Card({ children, className = "", lift = true }: { children: ReactNode; className?: string; lift?: boolean }) {
  return <div className={`glass-premium rounded-[16px] p-7 ${lift ? "card-lift" : ""} ${className}`}>{children}</div>;
}
