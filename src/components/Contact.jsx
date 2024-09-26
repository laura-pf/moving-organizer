import IconEmail from "../images/email.png";
import IconTel from "../images/tel.png";
import IconInsta from "../images/insta.png";
import "../scss/components/Contact.scss";
import { Link } from "react-router-dom";
import ContactUs from "../images/contacto.jpg";
import iconLinkedIn from "../images/linkedin.png";

function Contact() {
  return (
    <>
      <div className="container-link">
        <Link className="container-link__link" to="/main">
          &lt; Volver
        </Link>
      </div>
      <figure className="container-img">
        <img
          className="img-contact"
          src={ContactUs}
          alt="imagen chica contactando con servicios"
        />
      </figure>
      <ul className="list-contact">
        <a href="mailto: lauraparrafernandez@hotmail.es">
          <li>
            <img className="icon" src={IconEmail} alt="icono de email" />
          </li>
        </a>
        <a href="tel: 622219331">
          <li>
            <img className="icon" src={IconTel} alt="icono de telefono" />
          </li>
        </a>
        <a href="https://www.instagram.com/lauperry8/?next=%2F" target="_blank">
          <li>
            <img className="icon" src={iconLinkedIn} alt="icono instagram" />
          </li>
        </a>
      </ul>
    </>
  );
}

export default Contact;
