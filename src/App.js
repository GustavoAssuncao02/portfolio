import "./App.css";
import { Header } from "./components/Header/Header";
import { Start } from "./components/Start/Start";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contact/Contact";
import Logo from "./assets/images/icon.png";
import CvGustavo from "./assets/files/cvgustavo.pdf"

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="logo-content">
          <img src={Logo} alt="logo" className="logo logo-desktop" />
        </div>
        <Header />
        <Start id="inicio" />
        <div className="button-content">
          <a href={CvGustavo} download="CV - Gustavo Assunção" className="download-btn">Download CV</a>
        </div>
        <About id="sobre" />
        <Skills id="skills" />
        <Projects id="projetos" />
        <Contacts id="contato" />
      </div>
    </div>
  );
}

export default App;
