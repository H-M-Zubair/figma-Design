/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#219653",
        secondary: "#f1c40f",
        success: "#2ecc71",
        info: "#34495e",
        warning: "#e67e22",
        danger: "#e74c3c",
        customGreen: "#013D29",
        unSelectedLanguage: "#669082",
        heroBg: "#F0FFF8",
        darkGreenButton: "#013D29",
        dinningcolor: "#D5F4ED",
        salooncolor: "#F5E3DB",
        entertainmentcolor: "#F5DCDC",
        cleaningcolor: "#CFE9FE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        outfit: ["outfit"],
      },
    },
  },
  plugins: [],
};
