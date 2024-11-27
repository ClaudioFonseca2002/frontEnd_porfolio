import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </>
  );
}

export default App;
