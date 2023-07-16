import "../sass/Project.scss";

function Project({ title, description, tech, image, link, github }) {
  return (
    <div className="project-card rounded-lg shadow-lg bg-white text-black m-4 w-80 text-center flex flex-col flex-wrap justify-center">
      {image && (
        <img
          className="rounded-t-lg max-w-sm h-60 w-full object-cover opacity-50 hover:filter-none hover:opacity-100"
          src={image}
          alt={title}
        />
      )}
      <div className="p-4 m-auto">
        <h2 className="project-title">{title}</h2>
        <h4 className="project-description">{description}</h4>
        <h3 className="project-tech">{tech}</h3>
      </div>
      <div className="flex content-evenly m-auto">
        {link && (
          <a href={link}>
            <button className="btn-primary bg-black m-4">Demo</button>
          </a>
        )}
        <a href={github}>
          <button className="btn-outline text-black m-4">Github</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
