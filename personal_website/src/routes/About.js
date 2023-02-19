import React from "react";
import "../sass/About.scss";
import chalon from "../assets/chalon.png";

function About() {
  return (
    <div className="about">
      <section>
        <p>
          Chalon is full-stack software engineer. Whether the task at hand is
          making a unique and useful frontend web apps while bonding over design
          decisions with a client, or constructing a secure and robust backend,
          He is always looking for new ways to improve and expand his skills.
          <br></br>
          <br></br>
          Chalon has also worked as a mental health counselor with a focus on
          youth, a program director for a mental health non-profit, and as a bar
          manager for a large brewery.
          <br></br>
          <br></br>
          Chalon is currently interested in full-time work as a software
          engineer, as well as freelance opportunities in the software industry.
        </p>
        <img src={chalon} alt="Chalon" />
      </section>
    </div>
  );
}

export default About;
