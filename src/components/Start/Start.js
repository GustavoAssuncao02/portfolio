import "./Start.css";
import Gustavo from "../../assets/images/gustavoInitial.png";

export const Start = ({ id }) => {
  return (
    <div className="start-container" id={id}>
      <div className="text-image-container">
        <div className="text-start">
          <h1>
            Olá, <br /> Eu sou Gustavo <br />
            Assunção.
          </h1>
          <p>Analista de Desenvolvimento de Sistemas e Dados</p>
        </div>
        <div className="image-container">
          <img src={Gustavo} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};
