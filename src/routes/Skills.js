import { skills } from "../assets/data";
import { BsCheckSquare } from "react-icons/bs";
import { HiChip } from "react-icons/hi";

/** Skills: Displays skills
 *
 * Props: none
 * State: none
 *
 */
function Skills() {
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="text-center my-8">
        <HiChip className="h-10 w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed text-lg xl:w-2/4 lg:w-3/4 mx-auto">
          Technologies I have worked with recently
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
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
