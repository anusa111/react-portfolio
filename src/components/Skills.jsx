import React from "react";
class Gallery extends React.Component {
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-section">
          <div className="skill-container">
            <div className="skill-title">HTML 5</div>
            <div className="skill-percentage">100%</div>
          </div>
          <div className="skill-bar html-skill"></div>
        </div>
        <div className="skill-section">
          <div className="skill-container">
            <div className="skill-title">CSS</div>
            <div className="skill-percentage">100%</div>
          </div>
          <div className="skill-bar css-skill"></div>
        </div>
        <div className="skill-section">
          <div className="skill-container">
            <div className="skill-title">JS</div>
            <div className="skill-percentage">100%</div>
          </div>
          <div className="skill-bar js-skill"></div>
        </div>
        <div className="skill-section">
          <div className="skill-container">
            <div className="skill-title">React</div>
            <div className="skill-percentage">80%</div>
          </div>
          <div className="skill-bar react-skill"></div>
        </div>
      </div>
    );
  }
}
export default Gallery;
