import { products } from '../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import bintang
import { Link } from 'react-router-dom'; // Import Link

const ProductPopuler = () => {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Produk Populer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-500">
                  {' '}
                  Rp {product.harga.toLocaleString('id-ID')}
                </p>
                <div className="flex items-center mt-2">
                  {/* Rating bintang */}
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-yellow-400 ${
                        index < product.rating ? 'text-yellow-500' : ''
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPopuler;

