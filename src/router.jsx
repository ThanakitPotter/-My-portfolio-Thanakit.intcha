// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout.jsx";

// 👉 Lazy Import (โหลดเฉพาะตอนเข้าแต่ละหน้า)
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Strength = lazy(() => import("./pages/Strength.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />, // Layout หลัก
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/strength", element: <Strength /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
