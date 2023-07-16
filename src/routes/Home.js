import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

//TODO: change start of typewriter

function Home() {
  return (
    <div className="flex justify-center align-center items-center h-100">
      <div className="flex flex-col justify-center items-center w-auto gap-3">
        <p className="text-lg pb-3 self-start">Welcome to my site 👋</p>
        <h1 className="text-4xl">
          I'm Chalon,
          <br />A Full-Stack <br />
          <span className="text-4xl text-purple-700 font-semibold">
            Software Engineer
          </span>
        </h1>

      <div className="text-lg">
        <Typewriter
          options={{
            strings: [
              "I enjoy bringing ideas to life, from concept to product.",
              "I value forward momentum equally as much as learning from failures.",
              "I love building, both virtually and physically.",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
            delay: 30,
            deleteSpeed: 30,
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <Link to="contact" className="btn btn-primary">
          Hire Me
        </Link>
        <Link to="/projects" className="btn btn-outline">
          Portfolio
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
