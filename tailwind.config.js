/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "-5px 0px 20px rgba(68, 188, 255, 0.3), " +
          "-5px 0px 5px rgba(68, 176, 255, 0.3), " +
          "0px 2px 10px rgba(255, 68, 236, 0.3), " +
          "0px -5px 10px rgba(255, 68, 236, 0.3), " +
          "5px 0px 20px rgba(212, 69, 81, 0.3)",
      },
    },
    plugins: [],
  },
};
