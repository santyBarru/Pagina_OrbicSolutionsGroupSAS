export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[15%] -left-[5%] h-[600px] w-[600px] rounded-full opacity-60 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,255,0.16), transparent 65%)" }} />
      <div className="absolute -bottom-[10%] -right-[5%] h-[500px] w-[500px] rounded-full opacity-50 blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.10), transparent 65%)" }} />
      <div className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 25%, black 15%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 25%, black 15%, transparent 70%)",
        }} />
    </div>
  );
}
