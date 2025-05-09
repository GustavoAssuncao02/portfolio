import "./Projects.css";
import { Title } from "../Title/Title";
import Orion from "../../assets/images/projetos/orion1.png";

let images = [
  {
    src: Orion,
    title: "Projeto Orion",
    desc: "Sistema e-commerce",
  },
];

export const Projects = ({ id }) => {
  return (
    <div className="projetcs-container" id={id}>
      <Title data="Projetos" />
      <p>Mais projetos em breve!</p>
      <div className="images-projects-content">
        {images.map((img, index) => (
          <div className="project-card" key={index}>
            <img src={img.src} alt={img.title} className="project-image" />
            <div className="overlay">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
