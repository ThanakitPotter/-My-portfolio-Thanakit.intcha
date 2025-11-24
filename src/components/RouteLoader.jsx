// src/components/RouteLoader.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import LoadingOverlay from "./LoadingOverlay.jsx";

// แสดงโหลดเดอร์ตอน route กำลังเปลี่ยน/โหลด
export default function RouteLoader() {
  const nav = useNavigation(); // 'idle' | 'loading' | 'submitting'
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  // เคสที่ Router กำลังโหลดจริง (เช่นมี data loader หรือ chunk)
  useEffect(() => {
    if (nav.state === "loading") {
      const t = setTimeout(() => setShow(true), 80);   // กันแว้บ
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShow(false), 150);   // ค่อย ๆ หาย
    return () => clearTimeout(t);
  }, [nav.state]);

  // กระตุ้นให้โชว์สั้น ๆ แม้เป็นเพจเบามาก (ไม่มี data loader)
  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 220);
    return () => clearTimeout(t);
  }, [pathname]);

  return <LoadingOverlay show={show} />;
}
