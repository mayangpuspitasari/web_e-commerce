import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Logo dan Deskripsi */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Nordics</h2>
            <p className="text-gray-400">
              Nordics adalah toko online yang menyediakan produk berkualitas
              untuk melengkapi kebutuhan Anda sehari-hari. Kami selalu
              mengutamakan kualitas dan pelayanan terbaik.
            </p>
          </div>

          {/* Link Navigasi */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Kontak
                </a>
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
                Jl. Merdeka No. 123, Jakarta, Indonesia
              </li>
              <li>
                <span className="text-gray-400">Telepon:</span>
                <br />
                (+62) 123-456-789
              </li>
              <li>
                <span className="text-gray-400">Email:</span>
                <br />
                info@example.com
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          &copy; 2024 Nordics. Semua Hak Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

