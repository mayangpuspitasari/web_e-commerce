import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/data'; // Pastikan ini mengarah ke file data produk Anda

const ProductDetail = () => {
  const { id } = useParams(); // Tangkap ID dari URL
  console.log('ID dari URL:', id);
  const product = products.find((item) => item.id === parseInt(id)); // Temukan produk berdasarkan ID

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-gray-600">Produk dengan ID {id} tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Gambar Produk */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-1/3 rounded shadow"
        />

        {/* Detail Produk */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Harga:{' '}
            <span className="text-green-600 font-semibold">
              Rp {product.harga.toLocaleString('id-ID')}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`inline-block w-6 h-6 ${
                  index < product.rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Deskripsi Produk */}
          <p className="text-gray-700 mb-6">
            {product.description || 'Deskripsi produk tidak tersedia.'}
          </p>

          {/* Tombol Aksi */}
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Beli Sekarang
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

