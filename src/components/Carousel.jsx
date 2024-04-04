import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

export const Carousel = ({ cars }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let images = [];
  for (let i = 0; i < cars.length; i++) {
    images.push(cars[i].image);
  }

  const movePrev = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        return cars.length - 1;
      }
    });
  };

  const moveNext = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < cars.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const whatsMessage = (resource) => {
    //send a whatsapp message whit resource
    console.log(resource);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-8 left-0 right-0 flex h-full w-full items-center justify-between px-4 text-gray-400">
        <button
          onClick={movePrev}
          className="z-10 m-0 h-full p-0 text-center  opacity-75 transition-all duration-300 hover:text-white hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <IoIosArrowDropleftCircle className="size-8 md:size-14" />
        </button>
        <button
          onClick={moveNext}
          className="z-10 m-0 h-full p-0 text-center opacity-75 transition-all duration-300 hover:text-white hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <IoIosArrowDroprightCircle className="size-8 md:size-14" />
        </button>
      </div>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {cars.map((resource, index) => (
          <div
            key={index}
            className="carousel-item relative h-full w-full flex-shrink-0  text-center"
          >
            <div
              className="z-0 block aspect-video h-full w-full bg-cover bg-left-top "
              style={{ backgroundImage: `url(${resource.image})` }}
            >
              <img
                src={resource.image}
                alt={resource.name}
                className="hidden aspect-video w-full"
              />
            </div>
            <div className="flex place-content-center items-center p-5">
              <button
                onClick={() => whatsMessage(resource)}
                className="whats1 boton mb-5 gap-3 px-6 py-2 text-lg md:px-10 md:py-4 md:text-3xl"
              >
                <ImWhatsapp className="size-7 md:size-10" />
                <span>Ir a whatsapp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
