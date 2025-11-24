// src/components/LazyImage.jsx
import { useEffect, useRef, useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
  ratio, // ex. 16/9, 4/3
  imgProps = {},
  placeholderClass = "bg-white/5",
}) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.unobserve(el);
      }
    }, { rootMargin: "200px" });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pad = ratio ? `${100 / ratio}%` : undefined;

  return (
    <div ref={ref} className={className}>
      <div
        className={`relative w-full overflow-hidden ${placeholderClass}`}
        style={pad ? { paddingTop: pad } : undefined}
      >
        {show && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={imgProps.loading ?? "lazy"}
            decoding={imgProps.decoding ?? "async"}
            className="absolute inset-0 h-full w-full object-cover"
            {...imgProps}
          />
        )}
      </div>
    </div>
  );
}
