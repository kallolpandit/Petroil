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
        primary: "#000000",
        secondary: "#6C6C6C",
      },
      backgroundImage: {
        banner: "url('/images/banner-bg.png')",
        services1: "url('/images/services-bg-1.png')",
        services2: "url('/images/services-bg-2.png')",
        services3: "url('/images/services-bg-3.png')",
        about: "url('/images/about-bg.png')",
        blog1: "url('/images/blog1-bg.png')",
        blog2: "url('/images/blog2-bg.png')",
        blog3: "url('/images/blog3-bg.png')",
      },
    },
  },
  plugins: [],
};
