function Filter(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
  }
  function handleChangeObject(event) {
    props.onChangeInputObject(event.target.value);
  }

  return (
    <form className="filter">
      <label htmlFor="box" className="label">
        Busca alguna de tus cajas:
      </label>
      <input
        id="box"
        value={props.inputFilterBox}
        className="input"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="object" className="label">
        Busca cosas dentro de tus cajas:
      </label>
      <input
        id="object"
        value={props.inputFilterObject}
        className="input"
        type="text"
        onChange={handleChangeObject}
      />

      {/* <p className="label message">
        No se encuentran resultados con el nombre: {props.inputFilterBox}
      </p> */}
    </form>
  );
}

export default Filter;
