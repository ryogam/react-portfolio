import React from "react";

class Experience extends React.Component {
  render() {
    const experienceList = [
      {
        startDate: "2019/08",
        endDate: "Present",
        company: "JDSC",
        role: "Data Scientist",
        type: "Part-time",
        description: ["Big data analysis and ML modeling", "Preparation of materials for clients"],
        tags: ["Python", "GCP", "Machine Learning"],
      },
      {
        startDate: "2020/10",
        company: "NTT DATA",
        role: "Sowtware Engineer",
        type: "Internship",
        description: [
          "Devising new businesses using blockchain technology and implementing business proposals",
        ],
        tags: ["Blockchain", "HTML", "CSS", "Javascript", "Go", "Node.js"],
      },
      {
        startDate: "2020/08",
        endDate: "2020/09",
        company: "Recruit Holdings Co., Ltd.",
        role: "UX Desiner",
        type: "Part-time",
        description: [
          "UX design for SUUMO with big data analysis and direction of development",
          "Contributed to an increase in sales of several hundred million yen",
        ],
        tags: ["UX", "Google Analytics", "BigQuery"],
      },
      {
        startDate: "2020/08",
        company: "Nomura Research Institute",
        role: "Data Scientist",
        type: "Internship",
        description: [
          "Developing digital solutions using machine learning to prevent the spread of coronaviruses",
          "DX Systems Development Innovation Devision",
        ],
        tags: ["Python", "Machine Learning"],
      },
      {
        startDate: "2020/08",
        company: "M3, inc.",
        role: "Data Scientist",
        type: "Internship",
        description: [
          "Identifying issues and proposing measures based on data analysis for services provided",
        ],
        tags: ["Python"],
      },
      {
        startDate: "2019/02~2019/08",
        company: "Liaro, inc.",
        role: "ML Engineer",
        type: "Part-time",
        description: [
          "Purchase prediction and inventory optimization using natural language processing and machine learning",
        ],
        tags: ["Python", "AWS", "Machine Learning", "NLP"],
      },
      {
        startDate: "2018/11~2019/04",
        company: "Splink, inc.",
        role: "ML Engineer",
        type: "Part-time",
        description: [
          "R&D for early prediction of dementia by applying deep learning to medical images",
        ],
        tags: ["Python", "GCP", "Deep Learning"],
      },
      {
        startDate: "2018/11~2019/04",
        company: "Amelieff Corporation",
        role: "Bioinformatics Engineer",
        type: "Part-time",
        description: [
          "Genetic analysis and single cell analysis",
        ],
        tags: ["Python", "R", "Bioinformatics"],
      },
    ];
    return (
      <div className="timeline-wrapper" name="experience">
        <div className="container">
          <h2 className="title">Experience</h2>
          <div className="experience-cards">
            {experienceList.map((exp) => {
              if (exp.endDate === undefined) {
                return (
                  <div className="experience-card">
                    <div className="experience-card-content">
                      <p className="card-date">{exp.startDate}</p>
                      <h3>
                        {exp.company} / {exp.role}{" "}
                      </h3>
                      <p className="card-type">({exp.type})</p>
                      <ul className="card-description">
                        {exp.description.map((d) => {
                          return <li>{d}</li>;
                        })}
                      </ul>
                      <p className="tags">
                        {exp.tags.map((tag) => {
                          return <span className="tag">{tag} </span>;
                        })}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="experience-card">
                    <div className="experience-card-content">
                      <p className="card-date">
                        {exp.startDate} ~ {exp.endDate}
                      </p>
                      <h3>
                        {exp.company} / {exp.role}{" "}
                      </h3>
                      <p className="card-type">({exp.type})</p>
                      <ul className="card-description">
                        {exp.description.map((d) => {
                          return <li>{d}</li>;
                        })}
                      </ul>
                      <p className="tags">
                        {exp.tags.map((tag) => {
                          return <span className="tag">{tag} </span>;
                        })}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
