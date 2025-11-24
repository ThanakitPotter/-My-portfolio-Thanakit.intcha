// src/components/Reveal.jsx
import { useEffect, useRef } from "react";

export default function Reveal({ as: Tag = "div", className = "", children, threshold = 0.14, once = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            if (once) obs.unobserve(el);
          } else if (!once) {
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
