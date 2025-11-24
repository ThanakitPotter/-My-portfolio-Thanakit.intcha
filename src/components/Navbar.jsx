// src/components/Navbar.jsx
import logo from "../assets/logo.png";
import TypeWriter from "./TypeWriter.jsx";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeBtnRef = useRef(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.classList.add("overflow-hidden");
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      html.classList.remove("overflow-hidden");
    }
    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "My Work", to: "/projects" },
    { label: "Strength", to: "/Strength" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-gradient-to-b from-slate-950/90 to-slate-900/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* โลโก้ + ชื่อเว็บ */}
          <Link to="/" className="inline-flex items-center gap-4 group">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            />
            <TypeWriter
              words={["<> Portfolio />"]}
              typingSpeed={50}
              deletingSpeed={100}
              pause={1100}
              className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            />
          </Link>

          {/* Hamburger */}
          <HamburgerButton
            open={open}
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
          />
        </div>
      </header>

      {/* Overlay */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-[80] transition duration-300",
          open ? "visible bg-slate-950/75 backdrop-blur-xl" : "invisible bg-transparent backdrop-blur-0",
        ].join(" ")}
        onClick={() => setOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className={["absolute right-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-sky-500/10 blur-3xl transition-opacity", open ? "opacity-100" : "opacity-0"].join(" ")} />
          <div className={["absolute left-[-10%] bottom-[-10%] h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl transition-opacity", open ? "opacity-100" : "opacity-0"].join(" ")} />
        </div>

        {/* ปุ่มปิด */}
        <button
          ref={closeBtnRef}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className={["absolute right-6 top-5 z-[85] text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 transition",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"].join(" ")}
        >
          <CloseIcon className="h-8 w-8" />
        </button>

        {/* โลโก้ใน overlay */}
        <div className={["absolute left-6 top-4 z-[85] inline-flex items-center gap-4 transition", open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"].join(" ")}>
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full animate-float drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          />
          <span className="text-2xl font-bold text-white">Portfolio</span>
        </div>

        {/* เมนู */}
        <div
          className="relative mx-auto grid h-full max-w-7xl grid-cols-1 lg:grid-cols-[560px_1fr]"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className={["flex flex-col justify-center px-10 sm:px-16 transition-transform duration-300", open ? "translate-x-0" : "-translate-x-4"].join(" ")}>
            <ul className="space-y-6 sm:space-y-8">
              {links.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} onClick={() => setOpen(false)}>
                    {({ isActive }) => (
                      <span
                        className={[
                          "flex items-baseline gap-6",
                          "text-4xl sm:text-5xl font-extrabold leading-none",
                          isActive ? "text-sky-400" : "text-white hover:text-sky-300",
                        ].join(" ")}
                      >
                        <span className={["hidden sm:block h-0.5 w-14 rounded transition-colors", isActive ? "bg-sky-500" : "bg-transparent"].join(" ")} />
                        {item.label}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <aside className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </>
  );
}

/* — Hamburger Button — */
function HamburgerButton({ open, onClick, ariaControls }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={ariaControls}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 p-0 text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
    >
      <div className="relative h-4 w-6">
        <span className={[
          "absolute left-0 top-0 h-0.5 w-full rounded bg-white transition-all duration-300 ease-in-out",
          open ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0",
        ].join(" ")} />
        <span className={[
          "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-white transition-all duration-300 ease-in-out",
          open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
        ].join(" ")} />
        <span className={[
          "absolute left-0 bottom-0 h-0.5 w-full rounded bg-white transition-all duration-300 ease-in-out",
          open ? "-translate-y-2 -rotate-45" : "translate-y-0 rotate-0",
        ].join(" ")} />
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
    </button>
  );
}

/* — Close Icon — */
function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.18 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z" />
    </svg>
  );
}
