import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
  {
    id: 1,
    title: "Why I Love Building AI Projects",
    text: "Building AI-driven systems, especially in domains like healthcare, has shown me how meaningful technology can be when it solves real problems. From data to deployment, every step feels purposeful. AI isn’t just about models—it’s about responsibility, impact, and using intelligence to improve lives."
  },
  {
    id: 2,
    title: "Design Is How Technology Feels",
    text: "Good design is invisible, yet deeply felt. I believe interfaces should guide users effortlessly while evoking emotion. Minimal layouts, dark themes, and thoughtful spacing help me create experiences that feel calm, focused, and intentionally modern."
  },
  {
    id: 3,
    title: "Balancing Logic and Creativity",
    text: "As someone who codes and dances, I see no separation between creativity and logic. Algorithms have flow, structure, and rhythm—just like choreography. Every project is a performance where clarity and creativity work together."
  },
  {
    id: 4,
    title: "The Beauty of Simple Code",
    text: "Simple code is honest code. It doesn’t try to impress—it tries to communicate. I value readability, structure, and intention because the best code feels natural, like it was always meant to exist that way."
  },
  {
    id: 5,
    title: "Learning Through Building",
    text: "I learn best by building. Tutorials give direction, but projects give understanding. Every bug, refactor, and redesign teaches me something no textbook ever could. Progress happens when curiosity meets persistence."
  },
  {
    id: 6,
    title: "Why Hackathons Excite Me",
    text: "Hackathons are intense, unpredictable, and fast—and that’s exactly why I love them. They push me to think clearly under pressure, collaborate with diverse minds, and transform ideas into working solutions in hours, not weeks."
  },
  {
    id: 7,
    title: "Technology With Purpose",
    text: "For me, technology isn’t about trends—it’s about intent. I’m drawn to projects that solve meaningful problems, whether in education, healthcare, or accessibility. Code becomes powerful when it serves a clear human need."
  },
  {
    id: 8,
    title: "Minimalism in Development",
    text: "Minimalism isn’t about removing features—it’s about removing confusion. Clean architecture, thoughtful naming, and focused functionality make systems easier to scale, maintain, and understand."
  },
  {
    id: 9,
    title: "Consistency Beats Motivation",
    text: "Motivation comes and goes, but consistency builds skill. Showing up every day—even for a small improvement—creates momentum. Growth in tech is less about sudden breakthroughs and more about steady effort."
  },
  {
    id: 10,
    title: "Building a Future Through Code",
    text: "Every project I work on is a step forward—not just in skill, but in vision. I see coding as a long-term journey of learning, creating, and contributing. The future I want to build starts with the code I write today."
  }
];  


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
