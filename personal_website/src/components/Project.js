import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";

function Project({ title, subtitle, description, image, link, github }) {
  return (
    <div className="project-card rounded-lg shadow-lg bg-black m-5 p-7 max-w-lg text-center flex flex-col justify-center items-center">
      <a href="#!">
        <img
          className="rounded-t-lg max-w-md max-h-96"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4">
        <h5 className="text-white-900 text-xl font-medium mb-3">{title}</h5>
        <br></br>
        <p className="text-white-700 text-base mb-4">{description}</p>
      </div>
      <div className="flex content-evenly m-auto">
        <a className="mx-10" href={link}>
          <CgWebsite
            className="w-12 h-12 hover:text-orange-300 text-pink-300"
            alt="demo"
          />
        </a>
        <a className="mx-10" href={github}>
          <RiGithubLine
            className="w-12 h-12 hover:text-orange-300"
            alt="demo"
          />
        </a>
      </div>
    </div>
  );
}

export default Project;
