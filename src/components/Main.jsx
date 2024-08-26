import "../scss/components/Main.scss";
import IconAdd from "../images/icon+.png";
import Filter from "./Filter";
import AddBox from "./AddBox";

function Main(props) {
  /*Cuando la usuaria haga click en añadir caja, muestra el pop up con el formulario para añadir*/
  function handleClick(event) {
    event.preventDefault();
    props.onClickAddBox();
  }

  return (
    <main>
      <section className="section">
        <Filter />
        <div className="container-box" onClick={handleClick}>
          <h3 className="container-box__tittle">Añadir caja</h3>
          <img
            className="icon-add"
            src={IconAdd}
            alt="imagen icono para añadir"
          />
        </div>
      </section>

      {props.addBox && (
        <AddBox
          onClickClose={props.onClickClose}
          inputAddBox={props.inputAddBox}
          onChangeInputAddBox={props.onChangeInputAddBox}
        />
      )}
    </main>
  );
}

export default Main;
