import "./About.css";
import { Title } from "../Title/Title";
import { useTranslation } from "react-i18next";
import Gu01 from "../../assets/images/imagem01.jpeg";
import Gu02 from "../../assets/images/imagem02.jpeg";
import Gu03 from "../../assets/images/imagem03.jpeg";

export const About = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div className="about-container" id={id}>
      <Title data={t("about.title")} />
      <p>{t("about.description")}</p>
      <div className="about-images">
        <img src={Gu01} alt="" />
        <img src={Gu02} alt="" />
        <img src={Gu03} alt="" />
      </div>
    </div>
  );
};
