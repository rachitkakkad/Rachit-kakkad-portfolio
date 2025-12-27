import React from "react";
import { motion } from "framer-motion";
import "../CSS/Resume.css";

export default function Resume() {
  return (
    <section className="resume-section">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="resume-title"
        >
          📄 Resume
        </motion.h2>

        <p className="resume-subtitle">
          A quick overview of my skills, experience, and journey.
        </p>

        {/* Profile */}
        <motion.div
          className="resume-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <h3 className="resume-name">👨‍💻 Rachit Kakkad</h3>
            <p className="resume-role">
              Full Stack Developer | Data Science Enthusiast
            </p>
            <p className="resume-meta">📍 Kalol, Gujarat, India</p>
            <p className="resume-meta">
              ✉️ kakkadrachit1@gmail.com | 📞 8200250915
            </p>
          </div>

          <div className="resume-summary">
            <strong>Professional Summary</strong>
            <p>
              Passionate coder and data science enthusiast focused on building
              rapid, impactful, and user-centric solutions. Experienced in
              full-stack development and AI-powered systems, with a strong
              interest in hackathons, real-world problem solving, and scalable
              applications.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <section className="resume-section-block">
          <h4>🎓 Education</h4>
          <ul>
            <li>
              <strong>Swaminarayan University</strong> — B.Tech (2025–2029)
              <br />
              <span>Kalol, Gujarat</span>
            </li>
            <li>
              <strong>Shakti School (H.S.C)</strong> — 2024–2025
            </li>
            <li>
              <strong>SMT J.V. GEMS (S.S.C)</strong> — 2022–2023
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="resume-section-block">
          <h4>💼 Experience</h4>
          <p>
            <strong>Freelance Developer – Web & AI Projects</strong> (2025–Present)
          </p>
          <ul>
            <li>Built full-stack applications using React, Firebase, and APIs</li>
            <li>Developed AI chatbots, automation tools, and dashboards</li>
            <li>Focused on clean code, UX, and end-to-end deployment</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="resume-section-block">
          <h4>🚀 Projects</h4>
          <ul>
            <li>Smart JARVIS – AI Personal Assistant (In Progress)</li>
            <li>TaskFlow – Productivity & To-Do Manager</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="resume-section-block">
          <h4>⚙️ Skills</h4>
          <div className="resume-skills">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "MongoDB",
              "SQL",
              "Git & GitHub",
              "AWS",
              "Google Cloud",
              "UI / UX",
              "Problem Solving",
            ].map((skill) => (
              <span key={skill} className="resume-skill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="resume-pdf">
          <iframe
            className="resume-frame"
            src="/Rachit_Kakkad's_Resume.pdf"
            title="Rachit Kakkad Resume"
          />
        </section>

        {/* Download */}
        <a
          href="/Rachit_Kakkad_Resume.pdf"
          download
          className="resume-download"
        >
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
}
