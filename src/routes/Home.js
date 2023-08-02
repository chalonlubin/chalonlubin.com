import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-2 sm:pt-4 sm:p-4 mx-3 md:mx-10">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full">
        <div className=" p-4 w-full md:w-1/2">
          <div className="flex flex-col items-center justify-gap-3 mt-6 font-heading">
            <p className="text-lg pb-3">Welcome to my site ⚡️</p>
            <h1 className="text-4xl text-center">
              I'm Chalon,
              <br />
              Full-Stack <br />
              <span className="text-purple-600 font-semibold">
                Software Engineer
              </span>
            </h1>
            <h2 className="font-semibold text-xl p-3 text-center">
              With a background in psychology and communication
            </h2>
            <div className="text-lg text-center">
              <Typewriter
                options={{
                  strings: [
                    "I enjoy bringing ideas to life, from concept to product.",
                    "I value forward momentum equally as much as learning from failures.",
                    "I love building, both virtually and physically.",
                    "Does anyone ever read these?",
                    "If you actually read all of that, you are amazing 😁",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                  delay: 30,
                  deleteSpeed: 30,
                }}
              />
            </div>
            <div className="flex sm:flex-row gap-6 md:gap-10">
              <Link to="contact" className="btn btn-primary">
                Hire Me
              </Link>
              <Link to="/projects" className="btn btn-outline">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 w-full md:w-1/2 flex justify-center">
          <div className="bg-purple-200 p-1 rounded-xl">
            <img
              src="/images/chalon1.webp"
              className="border rounded-xl shadow-sm hover:opacity-80"
              alt="Chalon outside"
            />
          </div>
        </div>
      </div>

      {/* Bottom section, may use later */}
      {/* <div className="bg-green-200 p-4 mt-4 w-full">Box 3</div> */}
    </div>
  );
}

export default Home;
