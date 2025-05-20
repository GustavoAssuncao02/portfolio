import "./Header.css";
import { useState, useEffect } from "react";
import LogoBranca from "../../assets/images/logobranca.png";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const {t} = useTranslation()
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
          <a href="#inicio">{t("header.l1")}</a>
        </li>
        <li>
          <a href="#sobre">{t("header.l2")}</a>
        </li>
        <li>
          <a href="#skills">{t("header.l3")}</a>
        </li>
        <li>
          <a href="#projetos">{t("header.l4")}</a>
        </li>
        <li>
          <a href="#contato">{t("header.l5")}</a>
        </li>
        <li className="buttonlanguage"><LanguageSwitcher /></li>
      </ul>
    </div>
  );
};
