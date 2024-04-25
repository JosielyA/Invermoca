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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [carsTypes, setCarsTypes] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filtroPorAsientos = [
    { texto: "Dos Asientos", valor: "dosasientos" },
    { texto: "Cuatro Asientos", valor: "cuatroasientos" },
    { texto: "Cinco Asientos", valor: "cincoasientos" },
    { texto: "Menos de 10 Asientos", valor: "menos10asientos" },
    { texto: "Más de 10 Asientos", valor: "mas10asientos" },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(filtroPorAsientos.length).fill(false),
  );

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

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
  };

  const filterByType = (type) => {
    if (type == "Sin marca") {
      const filter = cars.filter((car) => car.marca == undefined);
      setFilteredCars(filter);
    } else {
      const filter = cars.filter((car) => car.marca == type);
      setFilteredCars(filter);
    }
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
    getCars();
    getCarsType();
  }, []);
  return (
    <div ref={carsRef} className="">
      <div className="flex place-content-end px-5 py-5">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 rounded-md bg-myred p-2"
        >
          <IoMenu className="size-12 text-white" />
        </button>
      </div>
      <aside
        className={`${menuIsOpen ? "" : "translate-x-full"} absolute left-0 -mt-6 w-full bg-white transition-all duration-200 ease-in-out`}
      >
        <section>
          <header className="flex h-[60px] place-content-center items-center bg-myred text-center text-white">
            <h2 className="text-lg font-semibold">Encuentra tu vehículo</h2>
          </header>
          <section className="max-h-[200px] overflow-scroll border-x-2 p-4">
            <ul className="space-y-2">
              {carsTypes.map((tipo, i) => (
                <li
                  key={i}
                  className=" flex place-content-between items-center"
                >
                  <button
                    onClick={() => {
                      filterByType(tipo);
                      toggleMenu();
                    }}
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
          <section className="flex max-h-[200px] flex-col space-y-3 overflow-scroll border-x-2 border-b-2 p-4">
            {filtroPorAsientos.map(({ texto, valor }, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  name={valor}
                  id={valor}
                  value={valor}
                  onChange={() => handleCheckboxChange(i)}
                />{" "}
                {texto}
              </label>
            ))}
          </section>
        </section>
      </aside>

      <div>
        <div className="flex flex-wrap">
          {filteredCars
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
            .slice(firstIndex, lastIndex)}
        </div>
        <div className={`${filteredCars.length > 6 ? "" : "hidden"}`}>
          <div className="">
            {pageNumbers.map((nopage) => (
              <button
                key={nopage}
                onClick={() => onSpecificPage(nopage)}
                className={`${currentPage == nopage ? "bg-myred text-white" : "bg-gray-300  text-black"}`}
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
