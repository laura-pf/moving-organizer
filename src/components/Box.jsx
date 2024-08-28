function Box(props) {
  function handleAddObject(event) {
    event.preventDefault();
    props.onClickAddObject();
  }

  function handleObjectInput(event) {
    const valueObject = event.target.value;
    props.onChangeInputObject(valueObject);
  }
  return (
    <div>
      <h1>{props.box.tittle}</h1>
      <form>
        <label>Guardar en la caja:</label>
        <input type="text" name="" id="" onChange={handleObjectInput} />
        <button type="submit" onClick={handleAddObject}>
          Añadir
        </button>
      </form>
      <ul>
        {props.objects.map((object, index) => (
          <li key={index}>{object}</li>
        ))}
      </ul>
      <h3 className="label message">{props.messageAddObject}</h3>
    </div>
  );
}

export default Box;
