/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "360px" }, // Custom breakpoint for max-width: 360px
      },
    },
  },
  plugins: [],
};
