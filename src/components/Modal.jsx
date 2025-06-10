import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ sticker, onClose, onAddToCart }) {
  const stopPropagation = (e) => e.stopPropagation();

  try {
    return (
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
          onClick={stopPropagation}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          {/* Sticker preview */}
          <img
            src={sticker.imageUrl}
            alt={sticker.title}
            className="w-full h-64 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{sticker.title}</h2>
          {sticker.price !== undefined && (
            <p className="text-lg font-bold mb-4">
              ${sticker.price.toFixed(2)}
            </p>
          )}
          {/* Add to Cart */}
          <button
            onClick={() => {
              onAddToCart(sticker);
              onClose();
            }}
            className="mt-2 w-full px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </motion.div>
      </motion.div>
    );
  } catch (err) {
    console.error("Modal error:", err);
    return null;
  }
}
