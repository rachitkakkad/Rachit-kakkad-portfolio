import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";
import logo from "../../public/logos/logo.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const navRef = useRef(null);
  const linksRef = useRef(null);

  const isMobile = () => window.innerWidth <= 768;

  /* =========================
     RESPONSIVE LOGIC
  ========================= */

  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;

    if (isMobile()) {
      setShowButton(true);
    } else {
      setShowButton(
        linksRef.current.scrollWidth > navRef.current.offsetWidth
      );
    }
  };

  /* =========================
     SCROLL TRANSPARENCY
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 10) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     RESIZE HANDLING
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      checkOverflow();
      if (!isMobile()) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav ref={navRef} className="nav">
        {/* LEFT */}
        <div className="nav-left">
          <motion.img
            src={logo}
            alt="Rachit Kakkad Logo"
            className="nav-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            draggable={false}
          />

          <div className="nav-name">
            <h1>Rachit Kakkad</h1>
            <span className="nav-tagline">
              Full Stack & Data Science
            </span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div
          ref={linksRef}
          className="nav-links"
          style={{ display: showButton ? "none" : "flex" }}
        >
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className="nav-link">
              {({ isActive }) => (
                <motion.div
                  className="nav-link-content"
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                >
                  <span className={isActive ? "active" : ""}>
                    {l.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* HAMBURGER */}
        {showButton && (
          <button
            className="mobile-btn"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="mobile-dropdown"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
