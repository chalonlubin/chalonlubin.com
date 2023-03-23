import { skills } from "../assets/data";
import { BsCheckSquare } from "react-icons/bs";

/** Skills: Displays skills
 *
 * Props: none
 * State: none
 *
 */
function Skills() {
  return (
    <div className="flex flex-col items-center flex-wrap p-5 m-5">
      <div className="text-center my-8">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
      </div>
      <div className="flex flex-wrap w-3/5 lg:w-4/5 sm:mb-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 lg:w-1/4 w-full xm">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BsCheckSquare className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
