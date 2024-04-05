import React from "react";
import logo from "../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbarOne flex h-28 place-content-center items-center">
        <img src={logo} className=" w-48" />
      </div>
      <div className="flex flex-wrap items-center justify-between bg-darkblue p-2 text-sm font-medium uppercase text-white lg:h-20 lg:p-0">
        <div className="flex w-full flex-wrap place-content-center items-center gap-5 md:ml-20 md:w-auto">
          <Link to="/" className="flex items-center">
            <span>Home</span>
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
          <Link className="ml-6 flex items-center rounded-l-full rounded-r-full bg-myred py-[5px] pl-2 pr-5 md:rounded-r-none md:py-[10px]">
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
