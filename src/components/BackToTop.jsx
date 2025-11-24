import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-70 rounded-full px-4 py-3 text-sm font-medium
      transition shadow-lg backdrop-blur
      ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      bg-sky-500/90 hover:bg-sky-400 text-white`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
