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
  // const [messageAddObject, setMessageAddObject] = useState("");
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
        message: "",
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
    // Limpiar el input antes de empezar
    setInputAddObject("");

    if (inputAddObject.trim() === "") {
      // Si el input está vacío, encontrar la caja y actualizar su mensaje de error
      const updatedBoxes = addedBox.map((box) => {
        if (box.id === boxSelected.id) {
          return {
            ...box,
            message: "Por favor, añade un objeto", // Mensaje de error específico para la caja
          };
        }
        return box; // No cambiar otras cajas
      });

      // Actualizar el estado con las cajas modificadas
      setAddedBox(updatedBoxes);
      return; // Salir si el input está vacío
    }

    // Verificamos si el objeto ya existe en la lista de la caja seleccionada
    const doesObjectExist = boxSelected.objects.some(
      (object) =>
        object.text.toLowerCase() === inputAddObject.trim().toLowerCase()
    );

    if (doesObjectExist) {
      // Si el objeto ya existe, actualizar el mensaje de error solo para la caja seleccionada
      const updatedBoxes = addedBox.map((box) => {
        if (box.id === boxSelected.id) {
          return {
            ...box,
            message: "Lo que intentas añadir ya está en tu caja",
          };
        }
        return box;
      });

      // Actualizar el estado con las cajas modificadas
      setAddedBox(updatedBoxes);
      return; // Salir si el objeto ya existe
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
            message: "", // Limpiar cualquier mensaje de error después de añadir
          };
        }
        return box; // No hacer cambios en las otras cajas
      });

      // Actualizar el estado con las cajas actualizadas
      setAddedBox(updatedBoxes);
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
              inputObject={inputAddObject}
              onChangeChecked={handleChecked}
              onClickRemoveItem={handleRemoveItem}
              onClickBack={handleClickBack}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
