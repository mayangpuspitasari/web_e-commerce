import React from 'react';
import { Navigate } from 'react-router-dom';

const CartPage = () => {
  const token = localStorage.getItem('userToken');
  
  // Jika pengguna belum login, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Keranjang Belanja</h1>
      {/* Isi keranjang dan detail pesanan */}
    </div>
  );
};

export default CartPage;
