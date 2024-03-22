import React from "react";
import ServiceCard from "../components/ServiceCard";
import conductor from "../assets/images/conductor.jpg";
import fondoblanco from "../assets/images/fondoblanco.jpeg";

function IndexPage() {
  const services = [
    {
      imagen: conductor,
      titulo: "Autos",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      imagen: conductor,
      titulo: "Repuestos",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      imagen: conductor,
      titulo: "Accesorios",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];

  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${conductor})` }}
      >
        <div className="md:p-40 p-10 md:w-9/12">
          <h2 className=" text-6xl font-bold">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span className="text-myred">adipisicing.</span>
          </h2>
          <h3 className="pt-8 text-lg md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nemo dolor cum, perferendis temporibus exercitationem expedita odit
            ad!
          </h3>
        </div>
      </section>
      <section
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoblanco})` }}
      >
        <div className="flex flex-col items-center p-5 text-center">
          <h2 className="text-6xl font-bold text-myred pt-10 px-5">
            Lorem, ipsum.
          </h2>
          <h3 className="font-medium mt-4 text-lg md:w-6/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam,
            laborum eum porro illo blanditiis?
          </h3>
          <div className="flex flex-wrap gap-4 mt-5 place-content-center">
            {services.map((service, i) => (
              <div
                key={i}
                className="h-full w-full lg:w-1/4 flex flex-col items-center shadow-md rounded-lg bg-white shadow-gray-400  "
              >
                <div>
                  <img
                    src={service.imagen}
                    className="rounded-[40px] w-[400px] pt-8 px-8"
                  />
                </div>
                <div className="w-8/12">
                  <h2 className="text-4xl font-bold text-myred pt-3">
                    {service.titulo}
                  </h2>
                  <p className="font-medium text-lg pb-12">{service.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${conductor})` }}
      >
        <div className="md:p-40 p-10 md:w-9/12">
          <h2 className=" text-6xl font-bold">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span className="text-myred">adipisicing.</span>
          </h2>
          <h3 className="pt-8 text-lg md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nemo dolor cum, perferendis temporibus exercitationem expedita odit
            ad!
          </h3>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
