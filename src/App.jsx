import "./App.css";
import { Route, Routes } from "react-router-dom";
import { carros } from "./data/carsData";
import Navbar from "./components/Navbar";
import IndexPage from "./pages/IndexPage";
import Servicios from "./pages/Servicios";
import Vehiculos from "./pages/Vehiculos";
import Ubicacion from "./pages/Ubicacion";
import PricesPage from "./pages/PricesPage";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollToTop";

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
      <ScrollToTop />
      <div>
        <Toaster />
      </div>
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
        <Route path="/limpieza" element={<PricesPage />} />
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
