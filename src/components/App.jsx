import "../scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
