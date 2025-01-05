import react from 'react';
import Hero from '../components/Hero';
import ProductPopuler from '../components/ProdukPopuler';
import Kontak from '../components/Kontak';
import Diskon from '../components/Diskon';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Diskon />
      <ProductPopuler />
      <Kontak />
    </div>
  );
};

export default HomePage;

