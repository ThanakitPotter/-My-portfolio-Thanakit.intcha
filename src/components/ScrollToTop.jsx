// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothScrollTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(smoothScrollTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  if (!show) return null;
  return (
    <button
      onClick={smoothScrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 btn-soft bg-white/5 text-white hover:bg-white/10"
    >
      ↑ Top
    </button>
  );
}
