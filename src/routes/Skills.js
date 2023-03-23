import { skills } from "../assets/data";
import Skill from "../components/Skill"

/** Skills: Displays skills
 *
 * Props: none
 * State: none
 *
 * App --> RouteList --> SKills
 */
function Skills() {
  return (
    <div className="flex flex-col items-center p-5 m-5">
      <div className="text-center my-4">
        <h1 className="text-5xl">
          Skills &amp; Technologies
        </h1>
      </div>
      <div className="card flex bg-opacity-75 flex-wrap flex-col flex-wrap bg-white items-center">
      <Skill type={skills.frontend} title="frontend"></Skill>
      <Skill type={skills.backend} title="backend"></Skill>
      <Skill type={skills.database} title="database"></Skill>
      <Skill type={skills.tools} title="tools"></Skill>
      </div>
    </div>
  );
}

export default Skills;
