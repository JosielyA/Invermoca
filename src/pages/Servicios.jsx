import React from "react";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import autolavado from "../assets/images/autolavado.jpg";

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
        <h2>Servicios</h2>
        <div className="grid flex-wrap md:grid-cols-3">
          <div className="relative">
            <img src={autolavado} alt="Image 1" className="object-cover" />
            <div className="absolute inset-0 bg-myred opacity-80" />
            <div className="absolute -mt-14  w-full flex place-content-end">
              <div className="p-3 bg-gray-200 min-w-[370px] max-w-[370px] flex items-center">
                <p className="mr-5 font-thin text-[13px]">
                  Pulilavado, lavado de chasis y motor, latoneria.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={autolavado} alt="Image 2" className="object-cover" />
            <div className="absolute inset-0 bg-white opacity-80" />
            <div className="absolute -mt-14  w-full flex place-content-end">
              <div className="p-3 bg-myred text-white min-w-[370px] max-w-[370px]">
                <p className="mr-5 font-thin text-[13px]">
                  Servicio de mecanica ligera y pesada: amortiguacion, servicio
                  de inyectores, mecanica ligera y pesada
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={autolavado} alt="Image 3" className="object-cover" />
            <div className="absolute inset-0 bg-black opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
