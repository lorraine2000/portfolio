import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoCodeOutline,
  IoBriefcaseOutline,
  IoConstructOutline,
  IoMailOutline,
} from "react-icons/io5";

// Define menu items
const menuItems = [
  { link: "/", item: "Home", icon: <IoHomeOutline /> },
  { link: "/expertise", item: "Expertise", icon: <IoCodeOutline /> },
  { link: "/project", item: "Projects", icon: <IoBriefcaseOutline /> },
  //{ link: "/services", item: "Services", icon: <IoConstructOutline /> },
  { link: "/blog-insights", item: "Blog & Insights", icon: <IoCodeOutline /> },
  { link: "/contact", item: "Contact", icon: <IoMailOutline /> },
  
];

const SidebarItem = ({ closeSidebar }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [location.pathname]);

  return (
    <div>
      {/* sidebar-Menu */}
      <ul className="space-y-2 mt-6 px-5 py-2">
        {menuItems.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.link}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `cursor-pointer flex items-center px-4 py-2 text-lg rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-700 text-white dark:bg-button-bg-dark"
                    : "text-gray-light dark:text-[#ffffff99] hover:bg-gray-200 dark:hover:bg-button-bg-dark"
                }`
              }
            >
              <span className="inline-block text-xl mr-3">{menu.icon}</span>
              {menu.item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItem;
