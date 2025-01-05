import React, { useState } from 'react';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          Your cart is empty. Add items to see them here.
        </div>
      ) : (
        <div className="bg-white p-4 shadow rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 text-left">No</th>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">
                    Rp {item.price.toLocaleString('id-ID')}
                  </td>
                  <td className="py-2 px-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        onUpdateQuantity(item.id, Number(e.target.value))
                      }
                      className="border px-2 py-1 w-16 text-center"
                    />
                  </td>
                  <td className="py-2 px-4">
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <div className="text-xl font-bold">
              Total: Rp {calculateTotal().toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

