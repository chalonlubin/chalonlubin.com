/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        whitesmoke: "#f5f5f5",
      },
      fontFamily: {
        para: ["Poppins", "sans-serif"],
        sub: ["Montserrat", "sans-serif"],
        heading: ["Bitter", "serif"]
      },
    },
  },
  plugins: [],
};
