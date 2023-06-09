import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
  },
};

// export function About() {
//   return (
//     <motion.div
//       variants={routeVariants}
//       initial="initial"
//       animate="final"
//       className="about component"
//     >
//       <h1> About Component </h1>
//     </motion.div>
//   );
// }

export class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "85%", value: "85" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "70%",
          value: "70",
        },
      ],
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
        className="about component"
      >
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row-container">
                    <div className="col-md-6">
                      <div className="row">
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        {/* <p className="title-s">Skill</p> */}
                        {this.state.skills.map((skill) => {
                          return (
                            <React.Fragment key={skill.id}>
                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </React.Fragment>
                          );
                        })}
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }
}
