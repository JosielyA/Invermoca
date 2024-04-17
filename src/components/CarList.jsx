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
      <div className="mt-[12rem] flex flex-wrap place-content-center gap-7 pt-5 sm:mt-[15rem] md:mt-[19.8rem] md:pt-0  lg:mt-[12rem]">
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
      <div
        className={`${cars.length > 6 ? "" : "hidden"} mx-10 mb-10 flex place-content-between items-center p-5`}
      >
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
