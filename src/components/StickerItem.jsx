import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickerItem({ title, imageUrl, price }) {
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

    const rotateMax = 15;
    const deltaX = ((x - centerX) / centerX) * rotateMax;
    const deltaY = ((y - centerY) / centerY) * rotateMax * -1;

    rotateX.set(deltaY);
    rotateY.set(deltaX);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform-gpu"
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1000,
        willChange: "transform",
        pointerEvents: "auto",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
    <img
      src={imageUrl}
      alt={title}
      className="w-full object-cover"
      style={{ maxHeight: "300px", height: "auto" }}
    />
    <div className="p-4 bg-white-800">
      <h2 className="text-lg font-semibold text-purple">{title}</h2>
      <p className="text-sm text-gray-500">${price.toFixed(2)}</p>

      
    </div>
  </motion.div>

  );
}

