import React from "react";
import { encode } from "../data/whatsappurl";
import { FaCartPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function CarCard({
  car,
  allProductsinCart,
  setAllProductsinCart,
  total,
  setViewCar,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const onAdd = (product) => {
    const alreadyInProduct = allProductsinCart.find(
      (item) => item.id === product.id,
    );
    if (alreadyInProduct) {
      const products = allProductsinCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setTotal(total + alreadyInProduct.price);
      setCountProducts(countProducts + 1);
      return setAllProductsinCart([...products]);
    }
    const newProduct = { ...product, quantity: 1 };
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProductsinCart([...allProductsinCart, newProduct]);
  };

  return (
    <div className="flex w-full flex-col items-center text-center md:w-[45%]">
      <div className="w-full">
        <img
          className="h-[12rem] w-full object-fill sm:h-[16rem] lg:h-[14rem] 2xl:h-[16rem]"
          src={car.image[0]}
          alt={`Imagen de ${car.name}`}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between space-y-5 bg-gray-300 p-4">
        <div className="">
          <h2 className="text-xl font-bold uppercase text-myred">
            {car.marca} {car.name}
          </h2>
        </div>
        <div>
          <button
            onClick={() => setViewCar([car])}
            className="rounded-md bg-myred px-4 py-2 text-lg font-semibold uppercase text-white"
          >
            ver fotos
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
