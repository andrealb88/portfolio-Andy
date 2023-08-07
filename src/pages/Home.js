import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import profile from "./avatar.jpg";
import "../App.css";
import { Contact } from "./contact/Contact";
import { About } from "./about/About";
import { Portfolio } from "./work/work";
import Header from "./Header";
import linkedin from "./contact/linkedin.svg";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

export const Home = () => {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div ref={homeRef}>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        exit="initial"
        className="home component"
      >
        <Header
          scrollToPortfolio={scrollToPortfolio}
          scrollToContact={scrollToContact}
          scrollToAbout={scrollToAbout}
          scrollToHome={scrollToHome}
        />
        <div className="intro">
          <div id="home" className="intro route bg-image background">
            <div className="intro-content display-table">
              <div className="container">
                <img className="profile" src={profile} alt="profile" />
                <h1 className="intro-title mb-4">Hello, I am Andrea</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items">
                    {words[currentIndex]}
                  </span>
                </p>
                <Link to="./work" className="portfolio-button">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutRef} className="about">
          <About />
        </div>
        <div ref={contactRef} className="contact">
          <Contact />
        </div>
        <div ref={portfolioRef} className="portfolio">
          <Portfolio />
        </div>
      </motion.div>
      <footer className="final">
        <h3 className="last">
          © 2023— Andrea Lopez Bravo. All rights reserved.
        </h3>
        <div className="svg-bottom">
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fab fa-instagram sn" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/+447565418518" target="_blank">
            <i class="fab fa-facebook sn" aria-hidden="true"></i>
            <i class="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/andrea-holden-14787665/"
            target="_blank"
          >
            <img className="svg-1" src={linkedin} alt="linkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};
