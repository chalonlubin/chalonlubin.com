import Project from "../components/Project";
import "../sass/Projects.scss";
import { projects } from "../assets/data";


/** Project Page: Contains information on recent projects.
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> Projects
 */
function Projects() {
  return (
    <div className="projects">
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
    </div>
  );
}

export default Projects;
