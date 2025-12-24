// src/pages/Projects.jsx
import { useEffect, useMemo, useState } from "react";
import FadeUp from "../components/motion/FadeUp.jsx";
import ScaleIn from "../components/motion/ScaleIn.jsx";
import LazyImage from "../components/LazyImage.jsx";

// ---------- react-icons ----------
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";

// ---------- Local project images ----------
import WebsiteImg from "../assets/projects/Website.png";
import IoTPMImg from "../assets/projects/IoTPM.jpg";
import MinesweeperImg from "../assets/projects/Minesweeper.jpg";

// ---------- Certificate images ----------
import CourseraCert from "../assets/Certifications/Coursera.jpg";
import McocCert from "../assets/Certifications/mcoc.jpg";

// ---------- Filter tabs ----------
const CATEGORIES = ["All", "Website", "Dashboard", "Creative"];

// ---------- Project items ----------
const ITEMS = [
  {
    id: 1,
    title: "Resume Website",
    category: "Website",
    year: "2025",
    img: WebsiteImg,
    desc:
      "เว็บไซต์เรซูเม่ส่วนตัวที่สร้างด้วย HTML, CSS และ JavaScript ออกแบบให้เรียบง่ายแต่ดูเป็นมืออาชีพ แสดงข้อมูลส่วนตัว การศึกษา และทักษะการเขียนโปรแกรมอย่างชัดเจน เน้นฝึกพื้นฐานการจัด Layout และการใช้ CSS เพื่อควบคุมโครงสร้างและสไตล์ของหน้าเว็บ",
    techs: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },
  {
    id: 2,
    title: "IoT PM2.5 ",
    category: "Dashboard",
    year: "2025",
    img: IoTPMImg,
    desc:
      "โปรเจกต์ IoT สำหรับตรวจวัดค่าฝุ่น PM2.5 โดยใช้เซนเซอร์และบอร์ด Arduino แสดงผลผ่านจอ LCD เชื่อมต่อกับ Python Dashboard เพื่อบันทึกและวิเคราะห์ข้อมูลคุณภาพอากาศแบบเรียลไทม์",
    techs: [
      { name: "C++", Icon: SiCplusplus },
      { name: "Arduino", Icon: SiArduino },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    id: 3,
    title: "Minesweeper (Desktop)",
    category: "Creative",
    year: "2025",
    img: MinesweeperImg,
    desc:
      "เกม Minesweeper สำหรับเดสก์ท็อป พัฒนาโดยใช้ Python (Tkinter GUI) มีระบบตั้งธง ตรวจช่องว่าง และอัลกอริทึม Flood-Fill เพื่อจำลองการเล่นเกมคลาสสิกที่คุ้นเคย",
    techs: [
      { name: "Python", Icon: SiPython },
      { name: "GUI", Icon: MdOutlineDesktopWindows },
      { name: "Algorithm", Icon: RiFunctionLine },
    ],
  },
];

// ---------- Certificates section ----------
const CERTS = [
  {
    id: "c1",
    title: "Coursera Project Certificate",
    issuer: "University of Michigan",
    year: "2025",
    img: CourseraCert,
    desc:
      "นี่คือใบรับรองจาก Coursera ที่ยืนยันว่า ได้เรียนจบโปรเจกต์จริงเกี่ยวกับการสร้าง Chatbot ด้วย Python และ ChatGPT API",
    badges: ["Python", "AI", "ChatGPT API"],
  },
  {
    id: "c2",
    title: "MOOC Certificate of Completion",
    issuer: "MOC (Cybersecurity Learning Platform), NCSA Thailand",
    year: "2024",
    img: McocCert,
    desc:
      "เป็นใบรับรองยืนยันความรู้ด้านความปลอดภัยไซเบอร์พื้นฐาน (เหมาะกับสาย Dev, IT, และ Security)",
    badges: ["Security Awareness", "Threat Protection", "Basic Networking"],
  },
];

export default function Projects({ showContact, setShowContact }) {
  const [active, setActive] = useState("All");
  const [lb, setLb] = useState({ open: false, src: "", alt: "" });

  // ปิดไลท์บ็อกซ์ด้วย Esc
  useEffect(() => {
    if (!lb.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLb({ open: false, src: "", alt: "" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb.open]);

  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* ===== Filter bar ===== */}
      <FadeUp className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition
                ${
                  active === c
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                    : "border-slate-300 text-slate-600 hover:bg-slate-100"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </FadeUp>

      {/* ===== Projects grid ===== */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <ScaleIn key={item.id} delay={idx * 0.05}>
            <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              {/* รูป */}
              <button
                type="button"
                onClick={() => setLb({ open: true, src: item.img, alt: item.title })}
                className="block w-full text-left"
                aria-label={`Open ${item.title}`}
              >
                 <LazyImage
                  src={item.img}
                  alt={item.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105" // เพิ่ม Zoom effect
                  ratio={16/9}                  // 👈 สำคัญ ทำให้ wrapper มีความสูง
                  imgProps={{ loading: "eager", decoding: "async" }}
                />
              </button>

              {/* เนื้อหา */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">{item.title}</h3>
                <div className="text-xs text-slate-500 mt-1">
                  {item.category} — {item.year}
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techs.map((t, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      <t.Icon className="text-indigo-400 text-sm" />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ScaleIn>
        ))}
        </div>

      {/* ===== Certificates ===== */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[3px] w-16 rounded bg-indigo-600" />
          <h3 className="text-3xl font-extrabold text-slate-900">Certificates</h3>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {CERTS.map((c, idx) => (
            <ScaleIn key={c.id} delay={idx * 0.05}>
              <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <button
                  type="button"
                  onClick={() => setLb({ open: true, src: c.img, alt: c.title })}
                  className="block w-full text-left overflow-hidden"
                  aria-label={`Open certificate ${c.title}`}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-64 object-cover border-b border-white/10 transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                </button>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-indigo-600">{c.title}</h4>
                  <div className="text-xs text-slate-500 mt-1">
                    ออกโดย: {c.issuer} — {c.year}
                  </div>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{c.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScaleIn>
          ))}
        </div>
      </div>

      {/* Toggle Contact Button */}
      <div id="contact-button" className="mt-16 flex justify-center">
        <button
          onClick={() => setShowContact(!showContact)}
          className="group flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 active:scale-95"
        >
          <span className="font-semibold text-lg">{showContact ? "Close Contact" : "Contact Me"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${showContact ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>

      {/* ===== Built-in Lightbox (close on overlay click / Esc / X) ===== */}
      {lb.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLb({ open: false, src: "", alt: "" })}
        >
          {/* ปุ่มปิด */}
          <button
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3 py-1 text-sm"
            onClick={(e) => {
              e.stopPropagation();
              setLb({ open: false, src: "", alt: "" });
            }}
          >
            ✕
          </button>

          {/* รูปภาพ (คลิกที่รูปไม่ให้ปิด) */}
          <img
            src={lb.src}
            alt={lb.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl cursor-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
