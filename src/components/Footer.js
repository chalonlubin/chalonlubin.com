import { Link } from "react-router-dom";
import "../sass/Footer.scss";
import { RiLinkedinFill, RiGithubLine, RiTwitterLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <Link to="https://www.linkedin.com/in/chalonl/">
          <RiLinkedinFill />
        </Link>
        <Link to="https://github.com/chalonlubin">
          <RiGithubLine />
        </Link>
        <Link to="https://mailto:chalonlubin1@gmail.com">
          <RiTwitterLine />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
