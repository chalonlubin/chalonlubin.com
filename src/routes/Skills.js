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
      <div className="card flex flex-wrap flex-col rounded shadow-lg flex-wrap bg-white/50  items-center mb-20">
        <Skill type={skills.frontend} title="Frontend"></Skill>
        <Skill type={skills.backend} title="Backend"></Skill>
        <Skill type={skills.database} title="Database"></Skill>
        <Skill type={skills.tools} title="Tools"></Skill>
      </div>
    </div>
  );
}

export default Skills;
