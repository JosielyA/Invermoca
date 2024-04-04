import React, { useEffect, useRef, useState } from "react";
import CarCard from "./CarCard";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";

function CarList() {
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

  const carros = [
    {
      id: 0,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 1,
      name: "Chevrolet lorem",
      description: "Soluta repellat magni at fugit reprehenderit.",
      price: 5000,
      image:
        "https://www.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg",
    },
    {
      id: 2,
      name: "Toyota lorem",
      description:
        "Dignissimos voluptatibus odit nihil labore, deleniti repudiandae.",
      price: 3200,
      image:
        "https://assets.volkswagen.com/is/image/volkswagenag/diferencias-carros-sedan-hatchback-suv?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==",
    },
    {
      id: 3,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 4,
      name: "Chevrolet lorem",
      description: "Soluta repellat magni at fugit reprehenderit.",
      price: 5000,
      image:
        "https://www.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg",
    },
    {
      id: 5,
      name: "Toyota lorem",
      description:
        "Dignissimos voluptatibus odit nihil labore, deleniti repudiandae.",
      price: 3200,
      image:
        "https://assets.volkswagen.com/is/image/volkswagenag/diferencias-carros-sedan-hatchback-suv?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==",
    },
    {
      id: 6,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 7,
      name: "Chevrolet lorem",
      description: "Soluta repellat magni at fugit reprehenderit.",
      price: 5000,
      image:
        "https://www.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg",
    },
    {
      id: 8,
      name: "Toyota lorem",
      description:
        "Dignissimos voluptatibus odit nihil labore, deleniti repudiandae.",
      price: 3200,
      image:
        "https://assets.volkswagen.com/is/image/volkswagenag/diferencias-carros-sedan-hatchback-suv?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==",
    },
    {
      id: 9,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 0,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 10,
      name: "Chevrolet lorem",
      description: "Soluta repellat magni at fugit reprehenderit.",
      price: 5000,
      image:
        "https://www.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg",
    },
    {
      id: 11,
      name: "Toyota lorem",
      description:
        "Dignissimos voluptatibus odit nihil labore, deleniti repudiandae.",
      price: 3200,
      image:
        "https://assets.volkswagen.com/is/image/volkswagenag/diferencias-carros-sedan-hatchback-suv?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==",
    },
    {
      id: 12,
      name: "Camaro lorem ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quia!",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaMpl4YN-EclfXnAfxcB3CaXh4C9bZn0F8eDKLDIthg&s",
    },
    {
      id: 14,
      name: "Toyota lorem",
      description:
        "Dignissimos voluptatibus odit nihil labore, deleniti repudiandae.",
      price: 3200,
      image:
        "https://assets.volkswagen.com/is/image/volkswagenag/diferencias-carros-sedan-hatchback-suv?Zml0PWNyb3AlMkMxJndpZD0xMjgwJmhlaT03MjAmZm10PWpwZWcmcWx0PTc5JmJmYz1vZmYmMmI5ZQ==",
    },
  ];

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
      <div className="mx-10 mt-72 flex flex-col items-center gap-6 pt-5 sm:mt-60 md:mt-[18rem] md:pt-0 lg:mx-20 lg:mt-[12rem] xl:grid xl:grid-cols-2">
        {cars
          .map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              name={car.name}
              description={car.description}
              price={car.price}
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
