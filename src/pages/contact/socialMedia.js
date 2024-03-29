import React from "react";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import envelope from "./envelope.svg";
import "./contact.css";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <div className="link-container">
        <a
          href="https://www.linkedin.com/in/andrea-holden-14787665/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg-link" src={linkedin} alt="linkedIn" />
        </a>
        <a
          href="https://github.com/andrealb88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg-github" src={github} alt="gitHub" />
        </a>
        <img className="svg-envelope" src={envelope} alt="Envelope" />
      </div>
      <p className="email">Email: holdenandrea88@gmail.com</p>
    </div>
  );
};

export default SocialMediaLinks;
