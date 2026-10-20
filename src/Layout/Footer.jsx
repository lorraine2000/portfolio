import React, { useEffect } from "react";
import CustomButton from "../Components/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { items } from "../data/data";
import AnimatedTooltip from "../Components/AnimatedTooltip";
import { FaHeart, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Citation adaptée au profil Cloud & DevOps / Fullstack
  const text =
    "Concevoir des architectures cloud résilientes et développer des applications robustes à forte valeur métier.".split(
      " "
    );

  // useInView tracks if animated quote is visible in the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  // Log visibility changes (for debugging or analytics)
  useEffect(() => {
    console.log("InView:", inView);
  }, [inView]);

  // Animation variants for each word in the quote
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: (index) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  };

  return (
    <>
      {/* ================================
          Social Links Section
        ================================= */}
      <div className="border-b border-border-light dark:border-border-dark mb-6">
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center px-5 md:px-14 py-20 md:border-x md:border-dashed md:border-border-light md:dark:border-border-dark">
          <div className="max-w-sm text-center">
            <h4 className="font-bold text-base md:text-lg text-gray-800 dark:text-white">
              Réseaux professionnels
            </h4>
            <p className="mt-5 font-normal text-slate-600 text-sm sm:text-base dark:text-gray-dark">
              Retrouvez-moi sur LinkedIn pour échanger autour de l'architecture Cloud, de Kubernetes, de Spring Boot ou d'opportunités de collaboration.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 my-8">
              {/* LinkedIn Link */}
              <motion.a
                href="https://www.linkedin.com/in/ls-kouam"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                <span className="font-semibold">LinkedIn</span>
              </motion.a>
            </div>

            <AnimatedTooltip items={items} subscribersText="Connect with me" />
          </div>
        </div>
      </div>

      {/* ================================
          Animated Quote Section
        ================================= */}
      <div
        ref={ref}
        className=" flex items-center justify-center text-center border my-10 md:my-16  rounded-2xl bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-button-bg-dark max-w-md  mx-10 sm:mx-auto  py-6 px-3 md:px-6"
      >
        <motion.p className="text-base md:text-lg font-medium flex flex-wrap justify-center text-gray-800 dark:text-white">
          {text.map((word, index) => (
            <motion.span
              key={index}
              className="mx-1"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* ================================
          Copyright & Attribution
        ================================= */}
      <footer className=" border-t border-border-light dark:border-border-dark ">
        <div className="flex flex-col w-fit mx-auto md:flex-row items-center justify-center md:justify-between py-4 text-center">
          <p className="text-sm text-center md:text-base text-gray-800 dark:text-white">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              to="https://www.linkedin.com/in/ls-kouam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline dark:text-blue-400"
            >
              Lorraine KOUAM
            </Link>{" "}
            Créé avec{" "}
            <FaHeart className="inline-block text-red-500 ml-1" />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;