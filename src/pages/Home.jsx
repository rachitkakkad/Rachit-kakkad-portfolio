import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

// 🖼️ Assets
import photo from "../../public/photo.jpg";
import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import leetcodelogo from "../../public/image.png";
import instagramLogo from "../../public/insta.png";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const professions = [
    "Full Stack Developer",
    "AI Project Builder",
    "Machine Learning Enthusiast",
    "Problem Solver",
    "Tech Explorer",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/Rachit-Kakkad1",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rachit-kakkad-r29052007k/",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:kakkadrachit1@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/+918200250915",
    },
    {
      img: leetcodelogo,
      title: "LeetCode",
      link: "https://leetcode.com/u/kUyAWXHOC5/",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/void.ln404/",
    },
  ];

  return (
    <section className="home-section" aria-label="Home">
      {/* ===================== TOP SECTION ===================== */}
      <div className="home-top">
        {/* LEFT: PHOTO */}
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="photo-ring"
            animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 28, repeat: Infinity, ease: "linear" }
            }
          />

          <motion.div
            className="photo-frame"
            animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <motion.img
              src={photo}
              alt="Portrait of Rachit Kakkad"
              className="profile-photo"
              loading="eager"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: INFO */}
        <motion.div
          className="home-info"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="home-title">
            Hi, I’m{" "}
            <motion.span
              className="home-name"
              animate={
                prefersReducedMotion
                  ? {}
                  : { backgroundPositionX: ["0%", "200%"] }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : { duration: 4, repeat: Infinity, ease: "linear" }
              }
            >
              Rachit Kakkad
            </motion.span>
          </h1>

          {/* Typing Effect (CSS-driven) */}
          <p className="typing-effect">
            FULL STACK DEVELOPER | DATA SCIENCE ENTHUSIAST
          </p>

          {/* Profession Tags */}
          <motion.div
            className="profession-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        background:
                          "linear-gradient(90deg,var(--accent),var(--accent-2))",
                      }
                }
                transition={{ type: "spring", stiffness: 200 }}
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="info-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {[
              { icon: "📍", title: "Location", value: "Kalol, Gujarat, India" },
              {
                icon: "💼",
                title: "Expertise",
                value: "AI/ML, Problem Solving, Web Development",
              },
              {
                icon: "📧",
                title: "Contact",
                value: "kakkadrachit1@gmail.com",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="info-icon" aria-hidden="true">
                  {info.icon}
                </div>
                <div className="info-text">
                  <span className="info-title">{info.title}</span>
                  <p>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ===================== QUICK LINKS ===================== */}
      <motion.div
        className="quick-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="quick-links-title">Connect with me</h2>

        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              aria-label={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                prefersReducedMotion ? {} : { scale: 1.15, rotate: 5 }
              }
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="quick-link-img"
                draggable={false}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        filter:
                          "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                      }
                }
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
