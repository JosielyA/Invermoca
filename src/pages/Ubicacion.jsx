import React from "react";
import fondoRojo from "../assets/images/fondo-rojo.jpg";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";

function Ubicacion() {
  return (
    <div>
      <section
        className="flex min-h-[500px] place-content-center items-center bg-cover bg-center uppercase text-white md:min-h-[800px] lg:min-h-screen"
        style={{ backgroundImage: `url(${fondoRojo})` }}
      >
        <div className="flex w-full flex-col items-center gap-4 p-10 sm:w-10/12 lg:w-6/12">
          <h2 className="text-center text-4xl font-bold">¿Dónde estamos?</h2>
          <div className="flex w-full gap-4 text-sm md:text-lg lg:gap-7">
            <a
              href=""
              className="flex h-[2.5rem] w-1/2 place-content-center items-center rounded-[5px] bg-white md:h-[4rem]"
            >
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="text-myred" />
                <span className="uppercase text-black">Sede Delicias</span>
              </div>
            </a>
            <a
              href=""
              className="flex h-[2.5rem] w-1/2 place-content-center items-center rounded-[5px] bg-white md:h-[4rem]"
            >
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="text-myred" />
                <span className="uppercase text-black">Sede Circv. 1</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="flex h-6 place-content-center items-center">
          <div className="h-1 w-full bg-myred"></div>
        </div>
        <div className="flex h-3 w-full bg-gray-400 "></div>
      </div>
      <Footer />
    </div>
  );
}

export default Ubicacion;
