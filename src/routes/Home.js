import React, { useEffect } from "react";
import "../sass/Home.scss";

function Home() {
  const [word, setWord] = React.useState("a freelance web developer.");
  const words = [
    "an animal lover.",
    "an avid Denver Nuggets fan.",
    "a full stack software engineer.",
    "a freelance web developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <section>
        <div className="home-container">
          <p>Welcome, I'm</p>
          <h1>
            <span className="orange">Chalon Lubin</span>
          </h1>
          <h2>
            I am <span id="iAm">{word}</span>
            <br></br>I'm interested developing projects that solve real world
            problems, improve lives, inspire creativity or that are simply
            interesting.
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
