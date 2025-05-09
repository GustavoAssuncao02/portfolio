import "./Header.css";
import { useState, useEffect } from "react";
import LogoBranca from "../../assets/images/logobranca.png";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <img src={LogoBranca} alt="logo" className="logo logo-mobile" />

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <ul className={`header-itens ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#inicio">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </div>
  );
};
