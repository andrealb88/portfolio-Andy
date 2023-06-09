import React from "react";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import envelope from "./envelope.svg";
import "./contact.css";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="svg-1" src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img className="svg-2" src={github} alt="GitHub" />
      </a>
      <img className="svg-3" src={envelope} alt="Envelope" />
      <p>Email: holdenandrea88@gmail.com</p>
    </div>
  );
};

export default SocialMediaLinks;
