/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      backgroundImage: {
        "gradient-light":
          "linear-gradient(to right, #dfe9f3, #cee4f9, #d1e2ff)",
        "gradient-dark": "linear-gradient(to right, #141414, #1a1a1a, #202020)",
        "common-gradient": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "radial-light":
          "radial-gradient(circle, rgba(222,236,251,1) 20%, rgba(207,225,250,1) 50%, rgba(180,214,250,1) 100%)",
        "radial-dark":
          "radial-gradient(circle, rgba(20,20,20,1) 10%, rgba(30,30,30,1) 50%, rgba(40,40,40,1) 100%)",
      },

      colors: {
        "gray-light": "#444",
        "button-bg-light": "#e0f2ff",
        "button-border-light": "#a1a2a3",
        "button-hover-light": "#cde7ff",
        "border-light": "#b2bcc3",
        "bg-light": "#dfe9f3",
        "sky-bg": "#b4b8bf40",

        "border-dark": "#333",
        "gray-dark": "#fff9",
        "button-bg-dark": "#353535ed",
        "button-border-dark": "#ffffff1f",
        "button-hover-dark": "rgba(43,43,43)",
        "bg-dark": "#141414",
        "bg-light-gray": "#161418",
      },

      boxShadow: {
        "common-shadow":
          "rgb(0 0 0 / 20%) 0px 19px 38px, rgb(179 202 214 / 23%) 0px 15px 12px",
        "button-light":
          "0px 4px 6px rgba(160, 200, 255, 0.3), 0px 1px 3px rgba(160, 200, 255, 0.2)",
        "button-dark":
          "rgba(255, 255, 255, 0.243) 0px 0.6px 1.08px -0.9px inset, rgba(255, 255, 255, 0.235) 0px 2.2px 4.1px -1.8px inset, rgba(255, 255, 255, 0.204) 0px 10px 18px -2.75px inset, rgba(255, 255, 255, 0.03) 0px 0px 20px 1px",
        "button-shadow":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgb(0 0 0) 0px 30px 60px -30px, rgb(13 96 180 / 51%) 0px -2px 6px 0px inset",
      },
    },
  },
  plugins: [],
};
