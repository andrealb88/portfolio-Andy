import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import javascript from "./js.svg";
import react from "./react.svg";
import html from "./html.svg";
import css from "./css.svg";
import framer from "./framer-motion.png";
import git from "./git.svg";
const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

export class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "As a driven and creative front-end developer with a passion for technology, I bring a unique set of skills to the table. With expertise in JavaScript, React, HTML, and CSS, I am well-equipped to tackle any project. I also hold a degree in computer science with a specialization in technology education, as well as a teaching degree in visual arts.",
        },
        {
          id: "second-p-about",
          content:
            "I am always seeking new opportunities to expand my knowledge and experience, which is why I am actively pursuing freelance and contract projects. In addition, I am eager to collaborate with local businesses and organizations to offer my web development services. If you are a company seeking a talented and motivated junior front-end developer, I would be thrilled to apply my skills to your team",
        },
      ],
    };
  }

  render() {
    return (
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="about"
      >
        <div id="about" className="big-box">
          <p className="title-b">About</p>
          <div className="skills">
            <div className="frame1">
              <div className="box">
                <img className="svg-css" src={css} alt="css" />
                <p className="bottom-part"> CSS</p>
              </div>
              <div className="box">
                <img className="svg-framer" src={framer} alt="framer" />
                <p className="bottom-part-special">FRAMER MOTION</p>
              </div>
              <div className="box">
                <img className="svg-git" src={git} alt="git" />
                <p className="bottom-part">GIT</p>
              </div>
            </div>

            <div className="frame2">
              <div className="box">
                <img className="svg-html" src={html} alt="html" />
                <p className="bottom-part">HTML</p>
              </div>
              <div className="box">
                <img className="svg-react" src={react} alt="react" />
                <p className="bottom-part">REACT</p>
              </div>
              <div className="box">
                <img
                  className="svg-javascript"
                  src={javascript}
                  alt="javasctipt"
                />
                <p className="bottom-part">JAVASCRIPT</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me pt-4 pt-md-0">
              <div className="title-box-2">
                <h5 className="title-left">About Me</h5>
              </div>
              {this.state.about_me.map((content) => {
                return (
                  <p className="lead" key={content.id}>
                    {content.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
