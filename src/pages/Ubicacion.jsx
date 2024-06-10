import React from "react";
import ubicacion from "../assets/images/ubicacion.jpeg";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";

function Ubicacion() {
  return (
    <div>
      <section
        className="flex min-h-[500px] flex-col place-content-center items-center bg-cover bg-center uppercase text-white md:min-h-[800px] lg:min-h-screen"
        style={{ backgroundImage: `url(${ubicacion})` }}
      >
        <h2 className="mb-4 text-3xl font-bold drop-shadow-[0_3px_3px_rgba(0,0,0,1)] sm:mb-6 md:text-5xl">
          ¿Dónde estamos?
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="flex place-content-center items-center gap-1 rounded-md bg-white px-5 py-2 text-black sm:px-14 sm:py-3"
            href="https://maps.app.goo.gl/Xb7rY5Fev3jWfo4X6"
            target="_blank"
          >
            <IoLocationSharp className="size-6 text-myred sm:size-8" />
            <span>Sede Delicias</span>
          </a>
          <a
            className="flex place-content-center items-center gap-1 rounded-md bg-white px-5 py-2 text-black sm:px-14 sm:py-3"
            href="https://maps.app.goo.gl/96BWsJV4TNHFv16M9"
            target="_blank"
          >
            <IoLocationSharp className="size-6 text-myred sm:size-8" />
            <span>Sede Circv. 1</span>
          </a>
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
