import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/Navbar.scss";

function Navbar() {
  return (
    <header className="header-nav">
      <img src="/images/mountain.svg" alt="logo" className="logo" />
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
            <NavLink to="/skills">Skills</NavLink>
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
