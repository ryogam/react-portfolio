import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-wrapper" name="about">
        <div className="container">
          <h2>About</h2>
          <table className="about-table center">
            <tbody>
              <tr>
                <th>Name</th>
                <td>三栖涼雅 (Ryoga Misu)</td>
              </tr>
              <tr>
                <th>University</th>
                <td>Tokyo Institute of Technology</td>
              </tr>
              <tr>
                <th>Laboratory</th>
                <td>
                  <a href="http://www.kitao.bio.titech.ac.jp/">
                    Kitao Laboratory
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default About;
