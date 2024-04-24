import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { encode } from "../data/whatsappurl";
import { BsWhatsapp } from "react-icons/bs";

function PricesPage() {
  const [services, setServices] = useState({});
  const [llaves, setLlaves] = useState([]);
  const serviciosPrice = {
    gamusa: [
      { nombre: "Motos", precio: 3 },
      { nombre: "Gamusa Carro", precio: 4 },
      { nombre: "Gamusa Camioneta", precio: 6 },
      { nombre: "Vans", precio: 10 },
    ],
    chasis: [
      { nombre: "Chasis Carro", precio: 8 },
      { nombre: "Chasis Camioneta", precio: 10 },
    ],
    motor: [
      { nombre: "Motor Carro", precio: 8 },
      { nombre: "Motor Camioneta", precio: 8 },
    ],
    encerado: [{ nombre: "Encerado(adicional manual)", precio: 2 }],
    maquina: [{ nombre: "Con maquina", precio: 20 }],
  };
  useEffect(() => {
    setServices(serviciosPrice);
    const llav = Object.keys(serviciosPrice);
    setLlaves(llav);
  }, []);

  return (
    <div className="pricespage">
      <div className="flex flex-col items-center">
        <div className="w-9/12">
          <div className="-space-y-2 py-6 md:pt-14">
            <h3 className="text-3xl font-bold uppercase text-darkblue md:text-6xl lg:text-[100px]">
              Nuestros
            </h3>
            <h2 className="text-5xl font-bold uppercase text-myred md:text-[100px] lg:text-[150px]">
              Precios
            </h2>
          </div>
          <section className="flex flex-col gap-4 text-darkblue">
            {llaves.map((service, i) => (
              <div key={i}>
                <ul className="flex flex-col ">
                  {serviciosPrice[service].map((product, e) => (
                    <li
                      key={e}
                      className="flex place-content-between rounded p-2 hover:bg-myred hover:text-white"
                    >
                      <h5 className="text-base font-semibold md:text-3xl lg:text-4xl">
                        {product.nombre}
                      </h5>
                      <h6 className="text-base font-bold md:text-3xl lg:text-4xl">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(product.precio)}
                      </h6>
                    </li>
                  ))}
                </ul>
                <br />
              </div>
            ))}
          </section>
          <div className="flex place-content-center items-center pb-7 md:pb-20 md:pt-5">
            <a
              href={encode("Hola, quisiera saber acerca de sus servicios.")}
              target="_blank"
              className="boton whats1 gap-3 px-6 py-2 text-lg md:gap-4 md:px-9 md:py-4 md:text-4xl"
            >
              <BsWhatsapp className="size-6 md:size-10" />
              <span>Ir a Whatsapp</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PricesPage;
