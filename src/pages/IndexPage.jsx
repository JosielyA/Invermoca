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
        <div className="absolute top-[200px] m-5 flex -translate-y-full transform flex-col gap-2 text-center text-white md:top-[450px] md:gap-8 md:text-start lg:top-[550px]">
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
      <section className="pt-10 md:p-14">
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
                className="flex h-[105%] flex-col items-center gap-3 overflow-hidden rounded-lg p-4 text-center shadow-md shadow-gray-600 md:max-h-[430px] md:min-h-[430px]"
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
      <div className="">
        <div className="">
          <div>
            <img src={camioneta} alt="Centered image" className="" />
            <div className="">
              <div className="">
                <h2 className="">Lorem ipsum, dolor sit amet</h2>
                <h2 className="">
                  elit pasen <span className="">adipisicing.</span>
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  atque blanditiis ex deserunt itaque. Facere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div>
          <div className="">
            <div className="">
              <img src={carro} className="" />
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <div className=""></div>
                    <div className=""></div>
                  </div>
                  <div className="">
                    <h3 className="">Lorem ipsum.</h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, aliquid?
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className=""></div>
                    <div className=""></div>
                  </div>
                  <div className="">
                    <h3 className="">Lorem ipsum.</h3>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, aliquid?
                    </p>
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className=""></div>
                  </div>
                  <div className="">
                    <h3 className="">Lorem ipsum.</h3>
                    <p className="">
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
      <div className="h-2 w-full border-myred" />
      <Footer />
    </div>
  );
}

export default IndexPage;
