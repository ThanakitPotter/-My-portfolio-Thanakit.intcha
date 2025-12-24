import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import Education from "../components/Education";

// ✅ 1. เพิ่มบรรทัดนี้: Import ไฟล์ PDF เข้ามา
// เปลี่ยนชื่อไฟล์ตรงนี้ให้ตรงกับไฟล์ใหม่ที่คุณใส่เข้าไปใน src/assets
import resumePDF from "../assets/Resume_2025.pdf";

export default function About() {
  const [showResume, setShowResume] = useState(false);
  const ref = useRef(null);
  
  // Parallax: เมื่อเลื่อนผ่าน section นี้ รูปจะขยับสวนทางเล็กน้อย (-50px ถึง 50px)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden pt-32 sm:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== ABOUT ME SECTION ===== */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: IMAGE */}
          <motion.div 
            ref={ref}
            style={{ y: yImg }}
            className="relative flex justify-center"
          >
            <img
              src={aboutImg}
              alt="About Me"
              className="w-full max-w-[500px] rounded-[32px] object-cover shadow-2xl ring-1 ring-slate-900/5 border border-indigo-100"
            />
          </motion.div>
          
          {/* RIGHT: TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">
              <span className="text-indigo-600">About</span> Me
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-slate-800">
              Who I’m
            </h3>

            <p className="text-slate-600 leading-relaxed max-w-xl">
                Hello, my name is Thanakit Intharapacha, but you can call me Potter.
                I'm 22 years old and have been passionate about web development since 2019.
                I started by writing simple HTML for my very first website it wasn’t fancy,
                but it sparked my love for coding and inspired me to keep improving my skills every day.
            </p>

            {/* SKILLS GRID */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-indigo-200 transition shadow-sm">
                ✓ Passionate About Continuous Learning
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-indigo-200 transition shadow-sm">
                ✓ Gaining Real Experience from Every Project
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-indigo-200 transition shadow-sm">
                ✓ Skilled in Responsive Web Design (UI/UX)
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-indigo-200 transition shadow-sm">
                ✓ Familiar with React, Node.js & API Integration
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
             <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/25"
              >
                See My Work
              </a>
              
              {/* ✅ 2. แก้ไขจุดนี้: เรียกใช้ตัวแปร resumePDF */}
              <button
                onClick={() => setShowResume(true)}
                className="px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
              >
                View Resume
              </button>
              
            </div>
          </div>
        </section>
      </div>

      {/* ===== EDUCATION SECTION ===== */}
      <Education />

      {/* PDF Popup Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8">
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">Resume Preview</h3>
              <div className="flex items-center gap-4">
                <a
                  href={resumePDF}
                  download="Resume_ธนกฤค_อินทรประชา-Ver.TH.pdf"
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium transition"
                >
                  Download File
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-slate-500 hover:text-slate-900 transition p-1"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
            {/* Viewer */}
            <object
              data={resumePDF}
              type="application/pdf"
              className="flex-1 w-full h-full bg-slate-100"
            >
              <div className="flex h-full flex-col items-center justify-center text-slate-500">
                <p>ไม่สามารถแสดงตัวอย่างไฟล์ได้</p>
              </div>
            </object>
          </div>
        </div>
      )}
    </section>
  );
}