import { skills } from "../assets/data";
import Skill from "../components/Skill";

/** Skills: Displays skills
 *
 * Props: none
 * State: none
 *
 * App --> RouteList --> SKills
 */
function Skills() {
  return (
    <div className="flex flex-col items-center m-5 ">
      <div className="text-center my-8 py-5">
        <h1 className="text-5xl">Skills &amp; Technologies</h1>
      </div>
      <div className="card flex flex-wrap flex-col shadow-lg shadow-black-500/50 flex-wrap bg-black/75  items-center mb-20">
        <Skill type={skills.frontend} title="frontend"></Skill>
        <Skill type={skills.backend} title="backend"></Skill>
        <Skill type={skills.database} title="database"></Skill>
        <Skill type={skills.tools} title="tools"></Skill>
      </div>
    </div>
  );
}

export default Skills;
