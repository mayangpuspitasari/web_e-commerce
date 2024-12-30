import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate dan Link
import axios from 'axios';
import LoginInput from '../components/LoginInput';

const LoginPages = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/user/login',
        formData,
      );

      const { token, role } = response.data;

      // Simpan token dan role di localStorage
      localStorage.setItem('userToken', token);
      localStorage.setItem('userRole', role);

      // Redirect berdasarkan role
      if (role === 'admin') {
        navigate('/admin'); // Arahkan ke halaman admin
      } else if (role === 'user') {
        navigate('/'); // Arahkan ke halaman utama (HomePage)
      } else {
        setMessage('Role tidak dikenali');
      }

      setMessage('Login berhasil');
    } catch (error) {
      setMessage(error.response?.data || 'Terjadi kesalahan');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <LoginInput formData={formData} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">{message}</p>
        <p className="mt-6 text-center text-gray-600">
          Belum punya akun?{' '}
          <Link
            to="/register"
            className="text-blue-500 hover:underline hover:text-blue-600"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPages;

