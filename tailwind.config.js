/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#F40404",
      },
    },
  },
  plugins: [],
};
