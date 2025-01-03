import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/order', { state: { product } }); // Navigasi ke OrderPage dengan state
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/produk/${id}`); // Ganti URL dengan endpoint API Anda
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!product)
    return <p className="text-center mt-10 text-gray-600">Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 pt-28">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={`http://localhost:5000${product.gambar}`} // Fallback jika gambar kosong
          alt={product.judul}
          className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            {product.judul}
          </h1>
          <p className="text-gray-600 text-lg text-center mb-6">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Harga:{' '}
            <span className="text-blue-500">
              Rp {Number(product.harga).toLocaleString('id-ID')}
            </span>
          </p>
          <div className="flex justify-center gap-4">
            <button 
             onClick={handleBuyNow}
            className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md transform hover:scale-105 transition duration-300">
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

