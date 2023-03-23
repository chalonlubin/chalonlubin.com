import { Link } from "react-router-dom";
import "../sass/Footer.scss";
import { RiLinkedinFill, RiGithubLine} from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi"

/** Footer
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> Footer
 */
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
        <Link to="https://mailto:chalonlubin.dev@gmail.com">
          <HiOutlineMail />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
