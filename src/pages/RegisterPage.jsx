import React, { useState } from 'react';
import axios from 'axios';
import RegisterInput from '../components/RegisterInput';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi role "admin" di frontend
    if (formData.role.toLowerCase() === 'admin') {
      setMessage('Role "admin" tidak diperbolehkan');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/register',
        formData,
      );
      setMessage('Registrasi berhasil');
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data || 'Terjadi kesalahan');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <RegisterInput formData={formData} handleChange={handleChange} />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default RegisterPage;

