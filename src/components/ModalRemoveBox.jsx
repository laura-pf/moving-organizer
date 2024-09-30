import "../scss/components/ModalRemoveBox.scss";

function ModalRemoveBox(props) {
  function handleClickRemove() {
    props.onClickRemoveBox();
  }

  function handleClickCloseModal() {
    props.onCloseModal();
  }
  return (
    <section className="popup-add-box ">
      <div className="container-add-box remove-box">
        <h3 className="name-box">
          ¿Seguro que quiere eliminar la caja {props.box.tittle}?
        </h3>
        <p className="label">Esto eliminará también todo lo que contiene</p>
        <div className="buttons">
          <button
            className="button-add-box "
            onClick={() => handleClickRemove()}
          >
            Si
          </button>

          <button
            className="button-add-box"
            onClick={() => handleClickCloseModal()}
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
}

export default ModalRemoveBox;
