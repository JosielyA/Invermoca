import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function CarCard({ image, name, description, price }) {
  return (
    <div className="flex max-w-[400px] flex-col-reverse items-start bg-gray-300 shadow-md shadow-black md:max-w-[600px] md:flex-row">
      <div className="h-[50%] w-full p-5 text-start md:h-full md:w-1/2">
        <h2 className="text-base font-bold uppercase text-myred">{name}</h2>
        <p className="text-[10px] font-light uppercase">{description}</p>
        <p>{price}$</p>
        <div className="mt-3 flex h-full place-content-end items-center gap-2">
          <button className="rounded-sm bg-myred px-2 py-1 text-sm font-bold uppercase text-white">
            Ver Fotos
          </button>
          <button className="rounded-sm bg-myred px-2 py-1 text-sm font-bold uppercase text-white">
            <FaCartPlus className="size-5" />
          </button>
          <button className="rounded-sm bg-whats px-2 py-1 text-sm font-bold uppercase text-white">
            <FaWhatsapp className="size-5" />
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full md:h-full md:max-w-[53%]">
        <img src={image} className="h-full w-full" />
      </div>
    </div>
  );
}

export default CarCard;
