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
            I'm a freelance software engineer driven by creativity
            and analytical thinking. I bring a diverse background spanning
            hospitality management, mental health programming, and most recently
            software development. After years of building relationships and
            leading teams in the service industry, I pivoted to engineering to
            further challenge myself intellectually. I enjoy solving complex
            problems with a mix of logic and imagination. As a lifelong learner,
            I'm always seeking new skills and now applying my analytical mindset
            to build user-friendly applications.
            <br />
            <br />
            Currently, I'm open to new engineering opportunities that encourage
            growth & creativity. Let's connect if you have any openings or
            simply want to chat!
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
                • My blended background spanning hospitality, psychology, and
                engineering gives me a unique toolkit. I couple analytical
                thinking with creativity, empathy, and communications skills.
              </li>
              <li>
                • I have a knack for bringing in dollars - I increased bar
                revenue by 30% in my last position by adjusting pricing informed
                by competitor cost analysis & simply surveying the regulars.
              </li>
              <li>
                • I am easygoing, approachable, and ego-free. This means I am
                enjoyable to work with and make collaboration smooth, whether we
                are coworkers or you've hired me as a contractor.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
