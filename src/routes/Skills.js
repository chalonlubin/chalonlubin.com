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
    <>
      <Banner message="Hover icons for additional detail" />
        <div className="flex flex-wrap flex-col rounded shadow bg-white items-center m-14">
          <Skill type={skills.frontend} title="Frontend"></Skill>
          <Skill type={skills.backend} title="Backend"></Skill>
          <Skill type={skills.database} title="Database"></Skill>
          <Skill type={skills.tools} title="Tools"></Skill>
      </div>
    </>
  );
}

export default Skills;
