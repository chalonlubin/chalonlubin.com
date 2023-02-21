import React from "react";
import Project from "../components/Project";
import "../sass/Projects.scss";
import { projects } from "../assets/data";

function Projects() {
  return (
    <div className="projects-cards flex flex-wrap justify-center items-stretch px-2">
      {projects.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          github={project.github}
        />
      ))}
    </div>
  );
}

export default Projects;
