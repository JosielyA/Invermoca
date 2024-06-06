import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

export const CarsFilters = ({
  carros,
  filteredCars,
  setFilteredCars,
  menuIsOpen,
  setCurrentPage,
  toggleMenu,
}) => {
  //FILTROS
  const [typeCarSelected, setTypeCarSelected] = useState("");
  const [yearCarSelected, setYearCarSelected] = useState("");
  const [stateCarSelected, setStateCarSelected] = useState("");
  const [brandCarSelected, setBrandCarSelected] = useState("");
  const [modelCarSelected, setModelCarSelected] = useState("");
  const CarTypeMenuItems = [...new Set(carros.map((car) => car.type))];
  const CarYearMenuItems = [...new Set(carros.map((car) => car.year))];
  const CarStateMenuItems = [...new Set(carros.map((car) => car.state))];
  const CarBrandMenuItems = [...new Set(carros.map((car) => car.marca))];
  const CarModelMenuItems = [...new Set(carros.map((car) => car.name))];

  const filterByType = (autos) => {
    return autos.filter(
      (car) => car.type.toLowerCase() == typeCarSelected.toLowerCase(),
    );
  };
  const filterByYear = (autos) => {
    return autos.filter((car) => car.year == yearCarSelected);
  };

  const filterByState = (autos) => {
    return autos.filter(
      (car) => car.state.toLowerCase() == stateCarSelected.toLowerCase(),
    );
  };
  const filterByBrand = (autos) => {
    return autos.filter(
      (car) => car.marca.toLowerCase() == brandCarSelected.toLowerCase(),
    );
  };
  const filterByModel = (autos) => {
    return autos.filter(
      (car) => car.name.toLowerCase() == modelCarSelected.toLowerCase(),
    );
  };

  const filter = () => {
    let allFilteredCars;
    if (typeCarSelected) {
      allFilteredCars = [...filterByType(carros)];
    } else {
      allFilteredCars = carros;
    }
    if (yearCarSelected) {
      allFilteredCars = filterByYear(allFilteredCars);
    }
    if (stateCarSelected) {
      allFilteredCars = filterByState(allFilteredCars);
    }
    if (brandCarSelected) {
      allFilteredCars = filterByBrand(allFilteredCars);
    }
    if (modelCarSelected) {
      allFilteredCars = filterByModel(allFilteredCars);
    }
    setFilteredCars(allFilteredCars);
  };

  const handleYearChange = (e) => {
    setYearCarSelected((prev) => e.target.value);
    setCurrentPage(1);
    toggleMenu();
  };
  const handleStateChange = (e) => {
    setStateCarSelected((prev) => e.target.value);
    setCurrentPage(1);
    toggleMenu();
  };
  const handleBrandChange = (e) => {
    setBrandCarSelected((prev) => e.target.value);
    setCurrentPage(1);
    toggleMenu();
  };
  const handleModelChange = (e) => {
    setModelCarSelected((prev) => e.target.value);
    setCurrentPage(1);
    toggleMenu();
  };

  useEffect(() => {
    filter();
  }, [
    typeCarSelected,
    yearCarSelected,
    stateCarSelected,
    brandCarSelected,
    modelCarSelected,
  ]);

  return (
    <aside className={`static mb-5 mt-5 w-10/12 md:w-1/3`}>
      <div
        className={`${typeCarSelected || yearCarSelected || stateCarSelected || brandCarSelected || modelCarSelected ? "mb-2 flex items-center gap-2 text-black" : "hidden"}`}
      >
        <h2
          className={`${typeCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {typeCarSelected}
        </h2>
        <h2
          className={`${yearCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {yearCarSelected}
        </h2>
        <h2
          className={`${stateCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {stateCarSelected}
        </h2>
        <h2
          className={`${brandCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {brandCarSelected}
        </h2>
        <h2
          className={`${modelCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {modelCarSelected}
        </h2>
      </div>
      <section className="">
        <header className="flex h-[60px] place-content-center items-center bg-myred text-center text-white">
          <h2 className="text-lg font-semibold">Encuentra tu vehículo</h2>
        </header>
        <section className="max-h-[500px] overflow-y-scroll border-x-2 border-b-2 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  setTypeCarSelected("");
                  setCurrentPage(1);
                  toggleMenu();
                  filter();
                }}
                className={`${!typeCarSelected ? "bg-myred text-white" : "text-myred"} flex w-full place-content-start items-center p-2 uppercase`}
              >
                Ver todos
              </button>
            </li>
            {CarTypeMenuItems.map((tipo, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setTypeCarSelected((prev) => tipo);
                    setCurrentPage(1);
                    toggleMenu();
                  }}
                  className={`${typeCarSelected == tipo ? "bg-myred text-white" : ""} flex w-full place-content-start items-center p-2 uppercase`}
                >
                  {tipo}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex max-h-[500px] flex-col space-y-2 overflow-y-scroll border-x-2 border-b-2 p-4">
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            onChange={handleYearChange}
            value={yearCarSelected}
          >
            <option value="">Año</option>
            {CarYearMenuItems.map((year, i) =>
              year ? (
                <option key={i} value={year}>
                  {year}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            onChange={handleStateChange}
            value={stateCarSelected}
          >
            <option value="">Estado</option>
            {CarStateMenuItems.map((state, i) =>
              state ? (
                <option key={i} value={state}>
                  {state}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            onChange={handleBrandChange}
            value={brandCarSelected}
          >
            <option value="">Marca</option>
            {CarBrandMenuItems.map((brand, i) =>
              brand ? (
                <option key={i} value={brand}>
                  {brand}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            name="type"
            id="type"
            onChange={handleModelChange}
            value={modelCarSelected}
          >
            <option value="">Modelo</option>
            {CarModelMenuItems.map((model, i) =>
              model ? (
                <option key={i} value={model}>
                  {model}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
        </section>
      </section>
    </aside>
  );
};
