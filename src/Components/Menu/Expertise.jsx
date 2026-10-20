import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { expertiseData } from "../../data/expertiseData"; // Skills grouped by category

const Expertise = () => {
  return (
    // AnimatePresence for exit/entry animations
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        {/* Container */}
        <div className="max-w-3xl lg:border-r-[1px] lg:border-dashed px-6 py-10 md:p-[30px_48px_40px] h-min lg:border-r-border-light lg:dark:border-r-border-dark lg:border-l-[1px] lg:border-l-border-light lg:dark:border-l-border-dark mx-auto">
          {/* Section Heading */}
          <h2 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold max-w-md leading-tight">
            Expertise
          </h2>

          {/* Skills List */}
          <div className="space-y-8">
            {expertiseData.map((category, index) => (
              <div key={index}>
                <h3 className="text-slate-600 mb-2 font-medium dark:text-gray-dark text-sm sm:text-base">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 md:px-5 py-2 px-3 md:py-2.5 md:text-base text-sm rounded transition-all duration-300 cursor-pointer hover:dark:text-white hover:bg-blue-50 bg-white shadow-button-shadow dark:hover:bg-button-bg-dark dark:bg-button-bg-dark text-slate-600 dark:text-white hover:dark:shadow-button-dark focus:outline-none"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Expertise;
