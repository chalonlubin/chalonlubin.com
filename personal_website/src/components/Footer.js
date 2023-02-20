import React from "react";
import "../sass/Footer.scss";
import { RiLinkedinFill, RiGithubLine, RiTwitterLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <a href="www.linkedin.com/chalonlubin">
          <RiLinkedinFill />
        </a>
        <a href="www.github.com/chalonl">
          <RiGithubLine />
        </a>
        <a href="mailto:chalonlubin1@gmail.com">
          <RiTwitterLine />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
