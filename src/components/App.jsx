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
    const doesBoxExist = addedBox.some(
      (box) => box.tittle.toLowerCase() === inputModalAddBox.toLocaleLowerCase()
    );

    if (inputModalAddBox === "") {
      setMesaggeAddBox("Debes ponerle un nombre a la caja");
      return;
    } else if (doesBoxExist) {
      setMesaggeAddBox("Ya hay otra caja con ese nombre");
      return;
    } else {
      const newBox = {
        id: Date.now(),
        tittle: inputModalAddBox,
        image: LogoBox,
        objects: [],
      };
      setAddedBox([...addedBox, newBox]);
      setInputModalAddBox("");
      setMesaggeAddBox("");
      setModalAddBox(false);
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
    setMessageAddObject("");

    if (inputAddObject.trim() === "") {
      setMessageAddObject("Por favor, añade un objeto");
      return; // Salir si el input está vacío
    }

    //encontramos la caja con find

    // const idBox = addedBox.find((box) => box.id === id); // esto lo hemos hecho antes para la ruta, con la constante boxSelected. se usa esa

    //verificamos si el objeto ya existe en la lista:
    const doesObjectExist = boxSelected.objects.some(
      (object) =>
        object.text.toLowerCase() === inputAddObject.trim().toLowerCase()
    );

    if (doesObjectExist) {
      setMessageAddObject("El elemento que intentas añadir ya está en tu caja");
      setInputAddObject("");
      return; //no modificar la caja si el objeto ya esta en la lista
    } else {
      // Si no existe, proceder a añadir el nuevo objeto
      const newObject = {
        text: inputAddObject.trim(),
        checked: false,
      };

      // Crear un nuevo array de cajas actualizadas
      const updatedBoxes = addedBox.map((box) => {
        if (box.id === boxSelected.id) {
          return {
            ...box,
            objects: [...box.objects, newObject], // Añadir el nuevo objeto
          };
        }
        return box; // No hacer cambios en las otras cajas
      });

      // Actualizar el estado con las cajas actualizadas
      setAddedBox(updatedBoxes);
      setMessageAddObject(""); // Limpiar cualquier mensaje de error
      setInputAddObject(""); // Limpiar el input después de añadir el objeto
    }
  }

  //Marcar con check cada elemento de la lista
  function handleChecked(indexToCheck, boxId) {
    const checkInBox = addedBox.map((box) => {
      if (box.id === boxId) {
        const checkedObjects = box.objects.map((object, index) =>
          index === indexToCheck
            ? { ...object, checked: !object.checked }
            : object
        );
        return {
          ...box,
          objects: checkedObjects,
        };
      }
      return box;
    });
    setAddedBox(checkInBox);
  }

  //eliminar item de cada caja
  function handleRemoveItem(indexToRemove, boxId) {
    const removedItem = addedBox.map((box) => {
      if (box.id === boxId) {
        return {
          ...box,
          objects: box.objects.filter((_, index) => index !== indexToRemove),
        };
      }
      return box;
    });
    setAddedBox(removedItem);
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
              objects={addedBox.objects}
              inputObject={inputAddObject}
              onChangeChecked={handleChecked}
              onClickRemoveItem={handleRemoveItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
