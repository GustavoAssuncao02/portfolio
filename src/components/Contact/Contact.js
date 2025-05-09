import "./Contacts.css";
import Whatsapp from "../../assets/images/icons/Whatsapp.png";
import Email from "../../assets/images/icons/Email.png";
import LinkedIn from "../../assets/images/icons/linkedin.png";
import Github from "../../assets/images/icons/github.png";
import { Title } from "../Title/Title";

let images = [
  {
    image: Whatsapp,
    title: "Whatsapp",
    text: "(71) 9 9681-5406",
    link: "https://wa.me/7196815406",
  },
  {
    image: Email,
    title: "E-mail",
    text: "Gustavo_Assuncao02@outlook.com",
    link: "mailto:Gustavo_Assuncao02@outlook.com",
  },
  {
    image: LinkedIn,
    title: "LinkedIn",
    text: "Gustavo Silva",
    link: "https://www.linkedin.com/in/gustavo-silva-6ab161292/",
  },
  {
    image: Github,
    title: "Github",
    text: "Gustavo Assunção",
    link: "https://github.com/GustavoAssuncao02",
  },
];

export const Contacts = ({ id }) => {
  return (
    <div className="contact-container" id={id}>
      <Title data="Contato" />
      <div className="contacts-images">
        {images.map((img, i) => (
          <a
            key={i}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img src={img.image} alt={img.title} className="contact-img" />
            <h4>{img.title}</h4>
            <p>{img.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
