import React from "react";
import Project from "../components/Project";
import { projects } from "../assets/data";

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects flex">
        {projects.map((project) => (
          <div className="flex justify-center space-between ">
            <div className="rounded-lg shadow-lg bg-dark max-w-sm">
              <a href="#!">
                <img className="rounded-t-lg" src={project.image} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {project.title}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
