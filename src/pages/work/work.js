import React, { useState } from "react";
import Project1 from "./estancia.jpg";
import Project2 from "./headphones.png";
import Project3 from "./ilustra_header.png";
import Project4 from "./goldenshoe.jpg";
import Project5 from "./lifeboardgames.jpg";
import Project6 from "./Margaret_Hamilton.png";
import Project7 from "./wedding.jpg";
import "./work.css";

const projects = [
  {
    name: " project 1",
    image: Project1,
    link: "https://andrealb88.github.io/project-hotel-andrea-lopez-bravo/",
    comment: "Hotel reservation proyect",
  },
  {
    name: "Project 2",
    image: Project2,
    link: "https://andrealb88.github.io/rewards-store-andrea-lopez-bravo/",
    comment:
      "E-commerce website. Buy the product available in the website with rewards points.",
  },
  {
    name: "Project 3",
    image: Project3,
    link: "https://andrealb88.github.io/csb-z4fjr/",
    comment:
      "Gifos website. Search and choose from a wide range of gifs available",
  },
  {
    name: "Project 4",
    image: Project4,
    link: "https://andrealb88.github.io/golden-shoe/#",
    comment: "E-commerce webiste. Shoe store with contact email and cart ",
  },
  {
    name: "Project 5",
    image: Project6,
    link: "https://andrealb88.github.io/Proyecto-Podcast/",
    comment:
      "Women's in tech website. Find infromation about famale influemce in tech",
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
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-comment">{project.comment}</div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="image-proyect"
                src={project.image}
                alt={project.name}
                width="400px"
                height="200px"
              />
            </a>
          </div>
        ))}
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
