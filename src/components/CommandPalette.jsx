import { useEffect, useState } from "react";

const entries = [
  { k: "Home", to: "#home" },
  { k: "About", to: "#about" },
  { k: "Strength", to: "#strength" },
  { k: "My Work", to: "#projects" },
  { k: "Contact", to: "#contact" },
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
      <div className="mx-auto max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search pages…"
          className="w-full bg-transparent px-4 py-3 outline-none text-slate-900 placeholder:text-slate-400"
        />
        <div className="max-h-80 overflow-auto">
          {list.map((e) => (
            <a
              key={e.k}
              href={e.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
            >
              {e.k}
            </a>
          ))}
          {!list.length && <div className="px-4 py-3 text-slate-400">No results</div>}
        </div>
        <div className="px-4 py-2 text-xs text-slate-400 border-t border-slate-100">Press Esc to close • Ctrl/Cmd + K to open</div>
      </div>
    </div>
  );
}
