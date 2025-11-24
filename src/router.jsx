// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout.jsx";

// ⚠️ แก้ Import ตรงนี้ให้ตรงกับชื่อไฟล์จริง 100%
const Home = lazy(() => import("./pages/home.jsx"));       // ไฟล์จริงชื่อ home.jsx (ตัวเล็ก)
const About = lazy(() => import("./pages/About.jsx"));     // ไฟล์จริงชื่อ About.jsx (ตัวใหญ่)
const Projects = lazy(() => import("./pages/Projects.jsx")); // ไฟล์จริงชื่อ Projects.jsx (ตัวใหญ่)
const Strength = lazy(() => import("./pages/Strength.jsx")); // ไฟล์จริงชื่อ Strength.jsx (ตัวใหญ่)
const Contact = lazy(() => import("./pages/Contact.jsx"));   // ไฟล์จริงชื่อ Contact.jsx (ตัวใหญ่)

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },       // URL ควรเป็นตัวเล็กเสมอ
      { path: "/projects", element: <Projects /> }, // URL ควรเป็นตัวเล็กเสมอ
      { path: "/strength", element: <Strength /> }, // URL ควรเป็นตัวเล็กเสมอ
      { path: "/contact", element: <Contact /> },   // URL ควรเป็นตัวเล็กเสมอ
    ],
  },
]);