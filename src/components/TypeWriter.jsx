// src/components/TypeWriter.jsx
import { useEffect, useState } from "react";

/**
 * TypeWriter – พิมพ์/ลบ ข้อความวนไปเรื่อย ๆ
 * props:
 *  - words: string[]   รายการคำที่จะสลับพิมพ์
 *  - typingSpeed: ms   ความเร็วตอนพิมพ์ (ยิ่งน้อยยิ่งเร็ว)
 *  - deletingSpeed: ms ความเร็วตอนลบ
 *  - pause: ms         หน่วงก่อนลบ/ก่อนขึ้นคำถัดไป
 *  - className: string คลาสสำหรับตัวอักษร
 */
export default function TypeWriter({
  words = ["Portfolio"],
  typingSpeed = 80,
  deletingSpeed = 45,
  pause = 900,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // ถึงปลายคำ → หน่วงแล้วเริ่มลบ
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // ลบหมดคำ → หน่วงแล้วไปคำถัดไป
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, Math.max(250, pause / 2));
      return () => clearTimeout(t);
    }

    const speed = deleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => {
      setSubIndex((i) => i + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  const text = words[wordIndex % words.length].slice(0, subIndex);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      {/* เคอร์เซอร์กระพริบ */}
      <span
        className="ml-1 inline-block w-[2px] h-[1em] align-middle bg-white"
        style={{
          animation: "twblink 1s steps(1,end) infinite",
        }}
      />
      {/* keyframes ภายในคอมโพเนนต์ */}
      <style>{`@keyframes twblink { 0%{opacity:1} 50%{opacity:0} 100%{opacity:1} }`}</style>
    </span>
  );
}
