import Project from "../components/Project";
import SmallerProject from "../components/SmallerProject"
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
      <h2 className="text-center">Smaller Projects</h2>
      <div className="projects-cards flex flex-wrap justify-evenly px-1">

      {smallerProjects.map((project) => (
        <SmallerProject
            tech={project.tech}
            title={project.title}
            goal={project.goal}
            github={project.github}
        />
      ))}
    </div>
    </>
  );
}

export default Projects;
