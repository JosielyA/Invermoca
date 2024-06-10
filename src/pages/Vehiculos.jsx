import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CarList from "../components/CarList";
import Slider from "../components/Slider";
import { carsPageSliders } from "../libs/slidersData";

function Vehiculos({
  carros,
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    setCars(carros);
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div>
      <Slider slides={carsPageSliders} />
      <section id="vehiculos" className="mb-10 flex place-content-center">
        <CarList
          carros={carros}
          allProductsinCart={allProductsinCart}
          setAllProductsinCart={setAllProductsinCart}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Vehiculos;
