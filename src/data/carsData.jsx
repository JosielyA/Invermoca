import toyotacamry1 from "../assets/cars/toyotacamry/WhatsApp Image 2024-04-02 at 8.19.28 AM (1).jpeg";
import toyotacamry2 from "../assets/cars/toyotacamry/WhatsApp Image 2024-04-02 at 8.19.28 AM (2).jpeg";
import toyotacamry3 from "../assets/cars/toyotacamry/WhatsApp Image 2024-04-02 at 8.19.28 AM.jpeg";
import toyotacamry4 from "../assets/cars/toyotacamry/WhatsApp Image 2024-04-02 at 8.19.29 AM.jpeg";
import chevroletcruz1 from "../assets/cars/chevroletcruz/07ba1879-ace2-4c59-b925-61b1d4605503.jpeg";
import chevroletcruz2 from "../assets/cars/chevroletcruz/76757238-3a3b-4061-8b91-b04df0b5373b.jpeg";
import chevroletcruz3 from "../assets/cars/chevroletcruz/78ca34ab-5d18-4d8b-b902-b929aa27d541.jpeg";
import chevroletcruz4 from "../assets/cars/chevroletcruz/8fda446f-f198-43ff-9ad2-20b21eff7811.jpeg";
import chevroletcruz5 from "../assets/cars/chevroletcruz/d834211d-4ae4-41de-86cc-85704ddc5574.jpeg";
import dodgeram1 from "../assets/cars/dodgeram/WhatsApp Image 2024-03-21 at 5.47.20 PM (1).jpeg";
import dodgeram2 from "../assets/cars/dodgeram/WhatsApp Image 2024-03-21 at 5.47.20 PM (2).jpeg";
import dodgeram3 from "../assets/cars/dodgeram/WhatsApp Image 2024-03-21 at 5.47.20 PM (3).jpeg";
import mitsubishieclipse1 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM (1).jpeg";
import mitsubishieclipse2 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM (2).jpeg";
import mitsubishieclipse3 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM.jpeg";
import aveolt1 from "../assets/cars/aveolt/WhatsApp Image 2024-03-20 at 5.12.25 PM (1).jpeg";
import aveolt2 from "../assets/cars/aveolt/WhatsApp Image 2024-03-20 at 5.12.25 PM.jpeg";
import aveolt3 from "../assets/cars/aveolt/WhatsApp Image 2024-03-20 at 5.12.26 PM (1).jpeg";
import aveolt4 from "../assets/cars/aveolt/WhatsApp Image 2024-03-20 at 5.12.26 PM.jpeg";
import aveolt5 from "../assets/cars/aveolt/WhatsApp Image 2024-03-20 at 5.14.22 PM.jpeg";

export const carros = [
  {
    id: 0,
    name: "Camry",
    marca: "Toyota",
    description: "2007 // 128.000 KM // TITULO 2-1",
    image: [toyotacamry1, toyotacamry2, toyotacamry3, toyotacamry4],
  },
  {
    id: 1,
    name: "Cruz",
    marca: "Chevrolet",
    price: 10000,
    description: "AUTOMATICO // 2015 // 5 PUESTOS // 160.000 KM",
    image: [
      chevroletcruz2,
      chevroletcruz1,
      chevroletcruz3,
      chevroletcruz4,
      chevroletcruz5,
    ],
  },
  {
    id: 2,
    name: "Ram",
    marca: "Dodge",
    price: 25000,
    description:
      "2016 // 138.000KM // SUSPENSION FOX // TITULO 2-1 // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [dodgeram1, dodgeram2, dodgeram3],
  },
  {
    id: 3,
    name: "Eclipse",
    marca: "Mitsubishi",
    price: 4000,
    description:
      "AÑO 1999 // 104.000 MILLAS // DOCUMENTACION 3-2 // CAUCHOS Y BATERIA NUEVA // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [mitsubishieclipse2, mitsubishieclipse1, mitsubishieclipse3],
  },
  {
    id: 4,
    name: "LT",
    marca: "Aveo",
    price: 12500,
    description: "NUEVO // 2015 // 55000 KMS // 2-1 // 5 PUESTOS",
    image: [aveolt2, aveolt4, aveolt1, aveolt5, aveolt3],
  },
];

export const servicios = [
  {
    id: 2000,
    name: "Servicios de mecánica",
    description:
      "Ligera y pesada: amortiguación, servicio de inyectores, mecanica ligera y pesada.",
    price: 200,
  },
  {
    id: 1000,
    name: "Limpieza",
    description: "Pulilavado, lavado de chasis y motor, latoneria.",
    price: 500,
  },
  {
    id: 3000,
    name: "Pintura automotríz",
    description:
      "Restauramos la apariencia del vehículo, combinando expertamente colores y aplicando un acabado duradero.",
    price: 100,
  },
];
