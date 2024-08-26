import "../scss/App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main";
import Contact from "./Contact";
import Info from "./Info";
import Header from "./Header";
import { useState } from "react";
import LogoBox from "../images/caja-png.png";

function App() {
  const [modalAddBox, setModalAddBox] = useState(false);
  const location = useLocation();
  const [inputModalAddBox, setInputModalAddBox] = useState("");
  const [addedBox, setAddedBox] = useState([]);
  const [messageAddBox, setMesaggeAddBox] = useState("");
  /*abrir pop up añadir caja*/
  function handleModalAddBox() {
    setModalAddBox(true);
  }
  /*cerrar pop up añadir caja*/
  function handleClickClose() {
    setModalAddBox(false);
    setInputModalAddBox(""); //cuando se cierra el pop up, de momento no se guarda la información escrita anteriormente, mas adelante se puede contemplar guardar en localStorage
    setMesaggeAddBox("");
  }

  // input de añadir caja
  function handleChangeInputModalAddBox(value) {
    setInputModalAddBox(value);
  }

  function handleClickAddBox() {
    if (inputModalAddBox.trim() !== "") {
      const newBox = {
        tittle: inputModalAddBox,
        image: LogoBox,
      };
      setAddedBox([...addedBox, newBox]);
      setInputModalAddBox("");
      setMesaggeAddBox("");
      setModalAddBox(false);
    }

    if (inputModalAddBox === "") {
      setMesaggeAddBox("Debes ponerle un nombre a la caja");
    }
  }

  function handleClickRemoveBox(indexToRemove) {
    const removedBox = addedBox.filter((_, index) => index !== indexToRemove);
    setAddedBox(removedBox);
  }

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <Main
              modalAddBox={modalAddBox}
              onClickModalAddBox={handleModalAddBox}
              onClickClose={handleClickClose}
              inputModalAddBox={inputModalAddBox}
              onChangeInputModalAddBox={handleChangeInputModalAddBox}
              onClickAddBox={handleClickAddBox}
              addedBox={addedBox}
              messageAddBox={messageAddBox}
              onClickRemoveBox={handleClickRemoveBox}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
