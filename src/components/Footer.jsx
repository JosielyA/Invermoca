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
        className="min-h-screen bg-cover bg-center max-w-screen sm:max-w-none flex flex-col p-10 items-center place-content-center"
        style={{ backgroundImage: `url(${azul})` }}
      >
        <div className="flex flex-wrap lg:flex-nowrap gap-5 text-white lg:gap-32 items-center place-content-around w-full">
          <div className="flex place-content-end lg:w-1/2">
            <div className="flex flex-col gap-5">
              <img src={logo} className="w-[230px]" />
              <div className="gap-2">
                <p className="text-5xl font-bold">Lorem ipsum</p>
                <p className="text-5xl font-bold text-myred">dolor sit amet.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <IoLocationSharp className="text-myred size-6" />
                  <span className=" w-96">
                    Delicias al lado del C.C Paseo 72, av. 15, Maracaibo 4001,
                    Zulia J978+QFG, Maracaibo 4001, Zulia, Venezuela
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BiSolidPhoneCall className="text-myred size-6" />
                  <span>0424-6729349</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoIosMail className="text-myred size-6" />
                  <span>invermocar@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-full flex lg:mr-12 place-content-center lg:place-content-start">
            <form>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-white py-4 px-4 italic placeholder-gray-500 font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="bg-white py-4 px-4 italic placeholder-gray-500 font-semibold"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Numero"
                      className="bg-white py-4 px-4 italic placeholder-gray-500 font-semibold"
                    />
                    <input
                      type="text"
                      placeholder="Correo"
                      className="bg-white py-4 px-4 italic placeholder-gray-500 font-semibold"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Mensaje"
                      className="bg-white py-4 px-4 italic placeholder-gray-500 font-semibold h-full"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex items-center place-content-end mt-3">
                <button className="flex items-center text-white place-content-center bg-myred py-2 pl-12 pr-16 text-xl font-semibold italic">
                  Enviar
                </button>
                <MdKeyboardArrowRight className="size-9" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="absolute flex lg:-mt-20 -mt-[70px] ml-[30px] lg:ml-[400px] gap-6">
        <BsInstagram className="size-10 text-myred" />
        <BsTwitter className="size-10 text-myred" />
      </div>
    </div>
  );
}

export default Footer;
