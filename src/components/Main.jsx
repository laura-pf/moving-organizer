import "../scss/components/Main.scss";
import IconAdd from "../images/icon+.png";
import Filter from "./Filter";
import ModalAddBox from "./ModalAddBox";
import LogoBox from "../images/caja-png.png";
import { Link } from "react-router-dom";

function Main(props) {
  /*Cuando la usuaria haga click en añadir caja, muestra el pop up con el formulario para añadir*/
  function handleClick(event) {
    event.preventDefault();
    props.onClickModalAddBox();
  }

  function handleClickRemove(index) {
    props.onClickRemoveBox(index);
  }

  return (
    <main>
      <section className="section">
        <Filter />

        <ul className="container-list-box">
          {props.addedBox.map((box, index) => (
            <li key={index} className="container-box box">
              <Link to={`/box/${box.id}`}>
                <span
                  className="remove"
                  onClick={() => handleClickRemove(index)}
                >
                  X
                </span>
                <h3 className="container-box__tittle">{box.tittle}</h3>
                <img
                  className="box-image"
                  src={box.image}
                  alt="imagen de caja de cartón"
                />{" "}
              </Link>
            </li>
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
