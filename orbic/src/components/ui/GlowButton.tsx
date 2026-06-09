import Link from "next/link";
import type { ReactNode } from "react";

export default function GlowButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-[#FF6B35] px-8 py-4 font-semibold text-black hover:scale-105 transition-all duration-300"
    >
      {children}
    </Link>
  );
}
