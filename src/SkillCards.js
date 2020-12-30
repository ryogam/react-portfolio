import React from "react";

class SkillCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faSize: "fa-3x" };
  }
  render() {
    const LanguageList = [
      {
        name: "Python",
        className: "fab fa-python ",
        size: "large",
        // description: ["Big Data Analysis and Data Vizualization", "ML/DL - scikit-learn, LightGBM, Keras, TensorFlow, PyTorch"],
      },
      {
        name: "SQL",
        className: "fa fa-database ",
        size: "large",
        // description: [
        //   "Big Data Analysis and Feature Engineering",
        //   "MySQL/BigQuery",
        // ],
      },
      { name: "HTML", className: "fab fa-html5 ", size: "normal" },
      { name: "CSS/SCSS", className: "fab fa-css3-alt ", size: "normal" },
      { name: "JavaScript", className: "fab fa-js ", size: "normal" },
      { name: "React", className: "fab fa-react ", size: "normal" },
      { name: "Node.js", className: "fab fa-node-js ", size: "normal" },
      { name: "Tableau", className: "fas fa-flask ", size: "normal" },
      { name: "GitHub", className: "fab fa-github ", size: "normal" },
      { name: "Docker", className: "fab fa-docker ", size: "normal" },
      { name: "Linux", className: "fab fa-linux ", size: "normal" },
    ];
    return (
      <div className="skill-cards">
        {LanguageList.map((lang) => {
          return (
            <div className={"skill-card " + lang.size}>
              <div className="lang-name">
                <i className={lang.className + this.state.faSize}></i>
              </div>
              <h4>{lang.name}</h4>
              {/* <ul className="skill-description">
                      {lang.description.map((description) => {
                        return <li> {description} </li>;
                      })}
                    </ul> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillCard;
