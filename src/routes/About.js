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
    <div className="flex flex-col items-center">
      {/* Photo */}
      <div className="w-96 h-96 mb-5">
        <img
          src="/images/chalon.png"
          alt="Photo of Chalon"
          className="rounded-full shadow-lg"
        />
      </div>

      <div className="w-2/3 text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hi, I'm Chalon!</h2>
        <p>
          I'm a freelance software engineer. I've also been a bartender and bar
          manager for the last few years, and prior to that I was a mental
          health program director. I have pivoted to software engineering
          because I find it mentally engaging, and great way to express a mix of
          logic and creativity. I'm currently open to employment opportunities,
          lets touch base if you have something to offer or just want to
          connect.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row lg:w-2/3 mb-12">
        <div className="About-card p-4 m-4 text-center flex-1">
          <h2 className="About-title"> About Me</h2>
          <ul>
            <li>🏔️ Born and raised in Anchorage, Alaska</li>
            <li>🎨 Creative person with a sense of humor</li>
            <li>🚀 Strive to progress & improve each day</li>
          </ul>
          <h2 className="About-title">When I'm not coding I'm...</h2>
          <ul>
            <li>🌊 Snowboarding & surfing</li>
            <li>🏕️ Hanging outdoors with my dogs</li>
            <li>🥊 Muay Thai</li>
            <li>🎬 Consuming podcasts & movies</li>
          </ul>
        </div>

        <div className="About-card p-4 m-4 text-center flex-1">
          <h2 className="About-title"> Why I Add Value</h2>
          <ul>
            <li>
              • I'm empathetic, my background has given me the ability to see
              diverse perspectives with ease, and handle conflicts gracefully
            </li>
            <li>
              • In the last two industries I've worked in, I've earned
              leadership positions & added revenue through both networking and
              data analysis
            </li>
            <li>
              • I take pride having no ego, I'm easygoing and approachable.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
