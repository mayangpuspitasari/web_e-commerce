import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const name = localStorage.getItem('userName'); // Ambil nama dari localStorage
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || 'User'); // Berikan nilai default jika nama kosong
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    // Hapus data login dari localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
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
            <span className="ml-2">Brownies Fundy</span>
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
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
                onClick={handleMenuClick}
              >
                Product
              </Link>
            </li>
            <li>
              <a
                href="#kontak"
                className="block py-2 px-4 md:inline-block no-underline hover:text-black hover:bg-gray-100"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Ikon Keranjang dan Pengguna */}
        <div className="flex items-center md:order-3">
          {/* Dropdown User */}
          <div className="flex items-center md:order-3">
            {/* Dropdown User */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="block py-2 px-4 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
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
                        Hi,{' '}
                        <span className="font-bold">{userName || 'User'}</span>
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
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
      </div>
    </nav>
  );
};

export default Navbar;

