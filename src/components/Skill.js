/** Skill
 *
 *  Props: type, title
 *  State: none
 *
 * App --> RouteList --> Skills --> Skill
 */
function Skill({ type, title }) {
  return (
    <>
      <h2 className="sm:text-2xl text-xl text-white p-2 text-4xl">{title}: </h2>
      <ul className="p-2 flex flex-row flex-wrap justify-center">
        {type.map((skill, index) => (
          <li className="p-3" key={index}>
            <img
              src={`/images/skills/${skill}.svg`}
              alt={skill}
              width="50px"
              height="50px"
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skill;
