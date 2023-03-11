import React from "react";
import { Link } from "react-router-dom";
class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="list">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavigationBar;
