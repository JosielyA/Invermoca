import React, { useEffect, useState } from "react";
import carro from "../assets/images/carro.png";
import carro2 from "../assets/images/carro2.png";
import carro3 from "../assets/images/carro3.png";
import carro4 from "../assets/images/carro4.png";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import azul from "../assets/images/azul.jpeg";
import Footer from "../components/Footer";
import concesionario from "../assets/images/concesionario.jpeg";
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
      <section className="relative w-full overflow-hidden ">
        <img
          src={concesionario}
          className="h-full w-full brightness-50 contrast-200 filter md:filter-none"
        />
        <div className="absolute top-[200px] flex -translate-y-full transform flex-col gap-2 text-center text-white md:left-[100px] md:top-[450px] md:gap-8 md:text-start ">
          <h2 className="text-2xl font-bold md:w-7/12 md:text-6xl">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span className="text-myred">adipisicing.</span>
          </h2>
          <h3 className="text-lg md:w-5/12 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nemo dolor cum, perferendis temporibus exercitationem expedita odit
            ad!
          </h3>
        </div>
      </section>
      <section className="absolute flex w-full place-content-center px-10 text-center md:-mt-5 lg:-mt-[120px] lg:px-20">
        <div>
          <div className="flex w-full flex-col items-center bg-gray-300">
            <h2 className="pb-2 pt-5 text-3xl font-bold text-myred md:text-6xl">
              consectetuer
            </h2>
            <p className="px-3 pb-6 md:w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              non minima quos sequi veritatis autem numquam aut eaque
              praesentium maxime ex ratione doloremque minus.
            </p>
            <SliderMarcas />
          </div>
        </div>
      </section>
      <section className="relative">
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
      <div className="m-auto w-full">
        <Carousel cars={cars} />
      </div>
      <div className=" absolute -mb-10 -mt-5 h-1 w-full bg-myred"></div>
      <Footer />
    </div>
  );
}

export default Vehiculos;
