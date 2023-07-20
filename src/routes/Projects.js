import Project from "../components/Project";
import { projects, smallerProjects } from "../assets/data";
import Banner from "../components/Banner";

function Projects() {
  return (
    <>
      <Banner
        message="Check out my project readme's (found on github) for detailed information and insights"
        color="bg-green-300"
      />
      <h2 className="projects-title text-xl font-bold text-center pt-5">
        Full-Stack Applications
      </h2>
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

      <h2 className="projects-title text-xl font-bold text-center">
        Lighter Projects
      </h2>
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
