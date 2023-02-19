import React from "react";
import { Link } from "react-router-dom";
import "../sass/Navbar.scss";
import mountain from "../assets/mountain.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={mountain} alt="logo" className="logo" />
        </Link>
      </div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
