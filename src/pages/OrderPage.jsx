import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    navigate('/');
    return null;
  }

  const [jumlah, setJumlah] = useState(1);
  const [namaPemesan, setNamaPemesan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('COD');
  const [total, setTotal] = useState(product.harga); // Total harga berdasarkan jumlah
  const [totalSetelahDiskon, setTotalSetelahDiskon] = useState(product.harga); // Total setelah diskon
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk menghitung total harga dan diskon
  const handleJumlahChange = (event) => {
    const jumlahBaru = Number(event.target.value);
    if (jumlahBaru > 0 && Number.isInteger(jumlahBaru)) {
      const totalHarga = jumlahBaru * product.harga;
      const diskon = totalHarga > 80000 ? totalHarga * 0.1 : 0; // Diskon 10% jika total lebih dari Rp 80.000
      setJumlah(jumlahBaru);
      setTotal(totalHarga);
      setTotalSetelahDiskon(totalHarga - diskon);
    } else {
      alert('Jumlah harus berupa angka bulat dan lebih dari 0!');
    }
  };

  // Fungsi untuk mengubah bukti pembayaran
  const handleBuktiPembayaranChange = (event) => {
    setBuktiPembayaran(event.target.files[0]);
  };

  // Fungsi untuk mengirimkan pesanan
  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('userToken');

    if (!token) {
      alert('Harap login terlebih dahulu untuk membuat pesanan!');
      return;
    }

    const formData = new FormData();
    formData.append('produk_id', product.id);
    formData.append('jumlah', jumlah);
    formData.append('nama_pemesan', namaPemesan);
    formData.append('alamat', alamat);
    formData.append('metode_pembayaran', metodePembayaran);
    formData.append('total', totalSetelahDiskon); // Gunakan total setelah diskon
    if (buktiPembayaran) {
      formData.append('bukti_pembayaran', buktiPembayaran);
    }

    try {
      setIsLoading(true);

      const response = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Pesanan berhasil dibuat!');
        navigate('/');
      } else {
        const errorText = await response.text();
        alert(errorText || 'Terjadi kesalahan!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal membuat pesanan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-28">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={`http://localhost:5000${product.gambar}`}
          alt={product.judul}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            {product.judul}
          </h1>
          <p className="text-gray-600 text-lg text-center mb-6">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Harga:{' '}
            <span className="text-blue-500">
              Rp {Number(product.harga).toLocaleString('id-ID')}
            </span>
          </p>
          <p className="text-green-500 font-semibold text-center mb-6">
            Beli lebih dari Rp 80.000, diskon 10%!
          </p>

          {/* Form Pemesanan */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Jumlah
              </label>
              <input
                type="number"
                value={jumlah}
                onChange={handleJumlahChange}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Nama Pemesan
              </label>
              <input
                type="text"
                value={namaPemesan}
                onChange={(e) => setNamaPemesan(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Masukkan nama pemesan"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Alamat Pengiriman
              </label>
              <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
                placeholder="Masukkan alamat pengiriman"
                rows="4"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Metode Pembayaran
              </label>
              <select
                value={metodePembayaran}
                onChange={(e) => setMetodePembayaran(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="COD">Cash On Delivery (COD)</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="e-Wallet">e-Wallet</option>
              </select>
            </div>

            {/* Input untuk Bukti Pembayaran */}
            {(metodePembayaran === 'Transfer Bank' ||
              metodePembayaran === 'e-Wallet') && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Bukti Pembayaran
                </label>
                <input
                  type="file"
                  onChange={handleBuktiPembayaranChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            )}

            <div className="text-center mt-4">
              <button
                type="submit"
                className={`px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 ${
                  isLoading && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Mengirim...' : 'Konfirmasi Pesanan'}
              </button>
            </div>
          </form>

          {/* Total Harga */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Total Harga: Rp{' '}
              <span className="text-blue-500">
                {Number(total).toLocaleString('id-ID')}
              </span>
            </p>
            {total > 80000 && (
              <p className="text-green-500 font-semibold">
                Diskon 10% diterapkan. Total setelah diskon: Rp{' '}
                {Number(totalSetelahDiskon).toLocaleString('id-ID')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

