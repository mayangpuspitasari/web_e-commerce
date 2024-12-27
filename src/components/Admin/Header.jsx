import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="w-full lg:w-[calc(100%-16rem)] ml-auto max-w-7xl px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>Welcome, Admin</span>
          <button className="bg-blue-800 px-3 py-1 rounded hover:bg-blue-700">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

