import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [alamat, setAlamat] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('transfer');
  const [quantity, setQuantity] = useState(1); // Jumlah default 1
  const [loading, setLoading] = useState(false);
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Produk tidak ditemukan.</p>;
  }

  // Hitung total harga
  const totalHarga = product.harga * quantity;

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('user_id', 1); // Ubah dengan ID pengguna yang login
    formData.append('total_harga', totalHarga);
    formData.append('metode_pembayaran', metodePembayaran);
    formData.append('bukti_pembayaran', buktiPembayaran);

    try {
      const response = await fetch('http://localhost:5000/transaksi', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Gagal membuat transaksi');
      }

      const data = await response.json();
      console.log('Transaksi berhasil:', data);
      alert('Pesanan berhasil dibuat!');
      navigate('/'); // Kembali ke halaman utama
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat membuat pesanan');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setBuktiPembayaran(e.target.files[0]); // Menyimpan file bukti pembayaran
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Buat Pesanan</h2>
      <div className="mb-4">
        <img
          src={`http://localhost:5000${product.gambar}`}
          alt={product.judul}
          className="w-full h-56 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-700">{product.judul}</h3>
        <p className="text-gray-500 mb-2">
          Harga Satuan: Rp {product.harga.toLocaleString('id-ID')}
        </p>
      </div>

      <form onSubmit={handleOrder}>
        {/* Input Jumlah */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
            Jumlah
          </label>
          <input
            type="number"
            id="quantity"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, e.target.value))} // Minimum 1
            required
          />
        </div>

        {/* Input Alamat Pengiriman */}
        <div className="mb-4">
          <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">
            Alamat Pengiriman
          </label>
          <textarea
            id="alamat"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            rows="3"
            placeholder="Masukkan alamat pengiriman"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Metode Pembayaran */}
        <div className="mb-4">
          <label htmlFor="metode" className="block text-gray-700 font-medium mb-2">
            Metode Pembayaran
          </label>
          <select
            id="metode"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            value={metodePembayaran}
            onChange={(e) => setMetodePembayaran(e.target.value)}
          >
            <option value="transfer">Transfer Bank</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {/* Input Bukti Pembayaran */}
        <div className="mb-4">
          <label htmlFor="bukti_pembayaran" className="block text-gray-700 font-medium mb-2">
            Upload Bukti Pembayaran
          </label>
          <input
            type="file"
            id="bukti_pembayaran"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        {/* Total Harga */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">Total Harga: </p>
          <p className="text-lg font-semibold text-gray-800">
            Rp {totalHarga.toLocaleString('id-ID')}
          </p>
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Memproses...' : 'Konfirmasi Pesanan'}
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
