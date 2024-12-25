import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
  // Tetapkan default rating jika tidak ada
  const rating = product.rating || 0;

  // Log untuk memeriksa tipe data harga
  console.log('Harga:', product.harga, 'Tipe:', typeof product.harga);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-blue-600 hover:underline mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 mb-2">
          Rp {product.harga.toLocaleString('id-ID')}
        </p>

        {/* Rating Bintang */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`text-yellow-400 ${
                index < rating ? 'text-yellow-500' : 'opacity-50'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-start gap-5 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
            Beli Sekarang
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 text-sm font-medium rounded hover:bg-gray-400 flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
    rating: PropTypes.number, // Rating opsional
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardProduct;

