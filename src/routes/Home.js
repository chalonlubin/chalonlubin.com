import React from "react";
import "../sass/Home.scss";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home flex flex-wrap items-center justify-center h-screen w-full">
      <div
        className="home-container text-center p-5 mb-44
      min-w-min"
      >
        <p className="home-basic text-lg mb-3"> Welcome to my site 👋</p>
        <h1 className="home-hero text-4xl mb-3">
          Hi! I'm Chalon
          <br />
          A Full-Stack
        </h1>

        <h2 className="home-engineer text-4xl mb-3 text-purple-700 font-bold">
          Software Engineer
        </h2>

        <h2>
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
        </h2>
        <div>
          <button className="bg-black text-white rounded p-3 m-4">
            Hire Me
          </button>
          <button className="bg-purple-700 text-white rounded p-3 m-4">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
