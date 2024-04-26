import React, { useEffect, useRef, useState } from "react";
import CarCard from "./CarCard";
import { FaPlus } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";

function CarList({
  carros,
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [viewCar, setViewCar] = useState([]);
  const [typeFilterSelected, setTypeFilterSelected] = useState("");
  const [typeSitsSelected, setTypeSitsSelected] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [carsTypes, setCarsTypes] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filtroPorAsientos = [
    { texto: "Dos Asientos", valor: 2 },
    { texto: "Cuatro Asientos", valor: 4 },
    { texto: "Cinco Asientos", valor: 5 },
    { texto: "Menos de 10 Asientos", valor: 10 },
    { texto: "Más de 10 Asientos", valor: 11 },
  ];

  const carsRef = useRef(null);

  const productsQuantity = filteredCars.length;
  const lastIndex = currentPage * carsPerPage;
  const firstIndex = lastIndex - carsPerPage;
  const pagesQuantity = Math.ceil(productsQuantity / carsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= pagesQuantity; i++) {
    pageNumbers.push(i);
  }

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const onFilter = () => {
    if (!typeFilterSelected && typeSitsSelected.length < 1) {
      getCars();
    } else if (typeFilterSelected && typeSitsSelected.length < 1) {
      const filteringCars = filterByMarca();
      setFilteredCars(filteringCars);
    } else if (!typeFilterSelected && typeSitsSelected.length > 0) {
      const carsfilteredbysits = filterBySits(typeSitsSelected[1]);
      setFilteredCars(carsfilteredbysits);
    } else if (typeFilterSelected && typeSitsSelected.length > 0) {
      const filteredbysits = filterBySits(typeSitsSelected[1]);
      if (typeFilterSelected == "Sin marca") {
        const filteredbymarca = filteredbysits.filter(
          (car) => car.marca == undefined,
        );
        setFilteredCars(filteredbymarca);
      } else {
        const filteredbymarca = filteredbysits.filter(
          (car) => car.marca == typeFilterSelected,
        );
        setFilteredCars(filteredbymarca);
      }
    }
  };
  const filterByMarca = () => {
    let filteringCars;
    if (typeFilterSelected == "Sin marca") {
      filteringCars = cars.filter((car) => car.marca == undefined);
    } else {
      filteringCars = cars.filter((car) => car.marca == typeFilterSelected);
    }
    return filteringCars;
  };
  const filterBySits = (i) => {
    let filter;
    if (filtroPorAsientos[i].valor < 10) {
      filter = cars.filter((car) => car.asientos == filtroPorAsientos[i].valor);
    } else if (filtroPorAsientos[i].valor == 10) {
      filter = cars.filter((car) => car.asientos < filtroPorAsientos[i].valor);
    } else if (filtroPorAsientos[i].valor == 11) {
      filter = cars.filter(
        (car) => car.asientos >= filtroPorAsientos[i].valor - 1,
      );
    }
    return filter;
  };

  const getCars = async () => {
    setCars(carros);
    setFilteredCars(carros);
  };
  const getCarsType = () => {
    let carsTypestoSet = [];
    for (const element of carros) {
      const tipo = element.marca || "Sin marca";
      if (!carsTypestoSet.includes(tipo)) {
        carsTypestoSet.push(tipo);
      }
    }
    setCarsTypes(carsTypestoSet);
  };

  const onPrevious = () => {
    if (currentPage <= 1) {
      setCurrentPage(pagesQuantity);
      scrollToSection(carsRef);
    } else {
      setCurrentPage(currentPage - 1);
      scrollToSection(carsRef);
    }
  };
  const onNext = () => {
    if (currentPage >= pagesQuantity) {
      setCurrentPage(1);
      scrollToSection(carsRef);
    } else {
      setCurrentPage(currentPage + 1);
      scrollToSection(carsRef);
    }
  };
  const onSpecificPage = (n) => {
    setCurrentPage(n);
    scrollToSection(carsRef);
  };
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    onFilter();
  }, []);

  useEffect(() => {
    onFilter();
    getCarsType();
  }, [typeFilterSelected, typeSitsSelected]);
  return (
    <div
      ref={carsRef}
      className="flex flex-col items-center md:w-[95%] md:flex-row md:place-content-center md:items-start md:gap-6 md:space-y-6"
    >
      <div className="flex place-content-end self-end px-5 py-5 md:invisible md:absolute">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 rounded-md bg-myred p-2"
        >
          <IoMenu className="size-12 text-white" />
        </button>
      </div>

      <aside
        className={`${menuIsOpen ? "" : "invisible md:visible"} absolute right-5 mt-20 w-[90%] bg-white transition-all duration-200 ease-in-out md:static md:-mt-0 md:w-1/3`}
      >
        <div
          className={`${typeFilterSelected || typeSitsSelected.length > 0 ? "mb-2 flex items-center gap-2 text-black" : "hidden"}`}
        >
          <h2
            className={`${typeFilterSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
          >
            {typeFilterSelected}
          </h2>
          <h2
            className={`${typeSitsSelected.length > 0 ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
          >
            {typeSitsSelected[0]}
          </h2>
        </div>
        <section className="">
          <header className="flex h-[60px] place-content-center items-center bg-myred text-center text-white">
            <h2 className="text-lg font-semibold">Encuentra tu vehículo</h2>
          </header>
          <section className="max-h-[500px] overflow-y-scroll border-x-2 p-4">
            <ul className="space-y-2">
              <li
                className={`${!typeFilterSelected ? "bg-myred text-white" : "text-myred"} flex place-content-between items-center p-2`}
              >
                <button
                  onClick={() => {
                    setTypeFilterSelected("");
                    toggleMenu();
                  }}
                  className="uppercase"
                >
                  Ver todos
                </button>
                <FaPlus />
              </li>
              {carsTypes.map((tipo, i) => (
                <li
                  key={i}
                  className={`${typeFilterSelected == tipo ? "bg-myred text-white" : ""} flex place-content-between items-center p-2`}
                >
                  <button
                    onClick={() => {
                      setTypeFilterSelected(tipo);
                      toggleMenu();
                    }}
                    className="uppercase"
                  >
                    {tipo}
                  </button>
                  <FaPlus />
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section>
          <header className="flex h-[50px] place-content-center items-center bg-myred text-center text-white">
            <h2 className="text-lg font-semibold">Filtros</h2>
          </header>
          <section className="mt-4 flex max-h-[500px] flex-col space-y-3 overflow-y-scroll border-x-2 border-b-2 p-4">
            <ul className="">
              <li
                className={`${typeSitsSelected.length < 1 ? "bg-myred text-white" : "text-myred"} flex place-content-between items-center p-2`}
              >
                <button
                  onClick={() => {
                    setTypeSitsSelected([]);
                    toggleMenu();
                  }}
                  className="uppercase"
                >
                  Ver todos
                </button>
                <FaPlus />
              </li>
              {filtroPorAsientos.map((asientos, i) => (
                <li
                  key={i}
                  className={`${typeSitsSelected[0] == asientos.texto ? "bg-myred text-white" : ""} flex place-content-between items-center p-2`}
                >
                  <button
                    onClick={() => {
                      setTypeSitsSelected([asientos.texto, i]);
                      toggleMenu();
                    }}
                    className="uppercase"
                  >
                    {asientos.texto}
                  </button>
                  <FaPlus />
                </li>
              ))}
            </ul>
          </section>
        </section>
      </aside>

      <div className="w-[75%] md:md:w-[65%]">
        <div className="flex flex-wrap place-content-center gap-5">
          {filteredCars.length > 0 ? (
            filteredCars
              .map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
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
        <div className={`${filteredCars.length > 6 ? "" : "hidden"}`}>
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

export default CarList;
