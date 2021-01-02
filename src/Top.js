import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
class Top extends React.Component {
  render() {
    return (
      <div className="topnav-wrapper" name="top">
        <div className="container">
          <h1 className="w3-animate-opacity">Hello!</h1>
          <h1>I am Ryoga Misu.</h1>
          <p>Master's Student & Analyst at JDSC</p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/ryoga.misu"
              className="sns-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-facebook-square fa-4x"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/a6085117a/"
              className="sns-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-4x"></i>
            </a>
            <a
              href="https://github.com/ryogam"
              className="sns-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github-square fa-4x"></span>
            </a>
          </div>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            <div className="scroll center"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Top;
