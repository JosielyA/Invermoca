import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { encode } from "../data/whatsappurl";

function Navbar({
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const onClearCart = () => {
    setTotal(0);
    setCountProducts(0);
    setAllProductsinCart([]);
  };

  const onDelete = (product) => {
    const alreadyInProduct = allProductsinCart.find(
      (item) => item.id === product.id,
    );
    const results = allProductsinCart.filter((item) => item.id !== product.id);
    setTotal(total - product.price * alreadyInProduct.quantity);
    setCountProducts(countProducts - alreadyInProduct.quantity);
    setAllProductsinCart(results);
  };
  const onBuy = () => {
    const mymessage = " Hola como estas\n bien y tu \n bien gracias";
    window.open(encode(mymessage), "_blank");
  };
  return (
    <div>
      <div className="navbarOne flex h-28 place-content-center items-center">
        <img src={logo} className="w-64" />
      </div>
      <div className="flex flex-wrap items-center justify-around bg-darkblue p-2 text-sm font-medium uppercase text-white lg:h-20 lg:justify-between lg:p-0">
        <div className="flex w-full flex-wrap place-content-center items-center gap-2 md:ml-20 md:w-auto lg:gap-5">
          <div
            className={`${countProducts > 0 ? "place-content-end" : "place-content-center"} fixed left-2 top-2 z-50 -mt-1 flex`}
          >
            <button
              onClick={() => setActive((prev) => !prev)}
              className={`${countProducts > 0 ? "place-content-end text-black " : "h-[3rem] w-[3rem] place-content-center rounded-full bg-myred "} z-20 flex w-10`}
            >
              <BsCart4
                className={`relative h-[2.7em] w-[2.7rem] self-center`}
              />
              <div
                className={`${countProducts > 0 ? "" : "hidden"} ${active ? "bg-white text-black" : "bg-myred text-white"} absolute -mb-1 -mr-1 flex h-[1.3rem] w-[1.3rem] place-content-center items-center self-end rounded-full`}
              >
                <span className="text-sm">{countProducts}</span>
              </div>
            </button>
            <div
              className={`${active ? "" : "hidden"} absolute left-[1.8rem] top-[0.5rem] z-10 flex`}
            >
              <div className="-mr-[18rem] mt-[1rem] flex min-w-[20rem]  flex-col items-center rounded-md bg-myred p-2 normal-case text-white">
                <h2 className="p-2 text-lg font-bold uppercase">Carrito</h2>
                <div className="flex w-full flex-col gap-3 p-2">
                  {allProductsinCart.length ? (
                    <div>
                      {allProductsinCart.map((product, i) => (
                        <div
                          key={product.id}
                          className="flex place-content-around items-center"
                        >
                          <h2 className="w-1/6">{product.quantity}</h2>
                          <h2 className="w-2/5">{product.name}</h2>
                          <h2 className="w-2/6">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(product.price)}
                          </h2>
                          <button
                            className="w-1/12"
                            onClick={() => onDelete(product)}
                          >
                            <FaXmark className="size-6" />
                          </button>
                        </div>
                      ))}
                      <div className="mt-2 flex flex-col items-center gap-2">
                        <h2 className="">
                          Total:{" "}
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(total)}
                        </h2>
                        <div className="flex gap-2">
                          <button
                            onClick={onClearCart}
                            className="rounded-md bg-gray-300 px-4 py-2 text-black hover:bg-black hover:text-white"
                          >
                            Vaciar carrito
                          </button>
                          <button
                            onClick={onBuy}
                            className="text-bwhite rounded-md bg-green-500 px-4 py-2 transition-transform duration-100 ease-linear hover:scale-110"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex place-content-center items-center">
                      <h2>No hay productos.</h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="flex items-center">
            <span>Home</span>
            <IoMdArrowDropdown className="ml-1 size-4" />
          </Link>
          <Link to="/limpieza" className="flex items-center">
            <span>Limpieza</span>
            <IoMdArrowDropdown className="ml-1 size-4" />
          </Link>
          <Link to="/vehiculos" className="flex items-center">
            <span>Vehículos</span>
            <IoMdArrowDropdown className="ml-1 size-4" />
          </Link>
          <Link to="/servicios" className="flex items-center">
            <span>Servicios</span>
            <IoMdArrowDropdown className="ml-1 size-4" />
          </Link>
          <Link to="/ubicacion" className="flex items-center">
            <span>Ubicación</span>
            <IoMdArrowDropdown className="ml-1 size-4" />
          </Link>
        </div>
        <div className="flex w-full place-content-center items-center justify-self-end md:w-auto">
          <Link>Iniciar Sesión</Link>
          <Link className="ml-6 flex place-content-center items-center rounded-l-full rounded-r-full bg-myred py-[5px] pl-2 pr-5 md:py-[10px] lg:rounded-r-none">
            <FaCircleUser className="mx-2 size-7" />
            <span>Registrate</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
