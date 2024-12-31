import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import AdminPage from './pages/AdminPage';
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import Product from './components/Admin/Product';
import Users from './components/Admin/Users';
import LoginPages from './pages/LoginPages';
import RegisterPage from './pages/RegisterPage';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import UserProtectedRoute from './components/UserProtectedRoute'; // Import UserProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute dengan MainLayout (untuk pengguna) */}
        <Route
          path="/"
          element={
            <UserProtectedRoute>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </UserProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <UserProtectedRoute>
              <MainLayout>
                <ProductsPage />
              </MainLayout>
            </UserProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <UserProtectedRoute>
              <MainLayout>
                <DetailPage />
              </MainLayout>
            </UserProtectedRoute>
          }
        />

        {/* Rute untuk Login dan Register */}
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rute dengan AdminLayout (untuk admin) */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminPage />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/product"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <Product />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <Users />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
