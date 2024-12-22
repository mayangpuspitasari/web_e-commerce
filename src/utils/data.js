import produk1Img from '../assets/images/b1.jpeg';
import produk2Img from '../assets/images/b2.jpeg';
import produk3Img from '../assets/images/b3.jpeg';
import produk4Img from '../assets/images/b4.jpeg';
import produk5Img from '../assets/images/b5.jpeg';
// import slide1 from '../assets/images/l1.jpg';
// import slide2 from '../assets/images/l2.jpg';
// import slide3 from '../assets/images/l3.jpg';

const products = [
  {
    id: 1,
    name: 'Produk 1',
    img: { produk1Img },
    harga: 100000,
  },
  {
    id: 2,
    name: 'Produk 2',
    img: { produk2Img },
    harga: 200000,
  },
  {
    id: 3,
    name: 'Produk 3',
    img: { produk3Img },
    harga: 100000,
  },
  {
    id: 4,
    name: 'Produk 4',
    img: { produk4Img },
    harga: 200000,
  },
  {
    id: 5,
    name: 'Modern Lamp',
    image: { produk5Img },
    harga: '$49.99',
  },
];

// const slide = [
//   {
//     id: 1,
//     name: 'Produk 1',
//     img: { slide1 },
//     harga: 100000,
//   },
//   {
//     id: 2,
//     name: 'Produk 2',
//     img: { slide2 },
//     harga: 200000,
//   },
//   {
//     id: 3,
//     name: 'Produk 3',
//     img: { slide3 },
//     harga: 100000,
//   },
// ];

export default products;

