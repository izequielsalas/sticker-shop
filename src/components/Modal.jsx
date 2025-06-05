import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ project, onClose }) {
  const stopPropagation = (e) => e.stopPropagation();

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
        className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 relative"
        onClick={stopPropagation}
        initial={{ scale: 0.95, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700">
          This is where you can add more details about the Sticker — description,
          design, colors, etc.
        </p>
      </motion.div>
    </motion.div>
  );
}
