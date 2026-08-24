import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Info } from "./components/info/Info";
import { Languages } from "./components/languages/Languages";
import { Skills } from "./components/Skills/Skills";

function App() {
  
  return (
    <main className="main">
      <Info/>
      <AboutMe/>
      <Skills/>
      <Languages/>
    </main>
  );
}

export default App;
