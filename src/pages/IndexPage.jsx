import React from "react";
import Footer from "../components/Footer";
import conductor from "../assets/images/conductor.jpg";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import azul from "../assets/images/azul.jpeg";
import camioneta from "../assets/images/camioneta.jpeg";
import carro from "../assets/images/carro.png";
import { ImWhatsapp } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";

function IndexPage() {
  const services = [
    {
      imagen: conductor,
      titulo: "Autos",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit asc eac es eavwvqwv acaevavwaev",
    },
    {
      imagen: conductor,
      titulo: "Repuestos",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitnsfe ewvf ewve vwrv r vf vd rv sv  ef e v",
    },
    {
      imagen: conductor,
      titulo: "Accesorios",
      texto:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit asc  sdcdsvds sdcsdds",
    },
  ];

  return (
    <div>
      <section className="relative w-full overflow-hidden ">
        <img
          src={conductor}
          className="h-full w-full brightness-50 contrast-200 filter md:filter-none"
        />
        <div className="absolute top-[200px] m-5 flex -translate-y-full transform flex-col gap-2 text-center text-white md:left-[100px] md:top-[450px] md:gap-8 md:text-start lg:top-[550px]">
          <h2 className="text-2xl font-bold md:w-7/12 md:text-6xl">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span className="text-myred">adipisicing.</span>
          </h2>
          <h3 className="text-lg md:w-5/12 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nemo dolor cum, perferendis temporibus exercitationem expedita odit
            ad!
          </h3>
        </div>
      </section>
      <section className="overflow-hidden py-10 md:p-14">
        <div className="">
          <div className="mb-10 flex place-content-center items-center text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold text-myred md:text-4xl">
                Lorem, ipsum.
              </h2>
              <h3 className="w-11/12 md:w-6/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                ullam, laborum eum porro illo blanditiis? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Explicabo, labore?
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 place-content-center items-center gap-10 p-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex h-[105%] flex-col items-center gap-3 overflow-hidden rounded-lg p-4 text-center shadow-md shadow-gray-600 md:max-h-[410px] md:min-h-[410px]"
              >
                <div className="flex place-content-center items-center">
                  <img src={service.imagen} className="rounded-lg" />
                </div>
                <div className="">
                  <h2 className="mb-2 text-3xl font-bold text-myred">
                    {service.titulo}
                  </h2>
                  <p className="">{service.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className="w-full overflow-hidden bg-cover bg-center py-10 sm:h-[400px] lg:h-screen"
        style={{ backgroundImage: `url(${azul})` }}
      >
        <div className="flex h-full items-center">
          <div className="absolute flex place-content-center bg-black/40 p-4 text-center text-white backdrop-blur-sm md:backdrop-blur-0 lg:ml-[8rem] lg:bg-transparent lg:text-start">
            <div className="w-full">
              <h2 className="text-3xl font-bold drop-shadow-lg lg:w-6/12 lg:text-[80px] lg:leading-[75px]">
                Lorem Ipsum dolor sit amet
              </h2>
              <h1 className="text-3xl font-bold drop-shadow-lg lg:w-full lg:text-[80px] lg:leading-[75px]">
                elit <span className="text-myred">consectetuer</span>
              </h1>
              <p className="mt-4 text-lg lg:w-[40%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                posuere at massa ac convallis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Iste, qui.
              </p>
            </div>
          </div>
          <div className="flex w-full place-content-center md:place-content-end">
            <img
              src={camioneta}
              alt="Image on the right"
              className="w-11/12 object-cover sm:w-6/12"
            />
          </div>
        </div>
      </div>
      <section className="">
        <div className="flex place-content-center items-center py-10 lg:place-content-end">
          <div className="invisible absolute left-0 w-1/2 lg:visible">
            <img src={carro} />
          </div>
          <div className="flex flex-col gap-9  p-5 lg:w-1/2">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-myred"></div>
              <div>
                <h2 className="text-2xl font-semibold italic text-myred">
                  Limpieza
                </h2>
                <p className="text-[13px] font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className="text-base font-semibold">0000000000$</p>
                <div className="flex gap-4">
                  <button className="add1 boton">
                    <FaCartPlus className="size-6" />
                    <span>Agregar al carrito</span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" /> <span>Ir a Whatsapp</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-myred"></div>
              <div>
                <h2 className="text-2xl font-semibold italic text-myred">
                  Limpieza
                </h2>
                <p className="text-[13px] font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className="text-base font-semibold">0000000000$</p>
                <div className="flex gap-4">
                  <button className="add1 boton">
                    <FaCartPlus className="size-6" />
                    <span>Agregar al carrito</span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" /> <span>Ir a Whatsapp</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-myred"></div>
              <div>
                <h2 className="text-2xl font-semibold italic text-myred">
                  Limpieza
                </h2>
                <p className="text-[13px] font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className="text-base font-semibold">0000000000$</p>
                <div className="flex gap-4">
                  <button className="add1 boton">
                    <FaCartPlus className="size-6" />
                    <span>Agregar al carrito</span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" /> <span>Ir a Whatsapp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-2 w-full border-myred" />
      <Footer />
    </div>
  );
}

export default IndexPage;
