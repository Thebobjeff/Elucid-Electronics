import IPhone17 from "../assets/iphone17-p.avif";
import AirPods from "../assets/airpods.jpg";
import IPadAir6 from "../assets/IPadAir.avif";

export const Products = [
  {
    id: 1,
    name: "IPhone 17",
    price: 799.99,
    description: "This is where product description will appear",
    image: IPhone17,

    colorOptions: [
      { name: "Blue", link: "#" },
      { name: "Red", link: "#" },
      { name: "Orange", link: "#" },
      { name: "Silver", link: "#" },
    ],
    storageOptions: [
      { name: "250GB", link: "#" },
      { name: "500GB", link: "#" },
      { name: "1TB", link: "#" },
      { name: "2TB", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Air Pod",
    price: 199.99,
    description: "This is where product discription will appear",
    image: AirPods,
  },
  {
    id: 3,
    name: "IPad Air 6",
    price: 499.99,
    description: "This is where product discription will appear",
    image: IPadAir6,
  },
];
