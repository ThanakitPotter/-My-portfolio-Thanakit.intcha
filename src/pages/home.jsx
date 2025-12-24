// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import profile from "../assets/profile.jpg";
import About from "./About";
import Strength from "./Strength";
import Projects from "./Projects";
import Contact from "./Contact";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const { scrollY } = useScroll();
  // รูปจะเลื่อนลงช้ากว่าปกติ (0 -> 150px) ทำให้ดูเหมือนลอยอยู่ข้างหลัง
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);

  // เลื่อนลงไปหา Contact เมื่อเปิด
  useEffect(() => {
    if (showContact) {
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [showContact]);

  return (
    <div className="bg-slate-50 font-sans">
      <style>{`
        /* ===== Custom Scrollbar (Modern & Minimal) ===== */
        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 transparent; /* thumb track (slate-400) */
        }

        /* Chrome, Edge, and Safari */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #94a3b8; /* slate-400 */
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #64748b; /* slate-500 */
        }
      `}</style>
      <main
        id="home"
        className="relative flex items-center justify-center min-h-screen text-slate-900 overflow-hidden bg-slate-50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ===== HERO SECTION ===== */}
          <section className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT : PROFILE */}
            <motion.div style={{ y: yHero }} className="relative flex justify-center">
              {/* แผ่นสีฟ้าโค้งมนด้านหลัง */}
              <div className="absolute -z-10 left-0 top-10 h-[520px] w-[460px] rounded-[48px] bg-indigo-100" />
              <img
                src={profile}
                alt="Profile"
                className="w-full max-w-[580px] rounded-[48px] object-cover shadow-2xl ring-1 ring-slate-900/5"
              />
            </motion.div>

            {/* RIGHT : TEXT */}
            <div className="flex flex-col justify-center">
              {/* badge */}
              <span className="mt-5 inline-flex w-fit items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                 APPLYING FOR FULL-STACK WEB DEVELOPER INTERNSHIP
              </span>

              {/* headline */}
              <h1 className="mt-5 text-[48px] sm:text-6xl md:text-7xl font-extrabold leading-[1.05]">
                Hello!{" "}
                <span className="inline-block hand-origin animate-wave">
                  👋
                </span>{" "}
                I Am
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Thanakit Intharapacha !
                </span>
              </h1>

              {/* CTA */}
              <div className="mt-6 flex gap-4">
                {/* เปลี่ยน Hire Me -> About Me และพาไปหน้า /about */}
                <a
                  href="#about"
                  className="inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                >
                  About Me
                </a>

                {/* แนะนำให้ใช้ Link เช่นกันเพื่อไม่รีเฟรชทั้งหน้า */}
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  View Projects
                </a>
              </div>

              {/* Glass Info Card */}
              <div className="relative mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl hover:border-indigo-200 transition-colors">
                <h3 className="text-lg font-semibold">Quick Focus </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  มุ่งเน้นด้าน Front-End Web Development โดยใช้ HTML, CSS และ JavaScript
                  สนใจการสร้างเว็บไซต์ที่ใช้งานง่ายและตอบสนองได้ดี
                  พัฒนาทักษะต่อเนื่องใน Frameworks และเทคโนโลยีใหม่ ๆ
                  ให้ความสำคัญกับ UI/UX Design และการเขียนโค้ดที่อ่านง่าย
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* background glow effect */}
      </main>

      <About />
      <Strength />
      <Projects showContact={showContact} setShowContact={setShowContact} />

      <AnimatePresence>
        {showContact && (
          <motion.div
            key="contact-section"
            initial={{ opacity: 0, height: 0, y: -50 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ปุ่มกลับขึ้นบนสุด */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
