import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token atau data login lainnya dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // Jika menyimpan role

    // Arahkan pengguna ke halaman utama (Home)
    navigate('/'); // Halaman utama adalah '/'
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Judul Dashboard */}
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        {/* Informasi Admin dan Tombol Logout */}
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Welcome, Admin</span>
          <button
            onClick={handleLogout}
            className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

