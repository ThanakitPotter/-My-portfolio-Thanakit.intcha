
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout.jsx";


const Home = lazy(() => import("./pages/Home.jsx"));       
const About = lazy(() => import("./pages/about.jsx"));     
const Projects = lazy(() => import("./pages/projects.jsx")); 
const Strength = lazy(() => import("./pages/Strength.jsx")); 
const Contact = lazy(() => import("./pages/contact.jsx"));   

export const router = createBrowserRouter([
  {
    element: <RootLayout />, // Layout หลัก
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Strength", element: <Strength /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);
