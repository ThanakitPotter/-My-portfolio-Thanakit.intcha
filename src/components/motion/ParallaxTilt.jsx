// src/components/motion/ParallaxTilt.jsx
import { useRef } from "react";

/**
 * ห่อการ์ด/รูป เพื่อให้เอียงนิด ๆ ตามเมาส์ (เบามาก)
 * <ParallaxTilt className="rounded-2xl"><img .../></ParallaxTilt>
 */
export default function ParallaxTilt({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateZ(0)`;
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
