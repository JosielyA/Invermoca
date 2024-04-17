import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function CarCard({
  car,
  allProductsinCart,
  setAllProductsinCart,
  total,
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
    <div className="flex w-[44%] min-w-64 flex-col-reverse items-start bg-gray-300 shadow-md shadow-black md:flex-row">
      <div className="md:w/1/2 flex h-1/2 w-full flex-col place-content-between md:h-full">
        <div className="h-2/3 p-3 md:p-5">
          <h2 className="text-base font-bold uppercase text-myred lg:text-xl">
            {car.name}
          </h2>
          <p className="text-[10px] font-light uppercase lg:text-[12px]">
            {car.description}
          </p>
          <p className="font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(car.price)}
          </p>
        </div>
        <div className="flex items-center gap-2 self-end p-3 md:p-5">
          <button className="rounded-sm bg-myred px-2 py-1 text-sm font-bold uppercase text-white">
            Ver Fotos
          </button>
          <button
            onClick={() => onAdd(car)}
            className="rounded-sm bg-myred px-2 py-1 text-sm font-bold uppercase text-white"
          >
            <FaCartPlus className="size-5" />
          </button>
          <button className="rounded-sm bg-whats px-2 py-1 text-sm font-bold uppercase text-white">
            <FaWhatsapp className="size-5" />
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full md:h-full md:max-w-[53%]">
        <img src={car.image} className="h-full w-full" />
      </div>
    </div>
  );
}

export default CarCard;
