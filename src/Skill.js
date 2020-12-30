import React from "react";
import SkillCards from "./SkillCards"

class Skill extends React.Component {

  render() {
    return (
      <div className="skill-wrapper" name="skill">
        <div className="container">
          <h2>Skill</h2>
          <SkillCards />
        </div>
      </div>
    );
  }
}

export default Skill;
