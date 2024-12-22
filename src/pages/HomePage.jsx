import react from 'react';
import Hero from '../components/Hero';
import ProductPopuler from '../components/ProdukPopuler';
import Kontak from '../components/Kontak';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductPopuler />
      <Kontak />
    </div>
  );
};

export default HomePage;

