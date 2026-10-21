import React from "react";
import Information from "../Information";
import FeaturedWorkSection from "../FeaturedWorkSection";
import PersonInfo from "../PersonInfo";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* Hero/Intro Section */}
        <Information />

        {/* Portfolio Highlights */}
        <FeaturedWorkSection />

        {/* Bio, Experience, or About Section */}
        <PersonInfo />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
