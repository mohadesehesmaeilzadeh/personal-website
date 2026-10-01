import "./App.css";

import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const pageTitles = {
  "/": "Mohadeseh | Frontend Developer",
  "/about": "About | Mohadeseh",
  "/projects": "Projects | Mohadeseh",
  "/contact": "Contact | Mohadeseh",
};

function RouteEffects() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const normalizedPath =
      pathname === "/" ? pathname : pathname.replace(/\/+$/, "");

    document.title =
      pageTitles[normalizedPath] || "Page not found | Mohadeseh";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (previousPath.current !== pathname) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
