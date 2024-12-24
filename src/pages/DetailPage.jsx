import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/data'; // Import data produk

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mencari produk berdasarkan ID yang ada di URL
    const productData = products.find((product) => product.id === parseInt(id));
    setProduct(productData);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mt-4"
      />
      <p className="text-lg mt-4">{product.description}</p>
      <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4">
        Add to Cart
      </button>
    </div>
  );
};

export default DetailPage;

