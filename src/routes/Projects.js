import Project from "../components/Project";
import SmallProject from "..components/SmallProject"
import "../sass/Projects.scss";
import { projects } from "../assets/data";
import { smallProjects } from "../assets/data"

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
      <h2>Smaller Projects</h2>
      {smallProjects.map((project) => (
        <SmallProject
            tech={project.tech}
            title={project.title}
            goal={project.goal}
            github={project.github}
        />
      ))}

    </>
  );
}

export default Projects;
