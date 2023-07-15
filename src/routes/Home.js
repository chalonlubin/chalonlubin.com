import React from "react";
import "../sass/Home.scss";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home-container flex flex-wrap items-center justify-center h-screen w-full">
      <div className="home-wrapper text-center p-5 mb-44 min-w-min">
        <p className="home-welcome text-lg mb-3">Welcome to my site 👋</p>
        <h1 className="home-hero text-4xl mb-3 tracking-wider">
          Hi! I'm Chalon
          <br />A Full-Stack <br />
          <span className="text-4xl mb-3 text-purple-700 font-bold">
            Software Engineer
          </span>
        </h1>
        <p className="home-welcome text-lg mb-3">
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
        </p>
        <div className="mt-4">
          <button className="btn-primary mx-5">
            Hire Me
          </button>
          <button className="btn-outline mx-5">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
