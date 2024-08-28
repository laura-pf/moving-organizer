import { Link } from "react-router-dom";

function BoxList(props) {
  function handleClickRemove(index) {
    props.onClickRemoveBox(index);
  }
  return (
    <>
      <li className="container-box box">
        <span className="remove" onClick={() => handleClickRemove(props.index)}>
          X
        </span>
        <Link className="container-box__link" to={`/box/${props.box.id}`}>
          <h3 className="container-box__tittle">{props.box.tittle}</h3>
          <img
            className="box-image"
            src={props.box.image}
            alt="imagen de caja de cartón"
          />{" "}
        </Link>
      </li>
    </>
  );
}

export default BoxList;
