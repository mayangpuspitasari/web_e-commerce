import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('userToken');
  const role = localStorage.getItem('userRole'); // Simpan role saat login

  if (!token || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;

