import { NavLink } from "react-router-dom";
import "../App.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <label>
        <input className="checkbox" type="checkbox"></input>
        <span class="menu">
          {" "}
          <span className="hamburger"></span>{" "}
        </span>
        <ul className="menu-big">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/work">Portfolio</NavLink>
        </ul>
      </label>
    </div>
  );
}

export default Header;
