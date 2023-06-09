import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./work/work.js";
import { Link } from "react-router-dom";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = [
    "Front End Developer",
    "Education Technology",
    "Software Engineer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="initial"
      className="home component"
    >
      <div className="intro">
        <div className="bubbles">
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
        <div id="home" className="intro route bg-image background">
          <div className="intro-content display-table">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Andrea</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">{words[currentIndex]}</span>
              </p>
              {/* <p className="pt-3">
                <a
                  className="portfolio-button"
                  href="#work/work.js"
                  role="button"
                >
                  View My Work
                </a>
              </p> */}
              <Link to="/work" className="portfolio-button">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
