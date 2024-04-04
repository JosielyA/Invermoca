import React from "react";
import logo from "../assets/images/logo.png";
import azul from "../assets/images/azul.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <section
        className="flex flex-col place-content-center items-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${azul})` }}
      >
        <div className="lg:flex lg:place-content-around lg:items-center">
          <div className="lg:w-1/2 lg:p-14">
            <div className="p-5 pt-8 lg:w-96">
              <img src={logo} />
            </div>
            <div className="fles place-content-center items-center px-5 text-center lg:text-start">
              <h2 className="mb-2 text-5xl font-bold lg:text-5xl">
                ¿Necesitas <span className="text-myred">ayuda</span>?
              </h2>
              <h2 className="text-lg">
                Contáctanos para recibir asesoramiento personalizado.
              </h2>
            </div>
            <div className="flex flex-col gap-1 p-5">
              <div className="footerItem">
                <IoLocationSharp className="size-10 text-myred" />
                <span className="w-10/12">
                  Delicias al lado del C.C Paseo 72, av.15, Maracaibo 4001,
                  Zulia J978+QFG, Maracaibo 4001, Zulia, Venezuela
                </span>
              </div>
              <div className="footerItem">
                <BiSolidPhoneCall className="size-10 text-myred" />
                <span className="w-10/12">0424-6729349</span>
              </div>
              <div className="footerItem">
                <IoIosMail className="size-10 text-myred" />
                <span className="w-10/12">invermocar@gmail.com</span>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-2 p-5 pt-0 text-black lg:w-1/2 lg:gap-5 lg:p-16">
            <div className="flex flex-col gap-2 lg:gap-5">
              <input className="footerInput" type="text" placeholder="Nombre" />
              <input
                className="footerInput"
                type="text"
                placeholder="Apellido"
              />
            </div>
            <div className="flex gap-2 lg:gap-5">
              <div className="flex w-1/2 flex-col gap-2 lg:gap-5">
                <input
                  className="footerInput"
                  type="text"
                  placeholder="Telefono"
                />
                <input
                  className="footerInput"
                  type="text"
                  placeholder="Correo"
                />
              </div>
              <textarea
                className="footerInput w-1/2 resize-none"
                type="text"
                placeholder="Mensaje"
              />
            </div>
            <div className="flex place-content-between gap-4">
              <div className="flex items-center gap-2">
                <BsInstagram className="size-12 text-myred" />
                <BsTwitter className="size-12 text-myred" />
              </div>
              <div className="flex items-center">
                <button className="bg-myred px-12 py-3 text-2xl font-bold italic text-white">
                  Enviar
                </button>
                <MdKeyboardArrowRight className="size-12" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
