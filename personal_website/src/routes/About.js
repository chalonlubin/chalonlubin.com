import React from "react";
import "../sass/About.scss";
import chalon from "../assets/Chalon1.jpeg";

function About() {
  return (
    <div className="about">
      <section>
        <img src={chalon} alt="Chalon" />
        <div>
          <p>
            I'm an Alaskan born full-stack software engineer, currently living
            in Bend, OR. I found a love for coding in March 2022, when a friend
            of mine introduced me to writing scripts for a video game we were
            playing at the time. He explained what he did for work, and I asked
            a million follow-up questions. Once he pointed me in the right
            direction to self-teach, I was off. Since then I have started my own
            web design company for freelance work, and I also graduated from a
            full stack software engineering bootcamp.
            <br></br>
            <br></br>I enjoy coding because it is a creative outlet for me. I
            love the challenge of solving problems and opportunity to
            participate in an industry that changes drastically each year. I am
            always looking for new ways to improve my skills, and I am excited
            to see what the future holds. <br></br>
            <br></br>When I'm not coding, I enjoy spending my time outdoors,
            hiking, biking, and camping. In the winter I snowboard every chance
            I get. I also train in muay thai regularly. I enjoy a good music
            festival here and there as well, and I love to travel. I've lived in
            Australia, New Zealand, and spend six months living out of a
            backpack in South East Asia once upon a time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
