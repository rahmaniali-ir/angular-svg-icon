/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/gh-pages/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        appear: "opacity-in .3s ease forwards, scale-in .3s ease forwards",
        "come-up":
          "opacity-in .3s ease forwards, translate-in .3s ease forwards",
      },
      keyframes: {
        "opacity-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "translate-in": {
          "0%": { translate: "0 8px" },
          "100%": { translate: "0 0" },
        },
        "scale-in": {
          "0%": { scale: ".5" },
          "100%": { scale: "1" },
        },
      },
    },
  },
  plugins: [],
};
