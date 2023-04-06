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
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="logo">
          I'm{" "}
          <b>
            C<span>ha</span>l<span>o</span>n,
          </b>{" "}
          a full stack{" "}
          <b>
            s<span>o</span>f<span>twa</span>re<span> eng</span>in<span>ee</span>
            r
          </b>{" "}
          in Bend, OR.
        </h1>
        <div id="typewriter">
          <Typewriter
            options={{
              strings: [
                "I enjoy bringing ideas to life, from concept to product.",
                "I value forward momentum equally as much as learning from failures. ",
                "I love building, both virtually and physically.",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
              delay: 35,
              deleteSpeed: 45,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
