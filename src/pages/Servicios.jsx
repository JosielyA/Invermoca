import React from "react";
import fondo from "../assets/images/backgrounds/DSC_0270.jpg";
import lavado from "../assets/images/backgrounds/DSC_0030.jpg";
import mecanica from "../assets/images/backgrounds/DSC_0494.jpg";
import pintura from "../assets/images/backgrounds/DSC_0199.jpg";
import Footer from "../components/Footer";

function Servicios() {
  return (
    <div>
      <div>
        <img src={fondo} />
      </div>
      <div>
        <div className="flex place-content-center items-center py-8">
          <h2 className="text-6xl font-bold uppercase text-myred">Servicios</h2>
        </div>
        <div className="grid flex-wrap lg:grid-cols-3">
          <div className="group relative">
            <img src={lavado} className="object-cover" />
            <div className="absolute inset-0 bg-myred opacity-80" />
            <div className="absolute bottom-0 right-0 mb-9 ml-3 flex h-14 w-11/12  place-content-center items-center bg-white p-3 text-center text-sm font-thin text-myred transition-transform group-hover:scale-105 lg:mb-3">
              <p className="pr-3">
                Pulilavado, lavado de chasis y motor, latoneria.
              </p>
            </div>
          </div>
          <div className="group relative">
            <img src={mecanica} alt="Image 2" className="object-cover" />
            <div className="absolute inset-0 bg-white opacity-80" />
            <div className="absolute bottom-0 right-0 mb-9 ml-5 flex h-14 w-11/12 place-content-center items-center bg-myred p-3  text-center text-sm font-thin text-white transition-transform group-hover:scale-105 lg:mb-3">
              <p className="pr-3">Servicios de mecanica ligera y pesada.</p>
            </div>
          </div>
          <div className="group relative">
            <img src={pintura} alt="Image 3" className="object-cover" />
            <div className="absolute inset-0 bg-black opacity-80" />
            <div className="absolute bottom-0 right-0 mb-9 ml-3 flex h-14 w-11/12 place-content-center items-center bg-white p-3 text-center text-sm font-thin text-black transition-transform group-hover:scale-105 lg:mb-3">
              <p className="pr-3">Pintura automotriz</p>
            </div>
          </div>
        </div>
      </div>
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

export default Servicios;
