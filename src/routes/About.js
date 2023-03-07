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
            in <b>Bend, OR.</b> I first became interested in coding in{" "}
            <b>March 2022</b>, after a friend of mine wrote a program to scan a
            video game auction house for deals, and buy automatically. He showed
            me what he did, and I found that fascinating. He was employed as a
            senior dev, took me under his wing and suggested some great learning
            materials. I became hooked! Since then, I have graduated from a full
            stack software engineering bootcamp
            <a className="text-orange-300" href="https://www.rithmschool.com/">
              {" "}
              Rithm School,{" "}
            </a>
            and have started building real-world projects to keep myself sharp.
            <br></br>
            <br></br>
            I enjoy coding because it is a creative outlet for me. I love
            the challenge of solving problems and opportunity to participate in
            an industry that changes drastically each year. <u>I am thrive in
            environments that allow me to improve myself regularly, make
            tangible progress towards goals, and have variety in everyday work.</u>
            <br></br>
            <br></br>When I'm not coding, I like to spend to my time outdoors.
            Summers I can be found hiking, biking, fishing, or camping. Granted,
            in the winter, I spend most of my outdoor time snowboarding, but I do enjoy playing video games,
            reading, and binging a good show or movie here and there.
            Another passion of mine is traveling. Since I lived in Australia, New Zealand,
            and spent six months backpacking across Southeast Asia, I've developed a deep
            appreciation for diverse cultures and experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
