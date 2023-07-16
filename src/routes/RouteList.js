import { Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import NotFound from "./NotFound";

/** Set up for routes in portfolio app
 *
 *
 * Props: none
 * State: none
 *
 * App -> RoutesList
 */
function RouteList() {
  return (
    <div className="mx-8 my-2">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouteList;
