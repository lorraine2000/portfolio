"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";
import wavyImg from '../images/body-bg.jpg';

const GlowingStarsBackground = () => {
  const { theme } = useTheme();

  // Grid settings for stars depending on screen size
  const [gridSettings, setGridSettings] = useState({
    stars: 700,
    columns: 20,
    starSize: "1px",
    glowSize: "4px",
  });

  // Adjust grid based on screen size (responsive layout)
  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth < 640) {
        setGridSettings({ stars: 300, columns: 7, starSize: "0.8px", glowSize: "3px" });
      } else if (window.innerWidth < 1024) {
        setGridSettings({ stars: 500, columns: 15, starSize: "1.5px", glowSize: "4.5px" });
      } else {
        setGridSettings({ stars: 1000, columns: 30, starSize: "1px", glowSize: "4px" });
      }
    };
    
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const [glowingStars, setGlowingStars] = useState([]);
  const highlightedStars = useRef([]);

  // Control which stars glow randomly every few seconds (dark mode only)
  useEffect(() => {
    if (theme !== "dark") return;

    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * gridSettings.stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, [theme, gridSettings]);

  // Light mode: show blurred image background
  if (theme !== "dark") {
    return (
      <div
        className="relative flex items-center justify-center min-h-full w-full transition-all duration-500"
        style={{
          backgroundImage: `url(${wavyImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0 shadow-lg backdrop-blur-[50px]"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(40px)",
          }}
        ></div>
      </div>
    );
  }

  // Dark mode: starry animated background
  return (
    <div className="relative flex items-center justify-center min-h-full w-full bg-bg-dark overflow-hidden transition-all duration-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Grid layout for stars */}
        <div
          className="grid p-1 w-full h-full"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSettings.columns}, 1fr)`,
            gap: `1px`,
          }}
        >
          {/* Render individual stars */}
          {[...Array(gridSettings.stars)].map((_, starIdx) => {
            const isGlowing = glowingStars.includes(starIdx);
            const delay = (starIdx % 10) * 0.1;

            return (
              <div key={`star-${starIdx}`} className="relative flex items-center justify-center">
                <Star isGlowing={isGlowing} delay={delay} size={gridSettings.starSize} />
                <AnimatePresence>
                  {isGlowing && <Glow delay={delay} size={gridSettings.glowSize} />}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

// Star component with glowing animation
const Star = ({ isGlowing, delay, size }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{ duration: 2, ease: "easeInOut", delay }}
      className="rounded-full relative z-20"
      style={{ height: size, width: size }}
    />
  );
};

// Glowing effect around star
const Glow = ({ delay, size }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut", delay }}
      className="absolute left-1/2 -translate-x-1/2 z-10 bg-sky-bg shadow-button-bg-dark blur-[1px]"
      style={{ height: size, width: size }}
    />
  );
};

export default GlowingStarsBackground;
