import { RiGithubLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

/** Project
 *
 * State: none
 * Props: data = {title, subtitle, description, image, link, github}
 *
 * App -> RouteList -> Projects -> Project
 *
 */
function Project({ title, subtitle, description, image, link, github }) {
  return (
    <div className="rounded-lg shadow-lg bg-gray-900 m-5 w-80 text-center flex flex-wrap items-center">
      <a href="#!">
        <img
          className="rounded-t-lg max-w-xs grayscale opacity-25 hover:filter-none hover:opacity-100"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4 m-auto">
        <h5 className="text-white-900 text-xl font-medium mb-3">{title}</h5>
        <br></br>
        <p className="text-white-700 text-base mb-4">{description}</p>
      </div>
      <div className="flex content-evenly m-auto mb-1">
        <a className="px-10" href={link}>
          <CgWebsite
            className="w-11 h-11 hover:text-orange-300 text-pink-300"
            alt="demo"
          />
        </a>
        <a className="px-10" href={github}>
          <RiGithubLine
            className="w-11 h-11 hover:text-orange-300"
            alt="demo"
          />
        </a>
      </div>
    </div>
  );
}

export default Project;
