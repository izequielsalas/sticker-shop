// src/context/cartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setCartItems([]);
  const total = cartItems.reduce((sum, i) => sum + (i.price || 0), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}


// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/cartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="fixed bottom-0 right-0 m-4 w-72 bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2 max-h-56 overflow-y-auto">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.title}</span>
              <span>${(item.price || 0).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold">Total:</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <button onClick={clearCart} className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md">Clear Cart</button>
    </div>
  );
}

/* USAGE:
   - Wrap your App in <CartProvider> in main.jsx:
     import { CartProvider } from './context/cartContext';
     
     ReactDOM.createRoot(...).render(
       <CartProvider>
         <App />
       </CartProvider>
     );

   - Import and render <Cart /> at the root of your App or inside Layout:
     import Cart from './components/Cart';

     function App() {
       return (
         <>
           <StickerShopLanding />
           <Cart />
         </>
       );
     }
*/
