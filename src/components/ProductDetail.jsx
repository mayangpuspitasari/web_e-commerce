import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { products } from '../utils/data'; // Contoh data produk

const ProductDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mencari produk berdasarkan ID
    const foundProduct = products.find(
      (product) => product.id === parseInt(id),
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>; // Jika produk belum ditemukan

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-96 object-cover mt-6 mb-4"
      />
      <p className="text-xl">Rp {product.harga.toLocaleString()}</p>
      <p className="mt-4">{product.description}</p>{' '}
      {/* Tambahkan deskripsi produk */}
      {/* Tambahkan elemen lainnya seperti tombol beli atau rating */}
    </div>
  );
};

export default ProductDetail;

