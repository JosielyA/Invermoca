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
import toyotatacoma1 from "../assets/cars/toyotatacoma/image0.jpeg";
import toyotatacoma2 from "../assets/cars/toyotatacoma/image1.jpeg";
import toyotatacoma3 from "../assets/cars/toyotatacoma/image2.jpeg";

export const carros = [
  {
    id: 2,
    name: "Ram",
    marca: "Dodge",
    price: 25000,
    type: "Carro",
    state: "Usado",
    year: 2016,
    description:
      "138.000KM // SUSPENSION FOX // TITULO 2-1 // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [dodgeram1, dodgeram2, dodgeram3],
  },
  {
    id: 3,
    name: "Eclipse",
    marca: "Mitsubishi",
    price: 4000,
    type: "Carro",
    year: 1999,
    state: "Usado",
    description:
      "104.000 MILLAS // DOCUMENTACION 3-2 // CAUCHOS Y BATERIA NUEVA // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [mitsubishieclipse2, mitsubishieclipse1, mitsubishieclipse3],
  },
  {
    id: 4,
    name: "LT",
    marca: "Aveo",
    type: "Carro",
    price: 12500,
    year: 2015,
    state: "Nuevo",
    description: "55000 KMS // 2-1 // 5 PUESTOS",
    image: [aveolt2, aveolt4, aveolt1, aveolt5, aveolt3],
  },
  {
    id: 5,
    name: "Tacoma",
    marca: "Toyota",
    type: "Camioneta",
    state: "Usado",
    description: "57.000 KM",
    image: [toyotatacoma2, toyotatacoma1, toyotatacoma3],
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
