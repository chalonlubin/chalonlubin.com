import { NavLink, Link } from "react-router-dom";
import "../sass/Navbar.scss";

function Navbar() {
  return (
    <header className="header-nav relative flex w-full flex-wrap items-center justify-between">
      <NavLink className="logo mt-2 mr-1 flex items-center" to="/"><img src="images/Logo4.png" alt="coding logo"></img></NavLink>
      <nav>
        <ul className="nav-list">
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
          <a href="Resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
