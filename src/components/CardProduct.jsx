import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Rp {product.harga.toLocaleString()}</p>
      <button className="mt-2 px-4 py-2 bg-b;ue-500 text-white rounded">
        Masukkan Keranjang
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired, // Properti 'img' harus berupa string dan wajib
    name: PropTypes.string.isRequired, // Properti 'name' harus berupa string dan wajib
    harga: PropTypes.number.isRequired, // Properti 'harga' harus berupa angka dan wajib
  }),
};

export default CardProduct;

