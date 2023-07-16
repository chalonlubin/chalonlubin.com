import Project from "../components/Project";
import { projects, smallerProjects } from "../assets/data";

import "../sass/Projects.scss";

function Projects() {
  return (
    <>
      {/* Alert Banner */}

      <div className="bg-green-300 py-3 text-black text-center">
        <p>
        Take a gander at the project's <span className="font-semibold underline">readme's</span> for detailed information and insights
        </p>
      </div>

      {/* Main Projects */}
      <h2 className="projects-title text-xl font-bold text-center pt-5">Web Applications</h2>
      <div className="projects-cards flex flex-wrap justify-evenly">
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
      <h2 className="projects-title text-xl font-bold text-center">Lighter Projects</h2>
      <div className="projects-cards flex flex-wrap justify-evenly">
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
      <div className="mb-12"></div>
    </>
  );
}

export default Projects;
