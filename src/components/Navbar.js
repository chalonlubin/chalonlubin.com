import { NavLink, Link } from "react-router-dom";
import "../sass/Navbar.scss";

function Navbar() {
  return (
    <header className="header-nav">
      <Link className="logo" to="/"><img src="/images/logo4.png" alt="logo" /></Link>
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
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
