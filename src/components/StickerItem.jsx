import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function StickerItem({ title, imageUrl, onClick }) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    rotateX.set((-deltaY / centerY) * 10);
    rotateY.set((deltaX / centerX) * 10);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}

export default React.memo(StickerItem);
