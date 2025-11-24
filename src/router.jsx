
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout.jsx";


const Home = lazy(() => import("./pages/Home.jsx"));       // แก้ Home -> home
const About = lazy(() => import("./pages/about.jsx"));     // แก้ About -> about
const Projects = lazy(() => import("./pages/projects.jsx")); // แก้ Projects -> projects
const Strength = lazy(() => import("./pages/Strength.jsx")); // แก้ Strength -> strength
const Contact = lazy(() => import("./pages/contact.jsx"));   // แก้ Contact -> contact

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
