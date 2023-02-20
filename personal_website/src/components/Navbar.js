import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/Navbar.scss";
import mountain from "../assets/mountain.svg";

function Navbar() {
  return (
    <header className="header-nav">
      <img src={mountain} alt="logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
