import "../scss/components/AddBox.scss";

function AddBox(props) {
  function handleClose(event) {
    event.preventDefault();
    props.onClickClose();
  }

  function handleInput(event) {
    const valueInputAddBox = event.target.value;
    props.onChangeInputAddBox(valueInputAddBox);
  }
  return (
    <section className="popup-add-box">
      <div className="container-add-box">
        <span className="close" onClick={handleClose}>
          X
        </span>
        <form className="add-box" action="">
          <label className="name-box">Nombre de la caja:</label>
          <div className="input-button">
            <input
              className="input-add-box"
              type="text"
              onChange={handleInput}
            />
            <button className="button-add-box">Añadir</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddBox;
