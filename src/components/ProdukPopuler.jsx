import React from 'react';

const products = [
  {
    id: 1,
    name: 'Modern Lamp',
    image: 'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d',
    price: '$49.99',
  },
  {
    id: 2,
    name: 'Elegant Wooden Clock',
    image: 'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d',
    price: '$29.99',
  },
  {
    id: 3,
    name: 'Minimalist Chair',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    price: '$89.99',
  },
];

const ProductPopuler = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Produk Populer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPopuler;

