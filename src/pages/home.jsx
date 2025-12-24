// src/pages/Home.jsx
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <main
      id="home"
      className="relative flex items-center justify-center min-h-screen text-white font-poppins overflow-hidden bg-[#0B1220]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== HERO SECTION ===== */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT : PROFILE */}
          <div className="relative flex justify-center">
            {/* แผ่นสีฟ้าโค้งมนด้านหลัง */}
            <div className="absolute -z-10 left-0 top-10 h-[520px] w-[460px] rounded-[48px] bg-[#17C8D6]" />
            <img
              src={profile}
              alt="Profile"
              className="w-full max-w-[580px] rounded-[48px] object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* RIGHT : TEXT */}
          <div className="flex flex-col justify-center">
            {/* badge */}
            <span className="mt-5 text-[48px] inline-block rounded-full bg-[#b845ff]/20 px-4 py-1.5 text-sm font-semibold text-[#b845ff] ring-1 ring-[#b845ff]/30">
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
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-200 bg-clip-text text-transparent">
                Thanakit Intharapacha !
              </span>
            </h1>

            {/* CTA */}
            <div className="mt-6 flex gap-4">
              {/* เปลี่ยน Hire Me -> About Me และพาไปหน้า /about */}
              <Link
                to="/about"
                className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400 shadow-lg shadow-sky-500/20"
              >
                About Me
              </Link>

              {/* แนะนำให้ใช้ Link เช่นกันเพื่อไม่รีเฟรชทั้งหน้า */}
              <Link
                to="/projects"
                className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
              >
                View Projects
              </Link>
            </div>

            {/* Glass Info Card */}
            <div className="relative mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-semibold">Quick Focus E</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">
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
      <div className="pointer-events-none absolute -right-20 top-32 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
    </main>
  );
}
