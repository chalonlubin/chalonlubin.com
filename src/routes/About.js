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
          <h2 className="text-3xl font-heading font-semibold mb-4">
            Hello 👋
          </h2>
          <p>
            I'm a seasoned software engineer with a unique
            background spanning mental health, hospitality
            management, and sales. I bring a fresh perspective to
            problem-solving, using data-driven creativity to
            craft effective solutions. My passion lies in
            leveraging technology to enhance both individual
            lives and businesses, and I'm eager to continue this
            journey in the field of software development.
            <br />
            <br />
            Currently, I'm open to career & contract
            opportunities that encourage creativity and unique
            opportunities. Let's connect if you have a project in
            mind, an opening on your team, or if you simply want
            to get in touch!
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row lg:w-3/4">
          <div className="About-card p-4 m-4 text-center flex-1">
            <h2 className="About-title"> About Me</h2>
            <ul>
              <li>🏔️ Born and raised in Anchorage, Alaska</li>
              <li>🎨 Creative person with a sense of humor</li>
              <li>🚀 Strive to progress & improve each day</li>
            </ul>
            <h2 className="About-title">I enjoy these things</h2>
            <ul>
              <li>🚵 Snowboarding & mountain biking</li>
              <li>🏕️ Hanging outdoors with my dogs</li>
              <li>🥊 Muay Thai</li>
              <li>📈 Discussing business & economics </li>
              <li>🎬 Consuming podcasts & movies</li>
            </ul>
          </div>

          <div className="About-card p-4 m-4 text-center flex-1">
            <h2 className="About-title"> Career Strengths</h2>
            <ul>
              <li>
                • My blended background spanning hospitality,
                psychology, and engineering gives me a unique
                toolkit. I couple analytical thinking with
                creativity, empathy, and communications skills.
              </li>
              <li>
                • I'm business minded, and have a history of
                increasing revenue based on data informed
                decisions - I increased bar revenue by 30% in my
                last position by adjusting pricing informed by
                competitor cost analysis & analyzing the data on
                popular items and adjusting marketing
                accordingly.
              </li>
              <li>
                • I am easygoing, approachable, and ego-free.
                This means I am enjoyable to work with and make
                collaboration smooth, whether we are coworkers or
                you've hired me as a contractor.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
