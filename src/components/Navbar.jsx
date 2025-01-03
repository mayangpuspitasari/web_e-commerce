import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [userName, setUserName] = useState(''); // Track user name

  useEffect(() => {
    // Periksa apakah token ada di localStorage untuk status login
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name'); // Menyimpan nama pengguna di localStorage
    if (token) {
      setIsLoggedIn(true);
      setUserName(name); // Set nama pengguna jika sudah login
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    // Hapus token dan data login lainnya dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('name'); // Hapus nama pengguna dari localStorage
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-30 py-2">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-800 text-xl font-bold no-underline"
          >
            {/* Tetap menggunakan SVG brownies */}
            <svg
              className="fill-current text-brown-700 w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="2"
                ry="2"
                fill="#6B4F31"
              />
              <circle cx="8" cy="10" r="1" fill="#fff" />
              <circle cx="10" cy="8" r="1" fill="#fff" />
              <circle cx="16" cy="10" r="1" fill="#fff" />
              <circle cx="14" cy="8" r="1" fill="#fff" />
              <circle cx="12" cy="10" r="1" fill="#fff" />
            </svg>
            <span className="ml-2">Brownies</span>
          </Link>
        </div>

        {/* Menu Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Tengah */}
        <div
          className={`flex-1 md:flex items-center justify-center md:order-2 ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row items-center text-base text-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Ikon Keranjang dan Pengguna */}
        <div className="flex items-center md:order-3">
          <Link
            to="/cart"
            className="block py-2 px-4 md:inline-block no-underline hover:text-black"
          >
            <svg
              className="fill-current text-gray-800 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </Link>

          {/* Dropdown User */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="block py-2 px-4 md:inline-block no-underline hover:text-black ml-2 focus:outline-none"
            >
              <svg
                className="fill-current text-gray-800 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
              </svg>
            </button>

            {isUserMenuOpen && (
  <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-48">
    {isLoggedIn ? (
      <>
        <p className="block px-4 py-2 text-gray-700">
          Hi, <span className="font-bold">{userName}</span>
        </p>
        <button
          onClick={handleLogout}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link
          to="/login"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={handleMenuClick}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={handleMenuClick}
        >
          Register
        </Link>
      </>
    )}
  </div>
)}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

