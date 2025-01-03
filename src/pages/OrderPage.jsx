import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Mengambil data produk yang diteruskan dari DetailPage

  if (!product) {
    return <p>Produk tidak ditemukan!</p>;
  }

  const [jumlah, setJumlah] = useState(1);
  const [namaPemesan, setNamaPemesan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('COD');
  const [total, setTotal] = useState(product.harga); // Total harga berdasarkan jumlah
  const [buktiPembayaran, setBuktiPembayaran] = useState(null); // State untuk menyimpan file bukti pembayaran

  // Fungsi untuk menghitung total harga
  const handleJumlahChange = (event) => {
    const jumlahBaru = event.target.value;
    setJumlah(jumlahBaru);
    setTotal(jumlahBaru * product.harga); // Menghitung total berdasarkan jumlah
  };

  // Fungsi untuk mengubah bukti pembayaran
  const handleBuktiPembayaranChange = (event) => {
    setBuktiPembayaran(event.target.files[0]); // Menyimpan file yang di-upload
  };

  // Fungsi untuk mengirimkan pesanan
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validasi input
    if (!namaPemesan || !alamat || !metodePembayaran) {
      alert('Semua kolom harus diisi!');
      return;
    }
  
    // Jika metode pembayaran adalah Transfer atau e-Wallet, pastikan bukti pembayaran di-upload
    if ((metodePembayaran === 'Transfer Bank' || metodePembayaran === 'e-Wallet') && !buktiPembayaran) {
      alert('Harap unggah bukti pembayaran!');
      return;
    }
  
    // Menyiapkan data pesanan
    const orderData = {
      user_id: 1, // Ganti dengan user_id yang sesuai
      produk_id: product.id, // Mengirimkan produk yang dipilih
      jumlah,
      nama_pemesan: namaPemesan,
      alamat,
      metode_pembayaran: metodePembayaran,
      total,
    };
  
    // Menyiapkan data form-data untuk mengirim file bukti pembayaran (jika ada)
    const formData = new FormData();
formData.append('orderData', JSON.stringify(orderData)); // Menambahkan data pesanan
if (buktiPembayaran) {
  formData.append('bukti_pembayaran', buktiPembayaran); // Menambahkan file bukti pembayaran
}

  
    try {
      const response = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        body: formData,
      });
    
      const data = await response.json();
      console.log('Response dari server:', data);
    
      if (!response.ok) {
        throw new Error(data.message || 'Gagal membuat pesanan');
      }
    
      alert('Pesanan berhasil dibuat!');
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Masukkan alamat pengiriman"
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
            {(metodePembayaran === 'Transfer Bank' || metodePembayaran === 'e-Wallet') && (
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
                className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
              >
                Konfirmasi Pesanan
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
