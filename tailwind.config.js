/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#182E40",
        myred: "#ff3547",
        whats: "#25D366",
      },
    },
  },
  plugins: [],
};
