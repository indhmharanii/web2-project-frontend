import rog from "../assets/images/laptops/rog.png";
import tuf from "../assets/images/laptops/tuf.png";
import legion from "../assets/images/laptops/legion.png";
import loq from "../assets/images/laptops/loq.png";
import nitro from "../assets/images/laptops/nitro.png";
import victus from "../assets/images/laptops/victus.png";
import macbook from "../assets/images/laptops/macbook.png";
import vivobook from "../assets/images/laptops/vivobook.png";

const laptops = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    category: "Gaming",
    processor: "Intel Core Ultra 9 185H",
    gpu: "RTX 4070 8GB",
    ram: "32GB DDR5",
    storage: "1TB SSD",
    display: '16" QHD+ 240Hz',
    price: 28999000,
    rating: 4.9,
    votes: 1540,
    tier: "S",
    image: rog,
  },

  {
    id: 2,
    name: "Lenovo Legion Pro 7",
    brand: "Lenovo",
    category: "Gaming",
    processor: "Intel Core i9-14900HX",
    gpu: "RTX 4080 12GB",
    ram: "32GB DDR5",
    storage: "1TB SSD",
    display: '16" QHD+ 240Hz',
    price: 32999000,
    rating: 4.9,
    votes: 1480,
    tier: "S",
    image: legion,
  },

  {
    id: 3,
    name: "ASUS TUF Gaming F15",
    brand: "ASUS",
    category: "Gaming",
    processor: "Intel Core i7-13620H",
    gpu: "RTX 4060",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: '15.6" 144Hz',
    price: 15499000,
    rating: 4.8,
    votes: 1350,
    tier: "A",
    image: tuf,
  },

  {
    id: 4,
    name: "Lenovo LOQ 15",
    brand: "Lenovo",
    category: "Gaming",
    processor: "Intel Core i7-13650HX",
    gpu: "RTX 4050",
    ram: "16GB DDR5",
    storage: "512GB SSD",
    display: '15.6" 144Hz',
    price: 16299000,
    rating: 4.8,
    votes: 1285,
    tier: "A",
    image: loq,
  },

  {
    id: 5,
    name: "Acer Nitro V15",
    brand: "Acer",
    category: "Gaming",
    processor: "Intel Core i5-13420H",
    gpu: "RTX 4050",
    ram: "16GB",
    storage: "512GB SSD",
    display: '15.6" 144Hz',
    price: 14999000,
    rating: 4.7,
    votes: 1210,
    tier: "B",
    image: nitro,
  },

  {
    id: 6,
    name: "HP Victus 16",
    brand: "HP",
    category: "Gaming",
    processor: "Ryzen 7 7840HS",
    gpu: "RTX 4050",
    ram: "16GB",
    storage: "512GB SSD",
    display: '16.1" 144Hz',
    price: 13999000,
    rating: 4.6,
    votes: 1180,
    tier: "B",
    image: victus,
  },

  {
    id: 7,
    name: "MacBook Pro M4",
    brand: "Apple",
    category: "Creator",
    processor: "Apple M4",
    gpu: "Apple GPU",
    ram: "24GB Unified",
    storage: "1TB SSD",
    display: '14.2" Liquid Retina XDR',
    price: 32999000,
    rating: 5.0,
    votes: 980,
    tier: "S",
    image: macbook,
  },

  {
    id: 8,
    name: "ASUS Vivobook 15",
    brand: "ASUS",
    category: "Office",
    processor: "Intel Core i5-1335U",
    gpu: "Intel Iris Xe",
    ram: "16GB",
    storage: "512GB SSD",
    display: '15.6" Full HD',
    price: 9999000,
    rating: 4.5,
    votes: 845,
    tier: "B",
    image: vivobook,
  }
];

export default laptops;