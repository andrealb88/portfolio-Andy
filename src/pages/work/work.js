import React, { useState } from "react";
import Project1 from "./hotel.jpg";
import Project2 from "./e-commerce.jpg";
import Project3 from "./gifos.gif";
import Project4 from "./shoes.jpg";
import Project6 from "./tech.jpg";
import Project7 from "./wedding.jpg";
import "./work.css";

const projects = [
  {
    name: " project 1",
    image: Project1,
    link: "https://andrealb88.github.io/project-hotel-andrea-lopez-bravo/",
    link2: "https://github.com/andrealb88/project-hotel-andrea-lopez-bravo",
    comment: "Hotel reservation website",
    comment2:
      "A webiste where you can book a hotel and posses features like searching, sorting and filtering.",
    comment3: "React.js",
    comment4: "React context",
    comment5: "HTML/CSS",
  },
  {
    name: "Project 2",
    image: Project2,
    link: "https://andrealb88.github.io/rewards-store-andrea-lopez-bravo/",
    link2: "https://github.com/andrealb88/rewards-store-andrea-lopez-bravo",
    comment: "E-commerce website",
    comment2:
      "Fullstack E-commerce website where you can buy different products available, you can redeem products with rewards points,  it has a cart and  features like user authentification, searching, sorting and filtering.",
    comment3: "React.js",
    comment4: "React context",
    comment5: "aerolab.co API",
  },
  {
    name: "Project 3",
    image: Project3,
    link: "https://andrealb88.github.io/csb-z4fjr/",
    link2: "https://github.com/andrealb88/GIFOS-Andrea-Lopez-Bravo",
    comment2:
      "Website with an API functionallity where you Search and choose from a wide range of gifs available in the database, ",
    comment3: "React.js",
    comment4: "giphy.com API",
    comment5: "HTML/CSS",
  },
  {
    name: "Project 4",
    image: Project4,
    link: "https://andrealb88.github.io/golden-shoe/#",
    link2: "https://github.com/andrealb88/golden-shoe",
    comment: "Golden Shoe",
    comment2:
      " E-commerce website where you can Buy shoes,  it has a cart and fetures like a form for online payment",
    comment3: "React.js",
    comment4: "React context",
    comment5: "HTML/CSS",
  },
  {
    name: "Project 5",
    image: Project6,
    link: "https://andrealb88.github.io/Proyecto-Podcast/",
    link2: "https://github.com/andrealb88/Proyecto-Podcast",
    comment: "Women's in tech website.",
    comment2: " Find infromation about famale influemce in tech",
    comment3: "HTML",
    comment4: "CSS",
    comment5: "Bootstrap",
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
      <h2 id="work" className="pharagraph-1">
        {" "}
        Explore my portfolio
      </h2>
      <h1 className="work-title"> Projects</h1>
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
                <div className="part-1">{project.comment}</div>
                <div className="part-2">{project.comment2}</div>
                <div className="characteristics">
                  <div className="part3">{project.comment3}</div>
                  <div className="part4">{project.comment4}</div>
                  <div className="part5">{project.comment5}</div>
                </div>
                <div className="part-6">
                  {
                    <a
                      href={project.link2}
                      className="code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  }
                  {
                    <a
                      href={project.link}
                      className="code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE
                      <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
          <div className="other-projects">
            <div className="project-card cell">
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
              <div className="comment-wedding">
                <p>wedding website</p> <p>Website created with WordPress </p>
                <div className="part-6">
                  <a
                    href="https://rochiymarquitos.com/"
                    className="code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
