/**
 * About
 *
 * Renders information about the site owner, including a photo and details about their background and interests.
 *
 * Props: None
 * State: None
 *
 * App --> RouteList --> About
 */
function About() {
  return (
    <div className="my-6 mx-2">
      <div className="flex flex-col items-center h-full">
        {/* Photo */}
        <div className="w-96 h-96 mb-5">
          <img
            src="/images/chalon.png"
            alt="Headshot of Chalon"
            className="rounded-full shadow-lg hover:opacity-80"
          />
        </div>

        <div className="w-2/3 text-center mb-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Hello 👋</h2>
          <p>
            Hi, I'm Chalon - a freelance software engineer driven by creativity
            and analytical thinking. I bring a diverse background spanning
            hospitality management, mental health programming, and most recently
            software development. After years of building relationships and
            leading teams in the service industry, I pivoted to engineering to
            further challenge myself intellectually. I'm motivated by solving
            complex problems with a mix of logic and imagination. As a lifelong
            learner, I'm always seeking new skills and now applying my
            analytical mindset to build user-friendly applications.
            <br />
            <br />
            Currently, I'm open to new engineering opportunities that encourage
            continuous growth. Let's connect if you have any openings or simply
            want to chat!
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row lg:w-2/3 mb-20">
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
                • I'm <b>empathetic</b>, my background has given me the ability
                to see diverse perspectives with ease, and handle conflicts
                gracefully
              </li>
              <li>
                • In the last two industries I've worked in, I've earned
                leadership positions & <b>added revenue</b> through both
                networking and data analysis
              </li>
              <li>
                • I take pride having no ego, I'm{" "}
                <b>easygoing and approachable</b>. This translates to a smooth
                working experience whether we are working together or you've
                hired me
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
