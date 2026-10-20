import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../images/person.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaCalendarCheck, FaGlobeEurope } from "react-icons/fa";
import { MdEngineering, MdSchool } from "react-icons/md";

const Information = () => {
  const [time, setTime] = useState("");
  const [showPhone, setShowPhone] = useState(false);

  // Updates time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", hour12: false };
      const currentTime = now.toLocaleTimeString("en-US", options);
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle Contact Me click
  const handleContactClick = () => {
    setShowPhone(!showPhone);
    
    if (!showPhone) {
      const phoneNumber = "+33 6 95 39 86 00";
      navigator.clipboard.writeText(phoneNumber.replace(/\s/g, "")).then(() => {
        console.log('Phone number copied to clipboard');
      }).catch(err => {
        console.log('Error copying:', err);
      });
    }
  };

  return (
    // Main animated container using Framer Motion
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl lg:border-x border-dashed border-border-light dark:border-border-dark mx-auto px-6 md:px-12 py-12"
    >
      <div className="flex items-center gap-5">
        <img 
          className="w-14 h-14 rounded-full border-2 border-blue-200 dark:border-blue-800 object-cover" 
          src={img} 
          alt="Lorraine KOUAM profile"
        />
        <span className="text-slate-600 dark:text-gray-dark text-sm sm:text-base italic">
          Ingénieure Cloud & DevOps | Développeuse Fullstack
        </span>
      </div>

      {/* Main Heading with Typewriter Effect */}
      <h1 className="text-black dark:text-white mt-8 text-3xl md:text-4xl font-bold max-w-full md:leading-tight">
        Hello, I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          <Typewriter
            words={["Lorraine KOUAM"]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={150}
          />
        </span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mt-2 mb-6">
        Ingénieure Cloud & DevOps • Développeuse Fullstack / Backend Java
      </h2>

      <p className="text-slate-600 dark:text-gray-dark mt-4 max-w-full text-base leading-relaxed">
        Ingénieure Cloud avec <strong className="text-blue-700 dark:text-blue-400">2 ans d’expérience à la Société Générale</strong>, j’ai développé des applications critiques en <strong>Java / Spring Boot</strong> et <strong>React / TypeScript</strong>, avec une exigence forte sur la qualité logicielle et la maintenabilité du code.
      </p>

      <p className="text-slate-600 dark:text-gray-dark mt-4 max-w-full text-base leading-relaxed">
        J’ai également consolidé mes compétences Cloud & DevOps sur <strong>AWS (EC2, RDS, S3), Docker et Kubernetes</strong>. Je recherche un poste d’<strong>Ingénieure Cloud & DevOps</strong> ou <strong>Développeuse Fullstack</strong> pour concevoir et déployer des produits fiables, scalables et à forte valeur métier.
      </p>

      {/* Contact Button + Clock */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
        <div onClick={handleContactClick} className="cursor-pointer">
          <CustomButton text="Contact Me" />
        </div>
        
        <div className="flex items-center gap-3 text-slate-600 dark:text-gray-dark">
          <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium">Current time: </span>
          <span className="font-mono font-bold text-blue-700 dark:text-blue-400">{time}</span>
        </div>
      </div>

      {/* Phone number display with animation */}
      {showPhone && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              <div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">
                  Contact direct
                </p>
                <p className="text-lg font-mono font-bold text-blue-800 dark:text-blue-200">
                  +33 6 95 39 86 00
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowPhone(false)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors p-1"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* Professional Information Section */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
          Informations Professionnelles
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { 
              icon: <MdEngineering className="text-xl text-blue-600 dark:text-blue-400" />,
              title: "Diplôme d'Ingénieur ESIEA",
              description: "Spécialité Développement Logiciel (2021 - 2025)"
            },
            { 
              icon: <MdSchool className="text-xl text-purple-600 dark:text-purple-400" />,
              title: "Société Générale (2 ans)",
              description: "Dév. Fullstack & Cloud (MyBigData & Chatbot IA)"
            },
            { 
              icon: <FaMapMarkerAlt className="text-xl text-green-600 dark:text-green-400" />,
              title: "Île-de-France & Mobilité",
              description: "Maurepas / Paris • Mobilité France"
            },
            { 
              icon: <FaCalendarCheck className="text-xl text-amber-600 dark:text-amber-400" />,
              title: "AWS Cloud Practitioner",
              description: "Certifiée • AWS Solutions Architect Associate en cours"
            },
            { 
              icon: <FaBriefcase className="text-xl text-red-600 dark:text-red-400" />,
              title: "Opportunités recherchées",
              description: "Ingénieure Cloud & DevOps / Dév. Fullstack"
            },
            { 
              icon: <FaGlobeEurope className="text-xl text-cyan-600 dark:text-cyan-400" />,
              title: "Stack Cloud & Fullstack",
              description: "AWS, Docker, K8s, Java Spring Boot, React TS"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="mt-1">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Information;