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
    props.onChangeChecked(index);
  }

  return (
    <div className="containbox">
      <h1 className="containbox__tittle">{props.box.tittle}</h1>
      <form>
        <label>Guardar en la caja:</label>
        <input
          value={props.inputObject}
          type="text"
          name=""
          id=""
          onChange={handleObjectInput}
        />
        <button type="submit" onClick={handleAddObject}>
          Añadir
        </button>
      </form>
      <ul>
        {props.objects.map((object, index) => (
          <li key={index}>
            <input
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
      <button>Guardar Caja</button>
      {props.messageAddObject && (
        <h3 className="label message">{props.messageAddObject}</h3>
      )}
      <Link to="/main">Volver</Link>
    </div>
  );
}

export default Box;
