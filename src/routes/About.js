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
            <b>March 2022</b>, after a friend of mine explained how he wrote a
            program that solved an issue at work. He showed me what he did, and
            I found that fascinating. He had over a decade of experience under
            his belt, and offered mentorship. I took him up on it, and shortly
            became hooked! As I was self studying, I was finding I wanted a more
            structured learning experience, where I could collaborate with other
            programers. I decided to take the leap, and commit to a full time
            coding bootcamp. After 6 months of 50-60 hours a week of hard studying,
            I graduated from a full stack software engineering bootcamp
            <a className="text-orange-300" href="https://www.rithmschool.com/">
              {" "}
              Rithm School,{" "}
            </a>
            and have started building real-world projects to keep myself sharp.
            <br></br>
            <br></br>
            I really enjoy coding because it is a wonderful creative outlet that
            has no limit on how far you can progress in skill.
            I am a curious, tinkering individual that loves measurable progression.
            The field of software engineering evolves so quickly that there will
            always be something to learn and ways to improve yourself, and for me
            that is perfect.
            I love the challenge of solving problems and potential ability to
            improve processes at scale.I am thrive in
            environments that allow me to improve myself regularly, make
            tangible progress towards goals, and have variety in everyday work.
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
