import "./About.css";
import { Title } from "../Title/Title";
import Gu01 from "../../assets/images/imagem01.jpeg";
import Gu02 from "../../assets/images/imagem02.jpeg";
import Gu03 from "../../assets/images/imagem03.jpeg";

export const About = ({ id }) => {
  return (
    <div className="about-container" id={id}>
      <Title data="Sobre mim" />
      <p>
        Sou um profissional de 23 anos, nascido na Bahia, e graduando em Análise
        e Desenvolvimento de Sistemas pelo Instituto Federal Baiano. Atuo como
        Analista de Desenvolvimento de Sistemas, com experiência no
        desenvolvimento de aplicações web e na Análise de Dados. Tenho conhecimentos em infraestrutura
        de TI e servidores, incluindo configuração, gerenciamento e
        monitoramento de ambientes, o que me permite entregar soluções mais
        completas e confiáveis. Valorizo o profissionalismo em todas as etapas
        do meu trabalho, tenho boa comunicação interpessoal e sou comprometido
        com prazos e com a qualidade das entregas técnicas.
      </p>
      <div className="about-images">
        <img src={Gu01} alt="" />
        <img src={Gu02} alt="" />
        <img src={Gu03} alt="" />
      </div>
    </div>
  );
};
