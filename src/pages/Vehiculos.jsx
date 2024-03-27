import React from "react";
import carro from "../assets/images/carro.png";
import carro2 from "../assets/images/carro2.png";
import carro3 from "../assets/images/carro3.png";
import carro4 from "../assets/images/carro4.png";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import azul from "../assets/images/azul.jpeg";
import Footer from "../components/Footer";

function Vehiculos() {
  const vehiculos = [
    {
      id: 0,
      nombre: "Mitsubishi Eclipse",
      foto: carro,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 1999",
        "Millas 104.000",
        "Documentacion 3-2",
        "Cauchos y bateria nueva",
        "Dos juegos de llaves",
      ],
    },
    {
      id: 1,
      nombre: "Toyota 4runner",
      foto: carro2,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2017",
        "Kilometraje 5.000",
        "Dos juegos de llaves",
        "Cauchos nuevos",
      ],
    },
    {
      id: 2,
      nombre: "Dodge Ram",
      foto: carro3,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2016",
        "138.000KM",
        "Suspension Fox",
        "Titulo 2-1",
        "Dos juegos de llaves",
      ],
    },
    {
      id: 3,
      nombre: "Nissan Navara",
      foto: carro4,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2017",
        "Kilometraje 46.000",
        "Documentacion 2-1",
        "Dos juegos de llaves",
        "Bateria y cauchos nuevos",
      ],
    },
    {
      id: 4,
      nombre: "Aveo LT",
      foto: carro3,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2015 nuevo",
        "55.000KM",
        "Suspension Fox",
        "Titulo 2-1",
        "Nuevo de todo",
      ],
    },
    {
      id: 5,
      nombre: "Dodge Ram",
      foto: carro,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2016",
        "138.000KM",
        "Suspension Fox",
        "Titulo 2-1",
        "Dos juegos de llaves",
      ],
    },
    {
      id: 6,
      nombre: "Toyota camry",
      foto: carro2,
      fotos: [carro, carro, carro],
      caracteristicas: [
        "Ano 2005",
        "200.000KM",
        "Titulo 3-2",
        "Dos juegos de llaves",
      ],
    },
  ];

  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center text-black flex items-center w-full p-5"
        style={{ backgroundImage: `url(${fondoblanco})` }}
      >
        <div>
          <div className="flex place-content-around h-full w-full">
            <div className="invisible lg:visible lg:w-1/2 w-0">
              <img src={carro} className="w-full" />
            </div>
            <div className="lg:w-1/2 flex items-center text-center lg:text-start">
              <h2 className="text-6xl font-bold">
                Lorem ipsum dolor sit, amet consectetur{" "}
                <span className="text-myred">adipisicing.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center text-black grid items-center place-content-center"
        style={{ backgroundImage: `url(${azul})` }}
      >
        <div>
          <div className="mt-20 mb-12 flex place-content-center">
            <h2 className="text-6xl text-white font-bold uppercase">
              Vehiculos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 mb-[200px]">
            {vehiculos.map((vehiculo, i) => (
              <div
                key={i}
                className="flex flex-col max-w-[400px] md:max-w-72 rounded-lg bg-white p-4 uppercase"
              >
                <h2 className="text-xl font-bold text-myred">
                  {vehiculo.nombre}
                </h2>
                <div>
                  {vehiculo.caracteristicas.map((caracteristica, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-10 h-1 -ml-5 rounded bg-myred"></div>
                      <p className="text-sm font-bold">{caracteristica}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <img src={vehiculo.foto} className="w-auto" />
                </div>
                <div className="flex h-full items-end place-content-end">
                  <button className="bg-myred text-white text-sm font-bold uppercase p-2 rounded-md">
                    Ver Fotos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center text-center text-black p-16 gap-16 w-full flex flex-col items-center place-content-center"
        style={{ backgroundImage: `url(${fondoblanco})` }}
      >
        <div className="flex flex-col items-center place-content-center">
          <h2 className="text-4xl font-bold text-myred">Lorem ipsum</h2>
          <p className="lg:w-7/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            fugit nulla non ut perferendis dolore cumque. Officia repudiandae
            animi veniam!
          </p>
        </div>
        <div className="h-1 w-[2000px] bg-myred -mb-10"></div>
      </section>
      <Footer />
    </div>
  );
}

export default Vehiculos;
