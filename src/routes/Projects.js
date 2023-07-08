import Project from "../components/Project";
import { projects, smallerProjects } from "../assets/data";

import "../sass/Projects.scss";

function Projects() {
  return (
    <>
      {/* Alert Banner */}
      <div className="bg-green-200 py-2 px-10 text-black text-center">
        <p className="mt-1">
          I write detailed <span className="font-bold underline">readmes</span>,
          check em out if you'd like to know more about my process!
        </p>
      </div>

      {/* Main Projects */}
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {projects.map((project) => (
          <Project
            tech={project.tech}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            key={project.title}
          />
        ))}
      </div>

      {/* Lighter Projects */}
      <h2 className="projects-title text-center">Lighter Projects</h2>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {smallerProjects.map((project) => (
          <Project
            title={project.title}
            tech={project.tech}
            description={project.description}
            github={project.github}
            link={project.link}
            key={project.title}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
