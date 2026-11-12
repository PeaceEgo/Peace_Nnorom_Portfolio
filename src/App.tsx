import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import ContactFooter from "./components/ContactFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function usePageZoom() {
  useEffect(() => {
    const update = () => {
      const zoom = Math.min(1, document.documentElement.clientWidth / 1440);
      document.documentElement.style.setProperty("--page-zoom", String(zoom));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
}

export default function App() {
  usePageZoom();

  return (
    <>
      <ScrollToHash />
      <Nav />
      <div className="page">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </>
  );
}
