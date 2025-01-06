import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Logo dan Deskripsi */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Brownies Fundy</h2>
            <p className="text-gray-400">
              Brownies Fundy adalah brand spesial yang menghadirkan berbagai
              varian brownies lezat dengan kualitas terbaik. Kami menjual
              brownies dengan tekstur lembut, rasa cokelat yang kaya, dan
              berbagai topping menarik yang cocok untuk semua kalangan. Mulai
              dari brownies klasik hingga kreasi modern dengan kombinasi rasa
              unik, Brownis selalu berkomitmen untuk memberikan kepuasan dalam
              setiap gigitan.
            </p>
          </div>

          {/* Link Navigasi */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-400 hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi Kontak */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Alamat:</span>
                <br />
                Jl. Imam Bonjol. 229, Kisaran, Indonesia
              </li>
              <li>
                <span className="text-gray-400">Telepon:</span>
                <br />
                (+62) 123-456-789
              </li>
              <li>
                <span className="text-gray-400">Email:</span>
                <br />
                brownies@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          &copy; 2024 BrowniesFundy. Semua Hak Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

