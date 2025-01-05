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
import OrderPage from './pages/OrderPage';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import Transaksi from './components/Admin/Transaksi';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute dengan MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <ProductsPage />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <DetailPage />
            </MainLayout>
          }
        />

        <Route
          path="/order"
          element={
            <MainLayout>
              <OrderPage />
            </MainLayout>
          }
        />

        {/* //Rute untuk Login dan Register */}
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rute dengan AdminLayout */}
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
            <AdminLayout>
              <Product />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/transaksi"
          element={
            <AdminLayout>
              <Transaksi />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

