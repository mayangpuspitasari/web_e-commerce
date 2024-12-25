import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log('Current ID from URL:', id);
    console.log('Products data:', products);

    const productData = products.find((product) => product.id === parseInt(id));
    console.log('Matched Product:', productData);

    setProduct(productData);
  }, [id]);

  if (!product)
    return <p className="text-center mt-10 text-gray-600">Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
        />

        {/* Product Details */}
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg text-center mb-6">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Harga:{' '}
            <span className="text-blue-500">
              {' '}
              Rp {product.harga.toLocaleString('id-ID')}
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md transform hover:scale-105 transition duration-300">
              Beli Sekarang
            </button>
            <button className="px-6 py-3 bg-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-400 shadow-md flex items-center gap-2 transform hover:scale-105 transition duration-300">
              <FontAwesomeIcon icon={faShoppingCart} />
              Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

