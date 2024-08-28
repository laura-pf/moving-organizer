import "../scss/App.scss";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main";
import Contact from "./Contact";
import Info from "./Info";
import Header from "./Header";
import { useState } from "react";
import LogoBox from "../images/caja-png.png";
import Box from "./Box";

function App() {
  const [modalAddBox, setModalAddBox] = useState(false);
  const location = useLocation();
  const [inputModalAddBox, setInputModalAddBox] = useState("");
  const [addedBox, setAddedBox] = useState([]);
  const [messageAddBox, setMesaggeAddBox] = useState("");
  const [inputAddObject, setInputAddObject] = useState("");
  const [objects, setObjects] = useState([]);
  const [messageAddObject, setMessageAddObject] = useState("");
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

  //función añadir caja

  function handleClickAddBox() {
    if (inputModalAddBox.trim() !== "") {
      const newBox = {
        id: Date.now(),
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

  //función eliminar caja

  function handleClickRemoveBox(indexToRemove) {
    const removedBox = addedBox.filter((_, index) => index !== indexToRemove);
    setAddedBox(removedBox);
  }

  //rutas de cada caja

  const { pathname } = useLocation();
  const routeData = matchPath("/box/:boxId", pathname);
  const boxId = routeData !== null ? parseInt(routeData.params.boxId) : null;

  const boxSelected = addedBox.find((box) => box.id === boxId);

  //Añadir objetos (dentro de las rutas, es decir, dentro de cada caja)

  function handleInputAddObject(value) {
    setInputAddObject(value);
  }

  function handleAddObject() {
    // Limpiar mensaje de error antes de comenzar
    setMessageAddObject("");

    // Verificar si el input está vacío
    if (inputAddObject.trim() === "") {
      setMessageAddObject("Por favor, añade un objeto");
    } else {
      // Verificar si el objeto ya existe en la lista
      const doesObjectExist = objects.some(
        (object) =>
          object.text.toLowerCase() === inputAddObject.trim().toLowerCase()
      );

      if (doesObjectExist) {
        setMessageAddObject(
          "El elemento que intentas añadir ya existe en tu lista"
        );
      } else {
        // Añadir nuevo objeto a la lista
        const newObject = {
          text: inputAddObject.trim(),
          checked: false,
        };

        setObjects([...objects, newObject]);
        setMessageAddObject(""); // Limpia el mensaje si el objeto se añade correctamente
      }
    }

    // Limpiar el campo de entrada después de cada intento de añadir
    setInputAddObject("");
  }

  // function handleAddObject() {
  //   setMessageAddObject("");
  //   const doesObjectExist = objects.some(
  //     (object) =>
  //       object.text.toLowerCase() === inputAddObject.trim().toLowerCase()
  //   );
  //   if (inputAddObject.trim() === "") {
  //     setMessageAddObject("Por favor, añade un objeto");
  //   } else if (doesObjectExist) {
  //     setMessageAddObject(
  //       "El elemento que intentas añadir ya existe en tu lista"
  //     );
  //     return;
  //   } else {
  //     const newObject = {
  //       text: inputAddObject.trim(),
  //       checked: false,
  //     };
  //     setObjects([...objects, newObject]);
  //     setInputAddObject("");
  //   }
  // }

  //Marcar con check cada elemento de la lista
  function handleChecked(indexToCheck) {
    const updatedObjects = objects.map((object, index) =>
      index === indexToCheck ? { ...object, checked: !object.checked } : object
    );
    setObjects(updatedObjects);
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
        <Route
          path="/box/:boxId"
          element={
            <Box
              addedBox={addedBox}
              box={boxSelected}
              onClickAddObject={handleAddObject}
              onChangeInputObject={handleInputAddObject}
              messageAddObject={messageAddObject}
              objects={objects}
              inputObject={inputAddObject}
              onChangeChecked={handleChecked}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
