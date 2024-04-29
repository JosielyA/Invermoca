import { useState } from "react";

import { ImWhatsapp } from "react-icons/im";
import { encode } from "../data/whatsappurl";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const Carousel = ({ car, setViewCar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movePrev = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        return car.image.length - 1;
      }
    });
  };

  const moveNext = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < car.image.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-8 sm:py-10">
      <div className="flex w-7/12 flex-col place-content-center items-center space-y-4 text-center md:w-10/12">
        <div className="flex w-full flex-wrap place-content-around items-center space-x-5 text-xl font-bold uppercase text-myred sm:text-2xl md:text-4xl lg:text-6xl xl:space-x-12 2xl:text-6xl">
          <h2>Marca:{car.marca}</h2>
          <h2>Modelo:{car.name}</h2>
        </div>
        <p className="text-base font-light uppercase md:text-xl">
          {car.description}
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </h2>
      </div>
      <div className="flex w-full place-content-between items-center overflow-hidden md:w-11/12">
        <button>
          <IoMdArrowDropleft
            onClick={movePrev}
            className="size-14 text-myred"
          />
        </button>
        <div className="flex place-content-center items-center">
          <div className={`flex place-content-center items-center -space-x-5`}>
            <img
              className="w-[25%] md:w-[20%]"
              src={
                currentIndex == 0
                  ? car.image[car.image.length - 1]
                  : car.image[currentIndex - 1]
              }
              alt=""
            />
            <img
              className="z-50 w-[50%] md:w-[30%]"
              src={car.image[currentIndex]}
            />
            <img
              className="w-[25%] md:w-[20%]"
              src={
                currentIndex == car.image.length - 1
                  ? car.image[0]
                  : car.image[currentIndex + 1]
              }
              alt=""
            />
          </div>
        </div>
        <button>
          <IoMdArrowDropright
            onClick={moveNext}
            className="size-14 text-myred"
          />
        </button>
      </div>
      <div className="relative mt-10 w-screen overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {car.image.map((image, index) => (
            <div
              key={index}
              className="carousel-item relative h-full w-full flex-shrink-0  text-center"
            >
              <div
                className="z-0 block aspect-video h-full w-full bg-cover bg-left-top "
                style={{ backgroundImage: `url(${image})` }}
              >
                <img src={image} className="hidden aspect-video w-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap place-content-center items-center space-x-10 p-5">
          <button
            onClick={() => setViewCar([])}
            className="boton add1 mb-5 gap-3 px-6 py-2 text-lg md:px-10 md:py-4 md:text-3xl"
          >
            Ir Atras
          </button>
          <a
            href={encode(
              `Hola, quiero informacion del carro '${car.name}' que está a la venta en su pagina web.`,
            )}
            target="_blank"
            className="whats1 boton mb-5 gap-3 px-6 py-2 text-lg md:px-10 md:py-4 md:text-3xl"
          >
            <ImWhatsapp className="size-7 md:size-10" />
            <span>Ir a whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
