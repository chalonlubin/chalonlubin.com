import { skills } from "../assets/data";
import Skill from "../components/Skill";
import Banner from "../components/Banner";

/** Skills
 *
 * Displays skills as icons
 *
 * Props: none
 * State: none
 *
 * App --> RouteList --> Skills
 */
function Skills() {
  return (
    <div className="flex-grow">
      <Banner message="Hover icons for additional detail" />
      <div className="flex justify-center items-center h-full m-4">
        <div className="flex flex-wrap flex-col rounded flex-wrap bg-white items-center">
          <Skill type={skills.frontend} title="Frontend"></Skill>
          <Skill type={skills.backend} title="Backend"></Skill>
          <Skill type={skills.database} title="Database"></Skill>
          <Skill type={skills.tools} title="Tools"></Skill>
        </div>
      </div>
    </div>
  );
}

export default Skills;
