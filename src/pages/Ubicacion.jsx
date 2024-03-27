import React from "react";
import fondoRojo from "../assets/images/fondo-rojo.jpg";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";

function Ubicacion() {
  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center text-white uppercase flex items-center place-content-center"
        style={{ backgroundImage: `url(${fondoRojo})` }}
      >
        <div className="flex flex-col gap-4 lg:w-5/12 items-center">
          <h2 className="text-4xl font-bold">?Donde estamos?</h2>
          <div className="flex gap-4 w-full">
            <button className="bg-white w-full py-3 px-10 rounded-[5px]">
              <div className="flex gap-2 items-center place-content-center">
                <IoLocationSharp className="text-myred" />
                <span className="text-black uppercase">Sede Delicias</span>
              </div>
            </button>
            <button className="bg-white w-full py-3 px-10 rounded-[5px]">
              <div className="flex gap-2 items-center place-content-center">
                <IoLocationSharp className="text-myred" />
                <span className="text-black uppercase">Circv. 1</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      <div>
        <div className="h-6 flex items-center place-content-center">
          <div className="w-full h-1 bg-myred"></div>
        </div>
        <div className="h-3 w-full bg-gray-400 flex "></div>
      </div>
      <Footer />
    </div>
  );
}

export default Ubicacion;
