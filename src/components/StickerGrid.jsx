import React, { useState, useCallback, useMemo, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StickerItem from "./StickerItem";
import stickers from "../data/stickers";
import { useInView } from "react-intersection-observer";

const Modal = lazy(() => import("./Modal"));

export default function StickerGrid() {
  const [activesticker, setActivesticker] = useState(null);
  const handleStickerClick = useCallback((id) => {
    setActivesticker(id);
  }, []);

  const categories = ["All", "Text", "Animals", "Logos"];
  const [filter, setFilter] = useState("All");

  const filteredStickers = useMemo(() => filter
    ? stickers.filter((s) =>
        filter === "All" ? true : s.category === filter
      )
    : stickers,
    [filter]
  );

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              filter === category ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredStickers.map((sticker, index) => (
          <StickerItem
            key={index}
            title={sticker.title}
            imageUrl={sticker.imageUrl}
            onClick={() => handleStickerClick(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activesticker !== null && (
          <Suspense fallback={<div>Loading modal...</div>}>
            <Modal
              sticker={filteredStickers[activesticker]}
              onClose={() => setActivesticker(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
