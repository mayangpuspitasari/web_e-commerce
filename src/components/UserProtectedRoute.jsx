import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('userToken');
  const role = localStorage.getItem('userRole'); // Simpan role saat login

  if (!token || role !== 'user') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserProtectedRoute;