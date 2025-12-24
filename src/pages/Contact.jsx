// src/pages/Contact.jsx
import { useEffect, useMemo, useState } from "react";
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
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl">
      {children}
    </div>
  );
}

function IconBox({ Icon }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/8 ring-1 ring-white/15 text-sky-400">
      <Icon size={22} />
    </div>
  );
}

function CopyButton({ onClick, copied }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10 transition"
    >
      {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Input({ label, error = "", className = "", ...rest }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-1 text-sm text-white/80">{label}</div>
      <input
        {...rest}
        onChange={(e) => rest.onChange?.(e.target.value)}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none ring-1 transition placeholder:text-white/30
        ${error ? "border-rose-400/60 ring-rose-400/40" : "border-transparent ring-white/5 hover:ring-white/20"}
        focus:border-sky-400/60 focus:ring-sky-400/40`}
      />
      {error ? <div className="mt-1 text-xs text-rose-300">{error}</div> : null}
    </label>
  );
}

function Textarea({ label, className = "", ...rest }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-1 text-sm text-white/80">{label}</div>
      <textarea
        {...rest}
        onChange={(e) => rest.onChange?.(e.target.value)}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none ring-1 transition placeholder:text-white/30
        border-transparent ring-white/5 hover:ring-white/20
        focus:border-sky-400/60 focus:ring-sky-400/40`}
      />
    </label>
  );
}

function Social({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white/90 hover:bg-white/10 transition"
    >
      <Icon className="text-sky-400" />
      {label}
    </a>
  );
}

/* =========================
   Main Component
========================= */

export default function Contact() {
  // เลื่อนขึ้นบนสุดเมื่อเข้าหน้า
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ====== state ฟอร์ม ======
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [sending, setSending] = useState(false);
  const [copiedKey, setCopiedKey] = useState(""); // สำหรับแสดงไอคอนติ๊กเมื่อกด copy

  // ป้องกันกรอกไม่ครบ / email ไม่ถูก
  const emailOK = useMemo(() => /\S+@\S+\.\S+/.test(form.email), [form.email]);
  const canSubmit =
    form.name.trim() && emailOK && form.subject.trim() && form.message.trim() && form.agree && !sending;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSending(true);

    // ===== OPTION A: ใช้ mailto (ไม่ต้องมี backend) =====
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\nSubject: ${form.subject}\n\n${form.message}`
    );
    const mailto = `mailto:thanakit.inth@bumail.net?subject=${encodeURIComponent(
      `[Portfolio] ${form.subject}`
    )}&body=${body}`;

    // เปิดอีเมลไคลเอนต์
    window.location.href = mailto;

    // หน่วงเล็กน้อยให้เบา ๆ แล้ว reset
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "", agree: false });
    }, 800);

    /* ===== OPTION B: EmailJS (คอมเมนต์ไว้ตามเดิม) =====
    import emailjs from "@emailjs/browser";
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", subject: "", message: "", agree: false });
    } catch (err) {
      console.error(err);
      alert("ส่งไม่สำเร็จ ลองใหม่อีกครั้งครับ");
    } finally {
      setSending(false);
    }
    */
  };

  return (
    <main id="contact" className="relative min-h-screen bg-[#0B1220] text-white pt-28 pb-20 font-poppins">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== Title ===== */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[3px] w-16 rounded bg-sky-500" />
          <h2 className="text-4xl font-extrabold">Get In Touch</h2>
        </div>

        {/* ===== Map + Intro ===== */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <iframe
              title="map"
              className="w-full h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.145654314576!2d100.6582!3d13.9730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d79c7f1e8b7ff%3A0x0000000000000000!2sPornpiman%20Village!5e0!3m2!1sth!2sth!4v1690000000000"
            />
          </div>

          <div>
            <p className="text-white/80 leading-relaxed">
              ถ้ามีงาน/โปรเจกต์ที่อยากคุยกันเพิ่มเติม หรือสนใจให้ช่วยออกแบบ/พัฒนาเว็บไซต์
              ทักมาได้ทั้งเบอร์โทรและอีเมลครับ 
              <br className="hidden md:block" />
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href={GMAP_QUERY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-slate-900 font-semibold hover:bg-sky-400 transition"
              >
                <FiExternalLink /> Open in Maps
              </a>
            </div>
          </div>
        </section>

        {/* ===== Contact cards ===== */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <Card>
            <IconBox Icon={FiPhone} />
            <div>
              <div className="text-lg font-semibold">Phone</div>
              <div className="mt-1 text-white/80">{PHONE}</div>
              <CopyButton onClick={() => onCopy(PHONE, "phone")} copied={copiedKey === "phone"} />
            </div>
          </Card>

          {/* Email */}
          <Card>
            <IconBox Icon={FiMail} />
            <div>
              <div className="text-lg font-semibold">Email</div>
              <div className="mt-1 text-white/80">{EMAIL_PRIMARY}</div>
              <div className="text-white/60">{EMAIL_SECONDARY}</div>
              <CopyButton
                onClick={() => onCopy(`${EMAIL_PRIMARY}, ${EMAIL_SECONDARY}`, "mail")}
                copied={copiedKey === "mail"}
              />
            </div>
          </Card>

          {/* Address */}
          <Card>
            <IconBox Icon={FiMapPin} />
            <div>
              <div className="text-lg font-semibold">Address</div>
              <div className="mt-1 text-white/80 leading-relaxed">{ADDRESS_LINE}</div>
              <CopyButton onClick={() => onCopy(ADDRESS_LINE, "addr")} copied={copiedKey === "addr"} />
            </div>
          </Card>
        </section>

        {/* ===== Form + Social ===== */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Your name"
                placeholder="John Doe"
                value={form.name}
                onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                required
              />
              <Input
                label="Email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                required
                error={form.email && !emailOK ? "Invalid email" : ""}
              />
              <Input
                label="Subject"
                placeholder="Project / Internship / Collaboration"
                value={form.subject}
                onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
                className="sm:col-span-2"
                required
              />
              <Textarea
                label="Message"
                placeholder="Tell me about your project, goals, timeline…"
                value={form.message}
                onChange={(v) => setForm((s) => ({ ...s, message: v }))}
                rows={6}
                className="sm:col-span-2"
                required
              />
            </div>

            <label className="mt-4 flex items-start gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm((s) => ({ ...s, agree: e.target.checked }))}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent"
              />
              I agree to be contacted back about this inquiry. (No spam)
            </label>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`rounded-xl px-6 py-2 font-semibold transition ${
                  canSubmit
                    ? "bg-sky-500 text-slate-900 hover:bg-sky-400"
                    : "bg-white/10 text-white/60 cursor-not-allowed"
                }`}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>

              <span className="text-xs text-white/60">
                หรือส่งตรงได้ที่{" "}
                <a href={`mailto:${EMAIL_PRIMARY}`} className="text-sky-400 hover:underline">
                  {EMAIL_PRIMARY}
                </a>
              </span>
            </div>
          </form>

          {/* Social / Extra */}
          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl">
            <div className="text-lg font-semibold">Find me on</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Social href="https://github.com/ThanakitPotter" Icon={SiGithub} label="GitHub" />
              <Social href="https://www.linkedin.com/in/thanakit-intarapracha-81081a386/" Icon={SiLinkedin} label="LinkedIn" />
              <Social href="https://www.facebook.com/Thanakitpotter/" Icon={SiFacebook} label="Facebook" />
              <Social href="https://www.instagram.com/potter_thanakit/" Icon={SiInstagram} label="Instagram" />
            </div>
          </aside>
        </section>
      </div>

      {/* background glows */}
      <div className="pointer-events-none absolute -right-24 bottom-20 h-[460px] w-[460px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
    </main>
  );
}
