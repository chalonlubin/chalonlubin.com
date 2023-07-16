import React, { useState } from "react";

/** Skill
 *
 *  Creates list item skill icons
 *
 *  Props: {skill: type, title }
 *  State: hoveredSkill - boolean or null
 *
 * App --> RouteList --> Skills --> Skill
 */
function Skill({ type, title }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <>
      <h2 className="sm:text-2xl text-xl text-black p-2 text-4xl font-heading font-bold">
        {title}:{" "}
      </h2>
      <ul className="p-2 flex flex-row flex-wrap justify-center items-center">
        {type.map((skill, index) => (
          <li
            className="p-3 relative"
            key={index}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={`/images/skills/${skill}.svg`}
              alt={skill}
              width="50px"
              height="50px"
            />
            {hoveredSkill === skill && (
              <div className="bg-gray-200 text-black text-sm font-sub py-2 px-3 rounded-md absolute top-full left-1/2 transform -translate-x-1/2">
                {skill}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skill;
