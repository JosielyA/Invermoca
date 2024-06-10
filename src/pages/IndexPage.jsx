import React, { useRef, useState } from "react";

import Footer from "../components/Footer";
import Slider from "../components/Slider";

import autonegro from "../assets/images/autonegro.png";

import vehiculos from "../assets/images/backgrounds/homepage/servicios/DSC_0083.jpg";
import repuestos from "../assets/images/backgrounds/homepage/servicios/DSC_0469.jpg";
import accesorios from "../assets/images/backgrounds/homepage/servicios/DSC_0357.jpg";

import productosDeCalidad from "../assets/images/backgrounds/servicespage/DSC_0494.jpg";

import { ImWhatsapp } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { MdLocalCarWash } from "react-icons/md";
import { servicios } from "../data/carsData";
import { encode } from "../data/whatsappurl";
import { Link } from "react-router-dom";
import { indexPageSliders } from "../libs/slidersData";

function IndexPage({
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const services = [
    {
      imagen: vehiculos,
      titulo: "Vehículos",
      texto:
        "Encuentra el vehículos perfecto que se adapte a tus necesidades y preferencias. ",
    },
    {
      imagen: repuestos,
      titulo: "Repuestos",
      texto:
        "Conoce los repuestos disponibles de alta calidad para todas las marcas y modelos de vehículos. ",
    },
    {
      imagen: accesorios,
      titulo: "Accesorios",
      texto:
        "Personaliza y mejora tu vehículo con nuestra amplia gama de accesorios.",
    },
  ];

  return (
    <div>
      <Slider slides={indexPageSliders} />

      <section className="overflow-hidden py-10 md:p-14">
        <div className="">
          <div className="mb-10 flex place-content-center items-center text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold text-myred md:text-5xl xl:text-7xl">
                Los mejores vehículos
              </h2>
              <h3 className="w-11/12 px-10 text-lg md:w-10/12 md:px-0 md:text-2xl xl:text-4xl">
                Encontrar el vehículo ideal que se adapte a tu estilo de vida,
                nunca había sido tan fácil.
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap place-content-around items-center gap-6 p-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex w-10/12 flex-col items-center gap-3 overflow-hidden rounded-lg p-4 text-center shadow-md shadow-gray-600 md:w-[45%] lg:w-[30%] "
              >
                <div className="flex place-content-center items-center">
                  <img src={service.imagen} className="rounded-lg" />
                </div>
                <div className="">
                  <h2 className="mb-2 text-4xl font-bold text-myred xl:text-5xl">
                    {service.titulo}
                  </h2>
                  <p className="no-scrollbar h-[120px] overflow-y-scroll pb-4 text-xl  md:h-[120px] xl:text-2xl">
                    {service.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-automotriz w-full overflow-hidden py-10 sm:h-[400px] lg:h-screen">
        <div className="flex h-full items-center">
          <div className="absolute flex min-w-[380px] place-content-center bg-black/40 p-4 text-center text-white backdrop-blur-sm md:backdrop-blur-0 lg:ml-[8rem] lg:bg-transparent lg:text-start">
            <div className="w-full">
              <h2 className="text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:w-[50%] lg:text-7xl lg:leading-[75px] 2xl:text-8xl">
                Ofrecemos
              </h2>
              <h2 className="text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-7xl lg:leading-[75px] 2xl:text-8xl">
                productos de <span className="text-myred">calidad</span>
              </h2>
              <h1 className="text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:w-full lg:text-7xl lg:leading-[75px] 2xl:text-8xl">
                respaldados por <span className="text-myred">garantías.</span>
              </h1>
              <p className="mt-4 text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-2xl lg:w-[50%] 2xl:text-4xl">
                Explora nuestras secciones ahora y descubre los vehículos y
                repuestos que mejorarán tu experiencia automotriz.
              </p>
            </div>
          </div>
          <div className="flex w-full place-content-center md:place-content-end">
            <img
              src={productosDeCalidad}
              alt="Image on the right"
              className="w-11/12 object-cover sm:w-6/12"
            />
          </div>
        </div>
      </div>
      <section className="">
        <div className="flex max-h-[1080px] max-w-[1920px] place-content-center items-center py-10 xl:place-content-end">
          <div className="invisible absolute left-0 w-1/2 xl:visible ">
            <img src={autonegro} className="xl:min-h-[70vh]" />
          </div>
          <div className="flex flex-col place-content-around gap-10 p-5 md:p-0 xl:min-h-[65vh] xl:w-[45%] 2xl:w-[40%]">
            {servicios.map((service, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-myred xl:h-16 xl:w-16"></div>
                <div className="w-9/12">
                  <h2 className="text-2xl font-semibold italic text-myred xl:text-4xl">
                    {service.name}
                  </h2>
                  <p className="text-[13px] font-thin xl:w-10/12 xl:text-lg">
                    {service.description}
                  </p>
                  <div className="flex gap-4">
                    {service.name == "Limpieza" ? (
                      <Link to="/limpieza" className="add1 boton">
                        <MdLocalCarWash className="size-6" />
                        <span className="text-[0.7rem] md:text-sm">
                          Ver precios
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    <a
                      target="_blank"
                      href={encode(
                        `Hola, quiero información acerca de el servicio '${service.name}.'`,
                      )}
                      className="whats1 boton"
                    >
                      <ImWhatsapp className="size-6" />{" "}
                      <span className="text-[0.6rem] md:text-sm">
                        Ir a Whatsapp
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-2 w-full border-myred" />
      <Footer />
    </div>
  );
}

export default IndexPage;
