// src/components/motion/FadeUp.jsx
import { useEffect, useRef } from "react";

export default function FadeUp({ as: Tag = "div", className = "", children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = 0;
    el.style.transform = "translateY(14px) scale(0.98)";
    el.style.transition = `opacity .6s cubic-bezier(.22,.61,.36,1) ${delay}s, transform .6s cubic-bezier(.22,.61,.36,1) ${delay}s`;

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0) scale(1)";
        io.unobserve(el);
      }
    }, { threshold: 0.12 });

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <Tag ref={ref} className={className}>{children}</Tag>;
}
