import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/order', { state: { product } }); // Navigasi ke OrderPage dengan state
  };

  const rating = product.rating || 0;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={`http://localhost:5000${product.gambar}`}
        alt={product.judul}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-blue-600 hover:underline mb-2">
            {product.judul}
          </h3>
        </Link>
        <p className="text-gray-500 mb-2">
          Rp {product.harga.toLocaleString('id-ID')}
        </p>

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
          <button
            onClick={handleBuyNow}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    gambar: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
    rating: PropTypes.number,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardProduct;

