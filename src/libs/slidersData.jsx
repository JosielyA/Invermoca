import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";

export const indexPageSliders = [
  {
    classname: "homeslider1",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-2 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          ¡Bienvenido a <span className="text-myred">Invermoca</span>!
        </h2>
        <h3 className="text-base drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:px-20 xl:text-4xl 2xl:text-6xl">
          Encontrar el vehículo ideal que se adapte a tu estilo de vida, nunca
          había sido tan fácil.
        </h3>
      </div>
    ),
  },
  {
    classname: "homeslider2",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-4 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-4xl lg:px-28 lg:text-7xl 2xl:text-9xl">
          Adquiere tu{" "}
          <Link
            to="/vehiculos"
            className="text-myred hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
          >
            vehículo
          </Link>{" "}
          por el mejor precio
        </h2>
      </div>
    ),
  },
  {
    classname: "homeslider3",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-2 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          <Link
            to="/servicios"
            className="text-myred hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
          >
            Servicios
          </Link>{" "}
          de calidad
        </h2>
        <h3 className="text-base drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:px-10 lg:text-4xl 2xl:text-6xl">
          Nuestro compromiso es brindarte un servicio automotriz de excelencia,
          asegurando un trabajo bien hecho y la satisfacción del cliente en cada
          visita.
        </h3>
      </div>
    ),
  },
  {
    classname: "homeslider4",
    text: (
      <div className=" text-center">
        <h2 className="mb-4 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-4xl lg:p-28 lg:text-7xl 2xl:text-9xl">
          Los mejores{" "}
          <Link
            to="/limpieza"
            className="text-myred hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
          >
            precios
          </Link>{" "}
          para la limpieza de tu vehículo
        </h2>
      </div>
    ),
  },
];

export const carsPageSliders = [
  {
    classname: "carslider1",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-4 text-2xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          Invermoca, tu destino principal para la compra, venta y consignación
          de vehículos <span className="text-myred">nuevos y usados.</span>
        </h2>
      </div>
    ),
  },
  {
    classname: "carslider2",
    text: (
      <div className=" text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-4 text-xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          Nos comprometemos a brindarte una experiencia{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            sin complicaciones
          </span>{" "}
          y{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            transparente
          </span>{" "}
          en la adquisición de tu próximo vehículo.
        </h2>
      </div>
    ),
  },
  {
    classname: "carslider3",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-4 text-xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          ¡Mira los vehículos{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            disponibles
          </span>{" "}
          y pregunta por tu{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            favorito
          </span>
          !
        </h2>
        <a href="#vehiculos">
          <h4 className="flex place-content-center items-end text-xl font-bold text-myred hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-9xl">
            <FaArrowDownLong />
          </h4>
        </a>
      </div>
    ),
  },
];

export const servicesPageSliders = [
  {
    classname: "serviceslider1",
    text: (
      <div className="text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-2 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          Carrosería de{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            vanguardia
          </span>
        </h2>
        <h3 className="text-base drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:px-20 xl:text-4xl 2xl:text-6xl">
          Revitaliza la carrocería de tu vehículo confiando en nosotros para que
          tu coche luzca como nuevo
        </h3>
      </div>
    ),
  },
  {
    classname: "serviceslider2",
    text: (
      <div className=" text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-2 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          Pintura de{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            alta calidad
          </span>
        </h2>
        <h3 className="text-base drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:px-20 xl:text-4xl 2xl:text-6xl">
          Obtenga un aspecto impresionante para su vehículo con nuestros
          servicios de pintura de alta calidad. ¡Nosotros nos aseguramos de que
          tu coche brille y resplandezca!
        </h3>
      </div>
    ),
  },
  {
    classname: "serviceslider3",
    text: (
      <div className=" text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <h2 className="mb-2 text-3xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl">
          Limpieza y detalle{" "}
          <span className="text-myred drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            exhaustivos
          </span>
        </h2>
        <h3 className="text-base drop-shadow-[0_5px_5px_rgba(0,0,0,1)] sm:text-lg md:text-3xl lg:px-20 xl:text-4xl 2xl:text-6xl">
          Limpieza y detalle para tu vehículo. ¡Nuestros servicios de limpieza y
          detalle son la clave para mantener tu coche en perfectas
        </h3>
      </div>
    ),
  },
];
