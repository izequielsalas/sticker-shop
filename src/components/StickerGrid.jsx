import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StickerItem from "./StickerItem";
import Modal from "./Modal";
import stickers from "../data/stickers";
import { useInView } from "react-intersection-observer";

export default function StickerGrid() {
  const [activesticker, setActivesticker] = useState(null);

  return (
    <>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {stickers.map((sticker, index) => (
          <AnimatedGridItem key={sticker.id} index={index}>
            <div onClick={() => setActivesticker(sticker)}>
              <StickerItem title={sticker.title} imageUrl={sticker.imageUrl} />
            </div>
          </AnimatedGridItem>
        ))}
      </div>

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
