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
  const [word, setWord] = React.useState("am a freelance web developer 👋");
  const words = [
    "enjoy creating out-of-the-box designs! 👽",
    "am a full stack software engineer 👾",
    "was born in Alaska 🏂",
    "have traveled to 12 countries ✈️ ",
    "I have pet a moose",
    "I have seen the northern lights!"
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
          <h1 className="orange">Chalon Lubin</h1>
          <h2>
            <span id="iAm">I {word}</span>
          </h2>
          <h2 className="home-sub my-6">
            I'm interested in developing projects that solve real world problems,
            improve lives, inspire creativity or that are simply interesting.
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
