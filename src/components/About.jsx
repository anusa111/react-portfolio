import React from "react";
import images from "../images/myimage.jpg";
class About extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="image-div">
          <img className="my-image" src={images} alt="" />
        </div>
        <div className="mydescription">
          <h2>I am Anusa Khadka</h2>
          <p>
            I am Frontend Developer. I've had the opportunity to work on several
            exciting projects on my college that have allowed me to showcase my
            skills. I'm eager to continue growing my skills and making an impact
            in my field.
          </p>
          <button className="button my-button">Download CV</button>
        </div>
      </div>
    );
  }
}
export default About;
