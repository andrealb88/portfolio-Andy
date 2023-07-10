import React, { useState } from "react";
import Project1 from "./estancia.jpg";
import Project2 from "./headphones.png";
import Project3 from "./ilustra_header.png";
import Project4 from "./goldenshoe.jpg";
import Project6 from "./Margaret_Hamilton.png";
import Project7 from "./wedding.jpg";
import "./work.css";

const projects = [
  {
    name: " project 1",
    image: Project1,
    link: "https://andrealb88.github.io/project-hotel-andrea-lopez-bravo/",
    comment: "Hotel reservation website",
    comment2:
      "A webiste where you can book a hotel and posses features like searching, sorting and filtering.",
    comment3: "React.js",
    comment4: "react context",
  },
  {
    name: "Project 2",
    image: Project2,
    link: "https://andrealb88.github.io/rewards-store-andrea-lopez-bravo/",
    comment: "E-commerce website",
    comment2:
      "Fullstack E-commerce website where you can buy different products available, you can redeem products with rewards points,  it has a cart and  features like user authentification, searching, sorting and filtering.",
    comment3: "React.js",
    comment4: "react context",
    comment5: "aerolab.co API",
  },
  {
    name: "Project 3",
    image: Project3,
    link: "https://andrealb88.github.io/csb-z4fjr/",
    comment: "Gifos website",
    comment2:
      "Website with an API functionallity where you Search and choose from a wide range of gifs available in the database, ",
    comment3: "React.js",
    comment4: "developers.giphy.com API",
  },
  {
    name: "Project 4",
    image: Project4,
    link: "https://andrealb88.github.io/golden-shoe/#",
    comment: "Golden Shoe",
    comment2:
      " E-commerce website where you can Buy shoes,  it has a cart and fetures like a form for online payment",
    comment3: "React.js",
    comment4: "react context",
  },
  {
    name: "Project 5",
    image: Project6,
    link: "https://andrealb88.github.io/Proyecto-Podcast/",
    link2: "https://github.com/andrealb88/Proyecto-Podcast",
    comment:
      "Women's in tech website. Find infromation about famale influemce in tech",
    comment3: "HTML",
    comment4: "CSS",
  },
];

export const Portfolio = () => {
  const [showProject5Message, setShowProject5Message] = useState(false);
  const [mouseOverMessage, setMouseOverMessage] = useState(false);

  const handleMouseEnter = () => {
    setMouseOverMessage(true); // Set mouseOverMessage to true when mouse enters the message
  };

  const handleMouseLeave = () => {
    setMouseOverMessage(false); // Set mouseOverMessage to false when mouse leaves the message
  };

  return (
    <div className="portfolio-body">
      <h2 className="pharagraph-1"> Explore my portfolio</h2>
      <h1 className="work-title">Projects.</h1>
      <div className="portfolio-container">
        <div className="part-1">
          {projects.map((project, index) => (
            <div key={index} className="project-card cell">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="image-proyect"
                  src={project.image}
                  alt={project.name}
                  width="400px"
                  height="200px"
                />
              </a>
              <div className="project-comment">
                <div part-1>{project.comment}</div>
                <div part-2>{project.comment2}</div>
                <div part-3>{project.comment3}</div>
                <div part-4>{project.comment4}</div>
                <div part-5>{project.comment5}</div>
                <div part-6>
                  {
                    <a
                      href={project.link2}
                      className="code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODE
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="project-card">
          <div className="project-name">Projects in WordPress:</div>
          <a
            href="https://rochiymarquitos.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project7"
              src={Project7}
              alt="Project 7"
              width="400px"
              height="200px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
