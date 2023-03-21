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

{
  /* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">// Chalon.dev</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>

      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div> */
}
