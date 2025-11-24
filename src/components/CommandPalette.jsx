import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const entries = [
  { k: "Home", to: "/" },
  { k: "About", to: "/about" },
  { k: "My Work", to: "/projects" },
  { k: "Strength", to: "/Strength" },
  { k: "Contact", to: "/contact" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const list = entries.filter((e) => e.k.toLowerCase().includes(q.toLowerCase()));
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-90 bg-black/50 backdrop-blur-sm p-4">
      <div className="mx-auto max-w-xl rounded-2xl bg-slate-900/90 border border-white/10">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search pages…"
          className="w-full bg-transparent px-4 py-3 outline-none"
        />
        <div className="max-h-80 overflow-auto">
          {list.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-white/5"
            >
              {e.k}
            </Link>
          ))}
          {!list.length && <div className="px-4 py-3 text-slate-400">No results</div>}
        </div>
        <div className="px-4 py-2 text-xs text-slate-400">Press Esc to close • Ctrl/Cmd + K to open</div>
      </div>
    </div>
  );
}
