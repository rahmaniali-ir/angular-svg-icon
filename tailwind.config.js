/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/gh-pages/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        appear: "opacity-in .3s ease forwards, scale-in .3s ease forwards",
        rainbow: "rainbow 15s linear infinite",
        "rainbow-bg": "rainbow-bg 15s linear infinite",
        "rainbow-border": "rainbow-border 15s linear infinite",
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
        rainbow: {
          "0%": {
            color: "hsl(var(--rainbow-start-angle, 0deg) 90% 50%)",
          },
          "50%": {
            color:
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 180deg) 90% 50%)",
          },
          "100%": {
            color:
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 360deg) 90% 50%)",
          },
        },
        "rainbow-bg": {
          "0%": {
            "background-color": "hsl(var(--rainbow-start-angle, 0deg) 90% 50%)",
          },
          "50%": {
            "background-color":
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 180deg) 90% 50%)",
          },
          "100%": {
            "background-color":
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 360deg) 90% 50%)",
          },
        },
        "rainbow-border": {
          "0%": {
            "border-color": "hsl(var(--rainbow-start-angle, 0deg) 90% 50%)",
          },
          "50%": {
            "border-color":
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 180deg) 90% 50%)",
          },
          "100%": {
            "border-color":
              "hsl(calc(var(--rainbow-start-angle, 0deg) + 360deg) 90% 50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
