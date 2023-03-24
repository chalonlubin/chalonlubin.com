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
      <div class="border-2 rounded-full w-96 h-96">
        <img src="/images/chalon.png" alt="Chalon" className="rounded-full" />
      </div>
      <div className="my-5 p-5">
        <div className="About-card card rounded bg-gray-900 text-white p-2 text-center">
          <h2 className="About-title"> About Me</h2>
          <ul>
            <li>🏔️ Born and raised in Anchorage, Alaska.</li>
            <li>⚒️ I enjoy building, creating, and designing. </li>
            <li>
              👨‍💻 Full-stack software engineer with an equal love for both
              stacks.
            </li>
            <li>
              🧞‍♂️ My goal is to design and develop apps that solve interesting
              problems.
            </li>
            <li>🚀 I live for progression and self improvement.</li>
          </ul>

          <h2 className="About-title">Hobbies</h2>
          <ul>
            <li>🌊 Snowboarding & surfing</li>
            <li>🏕️ Hiking, camping & backpacking</li>
            <li>🥊 Muay Thai</li>
            <li>
              👾 Video games. Fable, Skyrim, & Witcher are some of my all-time
              favorite series
            </li>
            <li>
              🎹 Music (I'm better at listening to it than I am making it)
            </li>
            <li> 🌎 Traveling. 12 countries down, many more to go</li>
            <li>
              🏒 Sports. I played Hockey for 12 years, and love watching
              basketball. Denver Nuggets!{" "}
            </li>
          </ul>
          <h2 className="About-title">Passions</h2>
          <ul>
            <li>
              🖱️ Technology: I'm interested solving the worlds issues in an
              efficient and creative way through use of software
            </li>
            <li>
              👋 Social Work: I like empowering and providing assistance to
              folks in need; specifically regarding troubled youth, financial
              literacy, and mental wellness.
            </li>
            <li>
              🧠 Mindfulness: To me, this is betterment of self by cleaning the
              mind
            </li>
            <li>
              🐶 Animals: I foster dogs and dream of having a rescue someday
            </li>
            <li>
              ♻️ Sustainability: I'm interested in vertical farming, wind
              turbines, re-purposing items & solar farms
            </li>
          </ul>
        </div>
      </div>
      <div className="About-card card rounded bg-gray-900 text-white items-center p-2 text-center mb-8">
        <h2 className="About-title"> What's up with the logo? </h2>
        <img
          src="images/logo.png"
          alt="Chalon's custom logo"
          className="logo-image"
        ></img>
        <p>
          The logo is something I created in Figma. I thought it was a good
          representation of forward progress, momentum and a play with colors.
          Initially I was going to go with a snowball, but I like color a bit
          too much!
        </p>
      </div>
    </div>
  );
}

export default About;
