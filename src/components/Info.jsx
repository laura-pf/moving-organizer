import { Link } from "react-router-dom";
import "../scss/components/Info.scss";

function Info() {
  return (
    <>
      <div className="container">
        <section className="info">
          <h2 className="info__tittle">ORGANIZADOR DE MUDANZAS</h2>
          <p className="info__text">
            Bienvenidos a la App Web de que te ayuda a organizar tu mudanza
          </p>
        </section>
        <div className="container-link">
          <Link className="container-link__link" to="/main">
            VOLVER
          </Link>
        </div>
      </div>
    </>
  );
}

export default Info;
