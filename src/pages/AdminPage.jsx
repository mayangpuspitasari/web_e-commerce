import React from 'react';
import Sidebar from '../components/Admin/Sidebar';
import Header from '../components/Admin/Header';
import Dashboard from '../components/Admin/Dashboard';

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Welcome to the Admin Dashboard
            </h2>
            <p className="text-gray-700">
              Manage your application using the sidebar navigation. Choose a
              section to view more details.
            </p>
          </div>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default AdminPage;

