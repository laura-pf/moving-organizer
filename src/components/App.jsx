import "../scss/App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main";
import Contact from "./Contact";
import Info from "./Info";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [addBox, setAddBox] = useState(false);
  const location = useLocation();
  const [inputAddBox, setInputAddBox] = useState("");
  /*abrir pop up añadir caja*/
  function handleAddBox() {
    setAddBox(true);
  }
  /*cerrar pop up añadir caja*/
  function handleClickClose() {
    setAddBox(false);
    setInputAddBox(""); //cuando se cierra el pop up, de momento no se guarda la información escrita anteriormente, mas adelante se puede contemplar guardar en localStorage
  }

  // input de añadir caja
  function handleChangeInputAddBox(value) {
    setInputAddBox(value);
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
              addBox={addBox}
              onClickAddBox={handleAddBox}
              onClickClose={handleClickClose}
              inputAddBox={inputAddBox}
              onChangeInputAddBox={handleChangeInputAddBox}
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
