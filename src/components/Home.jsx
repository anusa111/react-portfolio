import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
class Home extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}
export default Home;
