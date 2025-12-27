import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Header */}
        <h2 className="about-header">About Me</h2>

        {/* Description */}
        <p className="about-text">
          Hi, I’m <strong>Rachit Kakkad</strong> — a{" "}
          <strong>Full Stack Developer</strong> and
          <strong> AI & Data Science enthusiast</strong> passionate about
          building scalable, user-centric applications and intelligent systems.
        </p>

        <p className="about-text">
          I enjoy working at the intersection of{" "}
          <strong>web development, automation, and AI</strong>, combining clean
          design with efficient engineering to create impactful digital
          experiences.
        </p>

        <p className="about-text">
          1st-year <strong>B.Tech Computer Engineering</strong> student at
          <strong> Swaminarayan University</strong> with a strong interest in
          web development and emerging technologies.
        </p>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="education-header">Education</h3>

          <div className="education-list">
            {/* Card 1 */}
            <motion.div className="edu-card" whileHover={{ scale: 1.02 }}>
              <FaUniversity size={40} />
              <div>
                <h4>B.Tech in Computer Engineering</h4>
                <p>
                  <strong>Swaminarayan University</strong> — Kalol, Gujarat
                </p>
                <p>1st Year (Pursuing) | CGPA: 9.3</p>
                <p>2025 – 2029</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="edu-card" whileHover={{ scale: 1.02 }}>
              <FaGraduationCap size={38} />
              <div>
                <h4>Higher Secondary Education (12th)</h4>
                <p>
                  <strong>Shakti Higher Secondary School</strong> — Rajkot
                </p>
                <p>Gujarat Board | Percentile: 78%</p>
                <p>Completed in 2025</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div className="edu-card" whileHover={{ scale: 1.02 }}>
              <FaSchool size={36} />
              <div>
                <h4>Secondary Education (10th)</h4>
                <p>
                  <strong>SMT J.V. GEMS</strong> — Porbandar
                </p>
                <p>Gujarat Board | Percentage: 69%</p>
                <p>Completed in 2023</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
