import { useEffect } from "react";

export default function Lightbox({ open, onClose, src, alt }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-80 bg-black/80 backdrop-blur-sm">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-6 top-6 text-white/90 hover:text-white text-2xl"
      >
        ×
      </button>
      <div className="h-full w-full flex items-center justify-center p-4">
        <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
      </div>
    </div>
  );
}
