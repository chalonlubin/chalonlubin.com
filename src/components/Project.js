import "../sass/Project.scss";

/** Project
 *
 * State: none
 * Props: data = {title, subtitle, image, link, github}
 *
 * App -> RouteList -> Projects -> Project
 *
 */
function Project({ title, description, tech, image, link, github }) {
  return (
    <div className="rounded-lg shadow-lg bg-gray-900 m-5 w-80 text-center flex flex-wrap items-center">
      <img
        className="rounded-t-lg max-w-xs opacity-25 hover:filter-none hover:opacity-100"
        src={image}
        alt={title}
      />
      <div className="p-4 m-auto">
        <h2 className="project-title">{title}</h2>
        <h3 className="project-tech">{tech}</h3>
        <h4 className="project-description">{description}</h4>
      </div>
      <div className="flex content-evenly m-auto">
        <button className="btn btn-outline m-5" href={github}>
          Demo
        </button>
        <button className="btn btn-outline m-5" href={github}>
          Github
        </button>
      </div>
    </div>
  );
}

export default Project;
