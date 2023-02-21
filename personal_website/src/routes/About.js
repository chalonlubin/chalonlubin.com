import React from "react";
import "../sass/About.scss";

function About() {
  return (
    <div className="about">
      <section>
        <img className="rounded-t-lg" src="images/chalon1.png" alt="Chalon" />
        <div className="rounded-lg shadow-lg bg-white ">
          <p className="text-grey-700 text-base mb-4">
            I'm an Alaskan born full-stack software engineer, currently living
            in Bend, OR. I found a love for coding in March 2022, when a friend
            of mine introduced me to writing scripts for a video game we were
            playing at the time. He explained what he did for work, and I asked
            a million follow-up questions. Once he pointed me in the right
            direction to start learning, I was off. Since then I have graduated
            from a top-tier full stack software engineering bootcamp and started
            my own web design company for freelance work.
            <br></br>
            <br></br>I enjoy coding because it is a creative outlet for me. I
            love the challenge of solving problems and opportunity to
            participate in an industry that changes drastically each year. I am
            always looking for new ways to improve my skills, and I am excited
            to see what the future holds. <br></br>
            <br></br>When I'm not coding, I enjoy spending my time outdoors,
            hiking, biking, and camping. In the winter I snowboard every chance
            I get. I also train in muay thai regularly. I enjoy a good music
            festival here and there as well, and I love to travel. Having lived
            in Australia, New Zealand, and spent six months backpacking across
            Southeast Asia, I have developed a deep appreciation for diverse
            cultures and experiences.
            <br></br>
            <br></br>
            In summary, I am a driven and dynamic individual who brings a unique
            combination of technical and creative skills to every project I
            undertake. Whether I'm coding or exploring the great outdoors, I am
            always eager to learn and grow both personally and professionally.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
