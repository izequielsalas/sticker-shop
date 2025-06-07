import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickerItem({ title, imageUrl }) {
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
      className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform-gpu"
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
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
}
