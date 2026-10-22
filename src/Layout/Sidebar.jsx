import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";
import { FiDownload } from "react-icons/fi";
import SidebarItem from "../Components/SidebarItem";
import img from "../images/person.jpg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to download CV
  const downloadCV = () => {
    console.log('Downloading CV...');
    
    try {
      const link = document.createElement('a');
      link.href = '/cv/cv.pdf';
      link.download = 'Lorraine_KOUAM_CV.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download initiated');
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Error downloading CV. Please try again or contact me directly.');
    }
  };

  // Formater la date (ex: "10 May 2026" ou "10/05/2026")
  const formattedDate = currentDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <>
      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen border-r-[1px] border-border-light transition-transform transform
         lg:translate-x-0 -translate-x-full bg-white dark:bg-gradient-dark dark:border-r shadow-common-shadow dark:border-border-dark`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Profile section */}
          <div className="w-full mt-8 px-5 py-4 flex flex-col items-center justify-center">
            {/* Photo */}
            <div className="w-32 h-auto mb-4 overflow-hidden">
              <img
                src={img}
                className="w-full h-auto object-cover rounded-md"
                alt="Lorraine KOUAM Profile"
              />
            </div>
            
            {/* Nom et titre */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-black text-xl font-bold dark:text-white mb-1">
                Lorraine KOUAM
              </h3>
              <span className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Développeuse Fullstack • Cloud & DevOps
              </span>
              {/* Date et France en texte brut, en dessous du titre */}
              <div className="text-gray-500 dark:text-gray-500 text-xs">
                <span>{formattedDate}</span>
                <span className="mx-1">•</span>
                <span>France</span>
              </div>
            </div>
          </div>

          {/* Sidebar menu items */}
          <SidebarItem />

          {/* Bottom section - uniquement le bouton CV */}
          <div className="mt-auto p-4 dark:bg-bg-dark border-t border-dashed border-blue-700 dark:border-border-dark">
            {/* CV Download Button */}
            <div 
              onClick={downloadCV}
              className="cursor-pointer flex items-center justify-center gap-4 py-3 shadow-button-light border bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark dark:shadow-button-dark rounded-lg border-border-light hover:bg-blue-700/25 dark:hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="block text-gray-light dark:text-gray-dark font-semiboldbold group-hover:scale-110 transition-transform">
                <FiDownload />
              </span>
              <span className="block text-gray-light dark:text-gray-dark font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Download CV
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;