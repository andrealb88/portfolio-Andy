import { NavLink } from "react-router-dom";
import "../App.css";
import React from "react";
import { useRef } from "react";

function Header({
  scrollToPortfolio,
  scrollToContact,
  scrollToAbout,
  scrollToHome,
}) {
  const handleHomeLinkClick = (event) => {
    event.preventDefault();
    scrollToHome();
  };
  const handleWorkLinkClick = (event) => {
    event.preventDefault();
    scrollToPortfolio();
  };
  const handleContactLinkClick = (event) => {
    event.preventDefault();
    scrollToContact();
  };
  const handleAboutLinkClick = (event) => {
    event.preventDefault();
    scrollToAbout();
  };
  return (
    <nav className="header">
      <label>
        <input className="checkbox" type="checkbox"></input>
        <span class="menu">
          <span className="hamburger"></span>
        </span>
        <ul className="menu-big">
          <a href="#home" onClick={handleHomeLinkClick}>
            Home
          </a>
          <a href="#about" tabIndex={0} onClick={handleAboutLinkClick}>
            About
          </a>
          <a href="#work" tabIndex={0} onClick={handleWorkLinkClick}>
            Work
          </a>
          <a href="#contact" tabIndex={0} onClick={handleContactLinkClick}>
            Contact
          </a>
        </ul>
      </label>
    </nav>
  );
}

export default Header;

// export default function Header() {
//   const homeRef = useRef();
//   const aboutRef = useRef();
//   const portfolioRef = useRef(null);
//   const contactRef = useRef(null);

//   // other refs

//   const scrollTo = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header>
//       <label>
//         <input className="checkbox" type="checkbox"></input>
//         <span class="menu">
//           <span className="hamburger"></span>
//         </span>
//         <ul className="menu-big">
//           <button onClick={() => scrollTo(homeRef)}>Home</button>
//           <button onClick={() => scrollTo(aboutRef)}>About</button>
//           <button onClick={() => scrollTo(contactRef)}>Contact</button>
//           <button onClick={() => scrollTo(portfolioRef)}>Work</button>
//         </ul>
//       </label>
//     </header>
//   );
// }
