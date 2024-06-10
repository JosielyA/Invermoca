import dodgeram1 from "../assets/cars/dodgeram/image1.jpeg";
import dodgeram2 from "../assets/cars/dodgeram/image2.jpeg";
import dodgeram3 from "../assets/cars/dodgeram/image3.jpeg";
import mitsubishieclipse1 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM (1).jpeg";
import mitsubishieclipse2 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM (2).jpeg";
import mitsubishieclipse3 from "../assets/cars/mitsubishieclipse/WhatsApp Image 2024-02-07 at 12.32.18 PM.jpeg";
import aveolt1 from "../assets/cars/aveolt/image1.jpeg";
import aveolt2 from "../assets/cars/aveolt/image2.jpeg";
import aveolt3 from "../assets/cars/aveolt/image3.jpeg";
import aveolt4 from "../assets/cars/aveolt/image4.jpeg";
import aveolt5 from "../assets/cars/aveolt/image5.jpeg";
import toyotatacoma1 from "../assets/cars/toyotatacoma/image0.jpeg";
import toyotatacoma2 from "../assets/cars/toyotatacoma/image1.jpeg";
import toyotatacoma3 from "../assets/cars/toyotatacoma/image2.jpeg";

export const carros = [
  {
    id: 2,
    type: "Camioneta",
    name: "Ram",
    marca: "Dodge",
    price: 25000,
    year: 2016,
    kilometraje: 138000,
    description:
      "SUSPENSION FOX // TITULO 2-1 // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [dodgeram1, dodgeram2, dodgeram3],
  },
  {
    id: 3,
    type: "Carro",
    name: "Eclipse",
    marca: "Mitsubishi",
    price: 4000,
    year: 1999,
    kilometraje: 167000,
    description:
      "DOCUMENTACION 3-2 // CAUCHOS Y BATERIA NUEVA // DOS JUEGOS DE LLAVE // 5 PUESTOS",
    image: [mitsubishieclipse2, mitsubishieclipse1, mitsubishieclipse3],
  },
  {
    id: 4,
    type: "Carro",
    name: "LT",
    marca: "Aveo",
    price: 12500,
    year: 2015,
    state: "Nuevo",
    kilometraje: 55000,
    description: "2-1 // 5 PUESTOS",
    image: [aveolt2, aveolt4, aveolt1, aveolt5, aveolt3],
  },
  {
    id: 5,
    name: "Tacoma",
    marca: "Toyota",
    type: "Camioneta",
    kilometraje: 57000,
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
