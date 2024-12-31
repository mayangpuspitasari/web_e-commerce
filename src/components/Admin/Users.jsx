import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = 'http://localhost:5000/user';

  // Fetch data dari API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id_user) => {
    try {
      await axios.delete(`${API_URL}/${id_user}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSave = async () => {
    if (!modalData.username || !modalData.password || !modalData.email) {
      alert('Semua field harus diisi!');
      return;
    }

    try {
      if (isEditing) {
        // Update user
        await axios.put(`${API_URL}/${modalData.id_user}`, modalData);
      } else {
        // Tambah user baru
        await axios.post(`${API_URL}/add`, modalData);
      }

      setShowModal(false);
      setModalData(null);
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setModalData(user);
    setShowModal(true);
  };

  const handleAdd = () => {
    setIsEditing(false);
    setModalData({
      username: '',
      password: '',
      role: '',
      email: '',
    });
    setShowModal(true);
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <main className="flex-grow p-6 bg-gray-100">
          <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-1 rounded mr-2"
            >
              Tambah User +
            </button>
            <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-5">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 text-left">No</th>
                    <th className="py-2 px-4 text-left">Username</th>
                    <th className="py-2 px-4 text-left">Password</th>
                    <th className="py-2 px-4 text-left">Role</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Created At</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id_user} className="border-t">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{user.username}</td>
                      <td className="py-2 px-4">********</td>
                      <td className="py-2 px-4">{user.role}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="px-4 py-2">
                {new Date(user.created_at).toLocaleDateString('id-ID')}
              </td>
                      <td className="py-2 px-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id_user)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">
                  {isEditing ? 'Edit User' : 'Tambah User'}
                </h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={modalData.username}
                  onChange={(e) =>
                    setModalData({ ...modalData, username: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={modalData.password}
                  onChange={(e) =>
                    setModalData({ ...modalData, password: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={modalData.role}
                  onChange={(e) =>
                    setModalData({ ...modalData, role: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={modalData.email}
                  onChange={(e) =>
                    setModalData({ ...modalData, email: e.target.value })
                  }
                  className="border px-4 py-2 mb-4 w-full"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Users;
