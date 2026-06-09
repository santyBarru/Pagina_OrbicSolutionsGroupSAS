import Link from "next/link";
type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string };
export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]";
  const styles = variant === "primary" ? "bg-coral text-[#0a0b0f] hover:bg-coral-soft" : "border border-white/15 text-ink hover:bg-white/[0.06]";
  return <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>;
}
