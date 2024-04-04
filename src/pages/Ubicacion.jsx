import React from "react";
import fondoRojo from "../assets/images/fondo-rojo.jpg";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";

function Ubicacion() {
  return (
    <div>
      <section
        className="flex min-h-screen place-content-center items-center bg-cover bg-center uppercase text-white"
        style={{ backgroundImage: `url(${fondoRojo})` }}
      >
        <div className="flex flex-col items-center gap-4 lg:w-5/12">
          <h2 className="text-4xl font-bold">¿Dnde estamos?</h2>
          <div className="flex w-full gap-4">
            <button className="w-full rounded-[5px] bg-white px-10 py-3">
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="text-myred" />
                <span className="uppercase text-black">Sede Delicias</span>
              </div>
            </button>
            <button className="w-full rounded-[5px] bg-white px-10 py-3">
              <div className="flex place-content-center items-center gap-2">
                <IoLocationSharp className="text-myred" />
                <span className="uppercase text-black">Circv. 1</span>
              </div>
            </button>
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
