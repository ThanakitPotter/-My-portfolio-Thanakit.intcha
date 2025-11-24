import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";
import Education from "../components/Education";

// ✅ 1. เพิ่มบรรทัดนี้: Import ไฟล์ PDF เข้ามา
import resumePDF from "../assets/Resume_Thanakit_inthrapacha.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#0B1220] text-white font-poppins overflow-hidden pt-32 sm:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== ABOUT ME SECTION ===== */}
        <section className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute -z-10 left-0 top-10 h-[420px] w-[380px] rounded-[40px] bg-sky-500/30 blur-3xl" />
            <img
              src={aboutImg}
              alt="About Me"
              className="w-full max-w-[500px] rounded-[32px] object-cover shadow-2xl ring-1 ring-white/10 border border-sky-400/20"
            />
          </div>
          
          {/* RIGHT: TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">
              <span className="text-sky-400">About</span> Me
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-white/90">
              Who I’m
            </h3>

            <p className="text-white/80 leading-relaxed max-w-xl">
                Hello, my name is Thanakit Intharapacha, but you can call me Potter.
                I'm 22 years old and have been passionate about web development since 2019.
                I started by writing simple HTML for my very first website it wasn’t fancy,
                but it sparked my love for coding and inspired me to keep improving my skills every day.
            </p>

            {/* SKILLS GRID */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                ✓ Passionate About Continuous Learning
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                ✓ Gaining Real Experience from Every Project
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                ✓ Skilled in Responsive Web Design (UI/UX)
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                ✓ Familiar with React, Node.js & API Integration
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
             <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-sky-500 text-slate-900 font-semibold text-sm hover:bg-sky-400 transition shadow-lg shadow-sky-500/25"
              >
                See My Work
              </Link>
              
              {/* ✅ 2. แก้ไขจุดนี้: เรียกใช้ตัวแปร resumePDF */}
              <a
                href={resumePDF} 
                download="Resume_Thanakit_Inthrapacha.pdf" // ตั้งชื่อไฟล์ตอนโหลดลงเครื่อง
                className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition"
              >
                Download Resume
              </a>
              
            </div>
          </div>
        </section>
      </div>

      {/* ===== EDUCATION SECTION ===== */}
      <Education />

      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl" />
    </section>
  );
}