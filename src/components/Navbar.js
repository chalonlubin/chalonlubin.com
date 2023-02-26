import { NavLink} from "react-router-dom";
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
    <header className="header-nav text-md md:text-2xl flex-col sm:flex-row w-full flex-wrap items-center justify-between mt-5">
      <NavLink className="logo hidden sm:block mx-2 mr-1 flex flex-none items-center" to="/"><img src="images/Logo4.png" alt="Chalon's custom logo"></img></NavLink>
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
