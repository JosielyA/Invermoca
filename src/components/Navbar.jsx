import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { encode } from "../data/whatsappurl";
import { IoCodeSlashSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar({
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [scrollfromtop, setScrollfromtop] = useState(false);
  const navigate = useNavigate();

  const paginas = [
    { nombre: "Home", ruta: "/" },
    { nombre: "Vehículos", ruta: "/vehiculos" },
    { nombre: "Limpieza", ruta: "/limpieza" },
    { nombre: "Servicios", ruta: "/servicios" },
    { nombre: "Ubicación", ruta: "/ubicacion" },
  ];

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 60) {
      setScrollfromtop(true);
    } else {
      setScrollfromtop(false);
    }
  };
  useEffect(() => {
    Aos.init();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className={`z-50 w-full transition-all`}>
      <div
        className={`${scrollfromtop ? "h-14" : "h-24"} navbarOne flex h-28 place-content-center items-center bg-white transition-all duration-200`}
      >
        <img src={logo} className="w-64" />
      </div>
      <header
        className={`${scrollfromtop ? "" : "static"} flex h-24 w-full items-center justify-between bg-darkblue pl-5 text-black transition-all duration-200 md:pl-14`}
      >
        <nav>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          >
            <IoMdMenu className="size-8 text-white" />
          </button>
          <ul
            className={`${isOpen ? "translate-x-0 bg-white text-black md:text-white" : "-translate-x-full text-black md:text-white"} absolute left-0 right-0 z-50 min-h-screen transform space-y-4 p-4 transition duration-300 md:relative md:flex md:min-h-0 md:translate-x-0 md:space-x-6 md:space-y-0 md:bg-transparent md:p-0 md:text-xl`}
          >
            {paginas.map((pagina, i) => (
              <li key={i}>
                <Link
                  className="flex items-center gap-2 text-base font-medium uppercase"
                  onClick={() => setIsOpen(false)}
                  to={pagina.ruta}
                >
                  {pagina.nombre}
                  <IoMdArrowDropdown className="invisible size-5 md:visible" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-wrap place-content-end items-center gap-2 text-white">
          <button className="uppercase">Iniciar Sesión</button>
          <button className="flex place-content-center items-center gap-2 rounded-l-full bg-myred px-5 py-3 uppercase">
            <FaUserCircle className="size-6" />
            <span>Registrate</span>
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
