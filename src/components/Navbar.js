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
          src="images/logo.png"
          alt="Chalon's custom logo"
          className="logo-image"
        ></img>
        <p>// Chalon.dev</p>
      </NavLink>
      <div className="hamburger dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52"
        >
          <li>
            <NavLink to="/" className="home-link">
              Home
            </NavLink>
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
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="home-link">
              Home
            </NavLink>
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
