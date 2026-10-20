import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../Context/ThemeContext";
import SidebarItem from "../Components/SidebarItem";
import img from "../images/person.jpg";

const Header = ({ openMenu, setOpenMenu }) => {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const downloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/cv/cv.pdf';
      link.download = 'Lorraine_KOUAM_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('Error downloading CV');
    }
  };

  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <>
      {/* Header Top Bar */}
      <div
        className={`w-full fixed top-0 z-[999] px-6 py-4 flex justify-between items-center 
          transition-all duration-300 backdrop-blur-md ${
            scrolled
              ? "bg-white/70 dark:bg-[#0f172a]/70 shadow-md"
              : "bg-transparent"
          }`}
      >
        <div className="flex items-center gap-3.5">
          <div className="w-12 aspect-square">
            <img
              src={img}
              className="w-full object-cover rounded"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-500 dark:text-gray-500 text-xs mb-1">
              <span>{formattedDate}</span>
              <span className="mx-1">•</span>
              <span>France</span>
            </div>
            <h3 className="text-black dark:text-white text-sm font-semibold">
              Lorraine KOUAM
            </h3>
            <span className="text-gray-light dark:text-gray-dark text-xs">
              Ingénieure Cloud & DevOps
            </span>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="text-gray-light dark:text-gray-dark cursor-pointer text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Overlay backdrop when sidebar is open */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black z-[9999] bg-opacity-25 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar Drawer (mobile menu) */}
      <aside
        className={`fixed top-0 left-0 z-[99999] w-72 h-screen transition-transform duration-300 transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gradient-dark dark:border-r shadow-common-shadow dark:border-border-dark`}
      >
        {/* Première section : Profil - avec hauteur fixe */}
        <div className="flex-shrink-0 w-full mt-8 px-5 py-4 flex flex-col items-center justify-center">
          <div className="w-24 h-auto mb-4 overflow-hidden">
            <img
              src={img}
              className="w-full h-auto object-cover rounded-md"
              alt="Lorraine KOUAM Profile"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-gray-500 dark:text-gray-500 text-xs mb-1">
              <span>{formattedDate}</span>
              <span className="mx-1">•</span>
              <span>France</span>
            </div>
            <h3 className="text-black text-xl font-bold dark:text-white mb-1">
              Lorraine KOUAM
            </h3>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Ingénieure Cloud & DevOps
            </span>
          </div>
        </div>

        {/* Deuxième section : Menu items - scrollable si trop long */}
        <div className="flex-1 overflow-y-auto px-4">
          <SidebarItem closeSidebar={toggleMenu} />
        </div>

        {/* Troisième section : Bouton CV - toujours visible en bas */}
        <div className="flex-shrink-0 p-4 border-t border-dashed border-border-light dark:border-border-dark bg-white dark:bg-gradient-dark">
          <div 
            onClick={downloadCV}
            className="cursor-pointer flex items-center justify-center gap-4 py-3 shadow-button-light border bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark dark:shadow-button-dark rounded-lg hover:bg-blue-700/25 dark:hover:bg-white/5 transition-all duration-300 group"
          >
            <span className="text-gray-light dark:text-gray-dark group-hover:scale-110 transition-transform">
              <FiDownload />
            </span>
            <span className="text-gray-light dark:text-gray-dark font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Download CV
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;