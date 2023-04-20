/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C58940",
        secondary: "#FAEAB1",
        text: "#60411C",
      },

      fontFamily: {
        sans: ["Inter", "Kanit"],
      },
    },
  },
  plugins: [],
};
