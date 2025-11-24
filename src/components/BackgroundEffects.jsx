import { useEffect, useRef } from "react";

/* พื้นหลัง glow/parallax เบา ๆ */
export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* gradients only — removed dots */}
      <div className="absolute left-[-15%] top-[-20%] h-[45rem] w-[45rem] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-[-20%] h-[45rem] w-[45rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
    </div>
  );
}