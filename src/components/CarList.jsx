import React, { useEffect, useRef, useState } from "react";
import CarCard from "./CarCard";

import { Carousel } from "./Carousel";
import { FaFilter } from "react-icons/fa";
import { scrollToSection } from "../libs/ScrollToFunction";
import { CarsFilters } from "./CarsFilters";

function CarList({
  carros,
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  //TODOS LOS CARROS
  const [cars, setCars] = useState([]);
  //CARROS FILTRADOS
  const [filteredCars, setFilteredCars] = useState([]);
  //CARRO SELECCIONADO
  const [viewCar, setViewCar] = useState([]);

  //FUNCIONALIDAD DEL MENU FILTROS EN TELEFONO
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  //PAGINACION
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const carsRef = useRef(null);
  const onSpecificPage = (n) => {
    setCurrentPage(n);
    scrollToSection(carsRef);
  };
  const productsQuantity = filteredCars.length;
  const lastIndex = currentPage * carsPerPage;
  const firstIndex = lastIndex - carsPerPage;
  const pagesQuantity = Math.ceil(productsQuantity / carsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setCars(carros);
    setFilteredCars(carros);
  }, []);

  //RENDER
  if (viewCar.length > 0) {
    return <Carousel car={viewCar[0]} setViewCar={setViewCar} />;
  } else {
    return (
      <div
        ref={carsRef}
        className="flex flex-col items-center md:w-[95%] md:flex-row md:place-content-center md:items-start md:gap-6 md:space-y-6"
      >
        <CarsFilters
          carros={carros}
          filteredCars={filteredCars}
          setFilteredCars={setFilteredCars}
          menuIsOpen={menuIsOpen}
          setCurrentPage={setCurrentPage}
          toggleMenu={toggleMenu}
        />
        <div className="w-[75%] md:w-[65%]">
          <div className="flex flex-wrap place-content-center gap-5">
            {filteredCars.length > 0 ? (
              filteredCars
                .map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    setViewCar={setViewCar}
                    allProductsinCart={allProductsinCart}
                    setAllProductsinCart={setAllProductsinCart}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                  />
                ))
                .slice(firstIndex, lastIndex)
            ) : (
              <div className="flex h-[650px] w-full place-content-center items-center">
                <h2 className="text-center text-5xl font-bold uppercase text-myred md:w-8/12">
                  No se encontraron productos.
                </h2>
              </div>
            )}
          </div>
          <div
            className={`${filteredCars.length > carsPerPage ? "" : "hidden"}`}
          >
            <div className="flex place-content-center items-center gap-3 p-5">
              {pageNumbers.map((nopage) => (
                <button
                  key={nopage}
                  onClick={() => onSpecificPage(nopage)}
                  className={`${currentPage == nopage ? "bg-white text-myred outline outline-1 outline-myred" : "bg-myred  text-white"} size-10 text-2xl`}
                >
                  {nopage}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarList;
