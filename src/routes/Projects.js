import Project from "../components/Project";
import { projects, smallerProjects } from "../assets/data";
import "../sass/Projects.scss";

/** Project Page: Contains information on recent projects.
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> Projects
 */
function Projects() {
  return (
    <>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {projects.map((project) => (
          <Project
            tech={project.tech}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
      <h2 className="projects-title text-center">Smaller Projects</h2>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">
        {smallerProjects.map((project) => (
          <Project
            title={project.title}
            tech={project.tech}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
      <div className="projects-extra pb-10 text-center">
        <h2 className="projects-title text-center">Coming soon....</h2>
        <h3>
          Van conversion story with pictures, and a blurb about what I am working on now!{" "}
        </h3>
      </div>
    </>
  );
}

export default Projects;
