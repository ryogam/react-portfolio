import Top from "./Top";
import Header from "./Header";
import About from "./About"
import Skill from "./Skill"
import Experience from "./Experience.js";
import Articles from "./Articles.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Top />
      <About />
      <Skill />
      <Experience />
      <Articles />
    </div>
  );
}

export default App;
