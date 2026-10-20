import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../Context/ThemeContext";
import Header from "./Header";
import GlowingStarsBackground from "../Components/GlowingStarsBackground";

const MainLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  // Handle scroll lock
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (openMenu) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <div className={`w-full p-1 relative min-h-screen text-black dark:text-white transition-colors duration-300 ${openMenu ? "overflow-hidden h-screen" : ""}`}>
      {/* Background */}
      <div className="absolute inset-0 h-full -z-10">
        <GlowingStarsBackground />
      </div>

      {/*Sidebar-Section */}
      <Sidebar />

      {/* Main-Layout*/}
      <div className="lg:ml-64 relative z-10">

        {/*Header-Section */}
        <div className="lg:hidden block">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
        <div className="lg:mt-0 mt-20">
          {children}
          <Footer />
        </div>

        {/* Footer-Section */}
      </div>

      {/* Sticky-Button for Light-Dark Theme */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-[9999] text-white dark:bg-button-bg-dark 
                   dark:shadow-button-dark dark:text-[#ffffff99] hover:dark:text-white 
                   bg-blue-700 shadow-2xl dark:hover:bg-button-bg-dark hover:bg-blue-700 hover:dark:shadow-button-dark 
                   dark:bg-gradient-dark p-3 rounded-full 
                   transition duration-300 hover:scale-110"
      >
        {theme === "light" ? <BsMoon size={24} /> : <BsSun size={24} />}
      </button>
    </div>
  );
};

export default MainLayout;
