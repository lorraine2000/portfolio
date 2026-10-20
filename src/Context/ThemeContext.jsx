import { createContext, useState, useEffect, useContext } from "react";

// Create a context to hold theme data
const ThemeContext = createContext();

// ThemeProvider component that wraps the app

export const ThemeProvider = ({ children }) => {
  // Function to get the initial theme from localStorage or default to 'light'
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "light";
  };

  // Store theme in state
  const [theme, setTheme] = useState(getInitialTheme);

  // Update HTML class and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;

    // Add or remove the 'dark' class based on theme
    root.classList.toggle("dark", theme === "dark");

    // Persist theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Provide theme and toggle function to child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);
