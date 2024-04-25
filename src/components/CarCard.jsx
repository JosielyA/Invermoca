import React from "react";
import { encode } from "../data/whatsappurl";
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
    <div className="">
      <div>
        <img src={car.image} alt={`Imagen de ${car.name}`} />
      </div>
      <div>
        <h2>{car.name}</h2>
        <h2>{car.marca}</h2>
        <button className="rounded-md bg-myred px-4 py-2 text-lg font-semibold uppercase text-white">
          ver fotos
        </button>
      </div>
    </div>
  );
}

export default CarCard;
