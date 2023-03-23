import { NavLink } from "react-router-dom";
import "../sass/Navbar.scss";

/** Navbar renders the navbar header.
 *
 * Props: none
 * State: None
 *
 * App -> Navbar
 */
function Navbar() {
  return (
    <header className="header-nav">
      <NavLink className="logo" to="/">
        <img
          src="images/Logo4.png"
          alt="Chalon's custom logo"
          className="logo-image"
        ></img>
        <p>// Chalon.dev</p>
      </NavLink>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="home-link">Home</NavLink>
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
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
