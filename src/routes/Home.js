import React, { useEffect } from "react";
import "../sass/Home.scss";
import Typewriter from "typewriter-effect";

/** Home: Root / landing page.
 *
 *  Props: none
 *  State: word
 *
 * App --> RouteList --> Home
 */
function Home() {
  const [word, setWord] = React.useState("am a full stack software engineer");
  const words = [
    "I enjoy bringing designs to life, from wire-frame to development.",
    "I value forward momentum equally as much as learning from failures.",
    "I'm a builder (and breaker), both virtually and physically!",
    "I have friends on pow days, sometimes.",
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
          <h1 className="logo">
            <b>
              I<span>'m</span>
            </b>{" "}
            <b>
              C<span>ha</span>l<span>o</span>n,
            </b>{" "}
            a full stack{" "}
            <b>
              soft<span>ware</span> engin<span>ee</span>r
            </b>{" "}
            in Bend, OR.
          </h1>
          <div id="typewriter">
            <Typewriter
              options={{
                strings: [
                  "I enjoy bringing designs to life, from wire-frame to development.",
                  "I value forward momentum equally as much as learning from failures.",
                  "I'm a builder (and breaker), both virtually and physically!",
                  "I have friends on pow days, sometimes.",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
                delay: 30,
                deleteSpeed: 40,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
