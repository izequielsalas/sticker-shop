import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StickerItem from "./StickerItem";

export default function StickerWrapper({ sticker, index, onClick }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <StickerItem
        title={sticker.title}
        imageUrl={sticker.imageUrl}
        onClick={onClick}
      />
    </motion.div>
  );
}
