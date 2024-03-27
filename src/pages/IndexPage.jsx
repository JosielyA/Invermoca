import React from "react";
import Footer from "../components/Footer";
import conductor from "../assets/images/conductor.jpg";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import azul from "../assets/images/azul.jpeg";
import camioneta from "../assets/images/camioneta.jpeg";
import carro from "../assets/images/carro.png";

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
  const section4circles = [1, 2, 3];

  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${conductor})` }}
      >
        <div className="md:p-40 p-10 md:w-9/12">
          <div className="mt-14 sm:mt-20">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Lorem ipsum dolor, sit amet consectetur{" "}
              <span className="text-myred">adipisicing.</span>
            </h2>
            <h3 className="pt-4 lg:pt-8 text-lg md:w-8/12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nemo dolor cum, perferendis temporibus exercitationem expedita
              odit ad!
            </h3>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center pb-10"
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
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${azul})`,
        }}
      >
        <div className="absolute h-screen flex items-center place-content-end w-full">
          <div>
            <img
              src={camioneta}
              alt="Centered image"
              className="w-[600px] object-cover invisible lg:visible"
            />
            <div className="absolute inset-0 flex items-center place-content-center lg:place-content-start text-center lg:text-start">
              <div className="lg:pl-[210px] w-10/12">
                <h2 className="text-3xl lg:text-6xl font-bold text-white w lg:w-7/12">
                  Lorem ipsum, dolor sit amet
                </h2>
                <h2 className="text-3xl lg:text-6xl font-bold text-white">
                  elit pasen <span className="text-myred">adipisicing.</span>
                </h2>
                <p className="text-white text-lg mt-5 lg:w-6/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  atque blanditiis ex deserunt itaque. Facere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="min-h-screen bg-cover bg-center text-black flex items-center"
        style={{ backgroundImage: `url(${fondoblanco})` }}
      >
        <div>
          <div className="flex place-content-around h-full">
            <div className="invisible lg:visible">
              <img src={carro} className="w-[700px]" />
            </div>
            <div className="absolute min-w-max pl-16 lg:pl-0 lg:static">
              <div className="flex flex-col gap-12 p-5 lg:p-0 -mt-10 lg:-mt-0">
                <div className="flex items-center place-content-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-myred w-12 h-12 rounded-full"></div>
                    <div className="bg-myred w-[1px] h-[65px] mt-[53px] absolute rounded-lg"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-myred text italic text-3xl">
                      Lorem ipsum.
                    </h3>
                    <p className="w-8/12 font-extralight text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, aliquid?
                    </p>
                  </div>
                </div>
                <div className="flex items-center place-content-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-myred w-12 h-12 rounded-full"></div>
                    <div className="bg-myred w-[1px] h-[65px] mt-[53px] absolute rounded-lg"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-myred text italic text-3xl">
                      Lorem ipsum.
                    </h3>
                    <p className="w-8/12 font-extralight text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, aliquid?
                    </p>
                  </div>
                </div>
                <div className="flex items-center place-content-center">
                  <div>
                    <div className="bg-myred w-12 h-12 rounded-full"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-myred text italic text-3xl">
                      Lorem ipsum.
                    </h3>
                    <p className="w-8/12 font-extralight text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, aliquid?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-myred border-[3px] w-full absolute -mt-6" />
      <Footer />
    </div>
  );
}

export default IndexPage;
