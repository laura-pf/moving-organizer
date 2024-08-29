import "../scss/components/Main.scss";
import IconAdd from "../images/icon+.png";
import Filter from "./Filter";
import ModalAddBox from "./ModalAddBox";

import { Link } from "react-router-dom";
import BoxList from "./BoxList";

function Main(props) {
  /*Cuando la usuaria haga click en añadir caja, muestra el pop up con el formulario para añadir*/
  function handleClick(event) {
    event.preventDefault();
    props.onClickModalAddBox();
  }

  return (
    <main>
      <section className="section">
        <Filter />

        <ul className="container-list-box">
          {props.addedBox.map((box, index) => (
            <BoxList
              addedBox={props.addedBox}
              key={index}
              box={box}
              onClickRemoveBox={props.onClickRemoveBox}
              index={index}
            />
          ))}

          <li className="container-box" onClick={handleClick}>
            <h3 className="container-box__tittle">Añadir caja</h3>
            <img
              className="icon-add"
              src={IconAdd}
              alt="imagen icono para añadir"
            />
          </li>
        </ul>
      </section>

      {props.modalAddBox && (
        <ModalAddBox
          onClickClose={props.onClickClose}
          inputModalAddBox={props.inputModalAddBox}
          onChangeInputModalAddBox={props.onChangeInputModalAddBox}
          onClickAddBox={props.onClickAddBox}
          messageAddBox={props.messageAddBox}
        />
      )}
    </main>
  );
}

export default Main;
