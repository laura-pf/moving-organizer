import "../scss/components/Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="landing">
      <h1 className="landing__tittle">Organizador de </h1>
      <h1 className="landing__tittle">Mudanzas</h1>
      <div className="landing__button">
        <Link to="/main" className="landing__button-link">
          COMENZAR
        </Link>
      </div>
    </main>
  );
}

export default Landing;
