import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
class Project extends React.Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-collection">
          <div>
            <a href="https://anusa111.github.io/Colorgenerator/">
              <img src={project1} alt="" />
            </a>
          </div>
          <div>
            <a href="https://anusa111.github.io/Stopwatch/">
              <img src={project2} alt="" />
            </a>
          </div>
          <div>
            <a href="https://anusa111.github.io/movieguide" target="_blank">
              <img src={project3} alt="" />
            </a>
          </div>
          <div>
            <a href="https://anusa111.github.io/quiz-game-js"  target="_blank">
              <img src={project4} alt="" />
            </a>
          </div>
          <div>
            <a href="https://anusa111.github.io/Js-weather/">
              <img src={project5} alt="" />
            </a>
          </div>
          <div>
            <a href="https://anusa111.github.io/ReactWeather"  target="_blank">
              <img src={project6} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
