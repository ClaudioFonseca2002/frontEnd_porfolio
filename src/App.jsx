import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </>
  );
}

export default App;
