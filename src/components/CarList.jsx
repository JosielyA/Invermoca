import React, { useEffect, useRef, useState } from "react";
import CarCard from "./CarCard";
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
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const carsRef = useRef(null);

  const productsQuantity = cars.length;
  const lastIndex = currentPage * carsPerPage;
  const firstIndex = lastIndex - carsPerPage;
  const pagesQuantity = Math.ceil(productsQuantity / carsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= pagesQuantity; i++) {
    pageNumbers.push(i);
  }

  const getCars = async () => {
    setCars(carros);
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
  }, []);
  return (
    <div ref={carsRef}>
      <div className="mx-10 mt-72 flex flex-col items-center gap-6 pt-5 sm:mt-60 md:mt-[18rem] md:pt-0 lg:mx-20 lg:mt-[12rem] lg:grid lg:grid-cols-2">
        {cars
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
      <div className="mx-10 mb-10 flex place-content-between items-center p-5">
        <button>
          <IoMdArrowDropleft
            onClick={onPrevious}
            className="size-10 md:size-12"
          />
        </button>
        <div className="flex gap-1 md:gap-4">
          {pageNumbers.map((nopage) => (
            <button
              key={nopage}
              onClick={() => onSpecificPage(nopage)}
              className={`flex h-10 w-10 place-content-center items-center rounded-md p-1 md:h-14 md:w-14 ${currentPage == nopage ? "bg-myred text-white" : "bg-gray-300  text-black"}`}
            >
              {nopage}
            </button>
          ))}
        </div>
        <button>
          <IoMdArrowDropright onClick={onNext} className="size-10 md:size-12" />
        </button>
      </div>
    </div>
  );
}

export default CarList;
