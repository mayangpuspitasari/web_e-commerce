import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null); // Data untuk modal (Tambah/Edit/Lihat)
  const [isEditing, setIsEditing] = useState(false); // Mode edit atau tambah

  const API_URL = 'http://localhost:5000/produk';

  // Fetch data dari API
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();

      // Pastikan modalData berisi data yang benar
      console.log('Modal Data being sent', modalData); // Log modalData sebelum dikirim

      // Tambahkan data yang benar ke dalam FormData
      formData.append('judul', modalData.judul);
      formData.append('harga', modalData.harga);
      formData.append('description', modalData.description);
      formData.append('rating', modalData.rating);

      // Cek apakah gambar ada dan valid
      if (modalData.gambar && modalData.gambar instanceof File) {
        formData.append('gambar', modalData.gambar);
      }

      if (isEditing) {
        // Update produk
        console.log('Updating Product', modalData); // Log data yang sedang di-update
        await axios.put(`${API_URL}/${modalData.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        // Tambah produk baru
        await axios.post(API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      // Setelah berhasil menyimpan, reset modal dan perbarui data
      setShowModal(false);
      setModalData(null);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setModalData({
      ...product, // Pastikan data produk sudah terisi dengan benar
      gambar: '', // Pastikan gambar dikosongkan untuk edit
    });
    console.log('Modal Data before editing', product); // Log produk yang sedang diedit
    setShowModal(true);
  };

  const handleAdd = () => {
    setIsEditing(false);
    setModalData({
      judul: '',
      harga: '',
      description: '',
      gambar: '', // Empty img field for adding new product
      rating: '',
    });
    setShowModal(true);
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-grow flex flex-col">
        <Header />

        <main className="flex-grow p-6 bg-gray-100">
          <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-1 rounded mr-2"
            >
              Tambah Produk +
            </button>
            <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-5">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 text-left">No</th>
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
                          src={`http://localhost:5000${product.gambar}`}
                          alt={product.judul}
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) =>
                            (e.target.src = '/path/to/default-image.jpg')
                          } // fallback jika gagal
                        />
                      </td>
                      <td className="py-2 px-4">{product.judul}</td>
                      <td className="py-2 px-4">Rp {product.harga}</td>
                      <td className="py-2 px-4">{product.description}</td>
                      <td className="py-2 px-4">{product.rating}</td>
                      <td className="py-2 px-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button className="text-green-500 hover:text-green-700">
                          <FaEye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">
                  {isEditing ? 'Edit Produk' : 'Tambah Produk'}
                </h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={modalData.judul}
                  onChange={(e) =>
                    setModalData({ ...modalData, judul: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={modalData.harga}
                  onChange={(e) =>
                    setModalData({ ...modalData, harga: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={modalData.description}
                  onChange={(e) =>
                    setModalData({ ...modalData, description: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="file"
                  accept="gambar/*"
                  onChange={(e) =>
                    setModalData({ ...modalData, gambar: e.target.files[0] })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />

                <input
                  type="number"
                  placeholder="Rating"
                  value={modalData.rating}
                  onChange={(e) =>
                    setModalData({ ...modalData, rating: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Product;

