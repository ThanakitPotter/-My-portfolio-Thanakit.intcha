// src/pages/Contact.jsx
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

/* =========================
   Constants (ข้อมูลติดต่อ)
========================= */
const PHONE = "064-102-8753";
const EMAIL_PRIMARY = "thanakit.inth@bumail.net";
const EMAIL_SECONDARY = "thanakit.intcha@gmail.com";
const ADDRESS_LINE =
  "49/210, Moo 1, Pornpiman Ville Village, Soi 13, Rangsit, Thanyaburi, Pathum Thani, 12110 Thailand";
const GMAP_QUERY =
  "https://www.google.com/maps?q=Pornpiman+Village,+Rangsit,+Thanyaburi,+Pathum+Thani+12110+Thailand";

/* =========================
   Helper Components
========================= */

function Card({ children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/50 p-6 shadow-lg backdrop-blur-lg">
      {children}
    </div>
  );
}

function IconBox({ Icon }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100 text-indigo-600">
      <Icon size={22} />
    </div>
  );
}

function CopyButton({ onClick, copied }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs text-slate-600 hover:bg-slate-50 transition"
    >
      {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Social({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-slate-700 hover:bg-slate-50 transition"
    >
      <Icon className="text-indigo-600" />
      {label}
    </a>
  );
}

/* =========================
   Main Component
========================= */

export default function Contact() {
  // ====== state ฟอร์ม ======
  const [copiedKey, setCopiedKey] = useState(""); // สำหรับแสดงไอคอนติ๊กเมื่อกด copy

  const onCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1200);
    } catch {
      // fallback เผื่อบางบราวเซอร์
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1200);
    }
  };

  return (
    <main id="contact" className="relative min-h-screen bg-slate-100 text-slate-900 pt-28 pb-20 font-sans">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== Title ===== */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[3px] w-16 rounded bg-indigo-600" />
          <h2 className="text-4xl font-extrabold">Get In Touch</h2>
        </div>

        {/* ===== Bento Grid Layout ===== */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Email Card */}
          <Card>
            <IconBox Icon={FiMail} />
            <div>
              <div className="text-lg font-semibold text-slate-800">Email</div>
              <div className="mt-1 text-slate-600">{EMAIL_PRIMARY}</div>
              <div className="text-slate-500">{EMAIL_SECONDARY}</div>
              <CopyButton
                onClick={() => onCopy(`${EMAIL_PRIMARY}, ${EMAIL_SECONDARY}`, "mail")}
                copied={copiedKey === "mail"}
              />
            </div>
          </Card>

          {/* Address Card */}
          <Card>
            <IconBox Icon={FiMapPin} />
            <div>
              <div className="text-lg font-semibold text-slate-800">Address</div>
              <div className="mt-1 text-slate-600 leading-relaxed">{ADDRESS_LINE}</div>
              <CopyButton onClick={() => onCopy(ADDRESS_LINE, "addr")} copied={copiedKey === "addr"} />
            </div>
          </Card>

          {/* Phone Card */}
          <Card>
            <IconBox Icon={FiPhone} />
            <div>
              <div className="text-lg font-semibold text-slate-800">Phone</div>
              <div className="mt-1 text-slate-600">{PHONE}</div>
              <CopyButton onClick={() => onCopy(PHONE, "phone")} copied={copiedKey === "phone"} />
            </div>
          </Card>

          {/* Social Links Card */}
          <aside className="rounded-2xl border border-slate-200 bg-white/50 p-6 shadow-lg backdrop-blur-lg">
            <div className="text-lg font-semibold text-slate-800">Find me on</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Social href="https://github.com/ThanakitPotter" Icon={SiGithub} label="GitHub" />
              <Social href="https://www.linkedin.com/in/thanakit-intarapracha-81081a386/" Icon={SiLinkedin} label="LinkedIn" />
              <Social href="https://www.facebook.com/Thanakitpotter/" Icon={SiFacebook} label="Facebook" />
              <Social href="https://www.instagram.com/potter_thanakit/" Icon={SiInstagram} label="Instagram" />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
