import "../sass/About.scss"

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
          <img
            src="/images/chalon.png"
            alt="Chalon"
            className="rounded-full"
          />
      </div>
      <div className="my-5 p-5">
        <div className="About-card card rounded bg-gray-900 text-white p-2 text-center">
          <h2 className="About-title"> About Me</h2>
          🏔️ Born and raised in Anchorage, Alaska. <br/>
          👨‍💻 Full-stack software engineer with an equal love for both stacks.<br/>
          ⚒️ I enjoy building, creating, and designing. <br/>
          🧞‍♂️ My goal is to design and develop apps that solve interesting problems. <br/>
          🚀 I live for progression and self improvement. <br/>
          <br/>
          <h2 className="About-title">Hobbies</h2>
          🌊 Snowboarding & surfing<br/>
          🏕️ Hiking, camping & backpacking<br/>
          🥊 Muay Thai<br/>
          👾 Video games. Fable, Diablo, Witcher are some of my all-time favorite series<br/>
          🎹 Music. Love a good festival or concert. <br/>
          🌎 Traveling. 12 countries down, many more to go.<br/>
        </div>
      </div>
    </div>
  );
}

export default About;
