import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800">Total Products</h2>
          <p className="text-3xl font-bold text-blue-600 mt-4">150</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800">Total Users</h2>
          <p className="text-3xl font-bold text-green-600 mt-4">320</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800">Total Orders</h2>
          <p className="text-3xl font-bold text-yellow-600 mt-4">480</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold text-gray-800">Revenue</h2>
          <p className="text-3xl font-bold text-red-600 mt-4">Rp 75.000.000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

