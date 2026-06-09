export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-flex items-center rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-medium text-coral ${className}`}>{children}</span>;
}
