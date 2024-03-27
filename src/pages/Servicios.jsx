import React from "react";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import autolavado from "../assets/images/autolavado.jpg";
import Footer from "../components/Footer";

function Servicios() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoblanco})` }}
    >
      <div>
        <img src={autolavado} />
      </div>
      <div>
        <div className="flex items-center place-content-center py-8">
          <h2 className="text-6xl uppercase font-bold text-myred">Servicios</h2>
        </div>
        <div className="grid flex-wrap lg:grid-cols-3">
          <div className="relative group">
            <img src={autolavado} className="object-cover" />
            <div className="absolute inset-0 bg-myred opacity-80" />
            <div className="absolute flex items-center place-content-center h-14 bottom-0 right-0 w-11/12  ml-3 mb-9 lg:mb-3 p-3 bg-white text-myred font-thin text-sm text-center group-hover:scale-105 transition-transform">
              <p className="pr-3">
                Pulilavado, lavado de chasis y motor, latoneria.
              </p>
            </div>
          </div>
          <div className="relative group">
            <img src={autolavado} alt="Image 2" className="object-cover" />
            <div className="absolute inset-0 bg-white opacity-80" />
            <div className="absolute flex items-center place-content-center h-14 bottom-0 right-0 w-11/12 ml-5 mb-9 lg:mb-3 p-3  bg-myred text-white font-thin text-sm text-center group-hover:scale-105 transition-transform">
              <p className="pr-3">
                Servicios de mecanica ligera y pesada: amortiguacion, servicio
                de inyectores, mecanica ligera y pesada.
              </p>
            </div>
          </div>
          <div className="relative group">
            <img src={autolavado} alt="Image 3" className="object-cover" />
            <div className="absolute inset-0 bg-black opacity-80" />
            <div className="absolute flex items-center place-content-center h-14 bottom-0 right-0 w-11/12 ml-3 mb-9 lg:mb-3 p-3 bg-white text-black font-thin text-sm text-center group-hover:scale-105 transition-transform">
              <p className="pr-3">Pintura automotriz</p>
            </div>
          </div>
        </div>
      </div>
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

export default Servicios;
