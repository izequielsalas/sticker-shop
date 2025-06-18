import React from 'react';
import StickerGrid from './StickerGrid';
import { useState } from "react";
import CheckoutPanel from './CheckoutPanel';
import { CartProvider } from './CartProvider';
import { useCart } from './CartProvider';

export default function StickerShopLanding() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 sm:px-8 py-4 sm:py-6 shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold">StickyVibes</h1>
        <nav className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={() => setCheckoutOpen(true)}
            className="text-sm sm:text-base text-gray-600 hover:underline px-2"
          >
            Cart ({cartItems.length})
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 px-4 sm:px-8 bg-purple-300">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Custom Stickers That Stick
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Perfect for laptops, water bottles, and branding.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
          Shop Now
        </button>
      </section>

      {/* View Checkout - moved into nav */}

      {/* Featured Stickers */}
      <section id="shop" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-10">Featured Stickers</h3>
        <StickerGrid />
      </section>

      {/* Why Buy From Us */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">Why Buy From Us</h3>
        <ul className="max-w-xl mx-auto list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>Waterproof vinyl stickers</li>
          <li>Die-cut or kiss-cut options</li>
          <li>Free design mockups</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 sm:py-16 px-4 sm:px-8 bg-purple-200">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Want a custom design?</h3>
        <p className="mb-6 text-sm sm:text-base">Let’s make it happen.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
          Request a Quote
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-xs sm:text-sm text-gray-500">
        <p>&copy; 2025 IzequielSalas • StickyVibes</p>
      </footer>

      {/* Checkout Panel */}
      {checkoutOpen && <CheckoutPanel onClose={() => setCheckoutOpen(false)} />}
    </div>
  );
}

