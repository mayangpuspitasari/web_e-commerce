import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import AdminPage from './pages/AdminPage';
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import Product from './components/Admin/Product';
// import LoginPages from './pages/LoginPages';
// import RegisterPage from './pages/RegisterPage';

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

        {/* Rute untuk Login dan Register
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPage />} /> */}

        {/* Rute dengan AdminLayout */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
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
      </Routes>
    </Router>
  );
};

export default App;

