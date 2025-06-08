import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StickerItem from "./StickerItem";
import Modal from "./Modal";
import stickers from "../data/stickers";
import { useInView } from "react-intersection-observer";

export default function StickerGrid() {
  const [activesticker, setActivesticker] = useState(null);

  const categories = ["All", "Text", "Animals", "Logos"];
  const [filter, setFilter] = useState("All");

  const filteredStickers = filter === "All"
    ? stickers
    : stickers.filter((s) => s.category === filter);

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sticker Grid */}
      <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredStickers.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No stickers match this category.
          </p>
        ) : (
          filteredStickers.map((sticker, index) => (
            <AnimatedGridItem key={sticker.id} index={index}>
              <div onClick={() => setActivesticker(sticker)}>
                <StickerItem
                  title={sticker.title}
                  imageUrl={sticker.imageUrl}
                />
              </div>
            </AnimatedGridItem>
          ))
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activesticker && (
          <Modal
            key="modal"
            sticker={activesticker}
            onClose={() => setActivesticker(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function AnimatedGridItem({ children, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
