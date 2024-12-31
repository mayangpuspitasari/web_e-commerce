import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Panel</div>
      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          <li>
            <Link
              to="/admin"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/product"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/transaksi"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Transaksi
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">© 2024 Admin Panel</div>
    </div>
  );
};

export default Sidebar;

