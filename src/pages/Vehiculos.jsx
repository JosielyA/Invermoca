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
      <section className="relative w-full overflow-hidden ">
        <img
          src={vehiculos}
          className="h-full w-full brightness-50 contrast-200 filter md:filter-none"
        />
        <div className="absolute top-[230px] flex -translate-y-full transform flex-col gap-2 p-5 text-center text-white sm:top-[260px] md:left-[100px] md:top-[400px] md:gap-8 md:p-0 md:text-start lg:top-[450px] xl:top-[500px] 2xl:top-[600px]">
          <h2 className="text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:w-8/12 md:text-4xl lg:w-7/12 lg:text-5xl 2xl:w-6/12">
            Invermoca, tu destino principal para la compra, venta y consignación
            de vehículos <span className="text-myred">nuevos y usados.</span>
          </h2>
          <h3 className="text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:w-8/12 lg:w-5/12 xl:text-2xl">
            Nos comprometemos a brindarte una experiencia sin complicaciones y
            transparente en la adquisición de tu próximo vehículo.
          </h3>
        </div>
      </section>
      <div className="min-h-92 flex w-full place-content-center">
        <section className="absolute flex w-full place-content-center px-10 text-center md:-mt-5 lg:-mt-[120px] lg:px-20">
          <div>
            <div className="flex max-h-[15rem] w-full min-w-72 flex-col items-center overflow-hidden bg-gray-300 sm:max-h-none">
              <h2 className="pb-2 pt-5 text-xl font-bold text-myred sm:text-3xl lg:text-5xl">
                OPCIONES DE CALIDAD
              </h2>
              <p className="px-3 pb-6 text-[8px] sm:text-base md:w-8/12 lg:w-8/12">
                Desde vehículos Toyota, Ford y Honda, hasta opciones usadas de
                calidad de marcas como Volkswagen, Chevrolet y BMW, estamos aquí
                para ayudarte a encontrar la opción perfecta que se ajuste a tus
                necesidades y presupuesto.
              </p>
              <SliderMarcas />
            </div>
          </div>
        </section>
      </div>
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
