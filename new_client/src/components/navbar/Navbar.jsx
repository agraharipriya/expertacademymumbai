import { useState, useEffect } from "react";
import { BRAND } from "../../constants/brand";
import logoImg from "../../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Tutors", "Syllabus", "Reviews", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ background: scrolled ? BRAND.dark : "transparent", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="Expert Academy Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Expert Academy</p>
            <p className="text-xs" style={{ color: "#93c5fd" }}>Mumbai</p>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScAYrCT0YmliJdHgSDyu0zZ4YUcH3PfNv3QzFMIB6IKVwOqBg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
          style={{ background: BRAND.accent }}
        >
          Free Demo
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4" style={{ background: BRAND.dark }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block py-2 text-white/80 hover:text-white text-sm border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScAYrCT0YmliJdHgSDyu0zZ4YUcH3PfNv3QzFMIB6IKVwOqBg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 py-3 text-center rounded-full text-white font-black text-sm transition-transform active:scale-95 shadow-xl"
            style={{ background: BRAND.accent }}
            onClick={() => setOpen(false)}
          >
            🔥 Free Demo Class
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;