import React from "react";
import Footer from "../components/Footer";
import conductor from "../assets/images/conductor.jpg";
import fondoblanco from "../assets/images/fondoblanco.jpeg";
import azul from "../assets/images/azul.jpeg";
import camioneta from "../assets/images/camioneta.jpeg";
import carro from "../assets/images/carro.png";
import { ImWhatsapp } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { servicios } from "../data/carsData";

function IndexPage({
  allProductsinCart,
  setAllProductsinCart,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const services = [
    {
      imagen: conductor,
      titulo: "Vehículos",
      texto:
        "Encuentra el vehículos perfecto que se adapte a tus necesidades y preferencias. ",
    },
    {
      imagen: conductor,
      titulo: "Repuestos",
      texto:
        "Conoce los repuestos disponibles de alta calidad para todas las marcas y modelos de vehículos. ",
    },
    {
      imagen: conductor,
      titulo: "Accesorios",
      texto:
        "Personaliza y mejora tu vehículo con nuestra amplia gama de accesorios.",
    },
  ];

  const onAdd = (product) => {
    const alreadyInProduct = allProductsinCart.find(
      (item) => item.id === product.id,
    );
    if (alreadyInProduct) {
      const products = allProductsinCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setTotal(total + alreadyInProduct.price * alreadyInProduct.quantity);
      setCountProducts(countProducts + 1);
      return setAllProductsinCart([...products]);
    }
    const newProduct = { ...product, quantity: 1 };
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProductsinCart([...allProductsinCart, newProduct]);
  };

  return (
    <div>
      <section className="relative w-full overflow-hidden ">
        <img
          src={conductor}
          className="h-full w-full brightness-50 contrast-200 filter md:filter-none"
        />
        <div className="absolute top-[200px] m-5 flex -translate-y-full transform flex-col gap-2 text-center text-white md:left-[100px] md:top-[450px] md:gap-8 md:text-start lg:top-[550px]">
          <h2 className="text-2xl font-bold md:w-7/12 md:text-6xl">
            ¡Bienvenido a <span className="text-myred">Invermoca</span>!
          </h2>
          <h3 className="text-lg md:w-5/12 md:drop-shadow-2xl ">
            Encuentra el vehículo perfecto para ti con nuestras opciones de
            compra, venta y consignación de vehículos usados y nuevos, junto con
            una amplia gama de accesorios y respuestos disponibles.
          </h3>
        </div>
      </section>
      <section className="overflow-hidden py-10 md:p-14">
        <div className="">
          <div className="mb-10 flex place-content-center items-center text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold text-myred md:text-4xl">
                Los mejores vehículos
              </h2>
              <h3 className="w-11/12 md:w-10/12">
                Encontrar el vehículo ideal que se adapte a tu estilo de vida,
                nunca había sido tan fácil.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 place-content-center items-center gap-10 p-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex h-[105%] flex-col items-center gap-3 overflow-hidden rounded-lg p-4 text-center shadow-md shadow-gray-600 md:max-h-[360px] md:min-h-[360px] xl:max-h-[400px] xl:min-h-[400px]"
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
              <h2 className="text-3xl font-bold drop-shadow-lg lg:w-[50%] lg:text-[60px] lg:leading-[75px]">
                Ofrecemos
              </h2>
              <h2 className="text-3xl font-bold drop-shadow-lg lg:text-[60px] lg:leading-[75px]">
                productos de <span className="text-myred">calidad</span>
              </h2>
              <h1 className="text-3xl font-bold drop-shadow-lg lg:w-full lg:text-[60px] lg:leading-[75px]">
                respaldados por <span className="text-myred">garantías.</span>
              </h1>
              <p className="mt-4 text-lg lg:w-[50%]">
                Explora nuestras secciones ahora y descubre los vehículos y
                repuestos que mejorarán tu experiencia automotriz.
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
              <div className="w-9/12">
                <h2 className="text-2xl font-semibold italic text-myred">
                  {servicios[0].name}
                </h2>
                <p className="text-[13px] font-thin">
                  {servicios[0].description}
                </p>
                <p className="text-base font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(servicios[0].price)}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => onAdd(servicios[0])}
                    className="add1 boton"
                  >
                    <FaCartPlus className="size-6" />
                    <span className="text-[0.7rem]">Agregar al carrito</span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" />{" "}
                    <span className="text-[0.6rem] md:text-[0.7rem]">
                      Ir a Whatsapp
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-myred"></div>
              <div className="w-9/12">
                <h2 className="text-2xl font-semibold italic text-myred">
                  {servicios[1].name}
                </h2>
                <p className="text-[13px] font-thin md:w-7/12">
                  {servicios[1].description}
                </p>
                <p className="text-base font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(servicios[1].price)}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => onAdd(servicios[1])}
                    className="add1 boton"
                  >
                    <FaCartPlus className="size-6" />
                    <span className="text-[0.6rem] md:text-[0.7rem]">
                      Agregar al carrito
                    </span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" />{" "}
                    <span className="text-[0.6rem] md:text-[0.7rem]">
                      Ir a Whatsapp
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-myred"></div>
              <div className="w-9/12">
                <h2 className="text-2xl font-semibold italic text-myred">
                  {servicios[2].name}
                </h2>

                <p className="text-base font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(servicios[2].price)}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => onAdd(servicios[2])}
                    className="add1 boton"
                  >
                    <FaCartPlus className="size-6" />
                    <span className="text-[0.6rem] md:text-[0.7rem]">
                      Agregar al carrito
                    </span>
                  </button>
                  <button className="whats1 boton">
                    <ImWhatsapp className="size-6" />{" "}
                    <span className="text-[0.6rem] md:text-[0.7rem]">
                      Ir a Whatsapp
                    </span>
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
