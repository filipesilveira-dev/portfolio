import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Info } from "./components/info/Info";
// import { Languages } from "./components/languages/Languages";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Skills } from "./components/Skills/Skills";

function App() {
  
  return (
    <main className="main">
      {/* Seções divididas por componentes */}
      <Info/>
      <AboutMe/>
      <Portfolio/>
      <Skills/>
    </main>
  );
}

export default App;
