import React from 'react';
import CardProduct from '../components/CardProduct';
import { products } from '../utils/data';

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4 pt-28">
      <h1 className="text-2xl font-bold mb-4">Semua Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

