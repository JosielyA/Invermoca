import "./App.css";
import { Route, Routes } from "react-router-dom";
import { carros } from "./data/carsData";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";
import Servicios from "./pages/Servicios";
import Vehiculos from "./pages/Vehiculos";
import Ubicacion from "./pages/Ubicacion";
import { useState } from "react";

function App() {
  const [allProductsinCart, setAllProductsinCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Navbar
        allProductsinCart={allProductsinCart}
        setAllProductsinCart={setAllProductsinCart}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage
              allProductsinCart={allProductsinCart}
              setAllProductsinCart={setAllProductsinCart}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route path="/servicios" element={<Servicios />} />
        <Route
          path="/vehiculos"
          element={
            <Vehiculos
              carros={carros}
              allProductsinCart={allProductsinCart}
              setAllProductsinCart={setAllProductsinCart}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route path="/ubicacion" element={<Ubicacion />} />
      </Routes>
    </>
  );
}

export default App;
