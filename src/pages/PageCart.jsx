import React, { useState } from 'react';
import Cart from '../components/Cart';

const PageCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 50000, quantity: 1 },
    { id: 2, name: 'Item 2', price: 75000, quantity: 2 },
  ]);

  // Fungsi untuk menghapus item dari keranjang
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Fungsi untuk memperbarui jumlah item di keranjang
  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  return (
    <div>
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default PageCart;

