/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.7s ease-in forwards",
        scaleUpCenter:
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        scaleUpCenter: {
          "0%": {
            transform: "scale(.5)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      colors: {
        beige: "#e5dcdc",
        darkBlack: "#454242",
        blue: "#2E80E5",
        dark: "#404453",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
