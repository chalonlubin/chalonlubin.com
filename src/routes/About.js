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
    <div className="about">
      <section>
        <img className="rounded-t-lg" src="images/chalon1.png" alt="Chalon" />
        <div className="rounded-lg shadow-lg bg-gray-900 mx-5">
          <p className="text-base text-gray-50">
            I'm an Alaskan born full-stack software engineer, currently living
            in <b>Bend, OR.</b> I first became interested in coding in <b>March 2022</b>,
            after a friend of mine wrote a program to scan a video game auction
            house for deals, and buy automatically. He showed me what he did,
            and I found that fascinating. Since he was working as a senior dev,
            took me under his wing and pointed me to some great learning
            materials. I became hooked! Since then, I have graduated from a
            highly regarded full stack software engineering bootcamp
            <a className="text-orange-300" href="https://www.rithmschool.com/">
               {" "}Rithm School,{" "}
            </a>
             and started my own
            <a className="text-fuchsia-300" href="https://www.farout.com/">
            {" "} web development company  {" "}
            </a>
            to keep myself sharp while I search for
              full time work.
            <br></br>
            <br></br><u>I enjoy coding because it is a creative outlet for me.</u> I
            love the challenge of solving problems and opportunity to
            participate in an industry that changes drastically each year. I am
            always looking for new ways to improve my skills, and I am excited
            to see what the future holds. <br></br>
            <br></br>When I'm not coding, I try to my time outdoors hiking,
            biking, and camping. In the winter I snowboard every chance I get. I
            also like playing rec ice hockey, and practice muay thai regularly.
            I enjoy a good music festival here and there as well, and I love to
            travel. Since I lived in Australia, New Zealand, and spent six
            months backpacking across Southeast Asia, I've developed a deep
            appreciation for diverse cultures and experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
