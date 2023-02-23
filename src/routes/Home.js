import React, { useEffect } from "react";
import "../sass/Home.scss";

/** Home: Root / landing page.
 *
 *  Props: none
 *  State: word
 *
 * App --> RouteList --> Home
 */
function Home() {
  const [word, setWord] = React.useState("am a freelance web developer. 👋");
  const words = [
    "enjoy making out-of-the-box designs! 👽",
    "am a full stack software engineer 👾",
    "was born in Alaska 🏂",
    "have traveled to 4 continents ✈️ ",
  ];

  /** Changes word phrase every 2.5 seconds, randomly. */
  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 2500);
    return () => clearInterval(interval);
  });

  return (
    <div className="home">
      <section>
        <div className="home-container">
          <p>Welcome, I'm</p>
          <h1>
            <span className="orange">Chalon Lubin</span>
          </h1>
          <h2>
            <span id="iAm">I {word}</span>
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
