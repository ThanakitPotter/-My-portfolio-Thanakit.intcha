// src/pages/Strength.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/Strength.jpg";

// ================= ICONS =================
import {
  SiHtml5,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiGithub,
  SiFigma,
  SiCanva,
  SiMysql,
  SiMongodb,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// ================= CERTIFICATES =================
import CourseraCert from "../assets/Certifications/Coursera.jpg";
import McocCert from "../assets/Certifications/mcoc.jpg";

export default function Strength() {
  const services = [
    {
      title: "Website Design",
      desc:
        "ออกแบบเว็บไซต์ที่มีความสวยงาม ใช้งานง่าย และรองรับทุกอุปกรณ์ ด้วยหลักการ UI/UX ที่ทันสมัย",
      icon: <IconMonitor />,
    },
    {
      title: "Graphic Design",
      desc:
        "สร้างสรรค์กราฟิก โลโก้ และคอนเทนต์สำหรับเว็บหรือโซเชียลให้โดดเด่นและสื่อสารภาพลักษณ์ได้ชัดเจน",
      icon: <IconPalette />,
    },
    {
      title: "Logo Design",
      desc:
        "ออกแบบโลโก้ที่มีเอกลักษณ์ สื่อถึงตัวตนของแบรนด์ พร้อมใช้งานในเว็บไซต์และงานพรีเซนต์ต่าง ๆ",
      icon: <IconLogo />,
    },
    {
      title: "Web Development",
      desc:
        "พัฒนาเว็บไซต์แบบโต้ตอบ (Interactive) ด้วย React และ Tailwind CSS พร้อมระบบ responsive สมบูรณ์แบบ",
      icon: <IconCode />,
    },
  ];

  const skills = [
    { name: "React", value: 60, level: "Intermediate", Icon: SiReact },
    { name: "Tailwind CSS", value: 75, level: "Intermediate", Icon: SiTailwindcss },
    { name: "HTML/CSS", value: 45, level: "Basic", Icon: SiHtml5 },
    { name: "JavaScript", value: 30, level: "Basic", Icon: SiJavascript },
    { name: "Python", value: 70, level: "Intermediate", Icon: SiPython },
    { name: "Java", value: 55, level: "Basic–Intermediate", Icon: SiOpenjdk },
    { name: "SQL", value: 45, level: "Basic", Icon: SiMysql },
    { name: "MongoDB", value: 40, level: "Basic", Icon: SiMongodb },
  ];

  const tools = [
    { name: "GitHub", value: 78, level: "Basic–Intermediate", Icon: SiGithub },
    { name: "VS Code", value: 90, level: "Advanced", Icon: VscCode },
    { name: "Figma", value: 90, level: "Advanced", Icon: SiFigma },
    { name: "Canva", value: 90, level: "Advanced", Icon: SiCanva },
  ];

  const ref = useRef(null);
  // Parallax logic
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main id="strength" className="relative pt-28 pb-24 text-slate-900 font-sans bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========== WHAT I DO ========== */}
        <section className="grid gap-10 lg:grid-cols-[420px_1fr]">
          <div>
            <div className="h-1 w-16 rounded bg-indigo-600 mb-6" />
            <h2 className="text-4xl font-extrabold">What I Do</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ผสมผสานการออกแบบและเทคโนโลยี เพื่อสร้างเว็บไซต์ที่ทั้ง “ดูดี” และ “ทำงานได้จริง”
              ด้วย React, Tailwind CSS, และ JavaScript มุ่งเน้นประสบการณ์ผู้ใช้ (UI/UX)
              ที่สวย ลื่นไหล และตอบสนองได้ดีทุกอุปกรณ์
            </p>

            <motion.div 
              ref={ref}
              style={{ y: yImg }}
              className="relative mt-10 rounded-[28px] ring-1 ring-slate-900/5 overflow-hidden w-full shadow-lg"
            >
              {/* Removed blur bg */}
              <img
                src={profile}
                alt="Profile"
                className="block w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition
                           hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center">
                  <div className="mb-5 h-16 w-16 shrink-0 rounded-full bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center">{s.title}</h3>
                <p className="mt-3 text-center text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ========== SKILLS ========== */}
        <section className="relative mt-20 grid gap-10 lg:grid-cols-[1fr_460px]">
          <div className="flex flex-wrap gap-6">
            {skills.map((sk, i) => (
              <div
                key={i}
                className="group flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                title={sk.name}
              >
                <sk.Icon className="text-5xl text-slate-700 transition-colors group-hover:text-indigo-600" />
              </div>
            ))}
          </div>

          <div className="lg:pl-10">
            <div className="flex items-center gap-4">
              <div className="h-[3px] w-16 rounded bg-indigo-600" />
              <h3 className="text-3xl font-extrabold">Technical Skills</h3>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              เน้นฝึกฝนทักษะด้านการเขียนโปรแกรมและออกแบบเว็บ
              ทั้งในส่วน Frontend, Backend และ Database
              เพื่อพัฒนาเว็บที่ทั้งดูดีและทำงานได้จริงในระดับ Production
            </p>
          </div>
        </section>

        {/* ========== TOOLS ========== */}
        <section className="relative mt-20 grid gap-10 lg:grid-cols-[1fr_460px]">
          <div className="flex flex-wrap gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="group flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                title={tool.name}
              >
                <tool.Icon className="text-5xl text-slate-700 transition-colors group-hover:text-indigo-600" />
              </div>
            ))}
          </div>

          <div className="lg:pl-10">
            <div className="flex items-center gap-4">
              <div className="h-[3px] w-16 rounded bg-indigo-600" />
              <h3 className="text-3xl font-extrabold">Tools</h3>
            </div>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ใช้เครื่องมือที่ช่วยให้การพัฒนาเว็บมีประสิทธิภาพมากขึ้น เช่น VS Code,
              GitHub สำหรับ version control และ Figma/Canva สำหรับการออกแบบ UI
            </p>
          </div>
        </section>

        {/* ========== CERTIFICATE ========== */}
        <section className="mt-20">
          <div className="flex items-center gap-4">
            <div className="h-[3px] w-16 rounded bg-indigo-600" />
            <h3 className="text-4xl font-extrabold">Certificate</h3>
          </div>

          <p className="mt-4 max-w-3xl text-slate-600">
            ตัวอย่างใบรับรองและคอร์สที่เกี่ยวข้องกับการพัฒนาเว็บและการออกแบบ
            (สามารถอัปเดตเพิ่มเติมในอนาคตได้)
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <img
                src={CourseraCert}
                alt="Coursera Certificate"
                className="w-full h-64 object-cover border-b border-slate-100 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-indigo-600">
                  Coursera Project Certificate
                </h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  นี่คือใบรับรองจาก Coursera ที่ยืนยันว่า ได้เรียนจบโปรเจกต์จริงเกี่ยวกับการสร้าง Chatbot ด้วย Python และ ChatGPT API
                </p>
                <div className="mt-3 text-xs text-slate-400">
                  ออกโดย: University of Michigan — 2025
                </div>
              </div>
            </article>

            <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <img
                src={McocCert}
                alt="MCOC Certificate"
                className="w-full h-64 object-cover border-b border-slate-100 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-indigo-600">
                  MOOC Certificate of Completion
                </h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  เป็นใบรับรองยืนยันความรู้ด้านความปลอดภัยไซเบอร์พื้นฐาน (เหมาะกับสาย Dev, IT, และ Security)
                </p>
                <div className="mt-3 text-xs text-slate-400">
                  ออกโดย: MOC (Cybersecurity Learning Platform), NCSA Thailand — 2024
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

    </main>
  );
}

/* ------------------------- */
/*      ICON HELPERS         */
/* ------------------------- */
function IconMonitor() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" className="text-indigo-500">
      <path d="M4 4h16v10H4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 20h8M10 14v6M14 14v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconPalette() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" className="text-indigo-500">
      <path
        d="M12 3a9 9 0 0 0 0 18h2a2 2 0 0 0 0-4h-1a3 3 0 0 1 0-6h4a2 2 0 0 0 0-4h-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="9" cy="6.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" className="text-indigo-500">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" className="text-indigo-500">
      <path
        d="M9 18l-6-6 6-6M15 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
