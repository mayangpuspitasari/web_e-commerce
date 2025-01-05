import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = 'http://localhost:5000/orders';

  // Fetch data dari API
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(API_URL);
      setTransactions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id_order) => {
    try {
      await axios.delete(`${API_URL}/${id_order}`);
      fetchTransactions();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleSave = async () => {
    if (!modalData.status) {
      alert('Status transaksi harus diisi!');
      return;
    }

    try {
      if (isEditing) {
        // Update transaksi
        await axios.put(`${API_URL}/${modalData.id_order}`, modalData);
      } else {
        // Tambah transaksi baru
        await axios.post(`${API_URL}/add`, modalData);
      }

      setShowModal(false);
      setModalData(null);
      fetchTransactions();
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  const handleEdit = (transaction) => {
    setIsEditing(true);
    setModalData(transaction);
    setShowModal(true);
  };

  const handleAdd = () => {
    setIsEditing(false);
    setModalData({
      produk_nama: '',
      jumlah: 0,
      nama_pemesan: '',
      alamat: '',
      status: '',
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
            <h1 className="text-2xl font-bold mb-6">Manage Transactions</h1>
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-1 rounded mr-2"
            >
              Tambah Transaksi +
            </button>
            <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-5">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 text-left">No</th>
                    <th className="py-2 px-4 text-left">Produk</th>
                    <th className="py-2 px-4 text-left">Jumlah</th>
                    <th className="py-2 px-4 text-left">Nama Pemesan</th>
                    <th className="py-2 px-4 text-left">Alamat</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction.id_order} className="border-t">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{transaction.produk_nama}</td>
                      <td className="py-2 px-4">{transaction.jumlah}</td>
                      <td className="py-2 px-4">{transaction.nama_pemesan}</td>
                      <td className="py-2 px-4">{transaction.alamat}</td>
                      <td className="px-4 py-2">{transaction.status}</td>
                      <td className="py-2 px-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(transaction)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(transaction.id_order)}
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
                  {isEditing ? 'Edit Transaction' : 'Tambah Transaksi'}
                </h2>
                <input
                  type="text"
                  placeholder="Produk"
                  value={modalData.produk_nama}
                  onChange={(e) =>
                    setModalData({ ...modalData, produk_nama: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="number"
                  placeholder="Jumlah"
                  value={modalData.jumlah}
                  onChange={(e) =>
                    setModalData({ ...modalData, jumlah: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Nama Pemesan"
                  value={modalData.nama_pemesan}
                  onChange={(e) =>
                    setModalData({ ...modalData, nama_pemesan: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Alamat"
                  value={modalData.alamat}
                  onChange={(e) =>
                    setModalData({ ...modalData, alamat: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Status"
                  value={modalData.status}
                  onChange={(e) =>
                    setModalData({ ...modalData, status: e.target.value })
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

export default TransactionPage;

