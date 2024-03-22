/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0a3244",
        myred: "#ff3547",
      },
    },
  },
  plugins: [],
};
