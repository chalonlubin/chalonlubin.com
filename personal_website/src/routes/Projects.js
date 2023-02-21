import React from "react";
import Project from "../components/Project";
import { projects } from "../assets/data";

function Projects() {
  return (
    <div className="projects-cards flex flex-wrap justify-center items-stretch p-2">
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
