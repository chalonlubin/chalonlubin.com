import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import ResumePopup from "./ResumePopup";

/** Navbar
 *
 *  Props: none
 *  State: none
 *
 * App --> Navbar
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="px-2 py-4 shadow-lg">
        <div className="flex items-center justify-between flex-wrap">
          <NavLink to="/">
            <div className="flex items-center flex-shrink-0 text-black">
              <img className="h-14 w-14 mr-2" alt="logo" src="/logo.svg"></img>
              <span className="font-bold text-4xl tracking-tight font-heading">
                Chalon.dev
              </span>
            </div>
          </NavLink>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-black hover:text-black hover:border-black"
              onClick={toggleDropdown}
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:block lg:flex lg:items-center lg:w-auto bg-whitesmoke ${
              isOpen ? "shadow-lg" : ""
            } py-2 px-4 mt-2 lg:mt-0 lg:space-x-5`}
          >
            <div className="text-sm font-semibold lg:flex-grow space-y-2 lg:space-y-0 lg:space-x-5 lg:flex">
              <NavLink
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-400 px-3 py-2 rounded"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-400 px-3 py-2 rounded"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/skills"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-400 px-3 py-2 rounded"
              >
                Skills
              </NavLink>
              <NavLink
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-400 px-3 py-2 rounded"
              >
                Contact
              </NavLink>
            </div>
            <div>
              <ResumePopup />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
