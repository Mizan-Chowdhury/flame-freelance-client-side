/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
  },
},
  plugins: [require("daisyui")],
}

