import React, { useEffect, useState } from "react";
import vehiculos from "../assets/images/backgrounds/DSC_0236.jpg";
import Footer from "../components/Footer";
import SliderMarcas from "../components/SliderMarcas";
import CarList from "../components/CarList";
import { Carousel } from "../components/Carousel";

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
      <section className="vehiculos flex place-content-center items-center text-white lg:h-screen ">
        <div className="p-20 text-center sm:w-10/12 lg:w-9/12 lg:p-0 lg:text-start">
          <h2 className="mb-4 text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:w-9/12 lg:text-5xl">
            Invermoca, tu destino principal para la compra, venta y consignación
            de vehículos <span className="text-myred">nuevos y usados.</span>
          </h2>
          <h3 className="text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:w-8/12">
            Nos comprometemos a brindarte una experiencia sin complicaciones y
            transparente en la adquisición de tu próximo vehículo.
          </h3>
        </div>
      </section>
      <section className="mb-10 flex place-content-center">
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
