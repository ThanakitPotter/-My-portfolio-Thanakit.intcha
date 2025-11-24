// src/layouts/RootLayout.jsx
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import RouteLoader from "../components/RouteLoader.jsx";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      {/* โหลดเดอร์ระดับแอป: โผล่ตอนสลับ route */}
      <RouteLoader />

      <main className="min-h-dvh pt-16">
        <Outlet />
      </main>

      {/* คืนตำแหน่งสกรอลอัตโนมัติเมื่อเปลี่ยนหน้า */}
      <ScrollRestoration />
    </>
  );
}
