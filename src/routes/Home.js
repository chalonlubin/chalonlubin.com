import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center p-5">
      <p className="text-lg mb-3">Welcome to my site 👋</p>
      <h1 className="text-4xl leading-10">
        I'm Chalon,
        <br />A Full-Stack <br />
        <span className="text-4xl text-purple-700 font-semibold">
          Software Engineer
        </span>
      </h1>
      <div className="text-lg flex justify-center">
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
      <div className="mt-4 grid">
        <Link to="contact" className="btn btn-primary mx-5">
          Hire Me
        </Link>
        <Link to="/projects" className="btn btn-outline mx-5">
          Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Home;
