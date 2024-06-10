import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "animate.css/animate.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChangeNext = (swiper) => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const handleSlideChangePrev = (swiper) => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(slides.length - 1);
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
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay]}
    >
      {slides.map(({ classname, text }, index) => (
        <SwiperSlide key={index}>
          <section
            className={`${classname} sliderimage flex h-[400px] place-content-center items-center text-white md:h-[600px] lg:h-screen`}
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
