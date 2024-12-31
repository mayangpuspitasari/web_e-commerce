import React from 'react';
import { Navigate } from 'react-router-dom';

const OrderPage = () => {
  const token = localStorage.getItem('userToken');
  
  // Jika pengguna belum login, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Halaman Pesanan</h1>
      {/* Formulir pesanan dan detail pesanan */}
    </div>
  );
};

export default OrderPage;
