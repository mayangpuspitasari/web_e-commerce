import React from 'react';
import PropTypes from 'prop-types';

const RegisterInput = ({ formData, handleChange }) => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role (opsional)"
        value={formData.role}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

RegisterInput.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired, // username harus berupa string dan wajib ada
    email: PropTypes.string.isRequired, // email harus berupa string dan wajib ada
    password: PropTypes.string.isRequired, // password harus berupa string dan wajib ada
    role: PropTypes.string, // role opsional, harus berupa string jika ada
  }).isRequired,
  handleChange: PropTypes.func.isRequired, // handleChange harus berupa fungsi dan wajib ada
};

export default RegisterInput;

