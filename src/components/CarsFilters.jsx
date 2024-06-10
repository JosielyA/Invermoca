import React, { useEffect, useState } from "react";
import { numberToUSD, numberToKilometers } from "../libs/formatters";

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
  const [priceCarSelected, setPriceCarSelected] = useState("");
  const [kilCarSelected, setKilCarSelected] = useState("");
  const CarTypeMenuItems = [...new Set(carros.map((car) => car.type))];
  const CarYearMenuItems = [...new Set(carros.map((car) => car.year))].sort(
    (a, b) => a - b,
  );
  const CarStateMenuItems = ["Nuevo", "Usado"];
  const CarBrandMenuItems = [...new Set(carros.map((car) => car.marca))].sort();
  const CarModelMenuItems = [...new Set(carros.map((car) => car.name))].sort();
  const CarPriceMenuItems = ["1000,10000", "10000,20000", "20000,30000"];
  const CarKilMenuItems = [
    "0,50000",
    "50000,100000",
    "100000,150000",
    "150000,200000",
  ];
  const states = [
    typeCarSelected,
    yearCarSelected,
    stateCarSelected,
    brandCarSelected,
    modelCarSelected,
  ];
  const othersStates = [priceCarSelected, kilCarSelected];
  const handlers = {
    year: setYearCarSelected,
    state: setStateCarSelected,
    brand: setBrandCarSelected,
    model: setModelCarSelected,
    price: setPriceCarSelected,
    kil: setKilCarSelected,
  };

  const filterByType = (autos) => {
    return autos.filter(
      (car) =>
        car.type && car.type.toLowerCase() == typeCarSelected.toLowerCase(),
    );
  };
  const filterByYear = (autos) => {
    return autos.filter((car) => car.year == yearCarSelected);
  };

  const filterByState = (autos) => {
    return autos.filter(
      (car) =>
        car.state && car.state.toLowerCase() == stateCarSelected.toLowerCase(),
    );
  };
  const filterByBrand = (autos) => {
    return autos.filter(
      (car) =>
        car.marca && car.marca.toLowerCase() == brandCarSelected.toLowerCase(),
    );
  };
  const filterByModel = (autos) => {
    return autos.filter(
      (car) =>
        car.name && car.name.toLowerCase() == modelCarSelected.toLowerCase(),
    );
  };
  const filterByPrice = (autos) => {
    const firstNumberRange = Number(priceCarSelected.split(",")[0]);
    const secondNumberRange = Number(priceCarSelected.split(",")[1]);
    return autos.filter(
      (car) => car.price >= firstNumberRange && car.price <= secondNumberRange,
    );
  };
  const filterByKil = (autos) => {
    const firstNumberRange = Number(kilCarSelected.split(",")[0]);
    const secondNumberRange = Number(kilCarSelected.split(",")[1]);
    return autos.filter(
      (car) =>
        car.kilometraje >= firstNumberRange &&
        car.kilometraje <= secondNumberRange,
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
    if (priceCarSelected) {
      allFilteredCars = filterByPrice(allFilteredCars);
    }
    if (kilCarSelected) {
      allFilteredCars = filterByKil(allFilteredCars);
    }
    setFilteredCars(allFilteredCars);
  };

  const clearFilters = () => {
    setTypeCarSelected("");
    setYearCarSelected("");
    setStateCarSelected("");
    setBrandCarSelected("");
    setModelCarSelected("");
    setPriceCarSelected("");
    setKilCarSelected("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handlers[name]((prev) => value);
  };

  useEffect(() => {
    filter();
    setCurrentPage(1);
    toggleMenu();
  }, [
    typeCarSelected,
    yearCarSelected,
    stateCarSelected,
    brandCarSelected,
    modelCarSelected,
    priceCarSelected,
    kilCarSelected,
  ]);

  return (
    <aside className={`static mb-5 mt-5 w-10/12 md:w-1/3`}>
      <div
        className={`${states.some((str) => str !== "") || othersStates.some((str) => str !== "") ? "mb-2 flex flex-wrap items-center gap-2 text-black" : "hidden"}`}
      >
        {states.map((elemento, i) => (
          <h2
            key={i}
            className={`${elemento ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
          >
            {elemento}
          </h2>
        ))}

        <h2
          className={`${priceCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {numberToUSD.format(priceCarSelected.split(",")[0])} -{" "}
          {numberToUSD.format(priceCarSelected.split(",")[1])}
        </h2>
        <h2
          className={`${kilCarSelected ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white" : "hidden"}`}
        >
          {numberToKilometers.format(kilCarSelected.split(",")[0])} -{" "}
          {numberToKilometers.format(kilCarSelected.split(",")[1])}
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
            name="year"
            onChange={handleChange}
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
            name="state"
            onChange={handleChange}
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
            onChange={handleChange}
            name="brand"
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
            name="model"
            onChange={handleChange}
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
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            name="price"
            onChange={handleChange}
            value={priceCarSelected}
          >
            <option value="">Rango de precios</option>
            {CarPriceMenuItems.map((rango, i) =>
              rango ? (
                <option key={i} value={rango}>
                  {numberToUSD.format(rango.split(",")[0])} -{" "}
                  {numberToUSD.format(rango.split(",")[1])}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
            name="kil"
            onChange={handleChange}
            value={kilCarSelected}
          >
            <option value="">Rango de kilometraje</option>
            {CarKilMenuItems.map((rango, i) =>
              rango ? (
                <option key={i} value={rango}>
                  {numberToKilometers.format(rango.split(",")[0])} -{" "}
                  {numberToKilometers.format(rango.split(",")[1])}
                </option>
              ) : (
                ""
              ),
            )}
          </select>
        </section>
      </section>
      <div className="m-3 flex place-content-center items-center">
        <button
          onClick={clearFilters}
          className={`${states.some((str) => str !== "") || othersStates.some((str) => str !== "") ? "rounded-md  bg-myred p-2 font-semibold uppercase text-white " : "hidden"}`}
        >
          Limpiar filtros
        </button>
      </div>
    </aside>
  );
};
