import React from "react";
import logo from "../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbarOne h-28 flex items-center place-content-center">
        <img src={logo} className=" w-48" />
      </div>
      <div className="flex flex-wrap bg-darkblue lg:h-20 p-2 lg:p-0 items-center text-white text-sm font-medium uppercase justify-between">
        <div className="flex flex-wrap gap-5 items-center place-content-center w-full md:w-auto md:ml-20">
          <Link to="/" className="flex items-center">
            <span>Home</span>
            <IoMdArrowDropdown className="size-4 ml-1" />
          </Link>
          <Link to="/vehiculos" className="flex items-center">
            <span>Vehiculos</span>
            <IoMdArrowDropdown className="size-4 ml-1" />
          </Link>
          <Link to="/servicios" className="flex items-center">
            <span>Servicios</span>
            <IoMdArrowDropdown className="size-4 ml-1" />
          </Link>
          <Link to="/ubicacion" className="flex items-center">
            <span>Ubicacion</span>
            <IoMdArrowDropdown className="size-4 ml-1" />
          </Link>
        </div>
        <div className="justify-self-end flex items-center place-content-center w-full md:w-auto">
          <Link>Iniciar Sesión</Link>
          <Link className="bg-myred py-[5px] md:py-[10px] ml-6 pr-5 pl-2 rounded-l-full rounded-r-full md:rounded-r-none flex items-center">
            <FaCircleUser className="size-7 mx-2" />
            <span>Registrate</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
