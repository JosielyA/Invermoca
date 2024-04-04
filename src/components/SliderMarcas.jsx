import React, { useEffect, useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import chevrolet from "../assets/images/chevrolet_logo.png";
import hyundai from "../assets/images/hyundai_logo.png";
import toyota_logo from "../assets/images/toyota_logo.png";

const SliderMarcas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(3);

  const marcas = [
    chevrolet,
    hyundai,
    toyota_logo,
    chevrolet,
    toyota_logo,
    chevrolet,
    hyundai,
    toyota_logo,
    chevrolet,
    toyota_logo,
  ];

  const totalElements = marcas.length;
  const pagesQuantity = Math.ceil(totalElements / elementsPerPage);

  const lastIndex = currentPage * elementsPerPage;
  const firstIndex = lastIndex - elementsPerPage;

  const onPrevious = () => {
    if (currentPage <= 1) {
      setCurrentPage(pagesQuantity);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const onNext = () => {
    if (currentPage >= pagesQuantity) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(onNext, 3000);
    return () => clearInterval(slideInterval);
  }, [currentPage]);

  return (
    <div className="flex w-full place-content-between items-center px-5 pb-8">
      <button onClick={onPrevious}>
        <IoMdArrowDropleft className="size-6 md:size-14" />
      </button>
      <div className="flex place-content-center items-center gap-4 md:gap-10">
        {marcas
          .map((marca, i) => (
            <div key={i}>
              <img src={marca} className="w-16 md:w-36" />
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </div>

      <button onClick={onNext}>
        <IoMdArrowDropright className="size-6 md:size-14" />
      </button>
    </div>
  );
};

export default SliderMarcas;
