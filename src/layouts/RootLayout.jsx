// src/layouts/RootLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import Components
import Navbar from "../components/Navbar.jsx";
import BackgroundEffects from "../components/BackgroundEffects.jsx";
import CommandPalette from "../components/CommandPalette.jsx";
import BackToTop from "../components/BackToTop.jsx";
import SkipLink from "../components/SkipLink.jsx";

/* ---------- Smooth scroll for in-page hash links (#section) ---------- */
function useSmoothHashScroll() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", a.getAttribute("href"));
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

/* ---------- Scroll to top on route change ---------- */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // ใช้ instant เพื่อให้คอมโพเนนต์พวก whileInView เริ่มทำงานชัวร์
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function RootLayout() {
  useSmoothHashScroll();

  return (
    <>
      <SkipLink />
      <BackgroundEffects />
      <Navbar />
      <ScrollToTop />

      {/* id="main" สำคัญสำหรับ SkipLink */}
      <main id="main" className="relative z-10">
        {/* Outlet คือประตูที่จะเปลี่ยนหน้าไปเรื่อยๆ (Home, About, Projects) */}
        <Outlet />
      </main>

      <BackToTop />
      <CommandPalette />
    </>
  );
}