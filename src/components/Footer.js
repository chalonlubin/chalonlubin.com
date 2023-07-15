import { Link } from "react-router-dom";
import { RiLinkedinFill, RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import "../sass/Footer.scss";

/** Footer
 *
 *  Props: none
 *  State: none
 *
 * App --> RouteList --> Footer
 */
function Footer() {
  return (
    <div className="footer-container inline-flex">
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
