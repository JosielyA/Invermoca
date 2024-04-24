import React from "react";
import ubicacion from "../assets/images/ubicacion.jpeg";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";

function Ubicacion() {
  return (
    <div>
      <section
        className="flex min-h-[500px] place-content-center items-center bg-cover bg-center uppercase text-white md:min-h-[800px] lg:min-h-screen"
        style={{ backgroundImage: `url(${ubicacion})` }}
      >
        <div className="flex w-full flex-col items-center gap-4 p-10 sm:w-10/12 lg:w-6/12">
          <h2 className="text-center text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            ¿Dónde estamos?
          </h2>
          <div className="flex w-full gap-4 text-sm md:text-lg lg:gap-7">
            <a
              href=""
              className="flex h-[2.5rem] w-1/2 place-content-center items-center rounded-[5px] bg-white shadow-md hover:scale-110 md:h-[4rem]"
            >
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="size-7 text-myred" />
                <span className="uppercase text-black">Sede Delicias</span>
              </div>
            </a>
            <a
              href=""
              className="flex h-[2.5rem] w-1/2 place-content-center items-center rounded-[5px] bg-white shadow-md hover:scale-110 md:h-[4rem]"
            >
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="size-7 text-myred" />
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
