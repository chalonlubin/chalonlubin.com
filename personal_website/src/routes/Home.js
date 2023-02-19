import React, { useEffect, useState } from "react";
import "../sass/Home.scss";
import heroImage from "../assets/hero.png";

function Home() {
  const [word, setWord] = React.useState("a freelance web developer.");
  const words = [
    "a world traveler.",
    "an avid Denver Nuggets fan.",
    "a full stack software engineer.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="home">
        <p>Welcome, I am</p>
        <h1>
          <span className="orange">Chalon.</span>
        </h1>
        <h2>
          I am <span id="iAm">{word}</span>
          <br></br>I'm interested developing projects that solve real world
          problems, improve lives, inspire creativity or that are just{" "}
          <span className="pink">plain fun.</span>
        </h2>
      </section>
    </div>
  );
}

export default Home;
