import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import BackgroundEffects from "./components/BackgroundEffects.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import BackToTop from "./components/BackToTop.jsx";
import SkipLink from "./components/SkipLink.jsx";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Strength from "./pages/Strength.jsx";

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

export default function App() {
  useSmoothHashScroll();

  return (
    <>
      <SkipLink />
      <BackgroundEffects />
      <Navbar />
      <ScrollToTop />

      <main id="main" className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* แนะนำให้ใช้ path เป็นตัวพิมพ์เล็กสม่ำเสมอ */}
          <Route path="/strength" element={<Strength />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <BackToTop />
      <CommandPalette />
    </>
  );
}
