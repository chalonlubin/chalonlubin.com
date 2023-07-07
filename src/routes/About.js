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
      <div className="border-2 rounded-full w-96 h-96">
        <img src="/images/chalon.png" alt="Chalon" className="rounded-full" />
      </div>
      <div className="my-5 p-5">
        <div className="About-card card rounded bg-gray-900 text-white p-2 text-center">
          <h2 className="About-title"> About Me</h2>
          <ul>
            <li>🏔️ Born and raised in Anchorage, Alaska</li>
            <li>⚒️ I enjoy building, creating, and designing </li>
            <li>
              🎨 I'm a full-stack software engineer with for creative design
            </li>
            <li>
              🧞‍♂️ My goal is to design and develop apps that solve interesting
              problems
            </li>
            <li>🚀 I strive to progress & improve each day</li>
          </ul>

          <h2 className="About-title">Hobbies</h2>
          <ul>
            <li>🌊 Snowboarding & surfing</li>
            <li>🏕️ Hiking, camping, mountain biking, & backpacking</li>
            <li>🥊 Muay Thai</li>
          </ul>
          <h2 className="About-title">Interests & Goals</h2>
          <ul>
          <li>
              💰 Business: My goal is to run my own company eventually
            </li>
            <li>
              🖥️ Technology: To grow my skills engineer & designer
            </li>
            <li>
              👋 Social Issues: I spent 6 years working at non-profits before
              entering tech; specific interests include: mentorship for troubled
              youth, financial literacy for the public, & mental wellness for
              all
            </li>
            <li>
              🌎 Adventure: I traveled internationally for 3 years, spending
              most of my time in hostels while living out of a backpack{" "}
            </li>
            <li>🧠 Self Improvement: Reaching mental and physical goals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
