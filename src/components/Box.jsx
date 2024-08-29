import { Link } from "react-router-dom";
import "../scss/components/Box.scss";

function Box(props) {
  function handleAddObject(event) {
    event.preventDefault();
    props.onClickAddObject();
  }

  function handleObjectInput(event) {
    const valueObject = event.target.value;
    props.onChangeInputObject(valueObject);
  }

  function handleCheckboxChange(index) {
    props.onChangeChecked(index, props.box.id);
  }

  return (
    <div className="containbox">
      <Link className="containbox__back" to="/main">
        {" "}
        &lt; Volver
      </Link>
      <h1 className="containbox__tittle">{props.box.tittle}</h1>
      <form className="formAddObject">
        <label htmlFor="item" className="formAddObject__tittle">
          Guardar en la caja:
        </label>
        <div className="formAddObject__inputButton">
          <input
            className="formAddObject__inputButton-inputObject"
            value={props.inputObject}
            type="text"
            name="item"
            id="item"
            onChange={handleObjectInput}
          />
          <button
            className="formAddObject__inputButton-button"
            type="submit"
            onClick={handleAddObject}
          >
            Añadir
          </button>
        </div>
      </form>
      {props.messageAddObject && (
        <h3 className="label message">{props.messageAddObject}</h3>
      )}

      <ul className="object-list">
        {props.box.objects.map((object, index) => (
          <li className="object-list__item" key={index}>
            <input
              className="check"
              checked={object.checked}
              onChange={() => handleCheckboxChange(index)}
              type="checkbox"
            />

            <span
              style={{
                textDecoration: object.checked ? "line-through" : "none",
              }}
            >
              {object.text}
            </span>
          </li>
        ))}
      </ul>

      <button className="button-save-box">Guardar Caja</button>
    </div>
  );
}

export default Box;
