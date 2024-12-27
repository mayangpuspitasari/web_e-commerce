import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL API produk Anda
  const API_URL = 'http://localhost:5000/produk';

  // Fetch data dari API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
            <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">
              Tambah Produk +
            </button>
            <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-5">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 text-left">#</th>
                    <th className="py-2 px-4 text-left">Image</th>
                    <th className="py-2 px-4 text-left">Title</th>
                    <th className="py-2 px-4 text-left">Price</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-left">Rating</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} className="border-t">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">
                        <img
                          src={product.img}
                          alt={product.judul}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </td>
                      <td className="py-2 px-4">{product.judul}</td>
                      <td className="py-2 px-4">Rp {product.harga}</td>
                      <td className="py-2 px-4">{product.description}</td>
                      <td className="py-2 px-4">{product.rating}</td>
                      <td className="py-2 px-4 flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
                          <FaEye className="w-5 h-5" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Product;

