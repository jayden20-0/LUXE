import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

import Navbar from "./components/Navbar"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>

    </>
  );
}

export default App;
