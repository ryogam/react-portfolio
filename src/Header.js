import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="topnav">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            Top
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            Skill
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="article"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            Article
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
