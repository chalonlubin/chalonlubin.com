import React from "react";
import "../sass/About.scss";
import chalon from "../assets/Chalon1.jpeg";

function About() {
  return (
    <div className="about">
      <section>
        <p>
          Meet Chalon - the full-stack software engineer extraordinaire! Whether
          it's designing a stunning frontend web app or building a robust
          backend, Chalon is always eager to improve his skills and learn new
          tricks. But that's not all - Chalon's experiences as a mental health
          counselor, program director for a non-profit, and bar manager have
          given him unique perspectives on working with people and effective
          communication. Now, he's excited to bring those skills to the software
          industry and make a difference. If you're looking for a skilled and
          versatile software engineer for full-time work or freelance
          opportunities, look no further than Chalon. He's ready to take on any
          challenge and bring your web/app development dreams to life.
        </p>
        <img src={chalon} alt="Chalon" />
      </section>
    </div>
  );
}

export default About;
