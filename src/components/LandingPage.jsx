import React from 'react';
import StickerGrid from './StickerGrid';


export default function StickerShopLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">StickyVibes</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-purple-300">
        <h2 className="text-base sm:text-2xl md:text-3xl
 lg:text-4xl font-bold mb-4">Custom Stickers That Stick</h2>
        <p className="text-lg mb-6">Perfect for laptops, water bottles, and branding.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Shop Now</button>
      </section>

      {/* Featured Stickers */}
      <section id="shop" className="py-16 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-10">Featured Stickers</h3>
        <StickerGrid />
      </section>

      {/* Why Buy From Us */}
      <section id="about" className="py-16 px-6 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">Why Buy From Us</h3>
        <ul className="max-w-xl mx-auto list-disc list-inside space-y-2">
          <li>Waterproof vinyl stickers</li>
          <li>Die-cut or kiss-cut options</li>
          <li>Free design mockups</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 bg-purple-200">
        <h3 className="text-2xl font-semibold mb-4">Want a custom design?</h3>
        <p className="mb-6">Let’s make it happen.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Request a Quote</button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>&copy; 2025 IzequielSalas • © 2025 StickyVibes</p>
      </footer>
    </div>
  );
}
