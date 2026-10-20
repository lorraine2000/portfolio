"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const AnimatedTooltip = ({ items = [], subscribersText = "500+ subscribers" }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 10 };

  const rotate = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    x.set(offsetX);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {items.map((item, idx) => (
         <div
            key={item.id || idx}
            className="group relative"
            style={{ marginLeft: idx === 0 ? "0px" : "-14px" }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    y: -12,
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.7 }}
                  style={{ translateX, rotate }}
                  className="absolute -top-16 -left-[10px] -translate-x-1/2 z-30 flex flex-col items-center px-4 py-2 bg-blue-700 text-white text-xs rounded-lg shadow-lg"
                >
                  <div className="relative z-10 font-semibold text-sm">{item.name}</div>
                  <div className="text-[11px] opacity-80">{item.designation}</div>
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-blue-700 z-0" />
                </motion.div>
              )}
            </AnimatePresence>
            <img
              onMouseMove={handleMouseMove}
              src={item.image || "/fallback-avatar.png"}
              alt={item.name}
              
              className="w-14 h-14 rounded-full border-2 border-white object-cover group-hover:z-20 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {subscribersText && (
        <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
          {subscribersText}
        </span>
      )}
    </div>
  );
};

export default AnimatedTooltip