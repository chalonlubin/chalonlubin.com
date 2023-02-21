import React from "react";

function Skills() {
  return (
    <section>
      <h1> SKILLS </h1>
      <div className="skills flex text-center ">
        <div className="project-card rounded-lg shadow-lg bg-gray-900 m-5 p-7 max-w-lg text-center flex flex-col justify-center items-center">
          <ul>
            <li> FRONTEND:</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Tailwind</li>
            <li>MaterialUI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="project-card rounded-lg shadow-lg bg-gray-900 m-5 p-7 max-w-lg text-center flex flex-col justify-center items-center">
          <ul>
            <li>BACKEND:</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Flask</li>
            <li>SQLAlchemy</li>
          </ul>
        </div>
        <br></br>
        <div className="project-card rounded-lg shadow-lg bg-gray-900 m-5 p-7 max-w-lg text-center flex flex-col justify-center items-center">
          <ul>
            <li>UTILITIES:</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>VS Code</li>
            <li>Insomnia</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
