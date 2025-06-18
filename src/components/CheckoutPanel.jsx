import React from "react";
import { useCart } from "./CartProvider";
import { X } from "lucide-react";

export default function CheckoutPanel({ onClose }) {
  const { cartItems, total, clearCart } = useCart();

  const handleOrder = () => {
    alert("Order placed!");
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3 max-h-64 overflow-y-auto mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between font-semibold border-t pt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          onClick={handleOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
