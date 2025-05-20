import "./Start.css";
import Gustavo from "../../assets/images/gustavoInitial.png";
import { useTranslation } from "react-i18next";

export const Start = ({ id }) => {
  const { t } = useTranslation();
  return (
    <div className="start-container" id={id}>
      <div className="text-image-container">
        <div className="text-start">
          <h1>
            {t("greeting.title_line1")} <br />
            {t("greeting.title_line2")} <br />
            {t("greeting.title_line3")}
          </h1>
          <p>{t("greeting.subtitle")}</p>
        </div>
        <div className="image-container">
          <img src={Gustavo} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};
