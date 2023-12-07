/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#FEABC1",
        customPurple: "#ADA3ED",
        customBlue: "#76B8F4",
      },
    },
  },
  plugins: [],
};
