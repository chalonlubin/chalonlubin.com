import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-6 relative z-10">
      <div className="flex items-center justify-between flex-wrap">
        <NavLink to="/">
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <img
              className="h-8 w-8 mr-2"
              alt="logo"
              src="images/logo.png"
            ></img>
            <span className="font-semibold text-xl tracking-tight">
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
              className="fill-current h-3 w-3"
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
          <div className="text-sm lg:flex-grow space-y-2 lg:space-y-0 lg:space-x-5 lg:flex">
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
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-black hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
