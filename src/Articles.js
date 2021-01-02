import React from "react";

class Articles extends React.Component {
  render() {
    return (
      <div className="articles-wrapper" name="article">
        <div className="container">
          <h2 className="title">Article</h2>
          <div className="article-card">
            <a href="https://note.com/recruit_pg/n/n86121fc09e14">
              <h3>Part-time work experience at Recruit Holdings Co.</h3>
              <img
                src="https://assets.st-note.com/production/uploads/images/38210278/rectangle_large_type_2_b6559290031c38b2ebcc093011259ccb.png?fit=bounds&quality=60&width=1280"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
