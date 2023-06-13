// import React, { useState } from "react";
// import Project1 from "./estancia.jpg";
// import Project2 from "./headphones.png";
// import Project3 from "./ilustra_header.png";
// import Project4 from "./goldenshoe.jpg";
// import Project5 from "./lifeboardgames.jpg";
// import Project6 from "./Margaret_Hamilton.png";
// import Project7 from "./wedding.jpg";
// import "./work.css";

// const projects = [
//   {
//     //name: "Project 1",
//     image: Project1,
//     link: "https://andrealb88.github.io/project-hotel-andrea-lopez-bravo/",
//   },
//   {
//     //name: "Project 2",
//     image: Project2,
//     link: "https://andrealb88.github.io/rewards-store-andrea-lopez-bravo/",
//   },
//   {
//     //name: "Project 3",
//     image: Project3,
//     link: "https://andrealb88.github.io/csb-z4fjr/",
//   },
//   {
//     //name: "Project 4",
//     image: Project4,
//     link: "https://andrealb88.github.io/golden-shoe/#",
//   },
//   {
//     name: "Project 5",
//     image: Project5,
//     link: "https://project5.com",
//   },
//   {
//     //name: "Project 6",
//     image: Project6,
//     link: "https://andrealb88.github.io/Proyecto-Podcast/",
//   },
// ];

// export const Portfolio = () => {
//   //const [showMessage, setShowMessage] = useState(false); // State to control message visibility
//   const [showProject5Message, setShowProject5Message] = useState(false);
//   const [mouseOverMessage, setMouseOverMessage] = useState(false);

//   //const handleMouseEnter = () => {
//   //setShowMessage(true); // Show message when mouse enters the image
//   //};

//   //const handleMouseLeave = () => {
//   //setShowMessage(false); // Hide message when mouse leaves the image
//   //};

//   return (
//     <div className="portfolio-body">
//       <div className="portfolio-container">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 width="400px"
//                 height="200px"
//                 onMouseEnter={() =>
//                   setShowProject5Message(project.name === "Project 5")
//                 }
//                 onMouseLeave={() => setShowProject5Message(false)}
//               />
//               <div className="project-name">{project.name}</div>
//               {project.name === "Project 5" && showProject5Message && (
//                 <div className="message">
//                   <p className="process">In process...</p>
//                 </div>
//               )}
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className="project-card">
//         <div className="project-name">Projects in WordPress:</div>
//         <a
//           href="https://rochiymarquitos.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={Project7} alt="Project 7" width="400px" height="200px" />
//         </a>
//       </div>
//     </div>
//   );
// };

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
    //name: "Project 1",
    image: Project1,
    link: "https://andrealb88.github.io/project-hotel-andrea-lopez-bravo/",
  },
  {
    //name: "Project 2",
    image: Project2,
    link: "https://andrealb88.github.io/rewards-store-andrea-lopez-bravo/",
  },
  {
    //name: "Project 3",
    image: Project3,
    link: "https://andrealb88.github.io/csb-z4fjr/",
  },
  {
    //name: "Project 4",
    image: Project4,
    link: "https://andrealb88.github.io/golden-shoe/#",
  },
  {
    name: "Project 5",
    image: Project5,
    link: "https://andrealb88.github.io/geek-boardgames",
  },
  {
    //name: "Project 6",
    image: Project6,
    link: "https://andrealb88.github.io/Proyecto-Podcast/",
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="image-proyect"
                src={project.image}
                alt={project.name}
                width="400px"
                height="200px"
                onMouseEnter={() =>
                  setShowProject5Message(project.name === "Project 5")
                }
                onMouseLeave={() => setShowProject5Message(false)}
              />
              <div className="project-name">{project.name}</div>
              {project.name === "Project 5" && (
                <div
                  className={`message ${
                    showProject5Message && mouseOverMessage ? "hover" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <p className="process">In process...</p> */}
                </div>
              )}
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
