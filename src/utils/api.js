import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Ambil semua produk
const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/produk`);
  return response.data;
};

// Tambah produk baru
const addProduct = async (product) => {
  const response = await axios.post(`${BASE_URL}/produk`, product);
  return response.data;
};

// Hapus produk
const deleteProduct = async (id) => {
  const response = await axios.delete(`${BASE_URL}/produk/${id}`);
  return response.data;
};

// Edit produk
const updateProduct = async (id, formData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/produk/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export { getProducts, addProduct, deleteProduct, updateProduct };

