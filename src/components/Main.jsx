import "../scss/components/Main.scss";
import IconAdd from "../images/icon+.png";
import Filter from "./Filter";

function Main() {
  return (
    <main>
      <section className="section">
        <Filter />
        <div className="container-box">
          <h3 className="container-box__tittle">Añadir caja</h3>
          <img
            className="icon-add"
            src={IconAdd}
            alt="imagen icono para añadir"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
