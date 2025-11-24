// src/components/LoadingOverlay.jsx
export default function LoadingOverlay({ show = false }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[120] grid place-items-center bg-slate-950/70 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative flex items-center justify-center">
        {/* วงแหวนชั้นนอก: ต้องมีส่วนโปร่งเพื่อเห็นการหมุน */}
        <div
          className="h-16 w-16 rounded-full border-4 border-sky-400/70 border-t-transparent
                     shadow-[0_0_24px_rgba(56,189,248,0.35)]
                     animate-[spin_1.2s_linear_infinite]"
        />
        {/* วงแหวนชั้นใน: หมุนสวนทาง */}
        <div
          className="absolute h-10 w-10 rounded-full border-4 border-cyan-300/80 border-b-transparent
                     shadow-[0_0_18px_rgba(103,232,249,0.35)]
                     animate-[spin_0.9s_linear_infinite_reverse]"
        />
        {/* จุดกลาง + pulse เล็กน้อย (ไม่บังคับ) */}
        <div className="absolute h-3.5 w-3.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
        <div className="absolute h-3.5 w-3.5 rounded-full bg-sky-400/30 animate-[ping_1.6s_ease-out_infinite]" />
      </div>
    </div>
  );
}
