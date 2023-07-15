import "../sass/About.scss";

/** About
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> About
 */
function About() {
  return (
    <div className="flex flex-col content-center items-center flex-wrap justify-center m-5 p-5 mb-5">
      <div className="w-96 h-96">
        <img
          src="/images/chalon.png"
          alt="Photo of Chalon"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="my-4 p-4">
        <div className="About-card p-4 text-center flex-col">
          <h2 className="About-title"> About Me</h2>
          <ul>
            <li>🏔️ Born and raised in Anchorage, Alaska</li>
            <li>🎨 Creative person with a sense of humor</li>
            <li>🚀 Strive to progress & improve each day</li>
          </ul>
          <h2 className="About-title">Hobbies</h2>
          <ul>
            <li>🌊 Snowboarding & surfing</li>
            <li>🏕️ Outdoor activities </li>
            <li>🥊 Muay Thai</li>
            <li>🎬 Podcasts & movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
