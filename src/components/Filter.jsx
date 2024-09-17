function Filter(props) {
  function handleChange(event) {
    props.onChangeInput(event.target.value);
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

      {/* <p className="label message">
        No se encuentran resultados con el nombre: {props.inputFilterBox}
      </p> */}
    </form>
  );
}

export default Filter;
