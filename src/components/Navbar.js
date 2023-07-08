import { NavLink } from "react-router-dom";
import React, { useState } from "react";

/** Navbar renders the navbar header.
 *
 * Props: none
 * State: None
 *
 * App -> Navbar
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent flex justify-between items-center font-body text-xl py-2 px-4">
      <NavLink className="flex items-center space-x-2" to="/">
        <img
          src="images/logo.png"
          alt="Chalon's custom logo"
          className="w-20 h-auto"
        />
      </NavLink>

      {/* Hamburger Button */}
      <div className="relative inline-block text-left md:hidden sm:inline-block">

        <div>
          <button
            type="button"
            className="hamburger-btn focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="dropdown-content absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Navbar Links */}
      <nav className="hidden md:flex space-x-4">
        <NavLink
          to="/"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className="px-2 py-1 text-gray-700 hover:text-gray-900"
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;