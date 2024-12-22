import react from 'react';
import Hero from '../components/Hero';
import ProductPopuler from '../components/ProdukPopuler';
import Footer from '../components/Footer';
import Kontak from '../components/Kontak';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductPopuler />
      <Kontak />
      <Footer />
    </div>
  );
};

export default HomePage;

