import React from 'react';
import PropTypes from 'prop-types';

const LoginInput = ({ formData, handleChange }) => (
  <>
    <div>
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
  </>
);


LoginInput.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired, // username harus berupa string dan wajib ada
    password: PropTypes.string.isRequired, // password harus berupa string dan wajib ada
  }).isRequired,
  handleChange: PropTypes.func.isRequired, // handleChange harus berupa fungsi dan wajib ada
};

export default LoginInput;

