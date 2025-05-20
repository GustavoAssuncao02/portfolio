import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <button onClick={() => changeLanguage("en")} style={{backgroundColor: "transparent", color: "white"}}>EN</button>
    <button onClick={() => changeLanguage("pt")} style={{backgroundColor: "transparent", color: "white", marginLeft: 10}}>PT</button>
    </div>
  );
};
