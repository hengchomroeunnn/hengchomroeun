/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        EN: ["EN", "sans-serif"],
        ENNormal: ["EN-Normal", "sans-serif"], // Ensures 'sf' is used and falls back to sans-serif
        KH: ["KH", "sans-serif"],
      },
      colors: { 
        primary: "#5222D1", // Example primary color
        darkBg: "#0F0624", // Example secondary color
        text: "#0D013D", // Example accent color
        lightBg: "#FFFFFF", // Example background color
        lightText: "#A49CC4", // Example text color
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
