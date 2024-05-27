/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transform: {
        "skew-z-12": "skewZ(12deg)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".skew-z-12": {
          transform: "skewZ(12deg)",
        },
      });
    },
  ],
};
