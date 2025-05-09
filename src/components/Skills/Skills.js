import "./Skills.css";
import { Title } from "../Title/Title";
import skill01 from "../../assets/images/icons/angular.png";
import skill02 from "../../assets/images/icons/bootstrap.png";
import skill03 from "../../assets/images/icons/css.png";
import skill04 from "../../assets/images/icons/excel.png";
import skill05 from "../../assets/images/icons/express.png";
import skill06 from "../../assets/images/icons/html.png";
import skill07 from "../../assets/images/icons/java.png";
import skill08 from "../../assets/images/icons/javascript.png";
import skill09 from "../../assets/images/icons/mysql.png";
import skill10 from "../../assets/images/icons/nodejs.png";
import skill11 from "../../assets/images/icons/powerbi.png";
import skill12 from "../../assets/images/icons/python.png";
import skill13 from "../../assets/images/icons/reactjs.png";
import skill14 from "../../assets/images/icons/sequelize.png";
import skill15 from "../../assets/images/icons/sqlserver.png";
import skill16 from "../../assets/images/icons/tableau.png";
import skill17 from "../../assets/images/icons/typescript.png";

let images = [
  skill13,
  skill08,
  skill01,
  skill17,
  skill06,
  skill03,
  skill02,
  skill10,
  skill14,
  skill05,
  skill07,
  skill12,
  skill15,
  skill09,
  skill11,
  skill16,
  skill04,
];

export const Skills = ({ id }) => {
  return (
    <div id={id}>
      <Title data="Habilidades" />
      <div className="skills-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`skill-${index}`}
            className="skill-icon"
          />
        ))}
      </div>
    </div>
  );
};
