import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "animate.css/animate.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    {
      classname: "homeslider1",
      text: (
        <div>
          <h2 className="mb-4 text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:w-9/12 lg:text-6xl 2xl:text-9xl">
            ¡Bienvenido a <span className="text-myred">Invermoca</span>!
          </h2>
          <h3 className="text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-lg md:text-2xl lg:w-8/12 2xl:text-4xl">
            Encontrar el vehículo ideal que se adapte a tu estilo de vida, nunca
            había sido tan fácil.
          </h3>
        </div>
      ),
    },
    {
      classname: "homeslider2",
      text: (
        <div>
          <h2 className="mb-4 text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:w-9/12 lg:text-6xl 2xl:text-9xl">
            ¡Bienvenido a <span className="text-myred">Invermocaa</span>!
          </h2>
          <h3 className="text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-lg md:text-2xl lg:w-8/12 2xl:text-4xl">
            Encontrar el vehículo ideal que se adapte a tu estilo de vida, nunca
            había sido tan fácil.
          </h3>
        </div>
      ),
    },
    {
      classname: "homeslider3",
      text: (
        <div>
          <h2 className="mb-4 text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:w-9/12 lg:text-6xl 2xl:text-9xl">
            ¡Bienvenido a <span className="text-myred">Invermocaaa</span>!
          </h2>
          <h3 className="text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] sm:text-lg md:text-2xl lg:w-8/12 2xl:text-4xl">
            Encontrar el vehículo ideal que se adapte a tu estilo de vida, nunca
            había sido tan fácil.
          </h3>
        </div>
      ),
    },
  ];

  const handleSlideChangeNext = (swiper) => {
    if (activeIndex < pages.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const handleSlideChangePrev = (swiper) => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(pages.length - 1);
    }
  };

  return (
    <Swiper
      onSlideNextTransitionStart={handleSlideChangeNext}
      onSlidePrevTransitionStart={handleSlideChangePrev}
      navigation={true}
      speed={1000}
      loop={true}
      allowSlideNext={true}
      allowSlidePrev={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay]}
    >
      {pages.map(({ classname, text }, index) => (
        <SwiperSlide key={index}>
          <section
            className={`${classname} flex place-content-center items-center text-white md:h-screen`}
          >
            <div
              className={`${activeIndex === index ? "animate__animated animate__fadeInUp" : ""}  p-20 text-center sm:w-10/12 lg:w-9/12 lg:p-0 lg:text-start`}
            >
              {text}
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
