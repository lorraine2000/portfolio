import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCards from "../ServiceCards";

const Services = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        {/* Content container with borders and padding */}
        <div className="max-w-3xl mx-auto h-min p-4 md:p-[30px_48px_40px] md:border-l-[1px] md:border-r-[1px] md:border-dashed md:border-l-border-light md:border-r-border-light dark:md:border-l-border-dark dark:md:border-r-border-dark">
          <h1 className="text-black dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-md mt-4 mb-3">
            Services & Expertises Techniques
          </h1>

          <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base max-w-md">
            Accompagnement de bout en bout pour concevoir, développer et déployer des applications robustes et scalables.
          </p>

          {/* Service cards list (modular) */}
          <ServiceCards />

          
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Services;
