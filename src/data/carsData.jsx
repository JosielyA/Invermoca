import dodgeram1 from "../assets/cars/dodgeram/image1.jpeg";
import dodgeram2 from "../assets/cars/dodgeram/image2.jpeg";
import dodgeram3 from "../assets/cars/dodgeram/image3.jpeg";
import toyotatacoma1 from "../assets/cars/toyotatacoma/image0.jpeg";
import toyotatacoma2 from "../assets/cars/toyotatacoma/image1.jpeg";
import toyotatacoma3 from "../assets/cars/toyotatacoma/image2.jpeg";
import fordexplorer1 from "../assets/cars/Ford Explorer/PHOTO-2024-08-08-18-10-09.jpg";
import fordexplorer2 from "../assets/cars/Ford Explorer/PHOTO-2024-08-08-18-10-09_1.jpg";
import fordexplorer3 from "../assets/cars/Ford Explorer/PHOTO-2024-08-08-18-10-09_2.jpg";
import forderanger1 from "../assets/cars/Ford Ranger/Imagen de WhatsApp 2024-08-13 a las 18.33.41_6d456a8e.jpg";
import forderanger2 from "../assets/cars/Ford Ranger/Imagen de WhatsApp 2024-08-13 a las 18.33.41_7087f009.jpg";
import fordsuperduty1 from "../assets/cars/Ford Súper Duty/image0.jpeg";
import fordsuperduty2 from "../assets/cars/Ford Súper Duty/image1.jpeg";
import fordsuperduty3 from "../assets/cars/Ford Súper Duty/image2.jpeg";
import fordtransit2 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.58.58_67fef010.jpg";
import fordtransit3 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.15_e824d5e6.jpg";
import fordtransit4 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.16_183e9cfd.jpg";
import fordtransit5 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.16_c7994590.jpg";
import fordtransit6 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.16_d64ff278.jpg";
import fordtransit7 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.16_e645b3f0.jpg";
import fordtransit8 from "../assets/cars/Ford Transit/Imagen de WhatsApp 2024-08-15 a las 09.59.16_fb0a540e.jpg";
import jeepcherokee1 from "../assets/cars/Jeep Cherokee KK 2010/Imagen de WhatsApp 2024-08-08 a las 18.11.06_397210c1.jpg";
import jeepcherokee2 from "../assets/cars/Jeep Cherokee KK 2010/Imagen de WhatsApp 2024-08-08 a las 18.11.06_46528156.jpg";
import jeepcherokee3 from "../assets/cars/Jeep Cherokee KK 2010/Imagen de WhatsApp 2024-08-08 a las 18.11.06_cc5980dd.jpg";
import renaultkangoo1 from "../assets/cars/Renault Kangoo/Imagen de WhatsApp 2024-08-15 a las 10.02.33_3ef0d10f.jpg";
import renaultkangoo2 from "../assets/cars/Renault Kangoo/Imagen de WhatsApp 2024-08-15 a las 10.02.33_8217e6e7.jpg";
import renaultkangoo3 from "../assets/cars/Renault Kangoo/Imagen de WhatsApp 2024-08-15 a las 10.02.33_f7f126b9.jpg";
import babycamry1 from "../assets/cars/Baby Camry/image0.jpeg";
import babycamry2 from "../assets/cars/Baby Camry/image1.jpeg";
import vitara1 from "../assets/cars/ChevroletVitara/image0.jpeg";
import vitara2 from "../assets/cars/ChevroletVitara/image1.jpeg";
import fordtransitotro1 from "../assets/cars/fordtransit2/image0.jpeg";
import fordtransitotro2 from "../assets/cars/fordtransit2/image1.jpeg";
import fordtransit20161 from "../assets/cars/Ford transit 2016/image0.jpeg";
import fordtransit20162 from "../assets/cars/Ford transit 2016/image1.jpeg";
import runner1 from "../assets/cars/toyota4Runner/image0.jpeg";
import runner2 from "../assets/cars/toyota4Runner/image1.jpeg";
import rey1 from "../assets/cars/Rey camión/image0.jpeg";
import rey2 from "../assets/cars/Rey camión/image1.jpeg";
import rey3 from "../assets/cars/Rey camión/image2.jpeg";
import runner2022 from "../assets/cars/toyota4Runner2022/IMG_4950.jpeg";
import runner20221 from "../assets/cars/toyota4Runner2022/IMG_4951.jpeg";
import runner20222 from "../assets/cars/toyota4Runner2022/IMG_4952.jpeg";

export const carros = [
  {
    id: 0,
    type: "Camioneta",
    name: "4 Runner 2022",
    marca: "Toyota",
    year: 2022,
    kilometraje: 22000,
    image: [runner2022, runner20221, runner20222],
  },
  {
    id: 1,
    type: "Carro",
    name: "Baby Camry",
    marca: "Toyota",
    year: 2000,
    description: "IMPORTADO // AUTOMÁTICO",
    image: [babycamry1, babycamry2],
  },
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
    type: "Camioneta",
    name: "Vitara",
    marca: "Chevrolet",
    year: 2005,
    kilometraje: 231000,
    image: [vitara1, vitara2],
  },
  {
    id: 4,
    type: "Camioneta",
    name: "Transit",
    marca: "Ford",
    year: 2017,
    kilometraje: 48700,
    image: [fordtransitotro1, fordtransitotro2],
  },
  {
    id: 5,
    name: "Tacoma",
    marca: "Toyota",
    type: "Camioneta",
    kilometraje: 57000,
    image: [toyotatacoma2, toyotatacoma1, toyotatacoma3],
  },
  {
    id: 6,
    type: "Camioneta",
    name: "Transit 2016",
    marca: "Ford",
    year: 2016,
    kilometraje: 188000,
    description: "6 cil",
    image: [fordtransit20161, fordtransit20162],
  },
  {
    id: 7,
    type: "Camioneta",
    name: "4 Runner TDR Pro",
    marca: "Toyota",
    year: 2017,
    kilometraje: 87000,
    image: [runner1, runner2],
  },
  {
    id: 8,
    type: "Camion",
    name: "Silverado Rey Camión",
    marca: "Chevrolet",
    year: 2012,
    kilometraje: 193000,
    description: "4x4",
    image: [rey1, rey2, rey3],
  },
  {
    id: 9,
    name: "Explorer",
    marca: "Ford",
    type: "Camioneta",
    description: "Blindaje nivel 3",
    year: 2016,
    kilometraje: 77000,
    image: [fordexplorer1, fordexplorer2, fordexplorer3],
  },
  {
    id: 10,
    name: "Transit 250",
    marca: "Ford",
    type: "Camioneta",
    year: 2017,
    kilometraje: 48700,
    image: [
      fordtransit2,
      fordtransit3,
      fordtransit4,
      fordtransit5,
      fordtransit6,
      fordtransit7,
      fordtransit8,
    ],
  },
  {
    id: 11,
    name: "Kangoo",
    marca: "Renault",
    type: "Camioneta",
    year: 2012,
    kilometraje: 147000,
    image: [renaultkangoo1, renaultkangoo2, renaultkangoo3],
  },
  {
    id: 12,
    name: "Cherokee kk 4x4",
    marca: "Jeep",
    type: "Camioneta",
    year: 2010,
    image: [jeepcherokee2, jeepcherokee1, jeepcherokee3],
  },
  {
    id: 13,
    name: "Súper Duty 4x4",
    marca: "Ford",
    type: "Camioneta",
    year: 2013,
    kilometraje: 13500,
    image: [fordsuperduty2, fordsuperduty1, fordsuperduty3],
  },
  {
    id: 14,
    name: "Ranger",
    marca: "Ford",
    type: "Camioneta",
    year: 2011,
    kilometraje: 150000,
    image: [forderanger2, forderanger1],
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
